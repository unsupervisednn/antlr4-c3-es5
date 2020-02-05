import { ATN } from "antlr4ts/atn/ATN";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { RuleContext } from "antlr4ts/RuleContext";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
export declare class CPP14Parser extends Parser {
    static readonly MultiLineMacro = 1;
    static readonly Directive = 2;
    static readonly Alignas = 3;
    static readonly Alignof = 4;
    static readonly Asm = 5;
    static readonly Auto = 6;
    static readonly Bool = 7;
    static readonly Break = 8;
    static readonly Case = 9;
    static readonly Catch = 10;
    static readonly Char = 11;
    static readonly Char16 = 12;
    static readonly Char32 = 13;
    static readonly Class = 14;
    static readonly Const = 15;
    static readonly Constexpr = 16;
    static readonly Const_cast = 17;
    static readonly Continue = 18;
    static readonly Decltype = 19;
    static readonly Default = 20;
    static readonly Delete = 21;
    static readonly Do = 22;
    static readonly Double = 23;
    static readonly Dynamic_cast = 24;
    static readonly Else = 25;
    static readonly Enum = 26;
    static readonly Explicit = 27;
    static readonly Export = 28;
    static readonly Extern = 29;
    static readonly False = 30;
    static readonly Final = 31;
    static readonly Float = 32;
    static readonly For = 33;
    static readonly Friend = 34;
    static readonly Goto = 35;
    static readonly If = 36;
    static readonly Inline = 37;
    static readonly Int = 38;
    static readonly Long = 39;
    static readonly Mutable = 40;
    static readonly Namespace = 41;
    static readonly New = 42;
    static readonly Noexcept = 43;
    static readonly Nullptr = 44;
    static readonly Operator = 45;
    static readonly Override = 46;
    static readonly Private = 47;
    static readonly Protected = 48;
    static readonly Public = 49;
    static readonly Register = 50;
    static readonly Reinterpret_cast = 51;
    static readonly Return = 52;
    static readonly Short = 53;
    static readonly Signed = 54;
    static readonly Sizeof = 55;
    static readonly Static = 56;
    static readonly Static_assert = 57;
    static readonly Static_cast = 58;
    static readonly Struct = 59;
    static readonly Switch = 60;
    static readonly Template = 61;
    static readonly This = 62;
    static readonly Thread_local = 63;
    static readonly Throw = 64;
    static readonly True = 65;
    static readonly Try = 66;
    static readonly Typedef = 67;
    static readonly Typeid = 68;
    static readonly Typename = 69;
    static readonly Union = 70;
    static readonly Unsigned = 71;
    static readonly Using = 72;
    static readonly Virtual = 73;
    static readonly Void = 74;
    static readonly Volatile = 75;
    static readonly Wchar = 76;
    static readonly While = 77;
    static readonly LeftParen = 78;
    static readonly RightParen = 79;
    static readonly LeftBracket = 80;
    static readonly RightBracket = 81;
    static readonly LeftBrace = 82;
    static readonly RightBrace = 83;
    static readonly Plus = 84;
    static readonly Minus = 85;
    static readonly Star = 86;
    static readonly Div = 87;
    static readonly Mod = 88;
    static readonly Caret = 89;
    static readonly And = 90;
    static readonly Or = 91;
    static readonly Tilde = 92;
    static readonly Not = 93;
    static readonly Assign = 94;
    static readonly Less = 95;
    static readonly Greater = 96;
    static readonly PlusAssign = 97;
    static readonly MinusAssign = 98;
    static readonly StarAssign = 99;
    static readonly DivAssign = 100;
    static readonly ModAssign = 101;
    static readonly XorAssign = 102;
    static readonly AndAssign = 103;
    static readonly OrAssign = 104;
    static readonly LeftShift = 105;
    static readonly LeftShiftAssign = 106;
    static readonly Equal = 107;
    static readonly NotEqual = 108;
    static readonly LessEqual = 109;
    static readonly GreaterEqual = 110;
    static readonly AndAnd = 111;
    static readonly OrOr = 112;
    static readonly PlusPlus = 113;
    static readonly MinusMinus = 114;
    static readonly Comma = 115;
    static readonly ArrowStar = 116;
    static readonly Arrow = 117;
    static readonly Question = 118;
    static readonly Colon = 119;
    static readonly Doublecolon = 120;
    static readonly Semi = 121;
    static readonly Dot = 122;
    static readonly DotStar = 123;
    static readonly Ellipsis = 124;
    static readonly Identifier = 125;
    static readonly Integerliteral = 126;
    static readonly Decimalliteral = 127;
    static readonly Octalliteral = 128;
    static readonly Hexadecimalliteral = 129;
    static readonly Binaryliteral = 130;
    static readonly Integersuffix = 131;
    static readonly Characterliteral = 132;
    static readonly Floatingliteral = 133;
    static readonly Stringliteral = 134;
    static readonly Userdefinedintegerliteral = 135;
    static readonly Userdefinedfloatingliteral = 136;
    static readonly Userdefinedstringliteral = 137;
    static readonly Userdefinedcharacterliteral = 138;
    static readonly Whitespace = 139;
    static readonly Newline = 140;
    static readonly BlockComment = 141;
    static readonly LineComment = 142;
    static readonly RULE_translationunit = 0;
    static readonly RULE_primaryexpression = 1;
    static readonly RULE_idexpression = 2;
    static readonly RULE_unqualifiedid = 3;
    static readonly RULE_qualifiedid = 4;
    static readonly RULE_nestednamespecifier = 5;
    static readonly RULE_lambdaexpression = 6;
    static readonly RULE_lambdaintroducer = 7;
    static readonly RULE_lambdacapture = 8;
    static readonly RULE_capturedefault = 9;
    static readonly RULE_capturelist = 10;
    static readonly RULE_capture = 11;
    static readonly RULE_simplecapture = 12;
    static readonly RULE_initcapture = 13;
    static readonly RULE_lambdadeclarator = 14;
    static readonly RULE_postfixexpression = 15;
    static readonly RULE_expressionlist = 16;
    static readonly RULE_pseudodestructorname = 17;
    static readonly RULE_unaryexpression = 18;
    static readonly RULE_unaryoperator = 19;
    static readonly RULE_newexpression = 20;
    static readonly RULE_newplacement = 21;
    static readonly RULE_newtypeid = 22;
    static readonly RULE_newdeclarator = 23;
    static readonly RULE_noptrnewdeclarator = 24;
    static readonly RULE_newinitializer = 25;
    static readonly RULE_deleteexpression = 26;
    static readonly RULE_noexceptexpression = 27;
    static readonly RULE_castexpression = 28;
    static readonly RULE_pmexpression = 29;
    static readonly RULE_multiplicativeexpression = 30;
    static readonly RULE_additiveexpression = 31;
    static readonly RULE_shiftexpression = 32;
    static readonly RULE_relationalexpression = 33;
    static readonly RULE_equalityexpression = 34;
    static readonly RULE_andexpression = 35;
    static readonly RULE_exclusiveorexpression = 36;
    static readonly RULE_inclusiveorexpression = 37;
    static readonly RULE_logicalandexpression = 38;
    static readonly RULE_logicalorexpression = 39;
    static readonly RULE_conditionalexpression = 40;
    static readonly RULE_assignmentexpression = 41;
    static readonly RULE_assignmentoperator = 42;
    static readonly RULE_expression = 43;
    static readonly RULE_constantexpression = 44;
    static readonly RULE_statement = 45;
    static readonly RULE_labeledstatement = 46;
    static readonly RULE_expressionstatement = 47;
    static readonly RULE_compoundstatement = 48;
    static readonly RULE_statementseq = 49;
    static readonly RULE_selectionstatement = 50;
    static readonly RULE_condition = 51;
    static readonly RULE_iterationstatement = 52;
    static readonly RULE_forinitstatement = 53;
    static readonly RULE_forrangedeclaration = 54;
    static readonly RULE_forrangeinitializer = 55;
    static readonly RULE_jumpstatement = 56;
    static readonly RULE_declarationstatement = 57;
    static readonly RULE_declarationseq = 58;
    static readonly RULE_declaration = 59;
    static readonly RULE_blockdeclaration = 60;
    static readonly RULE_aliasdeclaration = 61;
    static readonly RULE_simpledeclaration = 62;
    static readonly RULE_static_assertdeclaration = 63;
    static readonly RULE_emptydeclaration = 64;
    static readonly RULE_attributedeclaration = 65;
    static readonly RULE_declspecifier = 66;
    static readonly RULE_declspecifierseq = 67;
    static readonly RULE_storageclassspecifier = 68;
    static readonly RULE_functionspecifier = 69;
    static readonly RULE_typedefname = 70;
    static readonly RULE_typespecifier = 71;
    static readonly RULE_trailingtypespecifier = 72;
    static readonly RULE_typespecifierseq = 73;
    static readonly RULE_trailingtypespecifierseq = 74;
    static readonly RULE_simpletypespecifier = 75;
    static readonly RULE_typename = 76;
    static readonly RULE_decltypespecifier = 77;
    static readonly RULE_elaboratedtypespecifier = 78;
    static readonly RULE_enumname = 79;
    static readonly RULE_enumspecifier = 80;
    static readonly RULE_enumhead = 81;
    static readonly RULE_opaqueenumdeclaration = 82;
    static readonly RULE_enumkey = 83;
    static readonly RULE_enumbase = 84;
    static readonly RULE_enumeratorlist = 85;
    static readonly RULE_enumeratordefinition = 86;
    static readonly RULE_enumerator = 87;
    static readonly RULE_namespacename = 88;
    static readonly RULE_originalnamespacename = 89;
    static readonly RULE_namespacedefinition = 90;
    static readonly RULE_namednamespacedefinition = 91;
    static readonly RULE_originalnamespacedefinition = 92;
    static readonly RULE_extensionnamespacedefinition = 93;
    static readonly RULE_unnamednamespacedefinition = 94;
    static readonly RULE_namespacebody = 95;
    static readonly RULE_namespacealias = 96;
    static readonly RULE_namespacealiasdefinition = 97;
    static readonly RULE_qualifiednamespacespecifier = 98;
    static readonly RULE_usingdeclaration = 99;
    static readonly RULE_usingdirective = 100;
    static readonly RULE_asmdefinition = 101;
    static readonly RULE_linkagespecification = 102;
    static readonly RULE_attributespecifierseq = 103;
    static readonly RULE_attributespecifier = 104;
    static readonly RULE_alignmentspecifier = 105;
    static readonly RULE_attributelist = 106;
    static readonly RULE_attribute = 107;
    static readonly RULE_attributetoken = 108;
    static readonly RULE_attributescopedtoken = 109;
    static readonly RULE_attributenamespace = 110;
    static readonly RULE_attributeargumentclause = 111;
    static readonly RULE_balancedtokenseq = 112;
    static readonly RULE_balancedtoken = 113;
    static readonly RULE_initdeclaratorlist = 114;
    static readonly RULE_initdeclarator = 115;
    static readonly RULE_declarator = 116;
    static readonly RULE_ptrdeclarator = 117;
    static readonly RULE_noptrdeclarator = 118;
    static readonly RULE_parametersandqualifiers = 119;
    static readonly RULE_trailingreturntype = 120;
    static readonly RULE_ptroperator = 121;
    static readonly RULE_cvqualifierseq = 122;
    static readonly RULE_cvqualifier = 123;
    static readonly RULE_refqualifier = 124;
    static readonly RULE_declaratorid = 125;
    static readonly RULE_typeid = 126;
    static readonly RULE_abstractdeclarator = 127;
    static readonly RULE_ptrabstractdeclarator = 128;
    static readonly RULE_noptrabstractdeclarator = 129;
    static readonly RULE_abstractpackdeclarator = 130;
    static readonly RULE_noptrabstractpackdeclarator = 131;
    static readonly RULE_parameterdeclarationclause = 132;
    static readonly RULE_parameterdeclarationlist = 133;
    static readonly RULE_parameterdeclaration = 134;
    static readonly RULE_functiondefinition = 135;
    static readonly RULE_functionbody = 136;
    static readonly RULE_initializer = 137;
    static readonly RULE_braceorequalinitializer = 138;
    static readonly RULE_initializerclause = 139;
    static readonly RULE_initializerlist = 140;
    static readonly RULE_bracedinitlist = 141;
    static readonly RULE_classname = 142;
    static readonly RULE_classspecifier = 143;
    static readonly RULE_classhead = 144;
    static readonly RULE_classheadname = 145;
    static readonly RULE_classvirtspecifier = 146;
    static readonly RULE_classkey = 147;
    static readonly RULE_memberspecification = 148;
    static readonly RULE_memberdeclaration = 149;
    static readonly RULE_memberdeclaratorlist = 150;
    static readonly RULE_memberdeclarator = 151;
    static readonly RULE_virtspecifierseq = 152;
    static readonly RULE_virtspecifier = 153;
    static readonly RULE_purespecifier = 154;
    static readonly RULE_baseclause = 155;
    static readonly RULE_basespecifierlist = 156;
    static readonly RULE_basespecifier = 157;
    static readonly RULE_classordecltype = 158;
    static readonly RULE_basetypespecifier = 159;
    static readonly RULE_accessspecifier = 160;
    static readonly RULE_conversionfunctionid = 161;
    static readonly RULE_conversiontypeid = 162;
    static readonly RULE_conversiondeclarator = 163;
    static readonly RULE_ctorinitializer = 164;
    static readonly RULE_meminitializerlist = 165;
    static readonly RULE_meminitializer = 166;
    static readonly RULE_meminitializerid = 167;
    static readonly RULE_operatorfunctionid = 168;
    static readonly RULE_literaloperatorid = 169;
    static readonly RULE_templatedeclaration = 170;
    static readonly RULE_templateparameterlist = 171;
    static readonly RULE_templateparameter = 172;
    static readonly RULE_typeparameter = 173;
    static readonly RULE_simpletemplateid = 174;
    static readonly RULE_templateid = 175;
    static readonly RULE_templatename = 176;
    static readonly RULE_templateargumentlist = 177;
    static readonly RULE_templateargument = 178;
    static readonly RULE_typenamespecifier = 179;
    static readonly RULE_explicitinstantiation = 180;
    static readonly RULE_explicitspecialization = 181;
    static readonly RULE_tryblock = 182;
    static readonly RULE_functiontryblock = 183;
    static readonly RULE_handlerseq = 184;
    static readonly RULE_handler = 185;
    static readonly RULE_exceptiondeclaration = 186;
    static readonly RULE_throwexpression = 187;
    static readonly RULE_exceptionspecification = 188;
    static readonly RULE_dynamicexceptionspecification = 189;
    static readonly RULE_typeidlist = 190;
    static readonly RULE_noexceptspecification = 191;
    static readonly RULE_rightShift = 192;
    static readonly RULE_rightShiftAssign = 193;
    static readonly RULE_operator = 194;
    static readonly RULE_literal = 195;
    static readonly RULE_booleanliteral = 196;
    static readonly RULE_pointerliteral = 197;
    static readonly RULE_userdefinedliteral = 198;
    static readonly ruleNames: string[];
    private static readonly _LITERAL_NAMES;
    private static readonly _SYMBOLIC_NAMES;
    static readonly VOCABULARY: Vocabulary;
    readonly vocabulary: Vocabulary;
    readonly grammarFileName: string;
    readonly ruleNames: string[];
    readonly serializedATN: string;
    constructor(input: TokenStream);
    translationunit(): TranslationunitContext;
    primaryexpression(): PrimaryexpressionContext;
    idexpression(): IdexpressionContext;
    unqualifiedid(): UnqualifiedidContext;
    qualifiedid(): QualifiedidContext;
    nestednamespecifier(): NestednamespecifierContext;
    nestednamespecifier(_p: number): NestednamespecifierContext;
    lambdaexpression(): LambdaexpressionContext;
    lambdaintroducer(): LambdaintroducerContext;
    lambdacapture(): LambdacaptureContext;
    capturedefault(): CapturedefaultContext;
    capturelist(): CapturelistContext;
    capturelist(_p: number): CapturelistContext;
    capture(): CaptureContext;
    simplecapture(): SimplecaptureContext;
    initcapture(): InitcaptureContext;
    lambdadeclarator(): LambdadeclaratorContext;
    postfixexpression(): PostfixexpressionContext;
    postfixexpression(_p: number): PostfixexpressionContext;
    expressionlist(): ExpressionlistContext;
    pseudodestructorname(): PseudodestructornameContext;
    unaryexpression(): UnaryexpressionContext;
    unaryoperator(): UnaryoperatorContext;
    newexpression(): NewexpressionContext;
    newplacement(): NewplacementContext;
    newtypeid(): NewtypeidContext;
    newdeclarator(): NewdeclaratorContext;
    noptrnewdeclarator(): NoptrnewdeclaratorContext;
    noptrnewdeclarator(_p: number): NoptrnewdeclaratorContext;
    newinitializer(): NewinitializerContext;
    deleteexpression(): DeleteexpressionContext;
    noexceptexpression(): NoexceptexpressionContext;
    castexpression(): CastexpressionContext;
    pmexpression(): PmexpressionContext;
    pmexpression(_p: number): PmexpressionContext;
    multiplicativeexpression(): MultiplicativeexpressionContext;
    multiplicativeexpression(_p: number): MultiplicativeexpressionContext;
    additiveexpression(): AdditiveexpressionContext;
    additiveexpression(_p: number): AdditiveexpressionContext;
    shiftexpression(): ShiftexpressionContext;
    shiftexpression(_p: number): ShiftexpressionContext;
    relationalexpression(): RelationalexpressionContext;
    relationalexpression(_p: number): RelationalexpressionContext;
    equalityexpression(): EqualityexpressionContext;
    equalityexpression(_p: number): EqualityexpressionContext;
    andexpression(): AndexpressionContext;
    andexpression(_p: number): AndexpressionContext;
    exclusiveorexpression(): ExclusiveorexpressionContext;
    exclusiveorexpression(_p: number): ExclusiveorexpressionContext;
    inclusiveorexpression(): InclusiveorexpressionContext;
    inclusiveorexpression(_p: number): InclusiveorexpressionContext;
    logicalandexpression(): LogicalandexpressionContext;
    logicalandexpression(_p: number): LogicalandexpressionContext;
    logicalorexpression(): LogicalorexpressionContext;
    logicalorexpression(_p: number): LogicalorexpressionContext;
    conditionalexpression(): ConditionalexpressionContext;
    assignmentexpression(): AssignmentexpressionContext;
    assignmentoperator(): AssignmentoperatorContext;
    expression(): ExpressionContext;
    expression(_p: number): ExpressionContext;
    constantexpression(): ConstantexpressionContext;
    statement(): StatementContext;
    labeledstatement(): LabeledstatementContext;
    expressionstatement(): ExpressionstatementContext;
    compoundstatement(): CompoundstatementContext;
    statementseq(): StatementseqContext;
    statementseq(_p: number): StatementseqContext;
    selectionstatement(): SelectionstatementContext;
    condition(): ConditionContext;
    iterationstatement(): IterationstatementContext;
    forinitstatement(): ForinitstatementContext;
    forrangedeclaration(): ForrangedeclarationContext;
    forrangeinitializer(): ForrangeinitializerContext;
    jumpstatement(): JumpstatementContext;
    declarationstatement(): DeclarationstatementContext;
    declarationseq(): DeclarationseqContext;
    declarationseq(_p: number): DeclarationseqContext;
    declaration(): DeclarationContext;
    blockdeclaration(): BlockdeclarationContext;
    aliasdeclaration(): AliasdeclarationContext;
    simpledeclaration(): SimpledeclarationContext;
    static_assertdeclaration(): Static_assertdeclarationContext;
    emptydeclaration(): EmptydeclarationContext;
    attributedeclaration(): AttributedeclarationContext;
    declspecifier(): DeclspecifierContext;
    declspecifierseq(): DeclspecifierseqContext;
    storageclassspecifier(): StorageclassspecifierContext;
    functionspecifier(): FunctionspecifierContext;
    typedefname(): TypedefnameContext;
    typespecifier(): TypespecifierContext;
    trailingtypespecifier(): TrailingtypespecifierContext;
    typespecifierseq(): TypespecifierseqContext;
    trailingtypespecifierseq(): TrailingtypespecifierseqContext;
    simpletypespecifier(): SimpletypespecifierContext;
    typename(): TypenameContext;
    decltypespecifier(): DecltypespecifierContext;
    elaboratedtypespecifier(): ElaboratedtypespecifierContext;
    enumname(): EnumnameContext;
    enumspecifier(): EnumspecifierContext;
    enumhead(): EnumheadContext;
    opaqueenumdeclaration(): OpaqueenumdeclarationContext;
    enumkey(): EnumkeyContext;
    enumbase(): EnumbaseContext;
    enumeratorlist(): EnumeratorlistContext;
    enumeratorlist(_p: number): EnumeratorlistContext;
    enumeratordefinition(): EnumeratordefinitionContext;
    enumerator(): EnumeratorContext;
    namespacename(): NamespacenameContext;
    originalnamespacename(): OriginalnamespacenameContext;
    namespacedefinition(): NamespacedefinitionContext;
    namednamespacedefinition(): NamednamespacedefinitionContext;
    originalnamespacedefinition(): OriginalnamespacedefinitionContext;
    extensionnamespacedefinition(): ExtensionnamespacedefinitionContext;
    unnamednamespacedefinition(): UnnamednamespacedefinitionContext;
    namespacebody(): NamespacebodyContext;
    namespacealias(): NamespacealiasContext;
    namespacealiasdefinition(): NamespacealiasdefinitionContext;
    qualifiednamespacespecifier(): QualifiednamespacespecifierContext;
    usingdeclaration(): UsingdeclarationContext;
    usingdirective(): UsingdirectiveContext;
    asmdefinition(): AsmdefinitionContext;
    linkagespecification(): LinkagespecificationContext;
    attributespecifierseq(): AttributespecifierseqContext;
    attributespecifierseq(_p: number): AttributespecifierseqContext;
    attributespecifier(): AttributespecifierContext;
    alignmentspecifier(): AlignmentspecifierContext;
    attributelist(): AttributelistContext;
    attributelist(_p: number): AttributelistContext;
    attribute(): AttributeContext;
    attributetoken(): AttributetokenContext;
    attributescopedtoken(): AttributescopedtokenContext;
    attributenamespace(): AttributenamespaceContext;
    attributeargumentclause(): AttributeargumentclauseContext;
    balancedtokenseq(): BalancedtokenseqContext;
    balancedtokenseq(_p: number): BalancedtokenseqContext;
    balancedtoken(): BalancedtokenContext;
    initdeclaratorlist(): InitdeclaratorlistContext;
    initdeclaratorlist(_p: number): InitdeclaratorlistContext;
    initdeclarator(): InitdeclaratorContext;
    declarator(): DeclaratorContext;
    ptrdeclarator(): PtrdeclaratorContext;
    noptrdeclarator(): NoptrdeclaratorContext;
    noptrdeclarator(_p: number): NoptrdeclaratorContext;
    parametersandqualifiers(): ParametersandqualifiersContext;
    trailingreturntype(): TrailingreturntypeContext;
    ptroperator(): PtroperatorContext;
    cvqualifierseq(): CvqualifierseqContext;
    cvqualifier(): CvqualifierContext;
    refqualifier(): RefqualifierContext;
    declaratorid(): DeclaratoridContext;
    typeid(): TypeidContext;
    abstractdeclarator(): AbstractdeclaratorContext;
    ptrabstractdeclarator(): PtrabstractdeclaratorContext;
    noptrabstractdeclarator(): NoptrabstractdeclaratorContext;
    noptrabstractdeclarator(_p: number): NoptrabstractdeclaratorContext;
    abstractpackdeclarator(): AbstractpackdeclaratorContext;
    noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext;
    noptrabstractpackdeclarator(_p: number): NoptrabstractpackdeclaratorContext;
    parameterdeclarationclause(): ParameterdeclarationclauseContext;
    parameterdeclarationlist(): ParameterdeclarationlistContext;
    parameterdeclarationlist(_p: number): ParameterdeclarationlistContext;
    parameterdeclaration(): ParameterdeclarationContext;
    functiondefinition(): FunctiondefinitionContext;
    functionbody(): FunctionbodyContext;
    initializer(): InitializerContext;
    braceorequalinitializer(): BraceorequalinitializerContext;
    initializerclause(): InitializerclauseContext;
    initializerlist(): InitializerlistContext;
    initializerlist(_p: number): InitializerlistContext;
    bracedinitlist(): BracedinitlistContext;
    classname(): ClassnameContext;
    classspecifier(): ClassspecifierContext;
    classhead(): ClassheadContext;
    classheadname(): ClassheadnameContext;
    classvirtspecifier(): ClassvirtspecifierContext;
    classkey(): ClasskeyContext;
    memberspecification(): MemberspecificationContext;
    memberdeclaration(): MemberdeclarationContext;
    memberdeclaratorlist(): MemberdeclaratorlistContext;
    memberdeclaratorlist(_p: number): MemberdeclaratorlistContext;
    memberdeclarator(): MemberdeclaratorContext;
    virtspecifierseq(): VirtspecifierseqContext;
    virtspecifierseq(_p: number): VirtspecifierseqContext;
    virtspecifier(): VirtspecifierContext;
    purespecifier(): PurespecifierContext;
    baseclause(): BaseclauseContext;
    basespecifierlist(): BasespecifierlistContext;
    basespecifierlist(_p: number): BasespecifierlistContext;
    basespecifier(): BasespecifierContext;
    classordecltype(): ClassordecltypeContext;
    basetypespecifier(): BasetypespecifierContext;
    accessspecifier(): AccessspecifierContext;
    conversionfunctionid(): ConversionfunctionidContext;
    conversiontypeid(): ConversiontypeidContext;
    conversiondeclarator(): ConversiondeclaratorContext;
    ctorinitializer(): CtorinitializerContext;
    meminitializerlist(): MeminitializerlistContext;
    meminitializer(): MeminitializerContext;
    meminitializerid(): MeminitializeridContext;
    operatorfunctionid(): OperatorfunctionidContext;
    literaloperatorid(): LiteraloperatoridContext;
    templatedeclaration(): TemplatedeclarationContext;
    templateparameterlist(): TemplateparameterlistContext;
    templateparameterlist(_p: number): TemplateparameterlistContext;
    templateparameter(): TemplateparameterContext;
    typeparameter(): TypeparameterContext;
    simpletemplateid(): SimpletemplateidContext;
    templateid(): TemplateidContext;
    templatename(): TemplatenameContext;
    templateargumentlist(): TemplateargumentlistContext;
    templateargumentlist(_p: number): TemplateargumentlistContext;
    templateargument(): TemplateargumentContext;
    typenamespecifier(): TypenamespecifierContext;
    explicitinstantiation(): ExplicitinstantiationContext;
    explicitspecialization(): ExplicitspecializationContext;
    tryblock(): TryblockContext;
    functiontryblock(): FunctiontryblockContext;
    handlerseq(): HandlerseqContext;
    handler(): HandlerContext;
    exceptiondeclaration(): ExceptiondeclarationContext;
    throwexpression(): ThrowexpressionContext;
    exceptionspecification(): ExceptionspecificationContext;
    dynamicexceptionspecification(): DynamicexceptionspecificationContext;
    typeidlist(): TypeidlistContext;
    typeidlist(_p: number): TypeidlistContext;
    noexceptspecification(): NoexceptspecificationContext;
    rightShift(): RightShiftContext;
    rightShiftAssign(): RightShiftAssignContext;
    operator(): OperatorContext;
    literal(): LiteralContext;
    booleanliteral(): BooleanliteralContext;
    pointerliteral(): PointerliteralContext;
    userdefinedliteral(): UserdefinedliteralContext;
    sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean;
    private nestednamespecifier_sempred;
    private capturelist_sempred;
    private postfixexpression_sempred;
    private noptrnewdeclarator_sempred;
    private pmexpression_sempred;
    private multiplicativeexpression_sempred;
    private additiveexpression_sempred;
    private shiftexpression_sempred;
    private relationalexpression_sempred;
    private equalityexpression_sempred;
    private andexpression_sempred;
    private exclusiveorexpression_sempred;
    private inclusiveorexpression_sempred;
    private logicalandexpression_sempred;
    private logicalorexpression_sempred;
    private expression_sempred;
    private statementseq_sempred;
    private declarationseq_sempred;
    private enumeratorlist_sempred;
    private attributespecifierseq_sempred;
    private attributelist_sempred;
    private balancedtokenseq_sempred;
    private initdeclaratorlist_sempred;
    private noptrdeclarator_sempred;
    private noptrabstractdeclarator_sempred;
    private noptrabstractpackdeclarator_sempred;
    private parameterdeclarationlist_sempred;
    private initializerlist_sempred;
    private memberdeclaratorlist_sempred;
    private virtspecifierseq_sempred;
    private basespecifierlist_sempred;
    private templateparameterlist_sempred;
    private templateargumentlist_sempred;
    private typeidlist_sempred;
    private static readonly _serializedATNSegments;
    private static readonly _serializedATNSegment0;
    private static readonly _serializedATNSegment1;
    private static readonly _serializedATNSegment2;
    private static readonly _serializedATNSegment3;
    private static readonly _serializedATNSegment4;
    static readonly _serializedATN: string;
    static __ATN: ATN;
    static readonly _ATN: ATN;
}
export declare class TranslationunitContext extends ParserRuleContext {
    EOF(): TerminalNode;
    declarationseq(): DeclarationseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PrimaryexpressionContext extends ParserRuleContext {
    literal(): LiteralContext | undefined;
    This(): TerminalNode | undefined;
    LeftParen(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RightParen(): TerminalNode | undefined;
    idexpression(): IdexpressionContext | undefined;
    lambdaexpression(): LambdaexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class IdexpressionContext extends ParserRuleContext {
    unqualifiedid(): UnqualifiedidContext | undefined;
    qualifiedid(): QualifiedidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class UnqualifiedidContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    operatorfunctionid(): OperatorfunctionidContext | undefined;
    conversionfunctionid(): ConversionfunctionidContext | undefined;
    literaloperatorid(): LiteraloperatoridContext | undefined;
    Tilde(): TerminalNode | undefined;
    classname(): ClassnameContext | undefined;
    decltypespecifier(): DecltypespecifierContext | undefined;
    templateid(): TemplateidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class QualifiedidContext extends ParserRuleContext {
    nestednamespecifier(): NestednamespecifierContext;
    unqualifiedid(): UnqualifiedidContext;
    Template(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NestednamespecifierContext extends ParserRuleContext {
    Doublecolon(): TerminalNode;
    typename(): TypenameContext | undefined;
    namespacename(): NamespacenameContext | undefined;
    decltypespecifier(): DecltypespecifierContext | undefined;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    Identifier(): TerminalNode | undefined;
    simpletemplateid(): SimpletemplateidContext | undefined;
    Template(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LambdaexpressionContext extends ParserRuleContext {
    lambdaintroducer(): LambdaintroducerContext;
    compoundstatement(): CompoundstatementContext;
    lambdadeclarator(): LambdadeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LambdaintroducerContext extends ParserRuleContext {
    LeftBracket(): TerminalNode;
    RightBracket(): TerminalNode;
    lambdacapture(): LambdacaptureContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LambdacaptureContext extends ParserRuleContext {
    capturedefault(): CapturedefaultContext | undefined;
    capturelist(): CapturelistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CapturedefaultContext extends ParserRuleContext {
    And(): TerminalNode | undefined;
    Assign(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CapturelistContext extends ParserRuleContext {
    capture(): CaptureContext;
    Ellipsis(): TerminalNode | undefined;
    capturelist(): CapturelistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CaptureContext extends ParserRuleContext {
    simplecapture(): SimplecaptureContext | undefined;
    initcapture(): InitcaptureContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class SimplecaptureContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    And(): TerminalNode | undefined;
    This(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class InitcaptureContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    initializer(): InitializerContext;
    And(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LambdadeclaratorContext extends ParserRuleContext {
    LeftParen(): TerminalNode;
    parameterdeclarationclause(): ParameterdeclarationclauseContext;
    RightParen(): TerminalNode;
    Mutable(): TerminalNode | undefined;
    exceptionspecification(): ExceptionspecificationContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    trailingreturntype(): TrailingreturntypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PostfixexpressionContext extends ParserRuleContext {
    primaryexpression(): PrimaryexpressionContext | undefined;
    postfixexpression(): PostfixexpressionContext | undefined;
    LeftBracket(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    RightBracket(): TerminalNode | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    LeftParen(): TerminalNode | undefined;
    RightParen(): TerminalNode | undefined;
    expressionlist(): ExpressionlistContext | undefined;
    simpletypespecifier(): SimpletypespecifierContext | undefined;
    typenamespecifier(): TypenamespecifierContext | undefined;
    Dot(): TerminalNode | undefined;
    idexpression(): IdexpressionContext | undefined;
    Template(): TerminalNode | undefined;
    Arrow(): TerminalNode | undefined;
    pseudodestructorname(): PseudodestructornameContext | undefined;
    PlusPlus(): TerminalNode | undefined;
    MinusMinus(): TerminalNode | undefined;
    Dynamic_cast(): TerminalNode | undefined;
    Less(): TerminalNode | undefined;
    typeid(): TypeidContext | undefined;
    Greater(): TerminalNode | undefined;
    Static_cast(): TerminalNode | undefined;
    Reinterpret_cast(): TerminalNode | undefined;
    Const_cast(): TerminalNode | undefined;
    Typeid(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExpressionlistContext extends ParserRuleContext {
    initializerlist(): InitializerlistContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PseudodestructornameContext extends ParserRuleContext {
    typename(): TypenameContext[];
    typename(i: number): TypenameContext;
    Doublecolon(): TerminalNode | undefined;
    Tilde(): TerminalNode;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    Template(): TerminalNode | undefined;
    simpletemplateid(): SimpletemplateidContext | undefined;
    decltypespecifier(): DecltypespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class UnaryexpressionContext extends ParserRuleContext {
    postfixexpression(): PostfixexpressionContext | undefined;
    PlusPlus(): TerminalNode | undefined;
    castexpression(): CastexpressionContext | undefined;
    MinusMinus(): TerminalNode | undefined;
    unaryoperator(): UnaryoperatorContext | undefined;
    Sizeof(): TerminalNode | undefined;
    unaryexpression(): UnaryexpressionContext | undefined;
    LeftParen(): TerminalNode | undefined;
    typeid(): TypeidContext | undefined;
    RightParen(): TerminalNode | undefined;
    Ellipsis(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    Alignof(): TerminalNode | undefined;
    noexceptexpression(): NoexceptexpressionContext | undefined;
    newexpression(): NewexpressionContext | undefined;
    deleteexpression(): DeleteexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class UnaryoperatorContext extends ParserRuleContext {
    Or(): TerminalNode | undefined;
    Star(): TerminalNode | undefined;
    And(): TerminalNode | undefined;
    Plus(): TerminalNode | undefined;
    Not(): TerminalNode | undefined;
    Tilde(): TerminalNode | undefined;
    Minus(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NewexpressionContext extends ParserRuleContext {
    New(): TerminalNode;
    newtypeid(): NewtypeidContext | undefined;
    Doublecolon(): TerminalNode | undefined;
    newplacement(): NewplacementContext | undefined;
    newinitializer(): NewinitializerContext | undefined;
    LeftParen(): TerminalNode | undefined;
    typeid(): TypeidContext | undefined;
    RightParen(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NewplacementContext extends ParserRuleContext {
    LeftParen(): TerminalNode;
    expressionlist(): ExpressionlistContext;
    RightParen(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NewtypeidContext extends ParserRuleContext {
    typespecifierseq(): TypespecifierseqContext;
    newdeclarator(): NewdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NewdeclaratorContext extends ParserRuleContext {
    ptroperator(): PtroperatorContext | undefined;
    newdeclarator(): NewdeclaratorContext | undefined;
    noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NoptrnewdeclaratorContext extends ParserRuleContext {
    LeftBracket(): TerminalNode;
    expression(): ExpressionContext | undefined;
    RightBracket(): TerminalNode;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    noptrnewdeclarator(): NoptrnewdeclaratorContext | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NewinitializerContext extends ParserRuleContext {
    LeftParen(): TerminalNode | undefined;
    RightParen(): TerminalNode | undefined;
    expressionlist(): ExpressionlistContext | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeleteexpressionContext extends ParserRuleContext {
    Delete(): TerminalNode;
    castexpression(): CastexpressionContext;
    Doublecolon(): TerminalNode | undefined;
    LeftBracket(): TerminalNode | undefined;
    RightBracket(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NoexceptexpressionContext extends ParserRuleContext {
    Noexcept(): TerminalNode;
    LeftParen(): TerminalNode;
    expression(): ExpressionContext;
    RightParen(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CastexpressionContext extends ParserRuleContext {
    unaryexpression(): UnaryexpressionContext | undefined;
    LeftParen(): TerminalNode | undefined;
    typeid(): TypeidContext | undefined;
    RightParen(): TerminalNode | undefined;
    castexpression(): CastexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PmexpressionContext extends ParserRuleContext {
    castexpression(): CastexpressionContext;
    pmexpression(): PmexpressionContext | undefined;
    DotStar(): TerminalNode | undefined;
    ArrowStar(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MultiplicativeexpressionContext extends ParserRuleContext {
    pmexpression(): PmexpressionContext;
    multiplicativeexpression(): MultiplicativeexpressionContext | undefined;
    Star(): TerminalNode | undefined;
    Div(): TerminalNode | undefined;
    Mod(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AdditiveexpressionContext extends ParserRuleContext {
    multiplicativeexpression(): MultiplicativeexpressionContext;
    additiveexpression(): AdditiveexpressionContext | undefined;
    Plus(): TerminalNode | undefined;
    Minus(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ShiftexpressionContext extends ParserRuleContext {
    additiveexpression(): AdditiveexpressionContext;
    shiftexpression(): ShiftexpressionContext | undefined;
    LeftShift(): TerminalNode | undefined;
    rightShift(): RightShiftContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class RelationalexpressionContext extends ParserRuleContext {
    shiftexpression(): ShiftexpressionContext;
    relationalexpression(): RelationalexpressionContext | undefined;
    Less(): TerminalNode | undefined;
    Greater(): TerminalNode | undefined;
    LessEqual(): TerminalNode | undefined;
    GreaterEqual(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EqualityexpressionContext extends ParserRuleContext {
    relationalexpression(): RelationalexpressionContext;
    equalityexpression(): EqualityexpressionContext | undefined;
    Equal(): TerminalNode | undefined;
    NotEqual(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AndexpressionContext extends ParserRuleContext {
    equalityexpression(): EqualityexpressionContext;
    andexpression(): AndexpressionContext | undefined;
    And(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExclusiveorexpressionContext extends ParserRuleContext {
    andexpression(): AndexpressionContext;
    exclusiveorexpression(): ExclusiveorexpressionContext | undefined;
    Caret(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class InclusiveorexpressionContext extends ParserRuleContext {
    exclusiveorexpression(): ExclusiveorexpressionContext;
    inclusiveorexpression(): InclusiveorexpressionContext | undefined;
    Or(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LogicalandexpressionContext extends ParserRuleContext {
    inclusiveorexpression(): InclusiveorexpressionContext;
    logicalandexpression(): LogicalandexpressionContext | undefined;
    AndAnd(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LogicalorexpressionContext extends ParserRuleContext {
    logicalandexpression(): LogicalandexpressionContext;
    logicalorexpression(): LogicalorexpressionContext | undefined;
    OrOr(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ConditionalexpressionContext extends ParserRuleContext {
    logicalorexpression(): LogicalorexpressionContext;
    Question(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    Colon(): TerminalNode | undefined;
    assignmentexpression(): AssignmentexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AssignmentexpressionContext extends ParserRuleContext {
    conditionalexpression(): ConditionalexpressionContext | undefined;
    logicalorexpression(): LogicalorexpressionContext | undefined;
    assignmentoperator(): AssignmentoperatorContext | undefined;
    initializerclause(): InitializerclauseContext | undefined;
    throwexpression(): ThrowexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AssignmentoperatorContext extends ParserRuleContext {
    Assign(): TerminalNode | undefined;
    StarAssign(): TerminalNode | undefined;
    DivAssign(): TerminalNode | undefined;
    ModAssign(): TerminalNode | undefined;
    PlusAssign(): TerminalNode | undefined;
    MinusAssign(): TerminalNode | undefined;
    rightShiftAssign(): RightShiftAssignContext | undefined;
    LeftShiftAssign(): TerminalNode | undefined;
    AndAssign(): TerminalNode | undefined;
    XorAssign(): TerminalNode | undefined;
    OrAssign(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExpressionContext extends ParserRuleContext {
    assignmentexpression(): AssignmentexpressionContext;
    expression(): ExpressionContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ConstantexpressionContext extends ParserRuleContext {
    conditionalexpression(): ConditionalexpressionContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class StatementContext extends ParserRuleContext {
    labeledstatement(): LabeledstatementContext | undefined;
    expressionstatement(): ExpressionstatementContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    compoundstatement(): CompoundstatementContext | undefined;
    selectionstatement(): SelectionstatementContext | undefined;
    iterationstatement(): IterationstatementContext | undefined;
    jumpstatement(): JumpstatementContext | undefined;
    declarationstatement(): DeclarationstatementContext | undefined;
    tryblock(): TryblockContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LabeledstatementContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    Colon(): TerminalNode;
    statement(): StatementContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    Case(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    Default(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExpressionstatementContext extends ParserRuleContext {
    Semi(): TerminalNode;
    expression(): ExpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CompoundstatementContext extends ParserRuleContext {
    LeftBrace(): TerminalNode;
    RightBrace(): TerminalNode;
    statementseq(): StatementseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class StatementseqContext extends ParserRuleContext {
    statement(): StatementContext;
    statementseq(): StatementseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class SelectionstatementContext extends ParserRuleContext {
    If(): TerminalNode | undefined;
    LeftParen(): TerminalNode;
    condition(): ConditionContext;
    RightParen(): TerminalNode;
    statement(): StatementContext[];
    statement(i: number): StatementContext;
    Else(): TerminalNode | undefined;
    Switch(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ConditionContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    declspecifierseq(): DeclspecifierseqContext | undefined;
    declarator(): DeclaratorContext | undefined;
    Assign(): TerminalNode | undefined;
    initializerclause(): InitializerclauseContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class IterationstatementContext extends ParserRuleContext {
    While(): TerminalNode | undefined;
    LeftParen(): TerminalNode;
    condition(): ConditionContext | undefined;
    RightParen(): TerminalNode;
    statement(): StatementContext;
    Do(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    Semi(): TerminalNode | undefined;
    For(): TerminalNode | undefined;
    forinitstatement(): ForinitstatementContext | undefined;
    forrangedeclaration(): ForrangedeclarationContext | undefined;
    Colon(): TerminalNode | undefined;
    forrangeinitializer(): ForrangeinitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ForinitstatementContext extends ParserRuleContext {
    expressionstatement(): ExpressionstatementContext | undefined;
    simpledeclaration(): SimpledeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ForrangedeclarationContext extends ParserRuleContext {
    declspecifierseq(): DeclspecifierseqContext;
    declarator(): DeclaratorContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ForrangeinitializerContext extends ParserRuleContext {
    expression(): ExpressionContext | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class JumpstatementContext extends ParserRuleContext {
    Break(): TerminalNode | undefined;
    Semi(): TerminalNode;
    Continue(): TerminalNode | undefined;
    Return(): TerminalNode | undefined;
    expression(): ExpressionContext | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    Goto(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeclarationstatementContext extends ParserRuleContext {
    blockdeclaration(): BlockdeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeclarationseqContext extends ParserRuleContext {
    declaration(): DeclarationContext;
    declarationseq(): DeclarationseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeclarationContext extends ParserRuleContext {
    blockdeclaration(): BlockdeclarationContext | undefined;
    functiondefinition(): FunctiondefinitionContext | undefined;
    templatedeclaration(): TemplatedeclarationContext | undefined;
    explicitinstantiation(): ExplicitinstantiationContext | undefined;
    explicitspecialization(): ExplicitspecializationContext | undefined;
    linkagespecification(): LinkagespecificationContext | undefined;
    namespacedefinition(): NamespacedefinitionContext | undefined;
    emptydeclaration(): EmptydeclarationContext | undefined;
    attributedeclaration(): AttributedeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BlockdeclarationContext extends ParserRuleContext {
    simpledeclaration(): SimpledeclarationContext | undefined;
    asmdefinition(): AsmdefinitionContext | undefined;
    namespacealiasdefinition(): NamespacealiasdefinitionContext | undefined;
    usingdeclaration(): UsingdeclarationContext | undefined;
    usingdirective(): UsingdirectiveContext | undefined;
    static_assertdeclaration(): Static_assertdeclarationContext | undefined;
    aliasdeclaration(): AliasdeclarationContext | undefined;
    opaqueenumdeclaration(): OpaqueenumdeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AliasdeclarationContext extends ParserRuleContext {
    Using(): TerminalNode;
    Identifier(): TerminalNode;
    Assign(): TerminalNode;
    typeid(): TypeidContext;
    Semi(): TerminalNode;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class SimpledeclarationContext extends ParserRuleContext {
    Semi(): TerminalNode;
    declspecifierseq(): DeclspecifierseqContext | undefined;
    initdeclaratorlist(): InitdeclaratorlistContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class Static_assertdeclarationContext extends ParserRuleContext {
    Static_assert(): TerminalNode;
    LeftParen(): TerminalNode;
    constantexpression(): ConstantexpressionContext;
    Comma(): TerminalNode;
    Stringliteral(): TerminalNode;
    RightParen(): TerminalNode;
    Semi(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EmptydeclarationContext extends ParserRuleContext {
    Semi(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributedeclarationContext extends ParserRuleContext {
    attributespecifierseq(): AttributespecifierseqContext;
    Semi(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeclspecifierContext extends ParserRuleContext {
    storageclassspecifier(): StorageclassspecifierContext | undefined;
    typespecifier(): TypespecifierContext | undefined;
    functionspecifier(): FunctionspecifierContext | undefined;
    Friend(): TerminalNode | undefined;
    Typedef(): TerminalNode | undefined;
    Constexpr(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeclspecifierseqContext extends ParserRuleContext {
    declspecifier(): DeclspecifierContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    declspecifierseq(): DeclspecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class StorageclassspecifierContext extends ParserRuleContext {
    Register(): TerminalNode | undefined;
    Static(): TerminalNode | undefined;
    Thread_local(): TerminalNode | undefined;
    Extern(): TerminalNode | undefined;
    Mutable(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class FunctionspecifierContext extends ParserRuleContext {
    Inline(): TerminalNode | undefined;
    Virtual(): TerminalNode | undefined;
    Explicit(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypedefnameContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypespecifierContext extends ParserRuleContext {
    trailingtypespecifier(): TrailingtypespecifierContext | undefined;
    classspecifier(): ClassspecifierContext | undefined;
    enumspecifier(): EnumspecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TrailingtypespecifierContext extends ParserRuleContext {
    simpletypespecifier(): SimpletypespecifierContext | undefined;
    elaboratedtypespecifier(): ElaboratedtypespecifierContext | undefined;
    typenamespecifier(): TypenamespecifierContext | undefined;
    cvqualifier(): CvqualifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypespecifierseqContext extends ParserRuleContext {
    typespecifier(): TypespecifierContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    typespecifierseq(): TypespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TrailingtypespecifierseqContext extends ParserRuleContext {
    trailingtypespecifier(): TrailingtypespecifierContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    trailingtypespecifierseq(): TrailingtypespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class SimpletypespecifierContext extends ParserRuleContext {
    typename(): TypenameContext | undefined;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    Template(): TerminalNode | undefined;
    simpletemplateid(): SimpletemplateidContext | undefined;
    Char(): TerminalNode | undefined;
    Char16(): TerminalNode | undefined;
    Char32(): TerminalNode | undefined;
    Wchar(): TerminalNode | undefined;
    Bool(): TerminalNode | undefined;
    Short(): TerminalNode | undefined;
    Int(): TerminalNode | undefined;
    Long(): TerminalNode | undefined;
    Signed(): TerminalNode | undefined;
    Unsigned(): TerminalNode | undefined;
    Float(): TerminalNode | undefined;
    Double(): TerminalNode | undefined;
    Void(): TerminalNode | undefined;
    Auto(): TerminalNode | undefined;
    decltypespecifier(): DecltypespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypenameContext extends ParserRuleContext {
    classname(): ClassnameContext | undefined;
    enumname(): EnumnameContext | undefined;
    typedefname(): TypedefnameContext | undefined;
    simpletemplateid(): SimpletemplateidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DecltypespecifierContext extends ParserRuleContext {
    Decltype(): TerminalNode;
    LeftParen(): TerminalNode;
    expression(): ExpressionContext | undefined;
    RightParen(): TerminalNode;
    Auto(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ElaboratedtypespecifierContext extends ParserRuleContext {
    classkey(): ClasskeyContext | undefined;
    Identifier(): TerminalNode | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    simpletemplateid(): SimpletemplateidContext | undefined;
    Template(): TerminalNode | undefined;
    Enum(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumnameContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumspecifierContext extends ParserRuleContext {
    enumhead(): EnumheadContext;
    LeftBrace(): TerminalNode;
    RightBrace(): TerminalNode;
    enumeratorlist(): EnumeratorlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumheadContext extends ParserRuleContext {
    enumkey(): EnumkeyContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    Identifier(): TerminalNode | undefined;
    enumbase(): EnumbaseContext | undefined;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class OpaqueenumdeclarationContext extends ParserRuleContext {
    enumkey(): EnumkeyContext;
    Identifier(): TerminalNode;
    Semi(): TerminalNode;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    enumbase(): EnumbaseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumkeyContext extends ParserRuleContext {
    Enum(): TerminalNode;
    Class(): TerminalNode | undefined;
    Struct(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumbaseContext extends ParserRuleContext {
    Colon(): TerminalNode;
    typespecifierseq(): TypespecifierseqContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumeratorlistContext extends ParserRuleContext {
    enumeratordefinition(): EnumeratordefinitionContext;
    enumeratorlist(): EnumeratorlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumeratordefinitionContext extends ParserRuleContext {
    enumerator(): EnumeratorContext;
    Assign(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class EnumeratorContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NamespacenameContext extends ParserRuleContext {
    originalnamespacename(): OriginalnamespacenameContext | undefined;
    namespacealias(): NamespacealiasContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class OriginalnamespacenameContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NamespacedefinitionContext extends ParserRuleContext {
    namednamespacedefinition(): NamednamespacedefinitionContext | undefined;
    unnamednamespacedefinition(): UnnamednamespacedefinitionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NamednamespacedefinitionContext extends ParserRuleContext {
    originalnamespacedefinition(): OriginalnamespacedefinitionContext | undefined;
    extensionnamespacedefinition(): ExtensionnamespacedefinitionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class OriginalnamespacedefinitionContext extends ParserRuleContext {
    Namespace(): TerminalNode;
    Identifier(): TerminalNode;
    LeftBrace(): TerminalNode;
    namespacebody(): NamespacebodyContext;
    RightBrace(): TerminalNode;
    Inline(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExtensionnamespacedefinitionContext extends ParserRuleContext {
    Namespace(): TerminalNode;
    originalnamespacename(): OriginalnamespacenameContext;
    LeftBrace(): TerminalNode;
    namespacebody(): NamespacebodyContext;
    RightBrace(): TerminalNode;
    Inline(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class UnnamednamespacedefinitionContext extends ParserRuleContext {
    Namespace(): TerminalNode;
    LeftBrace(): TerminalNode;
    namespacebody(): NamespacebodyContext;
    RightBrace(): TerminalNode;
    Inline(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NamespacebodyContext extends ParserRuleContext {
    declarationseq(): DeclarationseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NamespacealiasContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NamespacealiasdefinitionContext extends ParserRuleContext {
    Namespace(): TerminalNode;
    Identifier(): TerminalNode;
    Assign(): TerminalNode;
    qualifiednamespacespecifier(): QualifiednamespacespecifierContext;
    Semi(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class QualifiednamespacespecifierContext extends ParserRuleContext {
    namespacename(): NamespacenameContext;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class UsingdeclarationContext extends ParserRuleContext {
    Using(): TerminalNode;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    unqualifiedid(): UnqualifiedidContext;
    Semi(): TerminalNode;
    Typename(): TerminalNode | undefined;
    Doublecolon(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class UsingdirectiveContext extends ParserRuleContext {
    Using(): TerminalNode;
    Namespace(): TerminalNode;
    namespacename(): NamespacenameContext;
    Semi(): TerminalNode;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AsmdefinitionContext extends ParserRuleContext {
    Asm(): TerminalNode;
    LeftParen(): TerminalNode;
    Stringliteral(): TerminalNode;
    RightParen(): TerminalNode;
    Semi(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LinkagespecificationContext extends ParserRuleContext {
    Extern(): TerminalNode;
    Stringliteral(): TerminalNode;
    LeftBrace(): TerminalNode | undefined;
    RightBrace(): TerminalNode | undefined;
    declarationseq(): DeclarationseqContext | undefined;
    declaration(): DeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributespecifierseqContext extends ParserRuleContext {
    attributespecifier(): AttributespecifierContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributespecifierContext extends ParserRuleContext {
    LeftBracket(): TerminalNode[];
    LeftBracket(i: number): TerminalNode;
    attributelist(): AttributelistContext | undefined;
    RightBracket(): TerminalNode[];
    RightBracket(i: number): TerminalNode;
    alignmentspecifier(): AlignmentspecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AlignmentspecifierContext extends ParserRuleContext {
    Alignas(): TerminalNode;
    LeftParen(): TerminalNode;
    typeid(): TypeidContext | undefined;
    RightParen(): TerminalNode;
    Ellipsis(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributelistContext extends ParserRuleContext {
    attribute(): AttributeContext | undefined;
    attributelist(): AttributelistContext | undefined;
    Comma(): TerminalNode | undefined;
    Ellipsis(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributeContext extends ParserRuleContext {
    attributetoken(): AttributetokenContext;
    attributeargumentclause(): AttributeargumentclauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributetokenContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    attributescopedtoken(): AttributescopedtokenContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributescopedtokenContext extends ParserRuleContext {
    attributenamespace(): AttributenamespaceContext;
    Doublecolon(): TerminalNode;
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributenamespaceContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AttributeargumentclauseContext extends ParserRuleContext {
    LeftParen(): TerminalNode;
    balancedtokenseq(): BalancedtokenseqContext;
    RightParen(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BalancedtokenseqContext extends ParserRuleContext {
    balancedtoken(): BalancedtokenContext | undefined;
    balancedtokenseq(): BalancedtokenseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BalancedtokenContext extends ParserRuleContext {
    LeftParen(): TerminalNode | undefined;
    balancedtokenseq(): BalancedtokenseqContext;
    RightParen(): TerminalNode | undefined;
    LeftBracket(): TerminalNode | undefined;
    RightBracket(): TerminalNode | undefined;
    LeftBrace(): TerminalNode | undefined;
    RightBrace(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class InitdeclaratorlistContext extends ParserRuleContext {
    initdeclarator(): InitdeclaratorContext;
    initdeclaratorlist(): InitdeclaratorlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class InitdeclaratorContext extends ParserRuleContext {
    declarator(): DeclaratorContext;
    initializer(): InitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeclaratorContext extends ParserRuleContext {
    ptrdeclarator(): PtrdeclaratorContext | undefined;
    noptrdeclarator(): NoptrdeclaratorContext | undefined;
    parametersandqualifiers(): ParametersandqualifiersContext | undefined;
    trailingreturntype(): TrailingreturntypeContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PtrdeclaratorContext extends ParserRuleContext {
    noptrdeclarator(): NoptrdeclaratorContext | undefined;
    ptroperator(): PtroperatorContext | undefined;
    ptrdeclarator(): PtrdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NoptrdeclaratorContext extends ParserRuleContext {
    declaratorid(): DeclaratoridContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    noptrdeclarator(): NoptrdeclaratorContext | undefined;
    parametersandqualifiers(): ParametersandqualifiersContext | undefined;
    LeftBracket(): TerminalNode | undefined;
    RightBracket(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    LeftParen(): TerminalNode | undefined;
    ptrdeclarator(): PtrdeclaratorContext | undefined;
    RightParen(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ParametersandqualifiersContext extends ParserRuleContext {
    LeftParen(): TerminalNode;
    parameterdeclarationclause(): ParameterdeclarationclauseContext;
    RightParen(): TerminalNode;
    cvqualifierseq(): CvqualifierseqContext | undefined;
    refqualifier(): RefqualifierContext | undefined;
    exceptionspecification(): ExceptionspecificationContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TrailingreturntypeContext extends ParserRuleContext {
    Arrow(): TerminalNode;
    trailingtypespecifierseq(): TrailingtypespecifierseqContext;
    abstractdeclarator(): AbstractdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PtroperatorContext extends ParserRuleContext {
    Star(): TerminalNode | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    cvqualifierseq(): CvqualifierseqContext | undefined;
    And(): TerminalNode | undefined;
    AndAnd(): TerminalNode | undefined;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CvqualifierseqContext extends ParserRuleContext {
    cvqualifier(): CvqualifierContext;
    cvqualifierseq(): CvqualifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CvqualifierContext extends ParserRuleContext {
    Const(): TerminalNode | undefined;
    Volatile(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class RefqualifierContext extends ParserRuleContext {
    And(): TerminalNode | undefined;
    AndAnd(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DeclaratoridContext extends ParserRuleContext {
    idexpression(): IdexpressionContext;
    Ellipsis(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypeidContext extends ParserRuleContext {
    typespecifierseq(): TypespecifierseqContext;
    abstractdeclarator(): AbstractdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AbstractdeclaratorContext extends ParserRuleContext {
    ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined;
    parametersandqualifiers(): ParametersandqualifiersContext | undefined;
    trailingreturntype(): TrailingreturntypeContext | undefined;
    noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined;
    abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PtrabstractdeclaratorContext extends ParserRuleContext {
    noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined;
    ptroperator(): PtroperatorContext | undefined;
    ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NoptrabstractdeclaratorContext extends ParserRuleContext {
    noptrabstractdeclarator(): NoptrabstractdeclaratorContext | undefined;
    parametersandqualifiers(): ParametersandqualifiersContext | undefined;
    LeftBracket(): TerminalNode | undefined;
    RightBracket(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    LeftParen(): TerminalNode | undefined;
    ptrabstractdeclarator(): PtrabstractdeclaratorContext | undefined;
    RightParen(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AbstractpackdeclaratorContext extends ParserRuleContext {
    noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined;
    ptroperator(): PtroperatorContext | undefined;
    abstractpackdeclarator(): AbstractpackdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NoptrabstractpackdeclaratorContext extends ParserRuleContext {
    noptrabstractpackdeclarator(): NoptrabstractpackdeclaratorContext | undefined;
    parametersandqualifiers(): ParametersandqualifiersContext | undefined;
    LeftBracket(): TerminalNode | undefined;
    RightBracket(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    Ellipsis(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ParameterdeclarationclauseContext extends ParserRuleContext {
    parameterdeclarationlist(): ParameterdeclarationlistContext | undefined;
    Ellipsis(): TerminalNode | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ParameterdeclarationlistContext extends ParserRuleContext {
    parameterdeclaration(): ParameterdeclarationContext;
    parameterdeclarationlist(): ParameterdeclarationlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ParameterdeclarationContext extends ParserRuleContext {
    declspecifierseq(): DeclspecifierseqContext;
    declarator(): DeclaratorContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    Assign(): TerminalNode | undefined;
    initializerclause(): InitializerclauseContext | undefined;
    abstractdeclarator(): AbstractdeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class FunctiondefinitionContext extends ParserRuleContext {
    declarator(): DeclaratorContext;
    functionbody(): FunctionbodyContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    declspecifierseq(): DeclspecifierseqContext | undefined;
    virtspecifierseq(): VirtspecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class FunctionbodyContext extends ParserRuleContext {
    compoundstatement(): CompoundstatementContext | undefined;
    ctorinitializer(): CtorinitializerContext | undefined;
    functiontryblock(): FunctiontryblockContext | undefined;
    Assign(): TerminalNode | undefined;
    Default(): TerminalNode | undefined;
    Semi(): TerminalNode | undefined;
    Delete(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class InitializerContext extends ParserRuleContext {
    braceorequalinitializer(): BraceorequalinitializerContext | undefined;
    LeftParen(): TerminalNode | undefined;
    expressionlist(): ExpressionlistContext | undefined;
    RightParen(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BraceorequalinitializerContext extends ParserRuleContext {
    Assign(): TerminalNode | undefined;
    initializerclause(): InitializerclauseContext | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class InitializerclauseContext extends ParserRuleContext {
    assignmentexpression(): AssignmentexpressionContext | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class InitializerlistContext extends ParserRuleContext {
    initializerclause(): InitializerclauseContext;
    Ellipsis(): TerminalNode | undefined;
    initializerlist(): InitializerlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BracedinitlistContext extends ParserRuleContext {
    LeftBrace(): TerminalNode;
    initializerlist(): InitializerlistContext | undefined;
    RightBrace(): TerminalNode;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ClassnameContext extends ParserRuleContext {
    Identifier(): TerminalNode | undefined;
    simpletemplateid(): SimpletemplateidContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ClassspecifierContext extends ParserRuleContext {
    classhead(): ClassheadContext;
    LeftBrace(): TerminalNode;
    RightBrace(): TerminalNode;
    memberspecification(): MemberspecificationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ClassheadContext extends ParserRuleContext {
    classkey(): ClasskeyContext;
    classheadname(): ClassheadnameContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    classvirtspecifier(): ClassvirtspecifierContext | undefined;
    baseclause(): BaseclauseContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ClassheadnameContext extends ParserRuleContext {
    classname(): ClassnameContext;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ClassvirtspecifierContext extends ParserRuleContext {
    Final(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ClasskeyContext extends ParserRuleContext {
    Class(): TerminalNode | undefined;
    Struct(): TerminalNode | undefined;
    Union(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MemberspecificationContext extends ParserRuleContext {
    memberdeclaration(): MemberdeclarationContext | undefined;
    memberspecification(): MemberspecificationContext | undefined;
    accessspecifier(): AccessspecifierContext | undefined;
    Colon(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MemberdeclarationContext extends ParserRuleContext {
    Semi(): TerminalNode | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    declspecifierseq(): DeclspecifierseqContext | undefined;
    memberdeclaratorlist(): MemberdeclaratorlistContext | undefined;
    functiondefinition(): FunctiondefinitionContext | undefined;
    usingdeclaration(): UsingdeclarationContext | undefined;
    static_assertdeclaration(): Static_assertdeclarationContext | undefined;
    templatedeclaration(): TemplatedeclarationContext | undefined;
    aliasdeclaration(): AliasdeclarationContext | undefined;
    emptydeclaration(): EmptydeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MemberdeclaratorlistContext extends ParserRuleContext {
    memberdeclarator(): MemberdeclaratorContext;
    memberdeclaratorlist(): MemberdeclaratorlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MemberdeclaratorContext extends ParserRuleContext {
    declarator(): DeclaratorContext | undefined;
    virtspecifierseq(): VirtspecifierseqContext | undefined;
    purespecifier(): PurespecifierContext | undefined;
    braceorequalinitializer(): BraceorequalinitializerContext | undefined;
    Colon(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    Identifier(): TerminalNode | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class VirtspecifierseqContext extends ParserRuleContext {
    virtspecifier(): VirtspecifierContext;
    virtspecifierseq(): VirtspecifierseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class VirtspecifierContext extends ParserRuleContext {
    Override(): TerminalNode | undefined;
    Final(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PurespecifierContext extends ParserRuleContext {
    _val: Token;
    Assign(): TerminalNode;
    Octalliteral(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BaseclauseContext extends ParserRuleContext {
    Colon(): TerminalNode;
    basespecifierlist(): BasespecifierlistContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BasespecifierlistContext extends ParserRuleContext {
    basespecifier(): BasespecifierContext;
    Ellipsis(): TerminalNode | undefined;
    basespecifierlist(): BasespecifierlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BasespecifierContext extends ParserRuleContext {
    basetypespecifier(): BasetypespecifierContext;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    Virtual(): TerminalNode | undefined;
    accessspecifier(): AccessspecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ClassordecltypeContext extends ParserRuleContext {
    classname(): ClassnameContext | undefined;
    nestednamespecifier(): NestednamespecifierContext | undefined;
    decltypespecifier(): DecltypespecifierContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BasetypespecifierContext extends ParserRuleContext {
    classordecltype(): ClassordecltypeContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class AccessspecifierContext extends ParserRuleContext {
    Private(): TerminalNode | undefined;
    Protected(): TerminalNode | undefined;
    Public(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ConversionfunctionidContext extends ParserRuleContext {
    Operator(): TerminalNode;
    conversiontypeid(): ConversiontypeidContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ConversiontypeidContext extends ParserRuleContext {
    typespecifierseq(): TypespecifierseqContext;
    conversiondeclarator(): ConversiondeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ConversiondeclaratorContext extends ParserRuleContext {
    ptroperator(): PtroperatorContext;
    conversiondeclarator(): ConversiondeclaratorContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class CtorinitializerContext extends ParserRuleContext {
    Colon(): TerminalNode;
    meminitializerlist(): MeminitializerlistContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MeminitializerlistContext extends ParserRuleContext {
    meminitializer(): MeminitializerContext;
    Ellipsis(): TerminalNode | undefined;
    Comma(): TerminalNode | undefined;
    meminitializerlist(): MeminitializerlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MeminitializerContext extends ParserRuleContext {
    meminitializerid(): MeminitializeridContext;
    LeftParen(): TerminalNode | undefined;
    RightParen(): TerminalNode | undefined;
    expressionlist(): ExpressionlistContext | undefined;
    bracedinitlist(): BracedinitlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class MeminitializeridContext extends ParserRuleContext {
    classordecltype(): ClassordecltypeContext | undefined;
    Identifier(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class OperatorfunctionidContext extends ParserRuleContext {
    Operator(): TerminalNode;
    operator(): OperatorContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LiteraloperatoridContext extends ParserRuleContext {
    Operator(): TerminalNode;
    Stringliteral(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    Userdefinedstringliteral(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TemplatedeclarationContext extends ParserRuleContext {
    Template(): TerminalNode;
    Less(): TerminalNode;
    templateparameterlist(): TemplateparameterlistContext;
    Greater(): TerminalNode;
    declaration(): DeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TemplateparameterlistContext extends ParserRuleContext {
    templateparameter(): TemplateparameterContext;
    templateparameterlist(): TemplateparameterlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TemplateparameterContext extends ParserRuleContext {
    typeparameter(): TypeparameterContext | undefined;
    parameterdeclaration(): ParameterdeclarationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypeparameterContext extends ParserRuleContext {
    Class(): TerminalNode | undefined;
    Ellipsis(): TerminalNode | undefined;
    Identifier(): TerminalNode | undefined;
    Assign(): TerminalNode | undefined;
    typeid(): TypeidContext | undefined;
    Typename(): TerminalNode | undefined;
    Template(): TerminalNode | undefined;
    Less(): TerminalNode | undefined;
    templateparameterlist(): TemplateparameterlistContext | undefined;
    Greater(): TerminalNode | undefined;
    idexpression(): IdexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class SimpletemplateidContext extends ParserRuleContext {
    templatename(): TemplatenameContext;
    Less(): TerminalNode;
    Greater(): TerminalNode;
    templateargumentlist(): TemplateargumentlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TemplateidContext extends ParserRuleContext {
    simpletemplateid(): SimpletemplateidContext | undefined;
    operatorfunctionid(): OperatorfunctionidContext | undefined;
    Less(): TerminalNode | undefined;
    Greater(): TerminalNode | undefined;
    templateargumentlist(): TemplateargumentlistContext | undefined;
    literaloperatorid(): LiteraloperatoridContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TemplatenameContext extends ParserRuleContext {
    Identifier(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TemplateargumentlistContext extends ParserRuleContext {
    templateargument(): TemplateargumentContext;
    Ellipsis(): TerminalNode | undefined;
    templateargumentlist(): TemplateargumentlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TemplateargumentContext extends ParserRuleContext {
    typeid(): TypeidContext | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    idexpression(): IdexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypenamespecifierContext extends ParserRuleContext {
    Typename(): TerminalNode;
    nestednamespecifier(): NestednamespecifierContext;
    Identifier(): TerminalNode | undefined;
    simpletemplateid(): SimpletemplateidContext | undefined;
    Template(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExplicitinstantiationContext extends ParserRuleContext {
    Template(): TerminalNode;
    declaration(): DeclarationContext;
    Extern(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExplicitspecializationContext extends ParserRuleContext {
    Template(): TerminalNode;
    Less(): TerminalNode;
    Greater(): TerminalNode;
    declaration(): DeclarationContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TryblockContext extends ParserRuleContext {
    Try(): TerminalNode;
    compoundstatement(): CompoundstatementContext;
    handlerseq(): HandlerseqContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class FunctiontryblockContext extends ParserRuleContext {
    Try(): TerminalNode;
    compoundstatement(): CompoundstatementContext;
    handlerseq(): HandlerseqContext;
    ctorinitializer(): CtorinitializerContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class HandlerseqContext extends ParserRuleContext {
    handler(): HandlerContext;
    handlerseq(): HandlerseqContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class HandlerContext extends ParserRuleContext {
    Catch(): TerminalNode;
    LeftParen(): TerminalNode;
    exceptiondeclaration(): ExceptiondeclarationContext;
    RightParen(): TerminalNode;
    compoundstatement(): CompoundstatementContext;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExceptiondeclarationContext extends ParserRuleContext {
    typespecifierseq(): TypespecifierseqContext | undefined;
    declarator(): DeclaratorContext | undefined;
    attributespecifierseq(): AttributespecifierseqContext | undefined;
    abstractdeclarator(): AbstractdeclaratorContext | undefined;
    Ellipsis(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ThrowexpressionContext extends ParserRuleContext {
    Throw(): TerminalNode;
    assignmentexpression(): AssignmentexpressionContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class ExceptionspecificationContext extends ParserRuleContext {
    dynamicexceptionspecification(): DynamicexceptionspecificationContext | undefined;
    noexceptspecification(): NoexceptspecificationContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class DynamicexceptionspecificationContext extends ParserRuleContext {
    Throw(): TerminalNode;
    LeftParen(): TerminalNode;
    RightParen(): TerminalNode;
    typeidlist(): TypeidlistContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class TypeidlistContext extends ParserRuleContext {
    typeid(): TypeidContext;
    Ellipsis(): TerminalNode | undefined;
    typeidlist(): TypeidlistContext | undefined;
    Comma(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class NoexceptspecificationContext extends ParserRuleContext {
    Noexcept(): TerminalNode;
    LeftParen(): TerminalNode | undefined;
    constantexpression(): ConstantexpressionContext | undefined;
    RightParen(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class RightShiftContext extends ParserRuleContext {
    Greater(): TerminalNode[];
    Greater(i: number): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class RightShiftAssignContext extends ParserRuleContext {
    Greater(): TerminalNode[];
    Greater(i: number): TerminalNode;
    Assign(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class OperatorContext extends ParserRuleContext {
    New(): TerminalNode | undefined;
    Delete(): TerminalNode | undefined;
    LeftBracket(): TerminalNode | undefined;
    RightBracket(): TerminalNode | undefined;
    Plus(): TerminalNode | undefined;
    Minus(): TerminalNode | undefined;
    Star(): TerminalNode | undefined;
    Div(): TerminalNode | undefined;
    Mod(): TerminalNode | undefined;
    Caret(): TerminalNode | undefined;
    And(): TerminalNode | undefined;
    Or(): TerminalNode | undefined;
    Tilde(): TerminalNode | undefined;
    Not(): TerminalNode | undefined;
    Assign(): TerminalNode | undefined;
    Less(): TerminalNode | undefined;
    Greater(): TerminalNode | undefined;
    PlusAssign(): TerminalNode | undefined;
    MinusAssign(): TerminalNode | undefined;
    StarAssign(): TerminalNode | undefined;
    DivAssign(): TerminalNode | undefined;
    ModAssign(): TerminalNode | undefined;
    XorAssign(): TerminalNode | undefined;
    AndAssign(): TerminalNode | undefined;
    OrAssign(): TerminalNode | undefined;
    LeftShift(): TerminalNode | undefined;
    rightShift(): RightShiftContext | undefined;
    rightShiftAssign(): RightShiftAssignContext | undefined;
    LeftShiftAssign(): TerminalNode | undefined;
    Equal(): TerminalNode | undefined;
    NotEqual(): TerminalNode | undefined;
    LessEqual(): TerminalNode | undefined;
    GreaterEqual(): TerminalNode | undefined;
    AndAnd(): TerminalNode | undefined;
    OrOr(): TerminalNode | undefined;
    PlusPlus(): TerminalNode | undefined;
    MinusMinus(): TerminalNode | undefined;
    Comma(): TerminalNode | undefined;
    ArrowStar(): TerminalNode | undefined;
    Arrow(): TerminalNode | undefined;
    LeftParen(): TerminalNode | undefined;
    RightParen(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class LiteralContext extends ParserRuleContext {
    Integerliteral(): TerminalNode | undefined;
    Characterliteral(): TerminalNode | undefined;
    Floatingliteral(): TerminalNode | undefined;
    Stringliteral(): TerminalNode | undefined;
    booleanliteral(): BooleanliteralContext | undefined;
    pointerliteral(): PointerliteralContext | undefined;
    userdefinedliteral(): UserdefinedliteralContext | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class BooleanliteralContext extends ParserRuleContext {
    False(): TerminalNode | undefined;
    True(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class PointerliteralContext extends ParserRuleContext {
    Nullptr(): TerminalNode;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
export declare class UserdefinedliteralContext extends ParserRuleContext {
    Userdefinedintegerliteral(): TerminalNode | undefined;
    Userdefinedfloatingliteral(): TerminalNode | undefined;
    Userdefinedstringliteral(): TerminalNode | undefined;
    Userdefinedcharacterliteral(): TerminalNode | undefined;
    constructor(parent: ParserRuleContext | undefined, invokingState: number);
    readonly ruleIndex: number;
}
