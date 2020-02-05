import { ATN } from "antlr4ts/atn/ATN";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class ExprLexer extends Lexer {
    static readonly VAR = 1;
    static readonly LET = 2;
    static readonly PLUS = 3;
    static readonly MINUS = 4;
    static readonly MULTIPLY = 5;
    static readonly DIVIDE = 6;
    static readonly EQUAL = 7;
    static readonly OPEN_PAR = 8;
    static readonly CLOSE_PAR = 9;
    static readonly ID = 10;
    static readonly WS = 11;
    static readonly channelNames: string[];
    static readonly modeNames: string[];
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    constructor(input: CharStream);
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    readonly channelNames: string[];
    readonly modeNames: string[];
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
