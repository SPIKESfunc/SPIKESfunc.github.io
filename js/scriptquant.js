var agoconcarr = [0, -10, -10, -10];
//var agoconcarr = [0, -9, -8, -7];
                    

var affcom = document.getElementById("affcomslider").defaultValue;
var effcom = document.getElementById("effcomslider").defaultValue;
var dencom = document.getElementById("dencomslider").defaultValue;
var efficcom = document.getElementById("efficicomslider").defaultValue;
var agoaff = document.getElementById("agoaffnum").defaultValue;
var agoafflog = document.getElementById("agoafflognum").defaultValue;
var antval0 = document.getElementById("ant0").defaultValue;
var antval1 = document.getElementById("ant1").defaultValue;
var antval2 = document.getElementById("ant2").defaultValue;
var antval3 = document.getElementById("ant3").defaultValue;
var antlogval1 = document.getElementById("antlog1").defaultValue;
var antlogval2 = document.getElementById("antlog2").defaultValue;
var antlogval3 = document.getElementById("antlog3").defaultValue;
var comHalfMaxEffect;

$(document).ready(function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("page").style.position = "relative";
  document.getElementById("footer").style.visibility = "visible";
})

var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}

function findComHalfMaxEffect(lineData){
    comHalfMaxEffect = Math.max.apply(Math, lineData[1])/2;
} 

function calc50(lineData){
    
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= comHalfMaxEffect;
    });
    console.log("maxeffectagoindex" + maxEffectAgoIndex);
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    console.log("halfagoeffect" + halfAgoEffect)
    var agoret = [[halfAgoEffect], [comHalfMaxEffect]];
    console.log("agoret"+ agoret)
	return agoret; //return x, y
}

function resetQuant(){
    agoconcarr = [0, -10, -10, -10];
    affcom = document.getElementById("affcomslider").value = document.getElementById("affcomslider").defaultValue;
    effcom = document.getElementById("effcomslider").value = document.getElementById("effcomslider").defaultValue;
    dencom = document.getElementById("dencomslider").value = document.getElementById("dencomslider").defaultValue;
    efficcom = document.getElementById("efficicomslider").value = document.getElementById("efficicomslider").defaultValue;
    agoaff = document.getElementById("agoaffnum").value = document.getElementById("agoaffnum").defaultValue;
    agoafflog = document.getElementById("agoafflognum").value = document.getElementById("agoafflognum").defaultValue;
    antval0 = document.getElementById("ant0").value = document.getElementById("ant0").defaultValue;
    antval1 = document.getElementById("ant1").value = document.getElementById("ant1").defaultValue;
    antval2 = document.getElementById("ant2").value = document.getElementById("ant2").defaultValue;
    antval3 = document.getElementById("ant3").value = document.getElementById("ant3").defaultValue;
    antlogval1 = document.getElementById("antlog1").value = document.getElementById("antlog1").defaultValue;
    antlogval2 = document.getElementById("antlog2").value = document.getElementById("antlog2").defaultValue;
    antlogval3 = document.getElementById("antlog3").value = document.getElementById("antlog3").defaultValue;
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function graphAlert(div){

    document.getElementById(div).innerHTML = "Agonist property has decreased too far to sustain curve"
}

function graphRemoveAlert(div){
    //Determine which graph to remove alert from
    document.getElementById(div).innerHTML = ""
}

function checkSliderMinCom(){
    let ret = false;
    if(document.getElementById("affcomslider").value == 4){
        ret = true
    }
    if(document.getElementById("effcomslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("dencomslider").value == 0.04){
        ret = true
    }
    if(document.getElementById("efficicomslider").value == 0.04){
        ret = true
    }
    return ret
}

function updateAffinityCom(value){
    affcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else{
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        //need to put agoaff instead of agoafflog?
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        
        updateEverything();
        Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
        Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateEfficacyCom(value){
    effcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else{
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);

        updateEverything();
        Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
        Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }
} 

function updateDensityCom(value){
    dencom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else{
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);

        updateEverything();
        Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
        Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateEfficiencyCom(value){
    efficcom = value;
    if(checkSliderMinCom()){
        Plotly.restyle("quantitative", 'visible', false)
        graphAlert("quantalert")
    }
    else{
        graphRemoveAlert("quantalert")
        Plotly.restyle("quantitative", 'visible', true)
        lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
        lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
        lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
        lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
        findComHalfMaxEffect(lineData0);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        
        updateEverything();
        Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
            traces: [0,1,2,3,4,5,6,7], 
            layout: {}
            },animation)
        schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
        Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
    }

} 

function updateAgoAffinity(value){
    agoaff = value;
    agoafflog = -1*Math.log10(value);
    document.getElementById("agoafflognum").value = agoafflog.toFixed(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAgoAffinityLog(value){
    agoafflog = value;
    agoaff = Math.pow(10, -value);
    document.getElementById("agoaffnum").value = agoaff.toExponential(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist1(value){
    antval1 = value;
    agoconcarr[1] = Math.log10(value);
    document.getElementById("antlog1").value = agoconcarr[1].toFixed(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonistLog1(value){
    agoconcarr[1] = value;
    antval1 = Math.pow(10, value);
    document.getElementById("ant1").value = antval1.toExponential(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist2(value){
    antval2 = value;
    agoconcarr[2] = Math.log10(value);
    document.getElementById("antlog2").value = agoconcarr[2].toFixed(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonistLog2(value){
    agoconcarr[2] = value;
    antval2 = Math.pow(10, value);
    document.getElementById("ant2").value = antval2.toExponential(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}], 
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonist3(value){
    antval3 = value;
    agoconcarr[3] = Math.log10(value);
    document.getElementById("antlog3").value = agoconcarr[3].toFixed(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
}

function updateAntagonistLog3(value){
    agoconcarr[3] = value;
    antval3 = Math.pow(10, value);
    document.getElementById("ant3").value = antval3.toExponential(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    findComHalfMaxEffect(lineData0);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);

    updateEverything();
    Plotly.animate("quantitative",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}],
        traces: [0,1,2,3,4,5,6,7], 
        layout: {}
        },animation)
    schildData = calcSchild(agoconcarr[1], agoconcarr[2], agoconcarr[3], logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function calcAgoHalfEffect(affinity, efficacy, recepDensity, efficiency, agoaffinity, antagconc){
    var ago;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);
    var antconc = antagconc;
    ago = (50*affin*(1+antconc/agoaffin))/((efcay*recep*efcey*100)-(efcay*recep*efcey+1));
    return ago;
}

function calcDoseRatio(presant, absant){
    var doserat;
    doserat = presant/absant;
    return doserat;
}

function calcLogDR(doseratio){
    var logdr;
    logdr = Math.log10(doseratio-1);
    return logdr;
}

function updateEverything(){
    anthalfeff0 = document.getElementById("anteff0").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval0).toExponential(2);
    anthalfeff1 = document.getElementById("anteff1").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval1).toExponential(2);
    anthalfeff2 = document.getElementById("anteff2").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval2).toExponential(2);
    anthalfeff3 = document.getElementById("anteff3").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval3).toExponential(2);
    
    doseratio1 = document.getElementById("antdose1").value = calcDoseRatio(anthalfeff1, anthalfeff0).toFixed(2);
    doseratio2 = document.getElementById("antdose2").value = calcDoseRatio(anthalfeff2, anthalfeff0).toFixed(2);
    doseratio3 = document.getElementById("antdose3").value = calcDoseRatio(anthalfeff3, anthalfeff0).toFixed(2);
    
    logdr1 = document.getElementById("antlogdr1").value = calcLogDR(doseratio1).toFixed(2);
    logdr2 = document.getElementById("antlogdr2").value = calcLogDR(doseratio2).toFixed(2);
    logdr3 = document.getElementById("antlogdr3").value = calcLogDR(doseratio3).toFixed(2);
}


function calcLinesCom(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoconcentration){
    //console.log("calclines ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    //var affin = 10**affinity;
    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    //var agoaffin = 10**agoaffinity;
    var agoaffin = 10**(-1*agoaffinity);

    if(agoconcentration == 0){
        //console.log("agoconc 0 activated")
        agoconc = 0;
        agoaffin = 0;
        for (i=-12; i<-2;i=i+STEP){
            effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin);
            data[0].push(i);
            data[1].push(effect);
        }
    }
    else{
    	agoconc = 10**agoconcentration;
    	for (i=-12; i<-2;i=i+STEP){
        	effect = (10**i*efcay*recep*efcey*100)/(10**i*(efcay*recep*efcey+1)+affin*(1+agoconc/agoaffin));
        	data[0].push(i);
        	data[1].push(effect);
    	}
	}
    return data;
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000"]

function plotGraphCom(chart){
    var layout = {
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
    	var lineData = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[j])
   		if(j==0){
			var graph = {
        		x: lineData[0],
        		y: lineData[1],
       			mode: "lines",
       			name: 0+"nM",
                line: {
                    color: linecolours[j],
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
       			name: 10**agoconcarr[j]*1000000000+"nM",
                line: {
                    color: linecolours[j],
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
        var halfData = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[i]);
        findComHalfMaxEffect(calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[0]));
        data50 = calc50(halfData); //plot the 50% effect marker
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
plotGraphCom("quantitative");

var anthalfeff0 = document.getElementById("anteff0").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval0).toExponential(2);
var anthalfeff1 = document.getElementById("anteff1").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval1).toExponential(2);
var anthalfeff2 = document.getElementById("anteff2").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval2).toExponential(2);
var anthalfeff3 = document.getElementById("anteff3").value = calcAgoHalfEffect(affcom, effcom, dencom, efficcom, agoafflog, antval3).toExponential(2);

var doseratio1 = document.getElementById("antdose1").value = calcDoseRatio(anthalfeff1, anthalfeff0).toFixed(2);
var doseratio2 = document.getElementById("antdose2").value = calcDoseRatio(anthalfeff2, anthalfeff0).toFixed(2);
var doseratio3 = document.getElementById("antdose3").value = calcDoseRatio(anthalfeff3, anthalfeff0).toFixed(2);

var logdr1 = document.getElementById("antlogdr1").value = calcLogDR(doseratio1).toFixed(2);
var logdr2 = document.getElementById("antlogdr2").value = calcLogDR(doseratio2).toFixed(2);
var logdr3 = document.getElementById("antlogdr3").value = calcLogDR(doseratio3).toFixed(2);

function calcSchild(logval1,logval2, logval3, dr1, dr2, dr3){ //add 3 other concentrations as args
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

function plotSchild(chart){
	var layout = {
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

    var lineData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
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

plotSchild("schild");


function showInstructionsQuant() {
    $('#instructions').modal('show');
    $('.nav-tabs a[href="#quant"]').tab('show');
};