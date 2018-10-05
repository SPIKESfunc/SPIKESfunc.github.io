
var agoconcarr = [0, -9, -8, -7, -6];

var affirr = document.getElementById("affirrslider").defaultValue;
var effirr = document.getElementById("effirrslider").defaultValue;
var denirr = document.getElementById("denirrslider").defaultValue;
var efficirr = document.getElementById("efficiirrslider").defaultValue;
var agoaffirr = document.getElementById("agoaffirrslider").defaultValue;

var animation = {
    transition: {
        duration: 100,
        easing: "exp-in-out"
    }
}

function checkSliderMinIrr(){
    let ret = false;
    if(document.getElementById("affirrslider").value == 4){
        ret = true
    }
    if(document.getElementById("effirrslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("denirrslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("efficiirrslider").value == -0.3){
        ret = true
    }
    return ret
}

function updateAffinityIrr(value){
    affirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert","aff")
    }
    else{
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        console.log(halfData0);
        Plotly.animate("irreversible",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}], 
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }

}

function updateEfficacyIrr(value){
    effirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert","eff")
    }
    else{
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("irreversible",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}], 
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }
} 

function updateDensityIrr(value){
    denirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert","den")
    }
    else{
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("irreversible",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}], 
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }
} 

function updateEfficiencyIrr(value){
    efficirr = value;
    if(checkSliderMinIrr()){
        Plotly.restyle("irreversible", 'visible', false)
        graphAlert("irralert","effic")
    }
    else{
        graphRemoveAlert("irralert")
        Plotly.restyle("irreversible", 'visible', true)
        lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
        lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
        lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
        lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
        lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        Plotly.animate("irreversible",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}], 
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }

} 

function updateAgoAffinityIrr(value){
    agoaffirr = value;
    
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}], 
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
    //I'm doing something wrong if I try just place lineData into newData, below works though
    

}

function resetIrr(){
    affirr = document.getElementById("affirrslider").value = document.getElementById("affirrslider").defaultValue;
    effirr = document.getElementById("effirrslider").value = document.getElementById("effirrslider").defaultValue;
    denirr = document.getElementById("denirrslider").value;
    efficirr = document.getElementById("denirrslider").value = document.getElementById("efficiirrslider").defaultValue;
    agoaffirr = document.getElementById("agoaffirrslider").value = document.getElementById("agoaffirrslider").defaultValue;
    lineData0 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[0]);
    lineData1 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[1]);
    lineData2 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[2]);
    lineData3 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[3]);
    lineData4 = calcLinesIrr(affirr,effirr,denirr,efficirr,agoaffirr,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);
    Plotly.animate("irreversible",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}], 
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
}

function calc50(lineData){

    var halfMaxEffect = Math.max.apply(Math, lineData[1])/2; //get the 50% value
    //var halfMaxEffect = lineData[1][1000]/2
	var maxEffectAgoIndex = lineData[1].findIndex(function(number) { //get the x-index for the 50% value
	    return number >= halfMaxEffect;
    });
    var halfAgoEffect = lineData[0][maxEffectAgoIndex]; //get the x value corresponding to 50% value
    var agoret = [[halfAgoEffect], [halfMaxEffect]];
	return agoret; //return x, y

}

function calcLinesIrr(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoconcentration){
    console.log("calclinesirr ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
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
        //console.log("agoconc not 0 activated")
        agoconc = 10**agoconcentration;
        for (i=-12; i<-2;i=i+STEP){
            effect = (((10**i)/affin)*efcay*recep*efcey*100)/(((10**i)/affin)*(efcay*recep*efcey+1+(agoconc/agoaffin))+1+(agoconc/agoaffin));
            data[0].push(i);
            data[1].push(effect);
        }
    }
    
    return data;
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"]

function plotGraphIrr(chart){

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
            dtick: 10

        }
    }

    var j;
    for(j = 0; j<5; j++){
        var data= [];
        var lineData = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[j])

        if(j==0){
            var graph = {
                x: lineData[0],
                y: lineData[1],
                mode: "lines",
                name: 0+"nM",
                line: {
                    color: linecolours[j],
                    width: 1
                }
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
                }
            }
        }
        data.push(graph);

        Plotly.plot(chart,data,layout, {responsive: true});
    }
    var i;
    legendview = [true, false, false, false, false]
    for(i = 0; i<5; i++){
        var halfData = calcLinesIrr(affirr, effirr, denirr, efficirr, agoaffirr, agoconcarr[i]);
        data50 = calc50(halfData); //plot the 50% effect marker
        var trace1 = [{
            x: data50[0],
            y: data50[1],
            mode: 'markers',
            name: "EC50 Value",
            marker: {
                color: "orange"
            },
            showlegend: legendview[i]
        }];
        Plotly.plot(chart,trace1,layout, {responsive: true});
    }
}
plotGraphIrr("irreversible");
