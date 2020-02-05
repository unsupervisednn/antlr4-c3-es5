"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATN_1 = require("antlr4ts/atn/ATN");
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var FailedPredicateException_1 = require("antlr4ts/FailedPredicateException");
var NoViableAltException_1 = require("antlr4ts/NoViableAltException");
var Parser_1 = require("antlr4ts/Parser");
var ParserRuleContext_1 = require("antlr4ts/ParserRuleContext");
var ParserATNSimulator_1 = require("antlr4ts/atn/ParserATNSimulator");
var RecognitionException_1 = require("antlr4ts/RecognitionException");
var Token_1 = require("antlr4ts/Token");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var ExprParser = (function (_super) {
    __extends(ExprParser, _super);
    function ExprParser(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new ParserATNSimulator_1.ParserATNSimulator(ExprParser._ATN, _this);
        return _this;
    }
    Object.defineProperty(ExprParser.prototype, "vocabulary", {
        get: function () {
            return ExprParser.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprParser.prototype, "grammarFileName", {
        get: function () { return "Expr.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprParser.prototype, "ruleNames", {
        get: function () { return ExprParser.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprParser.prototype, "serializedATN", {
        get: function () { return ExprParser._serializedATN; },
        enumerable: true,
        configurable: true
    });
    ExprParser.prototype.expression = function () {
        var _localctx = new ExpressionContext(this._ctx, this.state);
        this.enterRule(_localctx, 0, ExprParser.RULE_expression);
        try {
            this.state = 12;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
                case ExprParser.VAR:
                case ExprParser.LET:
                    this.enterOuterAlt(_localctx, 1);
                    {
                        this.state = 10;
                        this.assignment();
                    }
                    break;
                case ExprParser.ID:
                    this.enterOuterAlt(_localctx, 2);
                    {
                        this.state = 11;
                        this.simpleExpression(0);
                    }
                    break;
                default:
                    throw new NoViableAltException_1.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    ExprParser.prototype.assignment = function () {
        var _localctx = new AssignmentContext(this._ctx, this.state);
        this.enterRule(_localctx, 2, ExprParser.RULE_assignment);
        var _la;
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 14;
                _la = this._input.LA(1);
                if (!(_la === ExprParser.VAR || _la === ExprParser.LET)) {
                    this._errHandler.recoverInline(this);
                }
                else {
                    if (this._input.LA(1) === Token_1.Token.EOF) {
                        this.matchedEOF = true;
                    }
                    this._errHandler.reportMatch(this);
                    this.consume();
                }
                this.state = 15;
                this.match(ExprParser.ID);
                this.state = 16;
                this.match(ExprParser.EQUAL);
                this.state = 17;
                this.simpleExpression(0);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    ExprParser.prototype.simpleExpression = function (_p) {
        if (_p === undefined) {
            _p = 0;
        }
        var _parentctx = this._ctx;
        var _parentState = this.state;
        var _localctx = new SimpleExpressionContext(this._ctx, _parentState);
        var _prevctx = _localctx;
        var _startState = 4;
        this.enterRecursionRule(_localctx, 4, ExprParser.RULE_simpleExpression, _p);
        var _la;
        try {
            var _alt = void 0;
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 22;
                this._errHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this._input, 1, this._ctx)) {
                    case 1:
                        {
                            this.state = 20;
                            this.variableRef();
                        }
                        break;
                    case 2:
                        {
                            this.state = 21;
                            this.functionRef();
                        }
                        break;
                }
                this._ctx._stop = this._input.tryLT(-1);
                this.state = 32;
                this._errHandler.sync(this);
                _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                while (_alt !== 2 && _alt !== ATN_1.ATN.INVALID_ALT_NUMBER) {
                    if (_alt === 1) {
                        if (this._parseListeners != null) {
                            this.triggerExitRuleEvent();
                        }
                        _prevctx = _localctx;
                        {
                            this.state = 30;
                            this._errHandler.sync(this);
                            switch (this.interpreter.adaptivePredict(this._input, 2, this._ctx)) {
                                case 1:
                                    {
                                        _localctx = new SimpleExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_simpleExpression);
                                        this.state = 24;
                                        if (!(this.precpred(this._ctx, 4))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
                                        }
                                        this.state = 25;
                                        _la = this._input.LA(1);
                                        if (!(_la === ExprParser.PLUS || _la === ExprParser.MINUS)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 26;
                                        this.simpleExpression(5);
                                    }
                                    break;
                                case 2:
                                    {
                                        _localctx = new SimpleExpressionContext(_parentctx, _parentState);
                                        this.pushNewRecursionContext(_localctx, _startState, ExprParser.RULE_simpleExpression);
                                        this.state = 27;
                                        if (!(this.precpred(this._ctx, 3))) {
                                            throw new FailedPredicateException_1.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                                        }
                                        this.state = 28;
                                        _la = this._input.LA(1);
                                        if (!(_la === ExprParser.MULTIPLY || _la === ExprParser.DIVIDE)) {
                                            this._errHandler.recoverInline(this);
                                        }
                                        else {
                                            if (this._input.LA(1) === Token_1.Token.EOF) {
                                                this.matchedEOF = true;
                                            }
                                            this._errHandler.reportMatch(this);
                                            this.consume();
                                        }
                                        this.state = 29;
                                        this.simpleExpression(4);
                                    }
                                    break;
                            }
                        }
                    }
                    this.state = 34;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
                }
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(_parentctx);
        }
        return _localctx;
    };
    ExprParser.prototype.variableRef = function () {
        var _localctx = new VariableRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 6, ExprParser.RULE_variableRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 35;
                this.match(ExprParser.ID);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    ExprParser.prototype.functionRef = function () {
        var _localctx = new FunctionRefContext(this._ctx, this.state);
        this.enterRule(_localctx, 8, ExprParser.RULE_functionRef);
        try {
            this.enterOuterAlt(_localctx, 1);
            {
                this.state = 37;
                this.match(ExprParser.ID);
                this.state = 38;
                this.match(ExprParser.OPEN_PAR);
                this.state = 39;
                this.match(ExprParser.CLOSE_PAR);
            }
        }
        catch (re) {
            if (re instanceof RecognitionException_1.RecognitionException) {
                _localctx.exception = re;
                this._errHandler.reportError(this, re);
                this._errHandler.recover(this, re);
            }
            else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return _localctx;
    };
    ExprParser.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 2:
                return this.simpleExpression_sempred(_localctx, predIndex);
        }
        return true;
    };
    ExprParser.prototype.simpleExpression_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return this.precpred(this._ctx, 4);
            case 1:
                return this.precpred(this._ctx, 3);
        }
        return true;
    };
    Object.defineProperty(ExprParser, "_ATN", {
        get: function () {
            if (!ExprParser.__ATN) {
                ExprParser.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ExprParser._serializedATN));
            }
            return ExprParser.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ExprParser.VAR = 1;
    ExprParser.LET = 2;
    ExprParser.PLUS = 3;
    ExprParser.MINUS = 4;
    ExprParser.MULTIPLY = 5;
    ExprParser.DIVIDE = 6;
    ExprParser.EQUAL = 7;
    ExprParser.OPEN_PAR = 8;
    ExprParser.CLOSE_PAR = 9;
    ExprParser.ID = 10;
    ExprParser.WS = 11;
    ExprParser.RULE_expression = 0;
    ExprParser.RULE_assignment = 1;
    ExprParser.RULE_simpleExpression = 2;
    ExprParser.RULE_variableRef = 3;
    ExprParser.RULE_functionRef = 4;
    ExprParser.ruleNames = [
        "expression", "assignment", "simpleExpression", "variableRef", "functionRef",
    ];
    ExprParser._LITERAL_NAMES = [
        undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", "'='", "'('",
        "')'",
    ];
    ExprParser._SYMBOLIC_NAMES = [
        undefined, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL",
        "OPEN_PAR", "CLOSE_PAR", "ID", "WS",
    ];
    ExprParser.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ExprParser._LITERAL_NAMES, ExprParser._SYMBOLIC_NAMES, []);
    ExprParser._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\r,\x04\x02\t" +
        "\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x03\x02\x03" +
        "\x02\x05\x02\x0F\n\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04" +
        "\x03\x04\x03\x04\x05\x04\x19\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
        "\x04\x03\x04\x07\x04!\n\x04\f\x04\x0E\x04$\v\x04\x03\x05\x03\x05\x03\x06" +
        "\x03\x06\x03\x06\x03\x06\x03\x06\x02\x02\x03\x06\x07\x02\x02\x04\x02\x06" +
        "\x02\b\x02\n\x02\x02\x05\x03\x02\x03\x04\x03\x02\x05\x06\x03\x02\x07\b" +
        "\x02*\x02\x0E\x03\x02\x02\x02\x04\x10\x03\x02\x02\x02\x06\x18\x03\x02" +
        "\x02\x02\b%\x03\x02\x02\x02\n\'\x03\x02\x02\x02\f\x0F\x05\x04\x03\x02" +
        "\r\x0F\x05\x06\x04\x02\x0E\f\x03\x02\x02\x02\x0E\r\x03\x02\x02\x02\x0F" +
        "\x03\x03\x02\x02\x02\x10\x11\t\x02\x02\x02\x11\x12\x07\f\x02\x02\x12\x13" +
        "\x07\t\x02\x02\x13\x14\x05\x06\x04\x02\x14\x05\x03\x02\x02\x02\x15\x16" +
        "\b\x04\x01\x02\x16\x19\x05\b\x05\x02\x17\x19\x05\n\x06\x02\x18\x15\x03" +
        "\x02\x02\x02\x18\x17\x03\x02\x02\x02\x19\"\x03\x02\x02\x02\x1A\x1B\f\x06" +
        "\x02\x02\x1B\x1C\t\x03\x02\x02\x1C!\x05\x06\x04\x07\x1D\x1E\f\x05\x02" +
        "\x02\x1E\x1F\t\x04\x02\x02\x1F!\x05\x06\x04\x06 \x1A\x03\x02\x02\x02 " +
        "\x1D\x03\x02\x02\x02!$\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02" +
        "\x02#\x07\x03\x02\x02\x02$\"\x03\x02\x02\x02%&\x07\f\x02\x02&\t\x03\x02" +
        "\x02\x02\'(\x07\f\x02\x02()\x07\n\x02\x02)*\x07\v\x02\x02*\v\x03\x02\x02" +
        "\x02\x06\x0E\x18 \"";
    return ExprParser;
}(Parser_1.Parser));
exports.ExprParser = ExprParser;
var ExpressionContext = (function (_super) {
    __extends(ExpressionContext, _super);
    function ExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    ExpressionContext.prototype.assignment = function () {
        return this.tryGetRuleContext(0, AssignmentContext);
    };
    ExpressionContext.prototype.simpleExpression = function () {
        return this.tryGetRuleContext(0, SimpleExpressionContext);
    };
    Object.defineProperty(ExpressionContext.prototype, "ruleIndex", {
        get: function () { return ExprParser.RULE_expression; },
        enumerable: true,
        configurable: true
    });
    return ExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.ExpressionContext = ExpressionContext;
var AssignmentContext = (function (_super) {
    __extends(AssignmentContext, _super);
    function AssignmentContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    AssignmentContext.prototype.ID = function () { return this.getToken(ExprParser.ID, 0); };
    AssignmentContext.prototype.EQUAL = function () { return this.getToken(ExprParser.EQUAL, 0); };
    AssignmentContext.prototype.simpleExpression = function () {
        return this.getRuleContext(0, SimpleExpressionContext);
    };
    AssignmentContext.prototype.VAR = function () { return this.tryGetToken(ExprParser.VAR, 0); };
    AssignmentContext.prototype.LET = function () { return this.tryGetToken(ExprParser.LET, 0); };
    Object.defineProperty(AssignmentContext.prototype, "ruleIndex", {
        get: function () { return ExprParser.RULE_assignment; },
        enumerable: true,
        configurable: true
    });
    return AssignmentContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.AssignmentContext = AssignmentContext;
var SimpleExpressionContext = (function (_super) {
    __extends(SimpleExpressionContext, _super);
    function SimpleExpressionContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    SimpleExpressionContext.prototype.simpleExpression = function (i) {
        if (i === undefined) {
            return this.getRuleContexts(SimpleExpressionContext);
        }
        else {
            return this.getRuleContext(i, SimpleExpressionContext);
        }
    };
    SimpleExpressionContext.prototype.PLUS = function () { return this.tryGetToken(ExprParser.PLUS, 0); };
    SimpleExpressionContext.prototype.MINUS = function () { return this.tryGetToken(ExprParser.MINUS, 0); };
    SimpleExpressionContext.prototype.MULTIPLY = function () { return this.tryGetToken(ExprParser.MULTIPLY, 0); };
    SimpleExpressionContext.prototype.DIVIDE = function () { return this.tryGetToken(ExprParser.DIVIDE, 0); };
    SimpleExpressionContext.prototype.variableRef = function () {
        return this.tryGetRuleContext(0, VariableRefContext);
    };
    SimpleExpressionContext.prototype.functionRef = function () {
        return this.tryGetRuleContext(0, FunctionRefContext);
    };
    Object.defineProperty(SimpleExpressionContext.prototype, "ruleIndex", {
        get: function () { return ExprParser.RULE_simpleExpression; },
        enumerable: true,
        configurable: true
    });
    return SimpleExpressionContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.SimpleExpressionContext = SimpleExpressionContext;
var VariableRefContext = (function (_super) {
    __extends(VariableRefContext, _super);
    function VariableRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    VariableRefContext.prototype.ID = function () { return this.getToken(ExprParser.ID, 0); };
    Object.defineProperty(VariableRefContext.prototype, "ruleIndex", {
        get: function () { return ExprParser.RULE_variableRef; },
        enumerable: true,
        configurable: true
    });
    return VariableRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.VariableRefContext = VariableRefContext;
var FunctionRefContext = (function (_super) {
    __extends(FunctionRefContext, _super);
    function FunctionRefContext(parent, invokingState) {
        return _super.call(this, parent, invokingState) || this;
    }
    FunctionRefContext.prototype.ID = function () { return this.getToken(ExprParser.ID, 0); };
    FunctionRefContext.prototype.OPEN_PAR = function () { return this.getToken(ExprParser.OPEN_PAR, 0); };
    FunctionRefContext.prototype.CLOSE_PAR = function () { return this.getToken(ExprParser.CLOSE_PAR, 0); };
    Object.defineProperty(FunctionRefContext.prototype, "ruleIndex", {
        get: function () { return ExprParser.RULE_functionRef; },
        enumerable: true,
        configurable: true
    });
    return FunctionRefContext;
}(ParserRuleContext_1.ParserRuleContext));
exports.FunctionRefContext = FunctionRefContext;
//# sourceMappingURL=ExprParser.js.map