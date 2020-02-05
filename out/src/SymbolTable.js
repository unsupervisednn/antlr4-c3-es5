'use strict';
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var DuplicateSymbolError = (function (_super) {
    __extends(DuplicateSymbolError, _super);
    function DuplicateSymbolError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DuplicateSymbolError;
}(Error));
exports.DuplicateSymbolError = DuplicateSymbolError;
;
var MemberVisibility;
(function (MemberVisibility) {
    MemberVisibility[MemberVisibility["Invalid"] = -1] = "Invalid";
    MemberVisibility[MemberVisibility["Public"] = 0] = "Public";
    MemberVisibility[MemberVisibility["Protected"] = 1] = "Protected";
    MemberVisibility[MemberVisibility["Private"] = 2] = "Private";
    MemberVisibility[MemberVisibility["Library"] = 3] = "Library";
})(MemberVisibility = exports.MemberVisibility || (exports.MemberVisibility = {}));
;
var TypeKind;
(function (TypeKind) {
    TypeKind[TypeKind["Integer"] = 0] = "Integer";
    TypeKind[TypeKind["Float"] = 1] = "Float";
    TypeKind[TypeKind["String"] = 2] = "String";
    TypeKind[TypeKind["Boolean"] = 3] = "Boolean";
    TypeKind[TypeKind["Date"] = 4] = "Date";
    TypeKind[TypeKind["Class"] = 5] = "Class";
    TypeKind[TypeKind["Array"] = 6] = "Array";
    TypeKind[TypeKind["Alias"] = 7] = "Alias";
})(TypeKind = exports.TypeKind || (exports.TypeKind = {}));
;
var ReferenceKind;
(function (ReferenceKind) {
    ReferenceKind[ReferenceKind["Irrelevant"] = 0] = "Irrelevant";
    ReferenceKind[ReferenceKind["Pointer"] = 1] = "Pointer";
    ReferenceKind[ReferenceKind["Reference"] = 2] = "Reference";
    ReferenceKind[ReferenceKind["Instance"] = 3] = "Instance";
})(ReferenceKind = exports.ReferenceKind || (exports.ReferenceKind = {}));
;
var FundamentalType = (function () {
    function FundamentalType(name, typeKind, referenceKind) {
        this.name = name;
        this.typeKind = typeKind;
        this.referenceKind = referenceKind;
    }
    Object.defineProperty(FundamentalType.prototype, "baseTypes", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundamentalType.prototype, "kind", {
        get: function () { return this.typeKind; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FundamentalType.prototype, "reference", {
        get: function () { return this.referenceKind; },
        enumerable: true,
        configurable: true
    });
    FundamentalType.integerType = new FundamentalType("int", TypeKind.Integer, ReferenceKind.Instance);
    FundamentalType.floatType = new FundamentalType("float", TypeKind.Float, ReferenceKind.Instance);
    FundamentalType.stringType = new FundamentalType("string", TypeKind.String, ReferenceKind.Instance);
    FundamentalType.boolType = new FundamentalType("bool", TypeKind.Boolean, ReferenceKind.Instance);
    FundamentalType.dateType = new FundamentalType("date", TypeKind.Date, ReferenceKind.Instance);
    return FundamentalType;
}());
exports.FundamentalType = FundamentalType;
var Symbol = (function () {
    function Symbol(name) {
        if (name === void 0) { name = ""; }
        this.name = "";
        this.name = name;
    }
    Symbol.prototype.setParent = function (parent) {
        this._parent = parent;
    };
    Object.defineProperty(Symbol.prototype, "parent", {
        get: function () {
            return this._parent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "firstSibling", {
        get: function () {
            if (this._parent instanceof ScopedSymbol) {
                return this._parent.firstChild;
            }
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "previousSibling", {
        get: function () {
            if (!(this._parent instanceof ScopedSymbol)) {
                return this;
            }
            var result = this._parent.previousSiblingOf(this);
            if (result) {
                return result;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "nextSibling", {
        get: function () {
            if (!(this._parent instanceof ScopedSymbol)) {
                return this;
            }
            var result = this._parent.nextSiblingOf(this);
            if (result) {
                return result;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "lastSibling", {
        get: function () {
            if (this._parent instanceof ScopedSymbol) {
                return this._parent.lastChild;
            }
            return this;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "next", {
        get: function () {
            if (this.parent instanceof ScopedSymbol) {
                return this.parent.nextOf(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    Symbol.prototype.removeFromParent = function () {
        if (this._parent instanceof ScopedSymbol) {
            this._parent.removeSymbol(this);
            this._parent = undefined;
        }
    };
    Symbol.prototype.resolve = function (name, localOnly) {
        if (localOnly === void 0) { localOnly = false; }
        if (this._parent instanceof ScopedSymbol) {
            return this._parent.resolve(name, localOnly);
        }
    };
    Object.defineProperty(Symbol.prototype, "root", {
        get: function () {
            var run = this._parent;
            while (run) {
                if (!run._parent || (run._parent instanceof SymbolTable))
                    return run;
                run = run._parent;
            }
            return run;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Symbol.prototype, "symbolTable", {
        get: function () {
            if (this instanceof SymbolTable) {
                return this;
            }
            var run = this._parent;
            while (run) {
                if (run instanceof SymbolTable)
                    return run;
                run = run._parent;
            }
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Symbol.prototype.getParentOfType = function (t) {
        var run = this._parent;
        while (run) {
            if (run instanceof t)
                return run;
            run = run._parent;
        }
        return undefined;
    };
    Object.defineProperty(Symbol.prototype, "symbolPath", {
        get: function () {
            var result = [];
            var run = this;
            while (run) {
                result.push(run);
                if (!run._parent)
                    break;
                run = run._parent;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Symbol.prototype.qualifiedName = function (separator, full, includeAnonymous) {
        if (separator === void 0) { separator = "."; }
        if (full === void 0) { full = false; }
        if (includeAnonymous === void 0) { includeAnonymous = false; }
        if (!includeAnonymous && this.name.length == 0)
            return "";
        var result = this.name.length == 0 ? "<anonymous>" : this.name;
        var run = this._parent;
        while (run) {
            if (includeAnonymous || run.name.length > 0) {
                result = (run.name.length == 0 ? "<anonymous>" : run.name) + separator + result;
                if (!full || !run._parent)
                    break;
            }
            run = run._parent;
        }
        return result;
    };
    return Symbol;
}());
exports.Symbol = Symbol;
;
var TypedSymbol = (function (_super) {
    __extends(TypedSymbol, _super);
    function TypedSymbol(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    return TypedSymbol;
}(Symbol));
exports.TypedSymbol = TypedSymbol;
;
var TypeAlias = (function (_super) {
    __extends(TypeAlias, _super);
    function TypeAlias(name, target) {
        var _this = _super.call(this, name) || this;
        _this.targetType = target;
        return _this;
    }
    Object.defineProperty(TypeAlias.prototype, "baseTypes", {
        get: function () { return [this.targetType]; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeAlias.prototype, "kind", {
        get: function () { return TypeKind.Alias; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeAlias.prototype, "reference", {
        get: function () { return ReferenceKind.Irrelevant; },
        enumerable: true,
        configurable: true
    });
    return TypeAlias;
}(Symbol));
exports.TypeAlias = TypeAlias;
;
var ScopedSymbol = (function (_super) {
    __extends(ScopedSymbol, _super);
    function ScopedSymbol(name) {
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, name) || this;
        _this._children = [];
        return _this;
    }
    Object.defineProperty(ScopedSymbol.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    ScopedSymbol.prototype.clear = function () {
        this._children = [];
    };
    ScopedSymbol.prototype.addSymbol = function (symbol) {
        var e_1, _a;
        symbol.removeFromParent();
        var symbolTable = this.symbolTable;
        if (!symbolTable || !symbolTable.options.allowDuplicateSymbols) {
            try {
                for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var child = _c.value;
                    if (child == symbol || (symbol.name.length > 0 && child.name == symbol.name)) {
                        var name_1 = symbol.name;
                        if (name_1.length == 0)
                            name_1 = "<anonymous>";
                        throw new DuplicateSymbolError("Attempt to add duplicate symbol '" + name_1 + "'");
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
        }
        this._children.push(symbol);
        symbol.setParent(this);
    };
    ScopedSymbol.prototype.removeSymbol = function (symbol) {
        var index = this._children.indexOf(symbol);
        if (index > -1) {
            this._children.splice(index, 1);
            symbol.setParent(undefined);
        }
    };
    ScopedSymbol.prototype.getNestedSymbolsOfType = function (t) {
        var e_2, _a;
        var result = [];
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child instanceof t)
                    result.push(child);
                if (child instanceof ScopedSymbol)
                    result.push.apply(result, __spread(child.getNestedSymbolsOfType(t)));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    };
    ScopedSymbol.prototype.getAllNestedSymbols = function (name) {
        var e_3, _a;
        var result = [];
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (!name || child.name == name) {
                    result.push(child);
                }
                if (child instanceof ScopedSymbol)
                    result.push.apply(result, __spread(child.getAllNestedSymbols(name)));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    ScopedSymbol.prototype.getSymbolsOfType = function (t) {
        var e_4, _a;
        var result = [];
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child instanceof t)
                    result.push(child);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return result;
    };
    ScopedSymbol.prototype.getAllSymbols = function (t, localOnly) {
        var e_5, _a;
        if (localOnly === void 0) { localOnly = false; }
        var result = new Set();
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child instanceof t) {
                    result.add(child);
                }
                if (child instanceof NamespaceSymbol) {
                    child.getAllSymbols(t, true).forEach(result.add, result);
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol) {
                this._parent.getAllSymbols(t, true).forEach(result.add, result);
            }
        }
        return result;
    };
    ScopedSymbol.prototype.resolve = function (name, localOnly) {
        var e_6, _a;
        if (localOnly === void 0) { localOnly = false; }
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child.name == name)
                    return child;
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol)
                return this._parent.resolve(name, false);
        }
        return undefined;
    };
    ScopedSymbol.prototype.getTypedSymbols = function (localOnly) {
        var e_7, _a;
        if (localOnly === void 0) { localOnly = true; }
        var result = [];
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child instanceof TypedSymbol) {
                    result.push(child);
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol) {
                var localList = this._parent.getTypedSymbols(true);
                result.push.apply(result, __spread(localList));
            }
        }
        return result;
    };
    ScopedSymbol.prototype.getTypedSymbolNames = function (localOnly) {
        var e_8, _a;
        if (localOnly === void 0) { localOnly = true; }
        var result = [];
        try {
            for (var _b = __values(this._children), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                if (child instanceof TypedSymbol) {
                    result.push(child.name);
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_8) throw e_8.error; }
        }
        if (!localOnly) {
            if (this._parent instanceof ScopedSymbol) {
                var localList = this._parent.getTypedSymbolNames(true);
                result.push.apply(result, __spread(localList));
            }
        }
        return result;
    };
    Object.defineProperty(ScopedSymbol.prototype, "directScopes", {
        get: function () {
            return this.getSymbolsOfType(ScopedSymbol);
        },
        enumerable: true,
        configurable: true
    });
    ScopedSymbol.prototype.symbolFromPath = function (path, separator) {
        if (separator === void 0) { separator = "."; }
        var elements = path.split(separator);
        var index = 0;
        if (elements[0] == this.name || elements[0].length == 0)
            ++index;
        var result = this;
        while (index < elements.length) {
            if (!(result instanceof ScopedSymbol))
                return undefined;
            var child = result._children.find(function (child) { return child.name == elements[index]; });
            if (!child)
                return undefined;
            result = child;
            ++index;
        }
        return result;
    };
    ScopedSymbol.prototype.indexOfChild = function (child) {
        return this._children.findIndex(function (value, index) {
            return value == child;
        });
    };
    ScopedSymbol.prototype.nextSiblingOf = function (child) {
        var index = this.indexOfChild(child);
        if (index == -1 || index >= this._children.length - 1) {
            return;
        }
        return this._children[index + 1];
    };
    ScopedSymbol.prototype.previousSiblingOf = function (child) {
        var index = this.indexOfChild(child);
        if (index < 1) {
            return;
        }
        return this._children[index - 1];
    };
    Object.defineProperty(ScopedSymbol.prototype, "firstChild", {
        get: function () {
            if (this._children.length > 0) {
                return this._children[0];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScopedSymbol.prototype, "lastChild", {
        get: function () {
            if (this._children.length > 0) {
                return this._children[this._children.length - 1];
            }
        },
        enumerable: true,
        configurable: true
    });
    ScopedSymbol.prototype.nextOf = function (child) {
        if (!(child.parent instanceof ScopedSymbol)) {
            return;
        }
        if (child.parent != this) {
            return child.parent.nextOf(child);
        }
        if (child instanceof ScopedSymbol && child.children.length > 0) {
            return child.children[0];
        }
        var sibling = this.nextSiblingOf(child);
        if (sibling) {
            return sibling;
        }
        return this.parent.nextOf(this);
    };
    return ScopedSymbol;
}(Symbol));
exports.ScopedSymbol = ScopedSymbol;
;
var NamespaceSymbol = (function (_super) {
    __extends(NamespaceSymbol, _super);
    function NamespaceSymbol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NamespaceSymbol;
}(ScopedSymbol));
exports.NamespaceSymbol = NamespaceSymbol;
var BlockSymbol = (function (_super) {
    __extends(BlockSymbol, _super);
    function BlockSymbol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BlockSymbol;
}(ScopedSymbol));
exports.BlockSymbol = BlockSymbol;
var VariableSymbol = (function (_super) {
    __extends(VariableSymbol, _super);
    function VariableSymbol(name, value, type) {
        var _this = _super.call(this, name, type) || this;
        _this.value = value;
        return _this;
    }
    return VariableSymbol;
}(TypedSymbol));
exports.VariableSymbol = VariableSymbol;
;
var LiteralSymbol = (function (_super) {
    __extends(LiteralSymbol, _super);
    function LiteralSymbol(name, value, type) {
        var _this = _super.call(this, name, type) || this;
        _this.value = value;
        return _this;
    }
    return LiteralSymbol;
}(TypedSymbol));
exports.LiteralSymbol = LiteralSymbol;
;
var ParameterSymbol = (function (_super) {
    __extends(ParameterSymbol, _super);
    function ParameterSymbol() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ParameterSymbol;
}(VariableSymbol));
exports.ParameterSymbol = ParameterSymbol;
;
var RoutineSymbol = (function (_super) {
    __extends(RoutineSymbol, _super);
    function RoutineSymbol(name, returnType) {
        var _this = _super.call(this, name) || this;
        _this.returnType = returnType;
        return _this;
    }
    RoutineSymbol.prototype.getVariables = function (localOnly) {
        if (localOnly === void 0) { localOnly = true; }
        return this.getSymbolsOfType(VariableSymbol);
    };
    RoutineSymbol.prototype.getParameters = function (localOnly) {
        if (localOnly === void 0) { localOnly = true; }
        return this.getSymbolsOfType(ParameterSymbol);
    };
    return RoutineSymbol;
}(ScopedSymbol));
exports.RoutineSymbol = RoutineSymbol;
;
var MethodFlags;
(function (MethodFlags) {
    MethodFlags[MethodFlags["None"] = 0] = "None";
    MethodFlags[MethodFlags["Virtual"] = 1] = "Virtual";
    MethodFlags[MethodFlags["Const"] = 2] = "Const";
    MethodFlags[MethodFlags["Overwritten"] = 4] = "Overwritten";
    MethodFlags[MethodFlags["SetterOrGetter"] = 8] = "SetterOrGetter";
    MethodFlags[MethodFlags["Explicit"] = 16] = "Explicit";
})(MethodFlags = exports.MethodFlags || (exports.MethodFlags = {}));
;
var MethodSymbol = (function (_super) {
    __extends(MethodSymbol, _super);
    function MethodSymbol(name, returnType) {
        var _this = _super.call(this, name, returnType) || this;
        _this.methodFlags = MethodFlags.None;
        _this.visibility = MemberVisibility.Invalid;
        return _this;
    }
    return MethodSymbol;
}(RoutineSymbol));
exports.MethodSymbol = MethodSymbol;
;
var FieldSymbol = (function (_super) {
    __extends(FieldSymbol, _super);
    function FieldSymbol(name, type) {
        var _this = _super.call(this, name, type) || this;
        _this.visibility = MemberVisibility.Invalid;
        return _this;
    }
    return FieldSymbol;
}(VariableSymbol));
exports.FieldSymbol = FieldSymbol;
;
var ClassSymbol = (function (_super) {
    __extends(ClassSymbol, _super);
    function ClassSymbol(name, referenceKind) {
        var _a;
        var superClass = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            superClass[_i - 2] = arguments[_i];
        }
        var _this = _super.call(this, name) || this;
        _this.isStruct = false;
        _this.superClasses = [];
        _this.referenceKind = referenceKind;
        (_a = _this.superClasses).push.apply(_a, __spread(superClass));
        return _this;
    }
    Object.defineProperty(ClassSymbol.prototype, "baseTypes", {
        get: function () { return this.superClasses; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ClassSymbol.prototype, "kind", {
        get: function () { return TypeKind.Class; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassSymbol.prototype, "reference", {
        get: function () { return this.referenceKind; },
        enumerable: true,
        configurable: true
    });
    ClassSymbol.prototype.getMethods = function (includeInherited) {
        if (includeInherited === void 0) { includeInherited = false; }
        return this.getSymbolsOfType(MethodSymbol);
    };
    ClassSymbol.prototype.getFields = function (includeInherited) {
        if (includeInherited === void 0) { includeInherited = false; }
        return this.getSymbolsOfType(FieldSymbol);
    };
    return ClassSymbol;
}(ScopedSymbol));
exports.ClassSymbol = ClassSymbol;
;
var ArrayType = (function (_super) {
    __extends(ArrayType, _super);
    function ArrayType(name, referenceKind, elemType, size) {
        if (size === void 0) { size = 0; }
        var _this = _super.call(this, name) || this;
        _this.referenceKind = referenceKind;
        _this.elementType = elemType;
        _this.size = size;
        return _this;
    }
    Object.defineProperty(ArrayType.prototype, "baseTypes", {
        get: function () { return []; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ArrayType.prototype, "kind", {
        get: function () { return TypeKind.Array; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArrayType.prototype, "reference", {
        get: function () { return this.referenceKind; },
        enumerable: true,
        configurable: true
    });
    return ArrayType;
}(Symbol));
exports.ArrayType = ArrayType;
;
var SymbolTable = (function (_super) {
    __extends(SymbolTable, _super);
    function SymbolTable(name, options) {
        var _this = _super.call(this, name) || this;
        _this.options = options;
        _this.dependencies = new Set();
        return _this;
    }
    SymbolTable.prototype.clear = function () {
        _super.prototype.clear.call(this);
        this.dependencies.clear();
    };
    SymbolTable.prototype.addDependencies = function () {
        var _this = this;
        var tables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tables[_i] = arguments[_i];
        }
        tables.forEach(function (value, key) {
            _this.dependencies.add(value);
        });
    };
    SymbolTable.prototype.removeDependency = function (table) {
        if (this.dependencies.has(table)) {
            this.dependencies.delete(table);
        }
    };
    Object.defineProperty(SymbolTable.prototype, "info", {
        get: function () {
            return {
                dependencyCount: this.dependencies.size,
                symbolCount: this.children.length
            };
        },
        enumerable: true,
        configurable: true
    });
    SymbolTable.prototype.addNewSymbolOfType = function (t, parent) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var result = new (t.bind.apply(t, __spread([void 0], args)))();
        if (!parent || parent == this) {
            this.addSymbol(result);
        }
        else {
            parent.addSymbol(result);
        }
        return result;
    };
    SymbolTable.prototype.addNewNamespaceFromPath = function (parent, path, delimiter) {
        if (delimiter === void 0) { delimiter = "."; }
        var parts = path.split(delimiter);
        var i = 0;
        var currentParent = (parent == undefined) ? this : parent;
        while (i < parts.length - 1) {
            var namespace = currentParent.resolve(parts[i], true);
            if (namespace == undefined) {
                namespace = this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[i]);
            }
            currentParent = namespace;
            ++i;
        }
        return this.addNewSymbolOfType(NamespaceSymbol, currentParent, parts[parts.length - 1]);
    };
    SymbolTable.prototype.getAllSymbols = function (t, localOnly) {
        var e_9, _a;
        if (localOnly === void 0) { localOnly = false; }
        var type = t ? t : Symbol;
        var result = _super.prototype.getAllSymbols.call(this, type, localOnly);
        if (!localOnly) {
            try {
                for (var _b = __values(this.dependencies), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dependency = _c.value;
                    dependency.getAllSymbols(t, localOnly).forEach(result.add, result);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        return result;
    };
    SymbolTable.prototype.symbolWithContext = function (context) {
        var e_10, _a, e_11, _b, e_12, _c;
        function findRecursive(symbol) {
            var e_13, _a;
            if (symbol.context == context) {
                return symbol;
            }
            if (symbol instanceof ScopedSymbol) {
                try {
                    for (var _b = __values(symbol.children), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var child = _c.value;
                        var result = findRecursive(child);
                        if (result) {
                            return result;
                        }
                    }
                }
                catch (e_13_1) { e_13 = { error: e_13_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_13) throw e_13.error; }
                }
            }
        }
        var symbols = this.getAllSymbols(Symbol);
        try {
            for (var symbols_1 = __values(symbols), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                var symbol = symbols_1_1.value;
                var result = findRecursive(symbol);
                if (result) {
                    return result;
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (symbols_1_1 && !symbols_1_1.done && (_a = symbols_1.return)) _a.call(symbols_1);
            }
            finally { if (e_10) throw e_10.error; }
        }
        try {
            for (var _d = __values(this.dependencies), _e = _d.next(); !_e.done; _e = _d.next()) {
                var dependency = _e.value;
                symbols = dependency.getAllSymbols(Symbol);
                try {
                    for (var symbols_2 = (e_12 = void 0, __values(symbols)), symbols_2_1 = symbols_2.next(); !symbols_2_1.done; symbols_2_1 = symbols_2.next()) {
                        var symbol = symbols_2_1.value;
                        var result = findRecursive(symbol);
                        if (result) {
                            return result;
                        }
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (symbols_2_1 && !symbols_2_1.done && (_c = symbols_2.return)) _c.call(symbols_2);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
            }
            finally { if (e_11) throw e_11.error; }
        }
    };
    SymbolTable.prototype.resolve = function (name, localOnly) {
        var e_14, _a;
        if (localOnly === void 0) { localOnly = false; }
        var result = _super.prototype.resolve.call(this, name, localOnly);
        if (!result && !localOnly) {
            try {
                for (var _b = __values(this.dependencies), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dependency = _c.value;
                    result = dependency.resolve(name, false);
                    if (result)
                        break;
                }
            }
            catch (e_14_1) { e_14 = { error: e_14_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_14) throw e_14.error; }
            }
        }
        return result;
    };
    return SymbolTable;
}(ScopedSymbol));
exports.SymbolTable = SymbolTable;
;
//# sourceMappingURL=SymbolTable.js.map