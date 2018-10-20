/*global Trianglify d3*/
var t = new Trianglify();

function height() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
}

function redraw() {
  var pattern = t.generate(document.body.clientWidth, height() + 300);
  document.body.setAttribute("style", "background-image: " + pattern.dataUrl);
}

function recolor() {
  t.options.xGradient = Trianglify.randomColor();
  t.options.yGradient = t.options.xGradient.map(function(c) {
    return d3.rgb(c).brighter(0.5);
  });
}

var prevheight = height();

window.onresize = function() {
  redraw();
};
redraw();
