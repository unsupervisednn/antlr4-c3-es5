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
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var ExprLexer = (function (_super) {
    __extends(ExprLexer, _super);
    function ExprLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(ExprLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(ExprLexer.prototype, "vocabulary", {
        get: function () {
            return ExprLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "grammarFileName", {
        get: function () { return "Expr.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "ruleNames", {
        get: function () { return ExprLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "serializedATN", {
        get: function () { return ExprLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "channelNames", {
        get: function () { return ExprLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprLexer.prototype, "modeNames", {
        get: function () { return ExprLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExprLexer, "_ATN", {
        get: function () {
            if (!ExprLexer.__ATN) {
                ExprLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(ExprLexer._serializedATN));
            }
            return ExprLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    ExprLexer.VAR = 1;
    ExprLexer.LET = 2;
    ExprLexer.PLUS = 3;
    ExprLexer.MINUS = 4;
    ExprLexer.MULTIPLY = 5;
    ExprLexer.DIVIDE = 6;
    ExprLexer.EQUAL = 7;
    ExprLexer.OPEN_PAR = 8;
    ExprLexer.CLOSE_PAR = 9;
    ExprLexer.ID = 10;
    ExprLexer.WS = 11;
    ExprLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    ExprLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    ExprLexer.ruleNames = [
        "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL", "OPEN_PAR",
        "CLOSE_PAR", "ID", "WS",
    ];
    ExprLexer._LITERAL_NAMES = [
        undefined, undefined, undefined, "'+'", "'-'", "'*'", "'/'", "'='", "'('",
        "')'",
    ];
    ExprLexer._SYMBOLIC_NAMES = [
        undefined, "VAR", "LET", "PLUS", "MINUS", "MULTIPLY", "DIVIDE", "EQUAL",
        "OPEN_PAR", "CLOSE_PAR", "ID", "WS",
    ];
    ExprLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(ExprLexer._LITERAL_NAMES, ExprLexer._SYMBOLIC_NAMES, []);
    ExprLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r:\b\x01\x04" +
        "\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
        "\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x03" +
        "\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
        "\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03" +
        "\n\x03\n\x03\v\x03\v\x07\v2\n\v\f\v\x0E\v5\v\v\x03\f\x03\f\x03\f\x03\f" +
        "\x02\x02\x02\r\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07" +
        "\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x03\x02\v\x04" +
        "\x02XXxx\x04\x02CCcc\x04\x02TTtt\x04\x02NNnn\x04\x02GGgg\x04\x02VVvv\x04" +
        "\x02C\\c|\x06\x022;C\\aac|\x05\x02\v\f\x0F\x0F\"\"\x02:\x02\x03\x03\x02" +
        "\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02" +
        "\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02" +
        "\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02" +
        "\x02\x02\x17\x03\x02\x02\x02\x03\x19\x03\x02\x02\x02\x05\x1D\x03\x02\x02" +
        "\x02\x07!\x03\x02\x02\x02\t#\x03\x02\x02\x02\v%\x03\x02\x02\x02\r\'\x03" +
        "\x02\x02\x02\x0F)\x03\x02\x02\x02\x11+\x03\x02\x02\x02\x13-\x03\x02\x02" +
        "\x02\x15/\x03\x02\x02\x02\x176\x03\x02\x02\x02\x19\x1A\t\x02\x02\x02\x1A" +
        "\x1B\t\x03\x02\x02\x1B\x1C\t\x04\x02\x02\x1C\x04\x03\x02\x02\x02\x1D\x1E" +
        "\t\x05\x02\x02\x1E\x1F\t\x06\x02\x02\x1F \t\x07\x02\x02 \x06\x03\x02\x02" +
        "\x02!\"\x07-\x02\x02\"\b\x03\x02\x02\x02#$\x07/\x02\x02$\n\x03\x02\x02" +
        "\x02%&\x07,\x02\x02&\f\x03\x02\x02\x02\'(\x071\x02\x02(\x0E\x03\x02\x02" +
        "\x02)*\x07?\x02\x02*\x10\x03\x02\x02\x02+,\x07*\x02\x02,\x12\x03\x02\x02" +
        "\x02-.\x07+\x02\x02.\x14\x03\x02\x02\x02/3\t\b\x02\x0202\t\t\x02\x021" +
        "0\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x02" +
        "4\x16\x03\x02\x02\x0253\x03\x02\x02\x0267\t\n\x02\x0278\x03\x02\x02\x02" +
        "89\b\f\x02\x029\x18\x03\x02\x02\x02\x04\x023\x03\x02\x03\x02";
    return ExprLexer;
}(Lexer_1.Lexer));
exports.ExprLexer = ExprLexer;
//# sourceMappingURL=ExprLexer.js.map