"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var chai_1 = require("chai");
var ExprParser_1 = require("./ExprParser");
var ExprLexer_1 = require("./ExprLexer");
var CPP14Parser_1 = require("./CPP14Parser");
var CPP14Lexer_1 = require("./CPP14Lexer");
var c3 = require("../index");
var antlr4ts_1 = require("antlr4ts");
var Decorators_1 = require("antlr4ts/Decorators");
var TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
var ErrorListener = (function () {
    function ErrorListener() {
        this.errorCount = 0;
    }
    ErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
        ++this.errorCount;
    };
    __decorate([
        Decorators_1.Override
    ], ErrorListener.prototype, "syntaxError", null);
    return ErrorListener;
}());
exports.ErrorListener = ErrorListener;
;
var dummyNode = new TerminalNode_1.TerminalNode(new antlr4ts_1.CommonToken(-2, "Dummy", undefined, 0, 10, 20));
function createClassSymbolTable(name, counts, namespaces) {
    var symbolTable = new c3.SymbolTable(name, { allowDuplicateSymbols: false });
    var nsSymbols = [undefined];
    var nsIndex = 0;
    var nsCount = 1;
    if (namespaces && namespaces.length > 0) {
        nsCount = namespaces.length;
        for (var i = 0; i < nsCount; ++i) {
            nsSymbols[i] = symbolTable.addNewNamespaceFromPath(undefined, namespaces[i]);
        }
    }
    for (var i = 0; i < counts[0]; ++i) {
        var classSymbol = symbolTable.addNewSymbolOfType(c3.ClassSymbol, nsSymbols[nsIndex], "class" + i);
        for (var j = 0; j < counts[2]; ++j) {
            var field = symbolTable.addNewSymbolOfType(c3.FieldSymbol, classSymbol, "field" + j);
        }
        for (var j = 0; j < counts[1]; ++j) {
            var method = symbolTable.addNewSymbolOfType(c3.MethodSymbol, classSymbol, "method" + j);
            var block1 = symbolTable.addNewSymbolOfType(c3.BlockSymbol, undefined, "block1");
            symbolTable.addNewSymbolOfType(c3.VariableSymbol, block1, "var1", 17, c3.FundamentalType.integerType);
            var block2 = symbolTable.addNewSymbolOfType(c3.BlockSymbol, undefined, "block2");
            var symbol = symbolTable.addNewSymbolOfType(c3.VariableSymbol, block2, "var1", 3.142, c3.FundamentalType.floatType);
            if (j == 1) {
                symbol.context = dummyNode;
            }
            method.addSymbol(block1);
            method.addSymbol(block2);
        }
        ++nsIndex;
        if (nsIndex == nsCount)
            nsIndex = 0;
    }
    for (var i = 0; i < counts[3]; ++i) {
        symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, "globalVar" + i, 42, c3.FundamentalType.integerType);
    }
    for (var i = 0; i < counts[4]; ++i) {
        symbolTable.addNewSymbolOfType(c3.LiteralSymbol, undefined, "globalConst" + i, "string constant", c3.FundamentalType.stringType);
    }
    return symbolTable;
}
describe('antlr4-c3:', function () {
    this.slow(1000);
    describe('Symbol table tests:', function () {
        it("Single table base tests", function () {
            var symbolTable = createClassSymbolTable("main", [3, 3, 4, 5, 5]);
            var info = symbolTable.info;
            chai_1.expect(info.dependencyCount, "Test 1").to.equal(0);
            chai_1.expect(info.symbolCount, "Test 2").to.equal(13);
            try {
                symbolTable.addNewSymbolOfType(c3.VariableSymbol, undefined, "globalVar3");
                chai_1.assert(false);
            }
            catch (e) {
                if (e instanceof c3.DuplicateSymbolError) {
                    chai_1.expect(e.message, "Test 3").to.equal("Attempt to add duplicate symbol 'globalVar3'");
                }
                else {
                    chai_1.assert(false, "Test 3");
                }
            }
            var class1 = symbolTable.resolve("class1");
            chai_1.expect(class1, "Test 4").is.instanceof(c3.ClassSymbol);
            var method2 = class1.resolve("method2");
            chai_1.expect(method2, "Test 5").is.instanceof(c3.MethodSymbol);
            var scopes = method2.directScopes;
            chai_1.expect(scopes.length, "Test 6").equals(2);
            chai_1.expect(scopes[0], "Test 7").is.instanceof(c3.ScopedSymbol);
            var block1 = scopes[0];
            try {
                var duplicateMethod = symbolTable.addNewSymbolOfType(c3.MethodSymbol, undefined, "method2");
                class1.addSymbol(duplicateMethod);
                chai_1.assert(false);
            }
            catch (e) {
                if (e instanceof c3.DuplicateSymbolError) {
                    chai_1.expect(e.message, "Test 8").to.equal("Attempt to add duplicate symbol 'method2'");
                }
                else {
                    chai_1.assert(false);
                }
            }
            var variable = scopes[0].resolve("globalVar3");
            chai_1.expect(variable, "Test 9").to.be.instanceof(c3.VariableSymbol);
            chai_1.expect(variable.root, "Test 10").to.equal(symbolTable);
            variable = scopes[0].resolve("globalVar3", true);
            chai_1.expect(variable, "Test 11").to.equal(undefined);
            variable = scopes[0].resolve("var1");
            chai_1.expect(variable.root, "Test 12").to.equal(class1);
            chai_1.expect(variable.getParentOfType(c3.MethodSymbol), "Test 13").to.equal(method2);
            chai_1.expect(class1.getSymbolsOfType(c3.MethodSymbol).length, "Test 14").to.equal(3);
            chai_1.expect(method2.getSymbolsOfType(c3.ScopedSymbol).length, "Test 15").to.equal(2);
            chai_1.expect(block1.resolve("class1", false), "Test 16").to.equal(class1);
            var path = variable.symbolPath;
            chai_1.expect(path.length, "Test 17").to.equal(5);
            chai_1.expect(path[0].name, "Test 18").to.equal("var1");
            chai_1.expect(path[1].name, "Test 19").to.equal("block1");
            chai_1.expect(path[2].name, "Test 20").to.equal("method2");
            chai_1.expect(path[3].name, "Test 21").to.equal("class1");
            chai_1.expect(path[4].name, "Test 22").to.equal("main");
            chai_1.expect(method2.qualifiedName(), "Test 23").to.equal("class1.method2");
            chai_1.expect(method2.qualifiedName("-", true), "Test 24").to.equal("main-class1-method2");
            chai_1.expect(variable.qualifiedName(), "Test 25").to.equal("block1.var1");
            chai_1.expect(variable.qualifiedName("#"), "Test 26").to.equal("block1#var1");
            chai_1.expect(variable.qualifiedName(".", false, true), "Test 27").to.equal("block1.var1");
            chai_1.expect(variable.qualifiedName(".", true, false), "Test 28").to.equal("main.class1.method2.block1.var1");
            chai_1.expect(variable.qualifiedName(".", true, true), "Test 29").to.equal("main.class1.method2.block1.var1");
            var allSymbols = symbolTable.getAllNestedSymbols();
            chai_1.expect(allSymbols.length, "Test 30").to.equal(70);
            var symbolPath = allSymbols[59].qualifiedName(".", true);
            chai_1.expect(symbolPath, "Test 31").to.equal("main.class2.method2.block2.var1");
            chai_1.expect(symbolTable.symbolFromPath("main.class2.method2.block2.var1"), "Test 32").to.equal(allSymbols[59]);
            chai_1.expect(symbolTable, "Test 33").to.equal(symbolTable.symbolTable);
        });
        it("Single table type checks", function () {
            var symbolTable = createClassSymbolTable("main", [1, 1, 1, 1, 1]);
            var alias = symbolTable.addNewSymbolOfType(c3.TypeAlias, undefined, "newBool", c3.FundamentalType.boolType);
            var routine = symbolTable.addNewSymbolOfType(c3.RoutineSymbol, undefined, "routine1", c3.FundamentalType.integerType);
            var field = symbolTable.addNewSymbolOfType(c3.FieldSymbol, undefined, "field1", c3.FundamentalType.floatType);
        });
        it("Single table stress test", function () {
            var symbolTable = createClassSymbolTable("table", [300, 30, 20, 1000, 1000]);
            chai_1.expect(symbolTable.getAllNestedSymbols().length, "Test 1").to.equal(53300);
            chai_1.expect(symbolTable.getNestedSymbolsOfType(c3.ClassSymbol).length, "Test 2").to.equal(300);
            chai_1.expect(symbolTable.getNestedSymbolsOfType(c3.MethodSymbol).length, "Test 3").to.equal(9000);
            chai_1.expect(symbolTable.getNestedSymbolsOfType(c3.ScopedSymbol).length, "Test 4").to.equal(27300);
            chai_1.expect(symbolTable.getNestedSymbolsOfType(c3.VariableSymbol).length, "Test 5").to.equal(25000);
            chai_1.expect(symbolTable.getNestedSymbolsOfType(c3.FieldSymbol).length, "Test 6").to.equal(6000);
            chai_1.expect(symbolTable.getNestedSymbolsOfType(c3.LiteralSymbol).length, "Test 7").to.equal(1000);
        }).timeout(20000);
        it("Single table namespace tests", function () {
            var symbolTable = createClassSymbolTable("main", [30, 10, 10, 100, 100], ["ns1", "ns2", "ns1.ns3.ns5", "ns1.ns4.ns6.ns8"]);
            var namespaces = symbolTable.getNestedSymbolsOfType(c3.NamespaceSymbol);
            chai_1.expect(namespaces.length, "Test 1").to.equal(7);
            var methods = symbolTable.getNestedSymbolsOfType(c3.MethodSymbol);
            chai_1.expect(methods.length, "Test 2").to.equal(300);
            chai_1.expect(methods[2].qualifiedName(".", true), "Test 3").to.equal("main.ns1.ns3.ns5.class2.method2");
            chai_1.expect(methods[299].qualifiedName(".", true), "Test 4").to.equal("main.ns2.class29.method9");
        });
        it("Multi table tests", function () {
            var main = createClassSymbolTable("main", [30, 10, 10, 100, 100]);
            var systemFunctions = new c3.SymbolTable("system functions", { allowDuplicateSymbols: false });
            var namespace1 = systemFunctions.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (var i = 0; i < 333; ++i) {
                systemFunctions.addNewSymbolOfType(c3.RoutineSymbol, namespace1, "func" + i);
            }
            main.addDependencies(systemFunctions);
            var libFunctions = new c3.SymbolTable("library functions", { allowDuplicateSymbols: false });
            var namespace2 = libFunctions.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns2");
            for (var i = 0; i < 444; ++i) {
                libFunctions.addNewSymbolOfType(c3.RoutineSymbol, namespace2, "func" + i);
            }
            var libVariables = new c3.SymbolTable("library variables", { allowDuplicateSymbols: false });
            var namespace3 = libVariables.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (var i = 0; i < 555; ++i) {
                libVariables.addNewSymbolOfType(c3.VariableSymbol, namespace3, "var" + i);
            }
            var libFunctions2 = new c3.SymbolTable("library functions 2", { allowDuplicateSymbols: false });
            var namespace4 = libFunctions2.addNewSymbolOfType(c3.NamespaceSymbol, undefined, "ns1");
            for (var i = 0; i < 666; ++i) {
                libFunctions2.addNewSymbolOfType(c3.RoutineSymbol, namespace4, "func" + i);
            }
            libVariables.addDependencies(libFunctions, libFunctions2);
            main.addDependencies(systemFunctions, libVariables);
            chai_1.expect(main.getAllSymbols().size, "Test 1").to.equal(2232);
            chai_1.expect(systemFunctions.getAllSymbols().size, "Test 2").to.equal(334);
            chai_1.expect(libFunctions.getAllSymbols().size, "Test 3").to.equal(445);
            chai_1.expect(libVariables.getAllSymbols().size, "Test 4").to.equal(1668);
            chai_1.expect(libFunctions2.getAllSymbols().size, "Test 5").to.equal(667);
        });
        it("Symbol navigation", function () {
            var symbolTable = createClassSymbolTable("main", [10, 10, 10, 20, 34], []);
            var namespaces = symbolTable.getNestedSymbolsOfType(c3.NamespaceSymbol);
            chai_1.expect(namespaces.length, "Test 1").to.equal(0);
            var variables = symbolTable.getNestedSymbolsOfType(c3.VariableSymbol);
            chai_1.expect(variables.length, "Test 2").to.equal(320);
            var field7 = variables[217];
            chai_1.expect(field7, "Test 3").not.to.be.undefined;
            chai_1.expect(field7.firstSibling, "Test 4").to.equal(variables[210]);
            chai_1.expect(field7.lastSibling.name, "Test 5").to.equal("method9");
            chai_1.expect(field7.previousSibling, "Test 6").to.equal(variables[216]);
            chai_1.expect(field7.nextSibling, "Test 7").to.equal(variables[218]);
            chai_1.expect(field7.firstSibling.firstSibling.firstSibling.firstSibling, "Test 8").to.equal(field7.firstSibling);
            chai_1.expect(field7.lastSibling.lastSibling.lastSibling.lastSibling, "Test 9").to.equal(field7.lastSibling);
            chai_1.expect(field7.firstSibling.lastSibling.firstSibling.firstSibling, "Test 10").to.equal(field7.firstSibling);
            chai_1.expect(field7.lastSibling.firstSibling.firstSibling.lastSibling, "Test 11").to.equal(field7.lastSibling);
            chai_1.expect(field7.parent, "Test 12").to.be.instanceof(c3.ClassSymbol);
            var parent7 = field7.parent;
            chai_1.expect(parent7.indexOfChild(field7), "Test 13").to.equal(7);
            chai_1.expect(parent7.firstChild, "Test 14").to.equal(field7.firstSibling);
            chai_1.expect(parent7.lastChild, "Test 15").to.equal(field7.lastSibling);
            var var1 = variables[286];
            chai_1.expect(var1, "Test 16").not.to.be.undefined;
            chai_1.expect(var1.firstSibling, "Test 17").to.equal(var1);
            chai_1.expect(var1.lastSibling.name, "Test 18").to.equal("var1");
            chai_1.expect(var1.previousSibling, "Test 19").to.be.undefined;
            chai_1.expect(var1.nextSibling, "Test 20").to.undefined;
            chai_1.expect(var1.firstSibling.firstSibling.firstSibling.firstSibling, "Test 21").to.equal(var1.firstSibling);
            chai_1.expect(var1.lastSibling.lastSibling.lastSibling.lastSibling, "Test 22").to.equal(var1.lastSibling);
            chai_1.expect(var1.firstSibling.lastSibling.firstSibling.firstSibling, "Test 23").to.equal(var1.firstSibling);
            chai_1.expect(var1.lastSibling.firstSibling.firstSibling.lastSibling, "Test 24").to.equal(var1.lastSibling);
            var block1 = var1.parent;
            chai_1.expect(block1.indexOfChild(field7), "Test 25").to.equal(-1);
            chai_1.expect(block1.indexOfChild(var1), "Test 26").to.equal(0);
            chai_1.expect(block1.firstChild, "Test 27").to.equal(var1.firstSibling);
            chai_1.expect(block1.lastChild, "Test 28").to.equal(var1.lastSibling);
            var var15 = variables[315];
            chai_1.expect(var15, "Test 29").not.to.be.undefined;
            chai_1.expect(var15.firstSibling, "Test 30").to.equal(symbolTable.firstChild);
            chai_1.expect(var15.lastSibling.name, "Test 31").to.equal("globalConst33");
            chai_1.expect(var15.previousSibling, "Test 32").to.equal(variables[314]);
            chai_1.expect(var15.nextSibling, "Test 33").to.equal(variables[316]);
            chai_1.expect(var15.parent, "Test 34").to.be.instanceof(c3.SymbolTable);
            var st1 = var15.parent;
            chai_1.expect(st1.indexOfChild(var15), "Test 35").to.equal(25);
            chai_1.expect(st1.firstChild, "Test 36").to.equal(var15.firstSibling);
            chai_1.expect(st1.lastChild, "Test 37").to.equal(var15.lastSibling);
            var next = variables[284].next;
            chai_1.expect(next, "Test 38").not.to.be.undefined;
            chai_1.expect(next.qualifiedName(".", true), "Test 39").to.equal("main.class9.method2.block1.var1");
            var symbol = symbolTable.symbolWithContext(dummyNode);
            chai_1.expect(symbol, "Test 40").not.to.be.undefined;
            chai_1.expect(symbol.qualifiedName(".", true), "Test 41").to.equal("main.class0.method1.block2.var1");
        });
    });
    describe('Simple expression parser:', function () {
        it("Most simple setup", function () {
            var inputStream = new antlr4ts_1.ANTLRInputStream("var c = a + b()");
            var lexer = new ExprLexer_1.ExprLexer(inputStream);
            var tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
            var parser = new ExprParser_1.ExprParser(tokenStream);
            var errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            var tree = parser.expression();
            chai_1.expect(errorListener.errorCount, "Test 1").equals(0);
            var core = new c3.CodeCompletionCore(parser);
            var candidates = core.collectCandidates(0);
            chai_1.expect(candidates.tokens.size, "Test 2").to.equal(3);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.VAR), "Test 3").to.equal(true);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.LET), "Test 4").to.equal(true);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.ID), "Test 5").to.equal(true);
            chai_1.expect(candidates.tokens.get(ExprLexer_1.ExprLexer.VAR), "Test 6").to.eql([ExprLexer_1.ExprLexer.ID, ExprLexer_1.ExprLexer.EQUAL]);
            chai_1.expect(candidates.tokens.get(ExprLexer_1.ExprLexer.LET), "Test 7").to.eql([ExprLexer_1.ExprLexer.ID, ExprLexer_1.ExprLexer.EQUAL]);
            chai_1.expect(candidates.tokens.get(ExprLexer_1.ExprLexer.ID), "Test 8").to.eql([]);
            candidates = core.collectCandidates(1);
            chai_1.expect(candidates.tokens.size, "Test 9").to.equal(1);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.ID), "Test 10").to.equal(true);
            candidates = core.collectCandidates(2);
            chai_1.expect(candidates.tokens.size, "Test 11").to.equal(1);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.ID), "Test 12").to.equal(true);
            candidates = core.collectCandidates(4);
            chai_1.expect(candidates.tokens.size, "Test 13").to.equal(1);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.EQUAL), "Test 14").to.equal(true);
            candidates = core.collectCandidates(6);
            chai_1.expect(candidates.tokens.size, "Test 15").to.equal(1);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.ID), "Test 16").to.equal(true);
            candidates = core.collectCandidates(8);
            chai_1.expect(candidates.tokens.size, "Test 17").to.equal(5);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.PLUS), "Test 18").to.equal(true);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.MINUS), "Test 19").to.equal(true);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.MULTIPLY), "Test 20").to.equal(true);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.DIVIDE), "Test 21").to.equal(true);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.OPEN_PAR), "Test 22").to.equal(true);
        });
        it("Typical setup", function () {
            var e_1, _a;
            var inputStream = new antlr4ts_1.ANTLRInputStream("var c = a + b");
            var lexer = new ExprLexer_1.ExprLexer(inputStream);
            var tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
            var parser = new ExprParser_1.ExprParser(tokenStream);
            var errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            var tree = parser.expression();
            chai_1.expect(errorListener.errorCount, "Test 1").equals(0);
            var core = new c3.CodeCompletionCore(parser);
            core.ignoredTokens = new Set([ExprLexer_1.ExprLexer.ID, ExprLexer_1.ExprLexer.PLUS, ExprLexer_1.ExprLexer.MINUS, ExprLexer_1.ExprLexer.MULTIPLY, ExprLexer_1.ExprLexer.DIVIDE, ExprLexer_1.ExprLexer.EQUAL]);
            core.preferredRules = new Set([ExprParser_1.ExprParser.RULE_functionRef, ExprParser_1.ExprParser.RULE_variableRef]);
            var candidates = core.collectCandidates(0);
            chai_1.expect(candidates.tokens.size, "Test 2").to.equal(2);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.VAR), "Test 3").to.equal(true);
            chai_1.expect(candidates.tokens.has(ExprLexer_1.ExprLexer.LET), "Test 4").to.equal(true);
            chai_1.expect(candidates.tokens.get(ExprLexer_1.ExprLexer.VAR), "Test 5").to.eql([ExprLexer_1.ExprLexer.ID, ExprLexer_1.ExprLexer.EQUAL]);
            chai_1.expect(candidates.tokens.get(ExprLexer_1.ExprLexer.LET), "Test 6").to.eql([ExprLexer_1.ExprLexer.ID, ExprLexer_1.ExprLexer.EQUAL]);
            candidates = core.collectCandidates(2);
            chai_1.expect(candidates.tokens.size, "Test 7").to.equal(0);
            candidates = core.collectCandidates(4);
            chai_1.expect(candidates.tokens.size, "Test 8").to.equal(0);
            candidates = core.collectCandidates(6);
            chai_1.expect(candidates.tokens.size, "Test 9").to.equal(0);
            chai_1.expect(candidates.rules.size, "Test 10").to.equal(2);
            var found = 0;
            try {
                for (var _b = __values(candidates.rules), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var candidate = _c.value;
                    switch (candidate[0]) {
                        case ExprParser_1.ExprParser.RULE_functionRef: {
                            ++found;
                            break;
                        }
                        case ExprParser_1.ExprParser.RULE_variableRef: {
                            ++found;
                            break;
                        }
                        default:
                            chai_1.assert(false);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            chai_1.expect(found, "Test 11").to.equal(2);
            candidates = core.collectCandidates(7);
            chai_1.expect(candidates.tokens.size, "Test 11").to.equal(0);
            chai_1.expect(candidates.rules.size, "Test 12").to.equal(1);
        });
    });
    describe('C++14 parser:', function () {
        it('Simple C++ example', function () {
            var inputStream = new antlr4ts_1.ANTLRInputStream("class A {\n" +
                "public:\n" +
                "  void test() {\n" +
                "  }\n" +
                "};\n");
            var lexer = new CPP14Lexer_1.CPP14Lexer(inputStream);
            var tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
            var parser = new CPP14Parser_1.CPP14Parser(tokenStream);
            var errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            var tree = parser.translationunit();
            chai_1.expect(errorListener.errorCount, "Test 1").equals(0);
            var core = new c3.CodeCompletionCore(parser);
            core.ignoredTokens = new Set([
                CPP14Lexer_1.CPP14Lexer.Identifier,
                CPP14Lexer_1.CPP14Lexer.LeftParen, CPP14Lexer_1.CPP14Lexer.RightParen,
                CPP14Lexer_1.CPP14Lexer.Operator, CPP14Lexer_1.CPP14Lexer.Star, CPP14Lexer_1.CPP14Lexer.And, CPP14Lexer_1.CPP14Lexer.AndAnd,
                CPP14Lexer_1.CPP14Lexer.LeftBracket,
                CPP14Lexer_1.CPP14Lexer.Ellipsis,
                CPP14Lexer_1.CPP14Lexer.Doublecolon, CPP14Lexer_1.CPP14Lexer.Semi,
            ]);
            core.preferredRules = new Set([CPP14Parser_1.CPP14Parser.RULE_classname, CPP14Parser_1.CPP14Parser.RULE_namespacename, CPP14Parser_1.CPP14Parser.RULE_idexpression]);
            var candidates = core.collectCandidates(0);
            chai_1.expect(candidates.tokens.size, "Test 2").to.equal(40);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Extern), "Test 3").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Mutable), "Test 4").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Register), "Test 5").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Static), "Test 6").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Thread_local), "Test 7").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Decltype), "Test 8").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Char), "Test 9").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Char16), "Test 10").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Char32), "Test 11").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Wchar), "Test 12").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Bool), "Test 13").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Short), "Test 14").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Int), "Test 15").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Long), "Test 16").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Signed), "Test 17").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Unsigned), "Test 18").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Float), "Test 19").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Double), "Test 20").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Void), "Test 21").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Auto), "Test 22").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Class), "Test 23").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Struct), "Test 24").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Union), "Test 25").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Enum), "Test 26").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Typename), "Test 27").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Const), "Test 28").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Volatile), "Test 29").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Explicit), "Test 30").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Inline), "Test 31").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Virtual), "Test 32").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Friend), "Test 33").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Typedef), "Test 34").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Constexpr), "Test 35").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Alignas), "Test 36").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Asm), "Test 37").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Namespace), "Test 38").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Using), "Test 39").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Static_assert), "Test 40").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Template), "Test 41").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.EOF), "Test 42").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Identifier), "Test 43").to.equal(false);
            chai_1.expect(candidates.rules.size, "Test 44").to.equal(3);
            chai_1.expect(candidates.rules.get(CPP14Parser_1.CPP14Parser.RULE_namespacename), "Test 45").to.eql([
                CPP14Parser_1.CPP14Parser.RULE_translationunit,
                CPP14Parser_1.CPP14Parser.RULE_declarationseq,
                CPP14Parser_1.CPP14Parser.RULE_declaration,
                CPP14Parser_1.CPP14Parser.RULE_blockdeclaration,
                CPP14Parser_1.CPP14Parser.RULE_simpledeclaration,
                CPP14Parser_1.CPP14Parser.RULE_declspecifierseq,
                CPP14Parser_1.CPP14Parser.RULE_declspecifier,
                CPP14Parser_1.CPP14Parser.RULE_typespecifier,
                CPP14Parser_1.CPP14Parser.RULE_trailingtypespecifier,
                CPP14Parser_1.CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser_1.CPP14Parser.RULE_nestednamespecifier,
            ]);
            chai_1.expect(candidates.rules.get(CPP14Parser_1.CPP14Parser.RULE_classname), "Test 46").to.eql([
                CPP14Parser_1.CPP14Parser.RULE_translationunit,
                CPP14Parser_1.CPP14Parser.RULE_declarationseq,
                CPP14Parser_1.CPP14Parser.RULE_declaration,
                CPP14Parser_1.CPP14Parser.RULE_blockdeclaration,
                CPP14Parser_1.CPP14Parser.RULE_simpledeclaration,
                CPP14Parser_1.CPP14Parser.RULE_declspecifierseq,
                CPP14Parser_1.CPP14Parser.RULE_declspecifier,
                CPP14Parser_1.CPP14Parser.RULE_typespecifier,
                CPP14Parser_1.CPP14Parser.RULE_trailingtypespecifier,
                CPP14Parser_1.CPP14Parser.RULE_simpletypespecifier,
                CPP14Parser_1.CPP14Parser.RULE_nestednamespecifier,
                CPP14Parser_1.CPP14Parser.RULE_typename,
            ]);
            candidates = core.collectCandidates(10);
            chai_1.expect(candidates.rules.size, "Test 47").to.equal(1);
            chai_1.expect(candidates.rules.get(CPP14Parser_1.CPP14Parser.RULE_idexpression), "Test 48").to.eql([
                CPP14Parser_1.CPP14Parser.RULE_translationunit,
                CPP14Parser_1.CPP14Parser.RULE_declarationseq,
                CPP14Parser_1.CPP14Parser.RULE_declaration,
                CPP14Parser_1.CPP14Parser.RULE_functiondefinition,
                CPP14Parser_1.CPP14Parser.RULE_declspecifierseq,
                CPP14Parser_1.CPP14Parser.RULE_declspecifier,
                CPP14Parser_1.CPP14Parser.RULE_typespecifier,
                CPP14Parser_1.CPP14Parser.RULE_classspecifier,
                CPP14Parser_1.CPP14Parser.RULE_memberspecification,
                CPP14Parser_1.CPP14Parser.RULE_memberspecification,
                CPP14Parser_1.CPP14Parser.RULE_memberdeclaration,
                CPP14Parser_1.CPP14Parser.RULE_memberdeclaratorlist,
                CPP14Parser_1.CPP14Parser.RULE_memberdeclarator,
                CPP14Parser_1.CPP14Parser.RULE_braceorequalinitializer,
                CPP14Parser_1.CPP14Parser.RULE_bracedinitlist,
                CPP14Parser_1.CPP14Parser.RULE_initializerlist,
                CPP14Parser_1.CPP14Parser.RULE_initializerclause,
                CPP14Parser_1.CPP14Parser.RULE_assignmentexpression,
                CPP14Parser_1.CPP14Parser.RULE_conditionalexpression,
                CPP14Parser_1.CPP14Parser.RULE_logicalorexpression,
                CPP14Parser_1.CPP14Parser.RULE_logicalandexpression,
                CPP14Parser_1.CPP14Parser.RULE_inclusiveorexpression,
                CPP14Parser_1.CPP14Parser.RULE_exclusiveorexpression,
                CPP14Parser_1.CPP14Parser.RULE_andexpression,
                CPP14Parser_1.CPP14Parser.RULE_equalityexpression,
                CPP14Parser_1.CPP14Parser.RULE_relationalexpression,
                CPP14Parser_1.CPP14Parser.RULE_shiftexpression,
                CPP14Parser_1.CPP14Parser.RULE_additiveexpression,
                CPP14Parser_1.CPP14Parser.RULE_multiplicativeexpression,
                CPP14Parser_1.CPP14Parser.RULE_pmexpression,
                CPP14Parser_1.CPP14Parser.RULE_castexpression,
                CPP14Parser_1.CPP14Parser.RULE_unaryexpression,
                CPP14Parser_1.CPP14Parser.RULE_postfixexpression,
                CPP14Parser_1.CPP14Parser.RULE_primaryexpression,
            ]);
            chai_1.expect(candidates.tokens.size, "Test 49").to.equal(81);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.If), "Test 50").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.This), "Test 51").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.New), "Test 52").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Case), "Test 53").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.While), "Test 54").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Throw), "Test 55").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Override), "Test 56").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Export), "Test 57").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Private), "Test 58").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Protected), "Test 59").to.equal(false);
        }).timeout(5000);
        it('Simple C++ example with errors in input', function () {
            var inputStream = new antlr4ts_1.ANTLRInputStream("class A {\n" +
                "public:\n" +
                "  void test() {\n" +
                "    if ()" +
                "  }\n" +
                "};\n");
            var lexer = new CPP14Lexer_1.CPP14Lexer(inputStream);
            var tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
            var parser = new CPP14Parser_1.CPP14Parser(tokenStream);
            parser.removeErrorListeners();
            var errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            var tree = parser.translationunit();
            chai_1.expect(errorListener.errorCount, "Test 1").equals(3);
            var core = new c3.CodeCompletionCore(parser);
            core.ignoredTokens = new Set([
                CPP14Lexer_1.CPP14Lexer.Identifier,
                CPP14Lexer_1.CPP14Lexer.Operator, CPP14Lexer_1.CPP14Lexer.Star, CPP14Lexer_1.CPP14Lexer.And, CPP14Lexer_1.CPP14Lexer.AndAnd,
                CPP14Lexer_1.CPP14Lexer.LeftBracket,
                CPP14Lexer_1.CPP14Lexer.Ellipsis,
                CPP14Lexer_1.CPP14Lexer.Doublecolon, CPP14Lexer_1.CPP14Lexer.Semi,
            ]);
            core.preferredRules = new Set([CPP14Parser_1.CPP14Parser.RULE_classname, CPP14Parser_1.CPP14Parser.RULE_namespacename, CPP14Parser_1.CPP14Parser.RULE_idexpression]);
            core.showDebugOutput = false;
            core.showRuleStack = false;
            var candidates = core.collectCandidates(11);
            chai_1.expect(candidates.tokens.size, "Test 2").to.equal(1);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.LeftParen), "Test 3").to.equal(true);
            candidates = core.collectCandidates(12);
            chai_1.expect(candidates.tokens.size, "Test 4").to.equal(64);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.If), "Test 5").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.This), "Test 6").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.New), "Test 7").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Case), "Test 8").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.While), "Test 9").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Throw), "Test 10").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Override), "Test 11").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Export), "Test 12").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Private), "Test 13").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Protected), "Test 14").to.equal(false);
            candidates = core.collectCandidates(13);
            chai_1.expect(candidates.tokens.size, "Test 15").to.equal(0);
            chai_1.expect(candidates.rules.size, "Test 16").to.equal(0);
        });
        it('Real C++ file', function () {
            this.slow(10000);
            var source = fs.readFileSync(path.join(__dirname, "../../test/Parser.cpp")).toString();
            var inputStream = new antlr4ts_1.ANTLRInputStream(source);
            var lexer = new CPP14Lexer_1.CPP14Lexer(inputStream);
            var tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
            var parser = new CPP14Parser_1.CPP14Parser(tokenStream);
            var errorListener = new ErrorListener();
            parser.addErrorListener(errorListener);
            var tree = parser.translationunit();
            chai_1.expect(errorListener.errorCount, "Test 1").equals(0);
            var core = new c3.CodeCompletionCore(parser);
            core.ignoredTokens = new Set([
                CPP14Lexer_1.CPP14Lexer.Identifier,
                CPP14Lexer_1.CPP14Lexer.LeftParen, CPP14Lexer_1.CPP14Lexer.RightParen,
                CPP14Lexer_1.CPP14Lexer.Operator, CPP14Lexer_1.CPP14Lexer.Star, CPP14Lexer_1.CPP14Lexer.And, CPP14Lexer_1.CPP14Lexer.AndAnd,
                CPP14Lexer_1.CPP14Lexer.LeftBracket,
                CPP14Lexer_1.CPP14Lexer.Ellipsis,
                CPP14Lexer_1.CPP14Lexer.Doublecolon, CPP14Lexer_1.CPP14Lexer.Semi,
            ]);
            core.preferredRules = new Set([CPP14Parser_1.CPP14Parser.RULE_classname, CPP14Parser_1.CPP14Parser.RULE_namespacename, CPP14Parser_1.CPP14Parser.RULE_idexpression]);
            var candidates = core.collectCandidates(3469);
            chai_1.expect(candidates.rules.size, "Test 47").to.equal(1);
            chai_1.expect(candidates.tokens.size, "Test 49").to.equal(81);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.If), "Test 50").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.This), "Test 51").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.New), "Test 52").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Case), "Test 53").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.While), "Test 54").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Throw), "Test 55").to.equal(true);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Override), "Test 56").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Export), "Test 57").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Private), "Test 58").to.equal(false);
            chai_1.expect(candidates.tokens.has(CPP14Lexer_1.CPP14Lexer.Protected), "Test 59").to.equal(false);
        }).timeout(60000);
    });
});
//# sourceMappingURL=test.js.map