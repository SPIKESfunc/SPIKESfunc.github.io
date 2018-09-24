var t = new Trianglify();
var prevheight = height();

window.onresize = function() {
  redraw();
};

redraw();

function redraw() {
  console.log("drawing " + document.body.clientWidth + "x" + height());
  var pattern = t.generate(document.body.clientWidth, (height()+120));
  document.body.setAttribute("style", "background-image: " + pattern.dataUrl);
}

function recolor() {
  t.options.x_gradient = Trianglify.randomColor();
  t.options.y_gradient = t.options.x_gradient.map(function(c) {
    return d3.rgb(c).brighter(0.5);
  });
}

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
