import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class ExprParser extends Parser {
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
    static readonly RULE_expression = 0;
    static readonly RULE_assignment = 1;
    static readonly RULE_simpleExpression = 2;
    static readonly RULE_variableRef = 3;
    static readonly RULE_functionRef = 4;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    expression(): ExpressionContext;
    assignment(): AssignmentContext;
    simpleExpression(): SimpleExpressionContext;
    simpleExpression(_p: number): SimpleExpressionContext;
    variableRef(): VariableRefContext;
    functionRef(): FunctionRefContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private simpleExpression_sempred;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class ExpressionContext extends ParserRuleContext {
    assignment(): AssignmentContext | undefined;
    simpleExpression(): SimpleExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AssignmentContext extends ParserRuleContext {
    ID(): TerminalNode;
    EQUAL(): TerminalNode;
    simpleExpression(): SimpleExpressionContext;
    VAR(): TerminalNode | undefined;
    LET(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class SimpleExpressionContext extends ParserRuleContext {
    simpleExpression(): SimpleExpressionContext[];
    simpleExpression(i: number): SimpleExpressionContext;
    PLUS(): TerminalNode | undefined;
    MINUS(): TerminalNode | undefined;
    MULTIPLY(): TerminalNode | undefined;
    DIVIDE(): TerminalNode | undefined;
    variableRef(): VariableRefContext | undefined;
    functionRef(): FunctionRefContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class VariableRefContext extends ParserRuleContext {
    ID(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class FunctionRefContext extends ParserRuleContext {
    ID(): TerminalNode;
    OPEN_PAR(): TerminalNode;
    CLOSE_PAR(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
