'use strict';
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
var antlr4ts_1 = require("antlr4ts");
var atn_1 = require("antlr4ts/atn");
var IntervalSet_1 = require("antlr4ts/misc/IntervalSet");
var CandidatesCollection = (function () {
    function CandidatesCollection() {
        this.tokens = new Map();
        this.rules = new Map();
    }
    return CandidatesCollection;
}());
exports.CandidatesCollection = CandidatesCollection;
;
var FollowSetWithPath = (function () {
    function FollowSetWithPath() {
        this.path = [];
        this.following = [];
    }
    return FollowSetWithPath;
}());
;
var FollowSetsHolder = (function () {
    function FollowSetsHolder() {
    }
    return FollowSetsHolder;
}());
;
var PipelineEntry = (function () {
    function PipelineEntry() {
    }
    return PipelineEntry;
}());
;
var CodeCompletionCore = (function () {
    function CodeCompletionCore(parser) {
        this.showResult = false;
        this.showDebugOutput = false;
        this.debugOutputWithTransitions = false;
        this.showRuleStack = false;
        this.tokenStartIndex = 0;
        this.statesProcessed = 0;
        this.shortcutMap = new Map();
        this.candidates = new CandidatesCollection();
        this.atnStateTypeMap = [
            "invalid",
            "basic",
            "rule start",
            "block start",
            "plus block start",
            "star block start",
            "token start",
            "rule stop",
            "block end",
            "star loop back",
            "star loop entry",
            "plus loop back",
            "loop end"
        ];
        this.parser = parser;
        this.atn = parser.atn;
        this.vocabulary = parser.vocabulary;
        this.ruleNames = parser.ruleNames;
        this.ignoredTokens = new Set();
        this.preferredRules = new Set();
    }
    CodeCompletionCore.prototype.collectCandidates = function (caretTokenIndex, context) {
        var e_1, _a, e_2, _b, e_3, _c, e_4, _d, e_5, _e;
        this.shortcutMap.clear();
        this.candidates.rules.clear();
        this.candidates.tokens.clear();
        this.statesProcessed = 0;
        this.precedenceStack = [];
        this.tokenStartIndex = context ? context.start.tokenIndex : 0;
        var tokenStream = this.parser.inputStream;
        var currentIndex = tokenStream.index;
        tokenStream.seek(this.tokenStartIndex);
        this.tokens = [];
        var offset = 1;
        while (true) {
            var token = tokenStream.LT(offset++);
            this.tokens.push(token.type);
            if (token.tokenIndex >= caretTokenIndex || token.type == antlr4ts_1.Token.EOF)
                break;
        }
        tokenStream.seek(currentIndex);
        var callStack = [];
        var startRule = context ? context.ruleIndex : 0;
        this.processRule(this.atn.ruleToStartState[startRule], 0, callStack, 0, 0);
        if (this.showResult) {
            console.log("States processed: " + this.statesProcessed);
            console.log("\n\nCollected rules:\n");
            try {
                for (var _f = __values(this.candidates.rules), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var rule = _g.value;
                    var path = "";
                    try {
                        for (var _h = (e_2 = void 0, __values(rule[1])), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var token = _j.value;
                            path += this.ruleNames[token] + " ";
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    console.log(this.ruleNames[rule[0]] + ", path: ", path);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_a = _f.return)) _a.call(_f);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var sortedTokens = new Set();
            try {
                for (var _k = __values(this.candidates.tokens), _l = _k.next(); !_l.done; _l = _k.next()) {
                    var token = _l.value;
                    var value = this.vocabulary.getDisplayName(token[0]);
                    try {
                        for (var _m = (e_4 = void 0, __values(token[1])), _o = _m.next(); !_o.done; _o = _m.next()) {
                            var following = _o.value;
                            value += " " + this.vocabulary.getDisplayName(following);
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    sortedTokens.add(value);
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
                }
                finally { if (e_3) throw e_3.error; }
            }
            console.log("\n\nCollected tokens:\n");
            try {
                for (var sortedTokens_1 = __values(sortedTokens), sortedTokens_1_1 = sortedTokens_1.next(); !sortedTokens_1_1.done; sortedTokens_1_1 = sortedTokens_1.next()) {
                    var symbol = sortedTokens_1_1.value;
                    console.log(symbol);
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (sortedTokens_1_1 && !sortedTokens_1_1.done && (_e = sortedTokens_1.return)) _e.call(sortedTokens_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
            console.log("\n\n");
        }
        return this.candidates;
    };
    CodeCompletionCore.prototype.checkPredicate = function (transition) {
        return transition.predicate.eval(this.parser, antlr4ts_1.ParserRuleContext.emptyContext());
    };
    CodeCompletionCore.prototype.translateToRuleIndex = function (ruleStack) {
        var e_6, _a;
        if (this.preferredRules.size == 0)
            return false;
        for (var i = 0; i < ruleStack.length; ++i) {
            if (this.preferredRules.has(ruleStack[i])) {
                var path = ruleStack.slice(0, i);
                var addNew = true;
                var _loop_1 = function (rule) {
                    if (rule[0] != ruleStack[i] || rule[1].length != path.length)
                        return "continue";
                    if (path.every(function (v, j) { return v === rule[1][j]; })) {
                        addNew = false;
                        return "break";
                    }
                };
                try {
                    for (var _b = (e_6 = void 0, __values(this.candidates.rules)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var rule = _c.value;
                        var state_1 = _loop_1(rule);
                        if (state_1 === "break")
                            break;
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
                if (addNew) {
                    this.candidates.rules.set(ruleStack[i], path);
                    if (this.showDebugOutput)
                        console.log("=====> collected: ", this.ruleNames[ruleStack[i]]);
                }
                return true;
            }
        }
        return false;
    };
    CodeCompletionCore.prototype.getFollowingTokens = function (transition) {
        var e_7, _a;
        var result = [];
        var seen = [];
        var pipeline = [transition.target];
        while (pipeline.length > 0) {
            var state = pipeline.pop();
            try {
                for (var _b = (e_7 = void 0, __values(state.getTransitions())), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var transition_1 = _c.value;
                    if (transition_1.serializationType == 5) {
                        if (!transition_1.isEpsilon) {
                            var list = transition_1.label.toArray();
                            if (list.length == 1 && !this.ignoredTokens.has(list[0])) {
                                result.push(list[0]);
                                pipeline.push(transition_1.target);
                            }
                        }
                        else {
                            pipeline.push(transition_1.target);
                        }
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
        }
        return result;
    };
    CodeCompletionCore.prototype.determineFollowSets = function (start, stop) {
        var result = [];
        var seen = new Set();
        var ruleStack = [];
        this.collectFollowSets(start, stop, result, seen, ruleStack);
        return result;
    };
    CodeCompletionCore.prototype.collectFollowSets = function (s, stopState, followSets, seen, ruleStack) {
        var e_8, _a;
        if (seen.has(s))
            return;
        seen.add(s);
        if (s == stopState || s.stateType == atn_1.ATNStateType.RULE_STOP) {
            var set = new FollowSetWithPath();
            set.intervals = IntervalSet_1.IntervalSet.of(antlr4ts_1.Token.EPSILON);
            set.path = ruleStack.slice();
            followSets.push(set);
            return;
        }
        try {
            for (var _b = __values(s.getTransitions()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var transition = _c.value;
                if (transition.serializationType == 3) {
                    var ruleTransition = transition;
                    if (ruleStack.indexOf(ruleTransition.target.ruleIndex) != -1)
                        continue;
                    ruleStack.push(ruleTransition.target.ruleIndex);
                    this.collectFollowSets(transition.target, stopState, followSets, seen, ruleStack);
                    ruleStack.pop();
                }
                else if (transition.serializationType == 4) {
                    if (this.checkPredicate(transition))
                        this.collectFollowSets(transition.target, stopState, followSets, seen, ruleStack);
                }
                else if (transition.isEpsilon) {
                    this.collectFollowSets(transition.target, stopState, followSets, seen, ruleStack);
                }
                else if (transition.serializationType == 9) {
                    var set = new FollowSetWithPath();
                    set.intervals = IntervalSet_1.IntervalSet.of(antlr4ts_1.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType);
                    set.path = ruleStack.slice();
                    followSets.push(set);
                }
                else {
                    var label = transition.label;
                    if (label && label.size > 0) {
                        if (transition.serializationType == 8) {
                            label = label.complement(IntervalSet_1.IntervalSet.of(antlr4ts_1.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
                        }
                        var set = new FollowSetWithPath();
                        set.intervals = label;
                        set.path = ruleStack.slice();
                        set.following = this.getFollowingTokens(transition);
                        followSets.push(set);
                    }
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
    };
    CodeCompletionCore.prototype.processRule = function (startState, tokenIndex, callStack, precedence, indentation) {
        var e_9, _a, e_10, _b, e_11, _c, e_12, _d, e_13, _e, e_14, _f, e_15, _g;
        var positionMap = this.shortcutMap.get(startState.ruleIndex);
        if (!positionMap) {
            positionMap = new Map();
            this.shortcutMap.set(startState.ruleIndex, positionMap);
        }
        else {
            if (positionMap.has(tokenIndex)) {
                if (this.showDebugOutput) {
                    console.log("=====> shortcut");
                }
                return positionMap.get(tokenIndex);
            }
        }
        var result = new Set();
        var setsPerState = CodeCompletionCore.followSetsByATN.get(this.parser.constructor.name);
        if (!setsPerState) {
            setsPerState = new Map();
            CodeCompletionCore.followSetsByATN.set(this.parser.constructor.name, setsPerState);
        }
        var followSets = setsPerState.get(startState.stateNumber);
        if (!followSets) {
            followSets = new FollowSetsHolder();
            setsPerState.set(startState.stateNumber, followSets);
            var stop_1 = this.atn.ruleToStopState[startState.ruleIndex];
            followSets.sets = this.determineFollowSets(startState, stop_1);
            var combined = new IntervalSet_1.IntervalSet();
            try {
                for (var _h = __values(followSets.sets), _j = _h.next(); !_j.done; _j = _h.next()) {
                    var set = _j.value;
                    combined.addAll(set.intervals);
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_j && !_j.done && (_a = _h.return)) _a.call(_h);
                }
                finally { if (e_9) throw e_9.error; }
            }
            followSets.combined = combined;
        }
        callStack.push(startState.ruleIndex);
        if (tokenIndex >= this.tokens.length - 1) {
            if (this.preferredRules.has(startState.ruleIndex)) {
                this.translateToRuleIndex(callStack);
            }
            else {
                try {
                    for (var _k = __values(followSets.sets), _l = _k.next(); !_l.done; _l = _k.next()) {
                        var set = _l.value;
                        var fullPath = callStack.slice();
                        fullPath.push.apply(fullPath, __spread(set.path));
                        if (!this.translateToRuleIndex(fullPath)) {
                            try {
                                for (var _m = (e_11 = void 0, __values(set.intervals.toArray())), _o = _m.next(); !_o.done; _o = _m.next()) {
                                    var symbol = _o.value;
                                    if (!this.ignoredTokens.has(symbol)) {
                                        if (this.showDebugOutput) {
                                            console.log("=====> collected: ", this.vocabulary.getDisplayName(symbol));
                                        }
                                        if (!this.candidates.tokens.has(symbol))
                                            this.candidates.tokens.set(symbol, set.following);
                                        else {
                                            if (this.candidates.tokens.get(symbol) != set.following)
                                                this.candidates.tokens.set(symbol, []);
                                        }
                                    }
                                }
                            }
                            catch (e_11_1) { e_11 = { error: e_11_1 }; }
                            finally {
                                try {
                                    if (_o && !_o.done && (_c = _m.return)) _c.call(_m);
                                }
                                finally { if (e_11) throw e_11.error; }
                            }
                        }
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (_l && !_l.done && (_b = _k.return)) _b.call(_k);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
            }
            callStack.pop();
            return result;
        }
        else {
            var currentSymbol = this.tokens[tokenIndex];
            if (!followSets.combined.contains(antlr4ts_1.Token.EPSILON) && !followSets.combined.contains(currentSymbol)) {
                callStack.pop();
                return result;
            }
        }
        if (startState.isPrecedenceRule) {
            this.precedenceStack.push(precedence);
        }
        var statePipeline = [];
        var currentEntry;
        statePipeline.push({ state: startState, tokenIndex: tokenIndex });
        while (statePipeline.length > 0) {
            currentEntry = statePipeline.pop();
            ++this.statesProcessed;
            var currentSymbol = this.tokens[currentEntry.tokenIndex];
            var atCaret = currentEntry.tokenIndex >= this.tokens.length - 1;
            if (this.showDebugOutput) {
                this.printDescription(indentation, currentEntry.state, this.generateBaseDescription(currentEntry.state), currentEntry.tokenIndex);
                if (this.showRuleStack)
                    this.printRuleState(callStack);
            }
            if (currentEntry.state.stateType == atn_1.ATNStateType.RULE_STOP) {
                result.add(currentEntry.tokenIndex);
                continue;
            }
            var transitions = currentEntry.state.getTransitions();
            try {
                for (var transitions_1 = (e_12 = void 0, __values(transitions)), transitions_1_1 = transitions_1.next(); !transitions_1_1.done; transitions_1_1 = transitions_1.next()) {
                    var transition = transitions_1_1.value;
                    switch (transition.serializationType) {
                        case 3: {
                            var ruleTransition = transition;
                            var endStatus = this.processRule(transition.target, currentEntry.tokenIndex, callStack, ruleTransition.precedence, indentation + 1);
                            try {
                                for (var endStatus_1 = (e_13 = void 0, __values(endStatus)), endStatus_1_1 = endStatus_1.next(); !endStatus_1_1.done; endStatus_1_1 = endStatus_1.next()) {
                                    var position = endStatus_1_1.value;
                                    statePipeline.push({ state: transition.followState, tokenIndex: position });
                                }
                            }
                            catch (e_13_1) { e_13 = { error: e_13_1 }; }
                            finally {
                                try {
                                    if (endStatus_1_1 && !endStatus_1_1.done && (_e = endStatus_1.return)) _e.call(endStatus_1);
                                }
                                finally { if (e_13) throw e_13.error; }
                            }
                            break;
                        }
                        case 4: {
                            if (this.checkPredicate(transition))
                                statePipeline.push({ state: transition.target, tokenIndex: currentEntry.tokenIndex });
                            break;
                        }
                        case 10: {
                            var predTransition = transition;
                            if (predTransition.precedence >= this.precedenceStack[this.precedenceStack.length - 1])
                                statePipeline.push({ state: transition.target, tokenIndex: currentEntry.tokenIndex });
                            break;
                        }
                        case 9: {
                            if (atCaret) {
                                if (!this.translateToRuleIndex(callStack)) {
                                    try {
                                        for (var _p = (e_14 = void 0, __values(IntervalSet_1.IntervalSet.of(antlr4ts_1.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType).toArray())), _q = _p.next(); !_q.done; _q = _p.next()) {
                                            var token = _q.value;
                                            if (!this.ignoredTokens.has(token))
                                                this.candidates.tokens.set(token, []);
                                        }
                                    }
                                    catch (e_14_1) { e_14 = { error: e_14_1 }; }
                                    finally {
                                        try {
                                            if (_q && !_q.done && (_f = _p.return)) _f.call(_p);
                                        }
                                        finally { if (e_14) throw e_14.error; }
                                    }
                                }
                            }
                            else {
                                statePipeline.push({ state: transition.target, tokenIndex: currentEntry.tokenIndex + 1 });
                            }
                            break;
                        }
                        default: {
                            if (transition.isEpsilon) {
                                statePipeline.push({ state: transition.target, tokenIndex: currentEntry.tokenIndex });
                                continue;
                            }
                            var set = transition.label;
                            if (set && set.size > 0) {
                                if (transition.serializationType == 8) {
                                    set = set.complement(IntervalSet_1.IntervalSet.of(antlr4ts_1.Token.MIN_USER_TOKEN_TYPE, this.atn.maxTokenType));
                                }
                                if (atCaret) {
                                    if (!this.translateToRuleIndex(callStack)) {
                                        var list = set.toArray();
                                        var addFollowing = list.length == 1;
                                        try {
                                            for (var list_1 = (e_15 = void 0, __values(list)), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                                                var symbol = list_1_1.value;
                                                if (!this.ignoredTokens.has(symbol)) {
                                                    if (this.showDebugOutput)
                                                        console.log("=====> collected: ", this.vocabulary.getDisplayName(symbol));
                                                    if (addFollowing)
                                                        this.candidates.tokens.set(symbol, this.getFollowingTokens(transition));
                                                    else
                                                        this.candidates.tokens.set(symbol, []);
                                                }
                                            }
                                        }
                                        catch (e_15_1) { e_15 = { error: e_15_1 }; }
                                        finally {
                                            try {
                                                if (list_1_1 && !list_1_1.done && (_g = list_1.return)) _g.call(list_1);
                                            }
                                            finally { if (e_15) throw e_15.error; }
                                        }
                                    }
                                }
                                else {
                                    if (set.contains(currentSymbol)) {
                                        if (this.showDebugOutput)
                                            console.log("=====> consumed: ", this.vocabulary.getDisplayName(currentSymbol));
                                        statePipeline.push({ state: transition.target, tokenIndex: currentEntry.tokenIndex + 1 });
                                    }
                                }
                            }
                        }
                    }
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (transitions_1_1 && !transitions_1_1.done && (_d = transitions_1.return)) _d.call(transitions_1);
                }
                finally { if (e_12) throw e_12.error; }
            }
        }
        callStack.pop();
        if (startState.isPrecedenceRule) {
            this.precedenceStack.pop();
        }
        positionMap.set(tokenIndex, result);
        return result;
    };
    CodeCompletionCore.prototype.generateBaseDescription = function (state) {
        var stateValue = state.stateNumber == atn_1.ATNState.INVALID_STATE_NUMBER ? "Invalid" : state.stateNumber;
        return "[" + stateValue + " " + this.atnStateTypeMap[state.stateType] + "] in " + this.ruleNames[state.ruleIndex];
    };
    CodeCompletionCore.prototype.printDescription = function (indentation, state, baseDescription, tokenIndex) {
        var e_16, _a, e_17, _b;
        var indent = "  ".repeat(indentation);
        var output = indent;
        var transitionDescription = "";
        if (this.debugOutputWithTransitions) {
            try {
                for (var _c = __values(state.getTransitions()), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var transition = _d.value;
                    var labels = "";
                    var symbols = transition.label ? transition.label.toArray() : [];
                    if (symbols.length > 2) {
                        labels = this.vocabulary.getDisplayName(symbols[0]) + " .. " + this.vocabulary.getDisplayName(symbols[symbols.length - 1]);
                    }
                    else {
                        try {
                            for (var symbols_1 = (e_17 = void 0, __values(symbols)), symbols_1_1 = symbols_1.next(); !symbols_1_1.done; symbols_1_1 = symbols_1.next()) {
                                var symbol = symbols_1_1.value;
                                if (labels.length > 0)
                                    labels += ", ";
                                labels += this.vocabulary.getDisplayName(symbol);
                            }
                        }
                        catch (e_17_1) { e_17 = { error: e_17_1 }; }
                        finally {
                            try {
                                if (symbols_1_1 && !symbols_1_1.done && (_b = symbols_1.return)) _b.call(symbols_1);
                            }
                            finally { if (e_17) throw e_17.error; }
                        }
                    }
                    if (labels.length == 0)
                        labels = "ε";
                    transitionDescription += "\n" + indent + "\t(" + labels + ") " + "[" + transition.target.stateNumber + " " +
                        this.atnStateTypeMap[transition.target.stateType] + "] in " + this.ruleNames[transition.target.ruleIndex];
                }
            }
            catch (e_16_1) { e_16 = { error: e_16_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_16) throw e_16.error; }
            }
        }
        if (tokenIndex >= this.tokens.length - 1)
            output += "<<" + this.tokenStartIndex + tokenIndex + ">> ";
        else
            output += "<" + this.tokenStartIndex + tokenIndex + "> ";
        console.log(output + "Current state: " + baseDescription + transitionDescription);
    };
    CodeCompletionCore.prototype.printRuleState = function (stack) {
        var e_18, _a;
        if (stack.length == 0) {
            console.log("<empty stack>");
            return;
        }
        try {
            for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
                var rule = stack_1_1.value;
                console.log(this.ruleNames[rule]);
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return)) _a.call(stack_1);
            }
            finally { if (e_18) throw e_18.error; }
        }
    };
    CodeCompletionCore.followSetsByATN = new Map();
    return CodeCompletionCore;
}());
exports.CodeCompletionCore = CodeCompletionCore;
//# sourceMappingURL=CodeCompletionCore.js.map