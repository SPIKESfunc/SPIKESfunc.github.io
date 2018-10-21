/*global Trianglify d3*/
var t = new Trianglify();


window.onresize = function() {
    redraw();
};

redraw();


function redraw() {
    console.log("drawing "+document.body.clientWidth+"x"+height());
    var pattern = t.generate(document.body.clientWidth, height());
    document.body.setAttribute('style', 'background-image: '+pattern.dataUrl);
    recolor();
}

function recolor() {
    t.options.x_gradient = ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d"];
    t.options.y_gradient = t.options.x_gradient.map(function(c){return d3.rgb(c).brighter(0.5);});
}

function height() {
    return Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
}
window.onload = redraw();