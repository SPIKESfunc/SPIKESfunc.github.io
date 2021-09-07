var agoconcarrfun = [0, -9, -8, -7];

var afffun1= document.getElementById("afffunslider1").defaultValue;
var efffun1 = document.getElementById("efffunslider1").defaultValue;
var denfun1 = document.getElementById("denfunslider1").defaultValue;
var efficfun1 = document.getElementById("efficifunslider1").defaultValue;
var afffun2= document.getElementById("afffunslider2").defaultValue;
var efffun2 = document.getElementById("efffunslider2").defaultValue;
var denfun2 = document.getElementById("denfunslider2").defaultValue;
var efficfun2 = document.getElementById("efficifunslider2").defaultValue;
var agoafflogfun = -1*Math.log10(afffun2);

var antval0fun = document.getElementById("ant0fun").defaultValue;
var antval1fun = document.getElementById("ant1fun").defaultValue;
var antval2fun = document.getElementById("ant2fun").defaultValue;
var antval3fun = document.getElementById("ant3fun").defaultValue;
var antlogval1fun = document.getElementById("antlog1fun").defaultValue;
var antlogval2fun = document.getElementById("antlog2fun").defaultValue;
var antlogval3fun = document.getElementById("antlog3fun").defaultValue;
var funHalfMaxEffect;


$(document).ready(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("page").style.visibility = "visible";
    document.getElementById("page").style.position = "relative";
    document.getElementById("footer").style.visibility = "visible";
  })
  
var animation = {
      transition: {
          duration: 0,
          easing: "cubic-in-out"
      },
      frame: {
          duration: 0,
          redraw: false,
   }
}
//
function titleFun(){
    document.getElementById("tabtitle").innerHTML = "Schild Plot Generator for Functional Antagonist"
}
//
function findFunHalfMaxEffect(lineData){
    funHalfMaxEffect = Math.max.apply(Math, lineData[1])/2;
}
//
function calc50Fun(lineData){
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= comHalfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [funHalfMaxEffect]];
	return agoret; //return x, y
    
}
//
function resetQuantFun(){
    agoconcarrfun = [0, -9, -8, -7];
    afffun1 = document.getElementById("afffunslider1").value = document.getElementById("afffunslider1").defaultValue;
    efffun1 = document.getElementById("efffunslider1").value = document.getElementById("efffunslider1").defaultValue;
    denfun1 = document.getElementById("denfunslider1").value = document.getElementById("denfunslider1").defaultValue;
    efficfun1 = document.getElementById("efficifunslider1").value = document.getElementById("efficifunslider1").defaultValue;
    afffun2 = document.getElementById("afffunslider2").value = document.getElementById("afffunslider2").defaultValue;
    efffun2 = document.getElementById("efffunslider2").value = document.getElementById("efffunslider2").defaultValue;
    denfun2 = document.getElementById("denfunslider2").value = document.getElementById("denfunslider2").defaultValue;
    efficfun2 = document.getElementById("efficifunslider2").value = document.getElementById("efficifunslider2").defaultValue;
    
    antval0fun = document.getElementById("ant0fun").value = document.getElementById("ant0fun").defaultValue;
    antval1fun = document.getElementById("ant1fun").value = document.getElementById("ant1fun").defaultValue;
    antval2fun = document.getElementById("ant2fun").value = document.getElementById("ant2fun").defaultValue;
    antval3fun = document.getElementById("ant3fun").value = document.getElementById("ant3fun").defaultValue;
    antlogval1fun = document.getElementById("antlog1fun").value = document.getElementById("antlog1fun").defaultValue;
    antlogval2fun = document.getElementById("antlog2fun").value = document.getElementById("antlog2fun").defaultValue;
    antlogval3fun = document.getElementById("antlog3fun").value = document.getElementById("antlog3fun").defaultValue;
    lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);

    updateEverythingFun();
    Plotly.animate("quantitativeFun",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function graphAlertFun(div){

    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}
//
function graphRemoveAlertFun(div){
    document.getElementById(div).innerHTML = ""
}
//
function checkSliderMinFun(){
    let ret = false;
    if(document.getElementById("afffunslider1").value == 4){
        ret = true
    }
    if(document.getElementById("efffunslider1").value == 0.04){
        ret = true
    }
    if(document.getElementById("denfunslider1").value == 0.04){
        ret = true
    }
    if(document.getElementById("efficifunslider1").value == 0.04){
        ret = true
    }
    return ret
}
//
function updateAffinityFun1(value){
    afffun1 = value;
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        
        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateEfficacyFun1(value){
    efffun1 = value;
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);

        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateDensityFun1(value){
    denfun1 = value;
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);

        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 
//
function updateEfficiencyFun1(value){
    efficfun1 = value;
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        
        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 
//
function updateAffinityFun2(value){
    afffun2 = value;
    agoafflogfun = -1*Math.log10(value);
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        
        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateEfficacyFun2(value){
    efffun2 = value;
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);

        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 
//
function updateDensityFun2(value){
    denfun2 = value;
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);

        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 
//
function updateEfficiencyFun2(value){
    efficfun2 = value;
    if(checkSliderMinFun()){
        Plotly.restyle("quantitativeFun", 'visible', false)
        graphAlert("quantalertFun")
    }
    else{
        graphRemoveAlert("quantalertFun")
        Plotly.restyle("quantitativeFun", 'visible', true)
        lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
        findFunHalfMaxEffect(lineData0);
        halfData0 = calc50Fun(lineData0);
        halfData1 = calc50Fun(lineData1);
        halfData2 = calc50Fun(lineData2);
        halfData3 = calc50Fun(lineData3);
        
        updateEverythingFun();
        Plotly.animate("quantitativeFun",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
        Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 
//
function updateAntagonist1Fun(value){
    antval1fun = value;
    agoconcarrfun[1] = Math.log10(value);
    document.getElementById("antlog1fun").value = agoconcarrfun[1].toFixed(2);
    lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);

    updateEverythingFun();
    Plotly.animate("quantitativeFun",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}
//
function updateAntagonistLog1Fun(value){
    agoconcarrfun[1] = value;
    antval1fun = Math.pow(10, value);
    document.getElementById("ant1fun").value = antval1fun.toExponential(2);
    lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);

    updateEverythingFun();
    Plotly.animate("quantitativeFun",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist2Fun(value){
    antval2fun = value;
    agoconcarrfun[2] = Math.log10(value);
    document.getElementById("antlog2fun").value = agoconcarrfun[2].toFixed(2);
    lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);

    updateEverythingFun();
    Plotly.animate("quantitativeFun",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}
//
function updateAntagonistLog2Fun(value){
    agoconcarrfun[2] = value;
    antval2fun = Math.pow(10, value);
    document.getElementById("ant2fun").value = antval2fun.toExponential(2);
    lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);

    updateEverythingFun();
    Plotly.animate("quantitativeFun",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonist3Fun(value){
    antval3fun = value;
    agoconcarrfun[3] = Math.log10(value);
    document.getElementById("antlog3fun").value = agoconcarrfun[3].toFixed(2);
    lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);

    updateEverythingFun();
    Plotly.animate("quantitativeFun",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}
//
function updateAntagonistLog3Fun(value){
    agoconcarrfun[3] = value;
    antval3fun = Math.pow(10, value);
    document.getElementById("ant3fun").value = antval3fun.toExponential(2);
    lineData0 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData1 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData2 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    lineData3 = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]);
    findFunHalfMaxEffect(lineData0);
    halfData0 = calc50Fun(lineData0);
    halfData1 = calc50Fun(lineData1);
    halfData2 = calc50Fun(lineData2);
    halfData3 = calc50Fun(lineData3);

    updateEverythingFun();
    Plotly.animate("quantitativeFun",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchildFun(agoconcarrfun[1], agoconcarrfun[2], agoconcarrfun[3], logdr1fun, logdr2fun, logdr3fun);
    Plotly.animate("schildFun",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}
// didn't done yet
function calcAgoHalfEffectFun(affinity, efficacy, recepDensity, efficiency, agoaffinity, antagconc){
    var ago;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var antconc = antagconc;
    ago = (funHalfMaxEffect*(affin*(antconc/agoaffin)))/((efcay*recep*efcey*100)-(funHalfMaxEffect*(efcay*recep*efcey+1)));
    console.log(ago);
    return ago;
}
//
function calcDoseRatioFun(presant, absant){
    var doserat;
    doserat = presant/absant;
    return doserat;
}
//
function calcLogDRFun(doseratio){
    var logdr;
    logdr = Math.log10(doseratio-1);
    return logdr;
}
//
function updateEverythingFun(){
    anthalfeff0fun = document.getElementById("anteff0fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval0fun).toExponential(2);
    anthalfeff1fun = document.getElementById("anteff1fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval1fun).toExponential(2);
    anthalfeff2fun = document.getElementById("anteff2fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval2fun).toExponential(2);
    anthalfeff3fun = document.getElementById("anteff3fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval3fun).toExponential(2);

    doseratio1fun = document.getElementById("antdose1fun").value = calcDoseRatioFun(anthalfeff1fun, anthalfeff0fun).toFixed(2);
    doseratio2fun = document.getElementById("antdose2fun").value = calcDoseRatioFun(anthalfeff2fun, anthalfeff0fun).toFixed(2);
    doseratio3fun = document.getElementById("antdose3fun").value = calcDoseRatioFun(anthalfeff3fun, anthalfeff0fun).toFixed(2);
    
    logdr1fun = document.getElementById("antlogdr1fun").value = calcLogDRFun(doseratio1fun).toFixed(2);
    logdr2fun = document.getElementById("antlogdr2fun").value = calcLogDRFun(doseratio2fun).toFixed(2);
    logdr3fun = document.getElementById("antlogdr3fun").value = calcLogDRFun(doseratio3fun).toFixed(2);
}
//done
function calcLinesFun(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoefficacy, agodensity, agoefficiency, agoconcentration){
    const STEP = 0.01;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var agoeff = 10**(agoefficacy);
    var agoden = 10**agodensity;
    var agoeffic = 10**agoefficiency;

    var emaxa = 100;
    var emaxb = 100;

    if(agoconcentration == 0){
        agoconc = 0;
        agoaffin = 0;
        for (i=-12; i<-2;i=i+STEP){
            //effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push((10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin));
        }
    }
    else{
        agoconc = 10**agoconcentration;
        for (i=-12; i<-2;i=i+STEP){
            var aconc = 10**i;

            effect1 = aconc*efcay*recep*efcey*emaxa;
            effect2 = (aconc*((efcay*recep*efcey)+1))+affin;
            effect3 = agoconc*agoeff*agoden*agoeffic*emaxb;
            effect4 = (agoconc*((agoeff*agoden*agoeffic)+1))+agoaffin;

            effect = ((effect1/effect2)-(effect3/effect4));

            data[0].push(i);
            data[1].push(effect);   
        }
    }
    return data;
}

var linecoloursfun = ["#000000", "#ff6666", "#ff3333", "#ff0000"]
//
function plotGraphFun(chart){
    var layout = {
        height:372,
        width:450,
        xaxis:{
            title: "[Agonist] (log M)",
            showline: true,
            range: [-12,-2],
            dtick: 1
        },
        yaxis:{
            title: "Effect (% Emax)",
            showline: true,
            range: [0,100],
            tickvals: [0,20,40,60,80,100],
            dtick: 10
        }
    }
    var j;

    for(j = 0; j<4; j++){
    	var data = []
    	var lineData = calcLinesFun(afffun1, efffun1, denfun1, efficfun1, afffun2, efffun2, denfun2, efficfun2, agoconcarrfun[j])
   		if(j==0){
			var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 0+"nM",
                line: {
                    color: linecoloursfun[j],
                    width: 1
                },
                showlegend: false
    		}
   		}
   		else{
    	var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 10**agoconcarrfun[j]*1000000000+"nM",
                line: {
                    color: linecoloursfun[j],
                    width: 1
                },
                showlegend: false
    		}
    	}
    	data.push(graph);
    	Plotly.plot(chart,data,layout, {responsive: true});
	}
    var i;
    legendview = [true, false, false, false]
    for(i = 0; i<4; i++){
        var halfData = calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[i]);
        findFunHalfMaxEffect(calcLinesFun(afffun1,efffun1,denfun1,efficfun1, afffun2,efffun2,denfun2,efficfun2, agoconcarrfun[0]));
        data50 = calc50Fun(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "EC<sub>50</sub> Value",
            marker: {
                color: "orange"
            },
            showlegend: legendview[i]
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}
//
plotGraphFun("quantitativeFun");

var anthalfeff0fun = document.getElementById("anteff0fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval0fun).toExponential(2);
var anthalfeff1fun = document.getElementById("anteff1fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval1fun).toExponential(2);
var anthalfeff2fun = document.getElementById("anteff2fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval2fun).toExponential(2);
var anthalfeff3fun = document.getElementById("anteff3fun").value = calcAgoHalfEffectFun(afffun1, efffun1, denfun1, efficfun1, afffun2, antval3fun).toExponential(2);

var doseratio1fun = document.getElementById("antdose1fun").value = calcDoseRatioFun(anthalfeff1fun, anthalfeff0fun).toFixed(2);
var doseratio2fun = document.getElementById("antdose2fun").value = calcDoseRatioFun(anthalfeff2fun, anthalfeff0fun).toFixed(2);
var doseratio3fun = document.getElementById("antdose3").value = calcDoseRatioFun(anthalfeff3fun, anthalfeff0fun).toFixed(2);

var logdr1fun = document.getElementById("antlogdr1fun").value = calcLogDRFun(doseratio1fun).toFixed(2);
var logdr2fun = document.getElementById("antlogdr2fun").value = calcLogDRFun(doseratio2fun).toFixed(2);
var logdr3fun = document.getElementById("antlogdr3fun").value = calcLogDRFun(doseratio3fun).toFixed(2);

function calcSchildFun(logval1,logval2, logval3, dr1, dr2, dr3){ //add 3 other concentrations as args
	logB1 = logval1;
	logB2 = logval2;
    logB3 = logval3;
    logDr1 = dr1;
    logDr2 = dr2;
    logDr3 = dr3;
	var data = [[],[]];
	var xLogs = [-agoafflog, logB1, logB2, logB3] //x values for the schild
	var logDr1 = [0, logDr1, logDr2, logDr3]
	

	data[0] = xLogs;
	data[1] = logDr1;
	
	return data;

}

function plotSchildFun(chart){
	var layout = {
        height:403,
        width:450,
        xaxis:{
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-11,-4],
            
        },
        yaxis:{
            title: "Log(DR-1)",
            showline: true,
            range: [0,4],
            tickvals: [0, 1, 2, 3, 4]

        },
	}	
	var data = []

    var lineData = calcSchildFun(antlogval1fun, antlogval2fun, antlogval3fun, logdr1fun, logdr2fun, logdr3fun);
	var trace1 = {
		x: lineData[0],
		y: lineData[1],
		mode: 'lines+markers',
		line: {
			width: 1
		}
	}
	data.push(trace1);
	
	Plotly.plot(chart, data, layout, {responsive: true});
}

plotSchildFun("schildFun");

//QUESTION BOX Haven't changed!!!!
var questionsSchildfun = ["test question one","Why would you consider conducting a Schild analysis?",
"Competitive antagonists cause parallel rightward shifts of the agonist dose-response curve.  How is this quantitated? <br><i>This effect can be tested using the Schild Plot Generator</i>",
"What does a Schild Plot plot?<br><i>This can be determined using the Schild Plot Generator</i>",
"What useful information regarding the properties of the competitive antagonist can be obtained from a Schild Plot? ",
"What are the key criteria a Schild Plot should satisfy for the pA<sub>2</sub> value to be a valid estimate of –logK<sub>B</sub>?",
"Do the characteristics of the Schild Plot depend on the properties of the agonist or cell? ",
"What criteria are used to choose the most appropriate antagonist and concentrations for use in a Schild Analysis?",
"Why might a Schild Plot be NONLINEAR or have a SLOPE THAT IS DIFFERENT FROM UNITY?",
"From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>1</sub> receptors and which is the most selective for M<sub>1</sub> receptors?",
"From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>2</sub> receptors and which is the most selective for M<sub>2</sub> receptors?",
"From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>3</sub> receptors and which is the most selective for M<sub>3</sub> receptors?",
"From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>4</sub> receptors and which is the most selective for M<sub>4</sub> receptors?",
"From the Reference Table of –logK<sub>i</sub> values, which Competitive Antagonist has the highest affinity for M<sub>5</sub> receptors and which is the most selective for M<sub>5</sub> receptors?",
"What concentration of methoctramine would be required to occupy 50% of M<sub>3</sub> receptors (in the absence of any other competing ligands)?",
"What concentration of methoctramine would be required to occupy 50% of M<sub>4</sub> receptors (in the absence of any other competing ligands)?",
"What concentration of darifenacin would be required to occupy 50% of M<sub>5</sub> receptors (in the absence of any other competing ligands)?",
"What concentration of methoctramine would be required to occupy 50% of M<sub>5</sub> receptors (in the absence of any other competing ligands)?",
"Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>1</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>1</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>1</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>1</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>1</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>1</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>1</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",      
"Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>2</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>2</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>2</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>2</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>2</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",      
"Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>3</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>3</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>3</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>3</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>3</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>3</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>3</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",      
"Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>4</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>4</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>4</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>4</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>4</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>4</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>4</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",      
"Your research team has conducted a radioligand binding study and determined that Cell X contains a pure population of M<sub>5</sub> receptors. You wish to confirm that this subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists.  Having selected an agonist known to activate the M<sub>5</sub> receptor subtype, <br><b>1.</b> Which antagonist would most clearly identify whether the M<sub>5</sub> receptor subtype mediates the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that is most selective for M<sub>5</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plot would look like if the response was mediated by M<sub>5</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>5</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> If the response was mediated by the M<sub>5</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
"Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>1</sub> and M<sub>2</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>1</sub> and M<sub>2</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>1</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>1</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>2</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>1</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
"Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>2</sub> and M<sub>4</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>2</sub> and M<sub>4</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>4</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>2</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
"Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>3</sub> and M<sub>5</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>3</sub> and M<sub>5</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>3</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>3</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>5</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>3</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
"Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>2</sub> and M<sub>3</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>2</sub> and M<sub>3</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>3</sub> receptors. <br><b>4.</b> If the response was mediated by the M<sub>2</sub> receptor, which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?",
"Your research team has conducted a radioligand binding study and determined that Cell X contains a mixed population of M<sub>2</sub>, M<sub>4</sub> and M<sub>5</sub> receptors. You wish to determine which of these subtypes mediates a particular response in Cell X, so you undertake a Schild analysis using competitive receptor antagonists. Having selected an agonist that activates both receptor subtypes, <br><b>1.</b> Which antagonist would most clearly identify the receptor subtype mediating the agonist-induced response in Cell X? (HINT: choose an antagonist from the “-logK<sub>i</sub> values” list that best distinguishes between M<sub>2</sub> and M<sub>4</sub> receptors based on –logK<sub>i</sub> values?)<br><b>2.</b> Based on your selection of antagonist, use the Schild Plot Generator to predict what the Schild Plots would look like if the response was mediated by M<sub>2</sub> (HINT 1: enter the –logK<sub>i</sub> value of the antagonist for the M<sub>2</sub> receptor into the –logK<sub>B</sub> window, and then select 3 appropriate [antagonist] for use in the Schild analysis. HINT 2: the lowest [antagonist] selected should produce an approximate DR of 3 (to maximise chances of accurately estimating the pA<sub>2</sub> value), and the highest [antagonist] should be 50-100 times larger than the lowest [antagonist] (to readily establish linearity and unit slope)). <br><b>3.</b> Repeat (2) using the same antagonist to predict what the Schild Plot would look like if the agonist was activating M<sub>4</sub> or M<sub>5</sub> receptors. <br><b>4.</b> Which other antagonists might be useful in confirming that the response was being mediated by that receptor subtype?"];
	
	
var answersSchildfun = ["test answer one","The Schild analysis is particularly useful for the classification and identification of the functional roles played by various receptor subtypes.  The Schild analysis allows the determination of the affinity (K<sub>B</sub>) of a competitive antagonist at a particular receptor that is mediating the response produced by an agonist.  By comparing the determined K<sub>B</sub> value of the antagonist to known affinity values (typically –logK<sub>i</sub> values determined from competition binding studies using homogeneous populations of pure receptor subtypes) the receptor mediating the response can be identified.  The process typically involves the study of numerous receptor-selective competitive antagonists.",
"The extent of the shift of the agonist dose-response curve is quantitated in terms of a dose ratio (DR).  The dose ratio, also referred to as the concentration ratio, is the ratio of the concentration of an agonist that produces a specified response (often but not necessarily 50% Emax) in the presence of an antagonist, to the agonist concentration that produces the same response in the absence of the competitive antagonist.  The larger the rightward shift of the agonist dose-response curve, the larger the dose ratio.  This effect can be observed using the Schild Plot Generator.",
"The Schild Plot plots the log[antagonist] (M) on the x-axis against the calculated log(DR-1) on the y-axis.  This effect can be observed using the Schild Plot Generator.",
"If certain conditions are met (linearity, unity of slope), then a Schild Plot can be used to generate a pA<sub>2</sub> value, which is an estimate of the affinity of the competitive antagonist (K<sub>B</sub> value) for the receptor through which the agonist is producing the response.  The pA<sub>2</sub> is determined by measuring the value of the dose ratio (DR) at several antagonist concentrations, allowing an estimate of the antagonist concentration at which log(DR-1) is zero (i.e. where the Schild plot intercepts with the x-axis).  This is commonly done by graphical extrapolation or interpolation.  Thus, pA<sub>2</sub> is the –log[antagonist] that produces a DR equal to 2, and is the –logK<sub>B</sub> value of the antagonist for the receptor. ",
"<br><b>1.</b> The Schild plot should be linear.  In order to establish linearity, the Schild plot should be determined using 3 or more [antagonist].<br><b>2.</b> The Schild Plot should have a slope of unity (a slope that is not significantly different from one). ",
"<b>NO</b>, the shape and position of the Schild Plot should be independent of agonist affinity or efficacy and cell R<sub>T</sub> or <i>f</i>.   Test this by changing the properties of the agonist and/or cell and observing the effect on the Schild plot.  This is one of the great advantages of the Schild Analysis.  ",
"<br><b>1.</b> Use a range of different antagonists that display selectivity for the receptor subtypes.  For example, the characterisation of the M receptor subtype mediating a response may require the use of antagonists such as pirenzepine (M<sub>1</sub> receptor-selective), methoctramine (M<sub>2</sub>-selective), darifenacin (M<sub>3</sub>), MT-3 (M<sub>4</sub>) and S-secoverine (M<sub>5</sub>).<br><b>2.</b> Use a wide range of concentrations of the antagonists (at least 30-100 fold concentration range), ensuring that the lower concentrations used generate log(DR-1) values that are close to zero and thus more likely to provide a good estimate of the pA<sub>2</sub> value (less extrapolation to the x-axis required). This effect can be observed using the Schild Plot Generator.",
"<br><b>1.</b> Antagonist is not a competitive antagonist.  Funeversible antagonists will generate Schild plots with slope > 1.0, and Allosteric antagonists will generate Schild plots with slope < 1.0.  Neither funeversible nor allosteric antagonists are ideal for use in Schild studies.<br><b>2.</b> Antagonist (or agonist) produces toxicity at high concentrations then the curve will be nonlinear with slope > 1.<br><b>3.</b> Antagonist is the substrate of a saturable uptake system, producing a Schild plot that is nonlinear with a slope > 1.0.",
"DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>1</sub> receptors (8.9). <br>Pirenzepine is the most selective for M<sub>1</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>1</sub> compared to any other receptor subtype (at least 0.8 log units different).",
"S-secoverine has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>2</sub> receptors (7.9). <br>DAU-5884 is the most selective for M<sub>2</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> compared to any other receptor subtype (at least 1.0 log units different).",
"DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>3</sub> receptors (8.9). <br>Darifenacin is the most selective for M<sub>3</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>3</sub> compared to any other receptor subtype (at least 0.8 log units different).",
"DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>4</sub> receptors (8.5). <br>MT-3 is the most selective for M<sub>4</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>4</sub> compared to any other receptor subtype (at least 1.4 log units different).",
"DAU-5884 has the highest affinity because it has the highest –logK<sub>i</sub> value at M<sub>5</sub> receptors (8.1). <br>S-secoverine is the most selective for M<sub>5</sub> receptors because it has the greatest difference in –logK<sub>i</sub> values for M<sub>5</sub> compared to any other receptor subtype (at least 1.2 log units different).",
"10<sup>-6</sup>M.  The –logK<sub>i</sub> value of methoctramine for M<sub>3</sub> receptors is 6.0.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -6.0 (i.e. 10<sup>-6</sup>) is the molar concentration of methoctramine that will occupy 50% of M<sub>3</sub> receptors.",
"10<sup>-7</sup>M.  The –logK<sub>i</sub> value of methoctramine for M<sub>4</sub> receptors is 7.0.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -7.0 (i.e. 10<sup>-7</sup>) is the molar concentration of methoctramine that will occupy 50% of M<sub>4</sub> receptors.",
"10<sup>-8</sup>M.  The –logK<sub>i</sub> value of darifenacin for M<sub>5</sub> receptors is 8.0.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -8.0 (i.e. 10<sup>-8</sup>) is the molar concentration of darifenacin that will occupy 50% of M<sub>5</sub> receptors.",
"5x10<sup>-7</sup>M.  The –logK<sub>i</sub> value of methoctramine for M<sub>5</sub> receptors is 6.3.  The K<sub>i</sub> value should be the same as the K<sub>A</sub> value (just measured using different experimental approaches), and the K<sub>A</sub> value is the concentration of ligand (antagonist in this case) that occupies 50% of receptors.  Thus, the antilog of -6.3 (i.e. 10<sup>-6.3</sup>, i.e. 5x10<sup>-7</sup>) is the molar concentration of methoctramine that will occupy 50% of M<sub>5</sub> receptors.",
"<br><b>1.</b> Pirenzepine, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>1</sub> compared to any other receptor subtype (at least 0.8 log units different).<br><b>2.</b> The pA<sub>2</sub> value for pirenzepine should be the same as the –logK<sub>i</sub> value (8.2).<br><b>3.</b> MT-3 with at least a 0.7 log unit difference between M<sub>1</sub> and any other subtype, and would also be useful for confirming M<sub>1</sub> receptors.",
"<br><b>1.</b> DAU-5884, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> compared to any other receptor subtype (at least 1.0 log units different).<br><b>2.</b> The pA<sub>2</sub> value for DAU-5884 should be the same as the –logK<sub>i</sub> value (7.1).<br><b>3.</b> Methoctramine and darifenacin both have at least a 0.7 log unit difference between M<sub>2</sub> and any other subtype, and would also be useful for confirming M<sub>2</sub> receptors.",
"<br><b>1.</b> Darifenacin, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>3</sub> compared to any other receptor subtype (at least 0.8 log units different).<br><b>2.</b> The pA<sub>2</sub> value for darifenacin should be the same as the –logK<sub>i</sub> value (8.8).<br><b>3.</b> PD102807 with at least a 0.6 log unit difference between M<sub>3</sub> and any other subtype, and would also be useful for confirming M<sub>3</sub> receptors.",
"<br><b>1.</b> MT-3, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>4</sub> compared to any other receptor subtype (at least 1.4 log units different).<br><b>2.</b> The pA<sub>2</sub> value for MT-3 should be the same as the –logK<sub>i</sub> value (8.1).<br><b>3.</b> PD102807 has at least a 1.2 log unit difference between M<sub>4</sub> and any other subtype, and would also be useful for confirming M<sub>4</sub> receptors.",
"<br><b>1.</b> S-secoverine, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>5</sub> compared to any other receptor subtype (at least 1.2 log units different).<br><b>2.</b> The pA<sub>2</sub> value for S-secoverine should be the same as the –logK<sub>i</sub> value (6.5).<br><b>3.</b> PD102807 with at least a 1.1 log unit difference between M<sub>5</sub> and any other subtype, and would also be useful for confirming M<sub>5</sub> receptors.",
"<br><b>1.</b> DAU-5884, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>1</sub> and M<sub>2</sub> receptors (1.8 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 1.8 log units.<br><b>4.</b> Pirenzepine with a 1.7 log unit difference between M<sub>1</sub> and M<sub>2</sub> receptors would also be useful for distinguishing between M<sub>1</sub> and M<sub>2</sub> receptors.",
"<br><b>1.</b> MT-3, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> and M<sub>4</sub> receptors (2.2 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 2.2 log units.<br><b>4.</b> PD102807 with a 1.8 log unit difference between M<sub>2</sub> and M<sub>4</sub> receptors would also be useful for distinguishing between M<sub>2</sub> and M<sub>4</sub> receptors.",
"<br><b>1.</b> PD102807, because it has the greatest difference in –logK<sub>i</sub> values for M<sub>3</sub> and M<sub>5</sub> receptors (1.7 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 1.7 log units.<br><b>4.</b> S-secoverine with a 1.2 log unit difference between M<sub>3</sub> and M<sub>5</sub> receptors would also be useful for distinguishing between M<sub>3</sub> and M<sub>5</sub> receptors.",
"<br><b>1.</b> Could choose either darifenacin or DAU-5884 because both the greatest difference in –logK<sub>i</sub> values for M<sub>2</sub> and M<sub>3</sub> receptors (1.8 log units).<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by 1.8 log units.<br><b>4.</b> Methoctramine with a 1.7 log unit difference between M<sub>2</sub> and M<sub>3</sub> receptors would also be useful for distinguishing between M<sub>2</sub> and M<sub>3</sub> receptors.",
"<br><b>1.</b> PD102807, because it has at least a 1 log unit difference in –logK<sub>i</sub> values for each pair of M<sub>2</sub>, M<sub>4</sub> and M<sub>5</sub> receptors.<br><b>2. & 3.</b> The pA<sub>2</sub> values should be the same as the –logK<sub>i</sub> values and also differ by &gt; 1.0 log units.<br><b>4.</b> Methoctramine with a 0.7 log unit difference between each M<sub>2</sub>, M<sub>4</sub> and M<sub>5</sub> receptors would also be useful, but not highly selective. Instead of using one antagonist, consider using 3 antagonists known to be selective for the 3 subtypes (i.e. use DAU-5884 to include/exclude M<sub>2</sub>, MT-3 to include/exclude M<sub>4</sub> & S-secoverine to include/exclude M<sub>5</sub>). "]; 

 
var questionCounterSchildfun = 0;
document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";


function revealAnswerSchildFun() {
    document.getElementById("schildAnswerfun").innerHTML = answersSchildfun[questionCounterSchildfun];
    $('#schildAnswerModalfun').modal('show');
}


function nextQuestionSchildFun() {
    if (questionCounterSchildfun + 1 == questionsSchildfun.length) { //end of questions
        questionCounterSchildfun++;
        document.getElementById("schildQuestionfun").style.display = "none";
        document.getElementById("revealSchildAnswerfun").style.display = "none";
        document.getElementById("restartMessageSchildfun").style.display = "inline-block";
        document.getElementById("restartQuestionSchildfun").style.display = "inline-block";
        document.getElementById("nextSchildQuestionfun").style.display = "none";
    }
    else {
        questionCounterSchildfun++;
        document.getElementById("restartMessageSchildfun").style.display = "none";
        document.getElementById("restartQuestionSchildfun").style.display = "none";
        document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";
    }
}

function prevQuestionSchildFun() {
    if (!questionCounterSchildfun) { //beginning of questions
        alert("Already at beginning of questions");
    }
    else {
        questionCounterSchildfun--;
        document.getElementById("schildQuestionfun").style.display = "block";
        document.getElementById("nextSchildQuestionfun").style.display = "inline-block";
        document.getElementById("revealSchildAnswerfun").style.display = "inline-block";
        document.getElementById("restartMessageSchildfun").style.display = "none";
        document.getElementById("restartQuestionSchildfun").style.display = "none";
        document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";
    }
}

function restartQuestionSchildFun() {
    questionCounterSchildfun = 0;
    document.getElementById("schildQuestionfun").style.display = "block";
    document.getElementById("nextSchildQuestionfun").style.display = "inline-block";
    document.getElementById("restartMessageSchildfun").style.display = "none";
    document.getElementById("restartQuestionSchildfun").style.display = "none";
    document.getElementById("schildQuestionfun").innerHTML = "<b>" + questionsSchildfun[questionCounterSchildfun] + "</b>";
    document.getElementById("revealSchildAnswerfun").style.display = "inline-block";
}

