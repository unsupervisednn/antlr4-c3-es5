import { ANTLRErrorListener, Token, Recognizer, RecognitionException, CommonToken } from 'antlr4ts';
export declare class ErrorListener implements ANTLRErrorListener<CommonToken> {
    errorCount: number;
    syntaxError<T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, e: RecognitionException | undefined): void;
}
