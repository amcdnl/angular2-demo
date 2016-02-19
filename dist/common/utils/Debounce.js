/**
 * Stolen from: https://github.com/bvaughn/debounce-decorator
 */
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DEFAULT_DEBOUNCE_DURATION;
    /** Decorates a class method so that it is debounced by the specified duration */
    function debounce(duration) {
        return function innerDecorator(target, key, descriptor) {
            return {
                configurable: true,
                enumerable: descriptor.enumerable,
                get: function getter() {
                    // Attach this function to the instance (not the class)
                    Object.defineProperty(this, key, {
                        configurable: true,
                        enumerable: descriptor.enumerable,
                        value: debounceFn(descriptor.value, duration)
                    });
                    return this[key];
                }
            };
        };
    }
    exports_1("debounce", debounce);
    /** Debounces the specified function and returns a wrapper function */
    function debounceFn(method, duration) {
        if (duration === void 0) { duration = DEFAULT_DEBOUNCE_DURATION; }
        var timeoutId;
        function debounceWrapper() {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            debounceWrapper.clear();
            timeoutId = setTimeout(function () {
                timeoutId = null;
                method.apply(_this, args);
            }, duration);
        }
        debounceWrapper.clear = function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
                timeoutId = null;
            }
        };
        return debounceWrapper;
    }
    exports_1("debounceFn", debounceFn);
    return {
        setters:[],
        execute: function() {
            /** Default debounce duration (in ms) */
            exports_1("DEFAULT_DEBOUNCE_DURATION", DEFAULT_DEBOUNCE_DURATION = 500);
        }
    }
});
//# sourceMappingURL=Debounce.js.map