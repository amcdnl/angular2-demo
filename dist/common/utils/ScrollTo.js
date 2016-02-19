System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /**
     * Scroll To
     * http://stackoverflow.com/questions/25020582/scrolling-to-an-anchor-using-transition-css3
     * @param  {[type]} to       [description]
     * @param  {[type]} duration [description]
     * @return {[type]}          [description]
     */
    function scrollTo(to, duration) {
        if (document.body.scrollTop == to)
            return;
        var start = document.body.scrollTop;
        var diff = to - start;
        var scrollStep = Math.PI / (duration / 10);
        var count = 0, currPos;
        var scrollInterval = setInterval(function () {
            if (document.documentElement.scrollTop !== to && currPos < document.documentElement.scrollHeight) {
                count = count + 1;
                currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
                document.documentElement.scrollTop = currPos;
            }
            else {
                clearInterval(scrollInterval);
            }
        }, 10);
    }
    exports_1("scrollTo", scrollTo);
    return {
        setters:[],
        execute: function() {
            ;
        }
    }
});
//# sourceMappingURL=ScrollTo.js.map