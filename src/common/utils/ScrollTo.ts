/**
 * Scroll To
 * http://stackoverflow.com/questions/25020582/scrolling-to-an-anchor-using-transition-css3
 * @param  {[type]} to       [description]
 * @param  {[type]} duration [description]
 * @return {[type]}          [description]
 */
export function scrollTo(to, duration) {
  if (document.body.scrollTop == to) return;

  let start = document.body.scrollTop;
  let diff = to - start;
  let scrollStep = Math.PI / (duration / 10);
  let count = 0, currPos;

  let scrollInterval = setInterval(function(){
    if (document.documentElement.scrollTop !== to && currPos < document.documentElement.scrollHeight) {
      count = count + 1;
      currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
      document.documentElement.scrollTop = currPos;
    } else { 
      clearInterval(scrollInterval); 
    }
  },10);
};