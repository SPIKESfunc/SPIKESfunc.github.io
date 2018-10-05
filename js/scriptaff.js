
var affaff = document.getElementById("affaffslider").defaultValue;
var effaff = document.getElementById("effaffslider").defaultValue;
var denaff = document.getElementById("denaffslider").defaultValue;
var efficaff = document.getElementById("efficiaffslider").defaultValue;
var agoaffaff = document.getElementById("agoaffslider").defaultValue;
var agoeffaff = document.getElementById("agoeffaffslider").defaultValue;


var agoconcarr = [0, -9, -8, -7, -6];

var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}
var calc50aff;

function checkSliderMinAff(){
    let ret = false;
    if(document.getElementById("affaffslider").value == 4){
        ret = true
    }
    if(document.getElementById("effaffslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("denaffslider").value == -0.3){
        ret = true
    }
    if(document.getElementById("efficiaffslider").value == -0.3){
        ret = true
    }
    return ret
}

function updateAffinityAff(value){
    affaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", 'visible', false)
        graphAlert("affalert","aff")
    }
    else{
        graphRemoveAlert("affalert")
        Plotly.restyle("alloaffin", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
	    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
	    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
	
        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }	 
}  

function updateEfficacyAff(value){
    effaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", 'visible', false)
        graphAlert("affalert","eff")
    }
    else{
        graphRemoveAlert("affalert")
        Plotly.restyle("alloaffin", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        
        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }
} 

function updateDensityAff(value){
    denaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", 'visible', false)
        graphAlert("affalert","den")
    }
    else{
        graphRemoveAlert("affalert")
        Plotly.restyle("alloaffin", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);
        
        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)
    }
} 

function updateEfficiencyAff(value){
    efficaff = value;
    if(checkSliderMinAff()){
        Plotly.restyle("alloaffin", 'visible', false)
        graphAlert("affalert","effic")
    }
    else{
        graphRemoveAlert("affalert")
        Plotly.restyle("alloaffin", 'visible', true)
        lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
        lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
        lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
        lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
        lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
        halfData0 = calc50(lineData0);
        halfData1 = calc50(lineData1);
        halfData2 = calc50(lineData2);
        halfData3 = calc50(lineData3);
        halfData4 = calc50(lineData4);

        Plotly.animate("alloaffin",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
            {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
            y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
            traces: [0,1,2,3,4,5,6,7,8,9], 
            layout: {}
            },animation)

    }

} 

function updateAgoAffinityAff(value){
    agoaffaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

	Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)

}

function updateAgoEffectAff(value){
    agoeffaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]},
        {x: halfData0[0], y: halfData0[1]}, {x: halfData1[0], y: halfData1[1]}, {x: halfData2[0],
        y: halfData2[1]}, {x: halfData3[0], y: halfData3[1]}, {x: halfData4[0], y: halfData4[1]}],  
        traces: [0,1,2,3,4,5,6,7,8,9], 
        layout: {}
        },animation)
}

function resetAff(){
    affaff = document.getElementById("affaffslider").value = document.getElementById("affaffslider").defaultValue;
    effaff = document.getElementById("effaffslider").value = document.getElementById("effaffslider").defaultValue;
    denaff = document.getElementById("denaffslider").value = document.getElementById("denaffslider").defaultValue;
    efficaff = document.getElementById("efficiaffslider").value = document.getElementById("efficiaffslider").defaultValue;
    agoaffaff = document.getElementById("agoaffslider").value = document.getElementById("agoaffslider").defaultValue;
    agoeffaff = document.getElementById("agoeffaffslider").value = document.getElementById("agoeffaffslider").defaultValue;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    halfData0 = calc50(lineData0);
    halfData1 = calc50(lineData1);
    halfData2 = calc50(lineData2);
    halfData3 = calc50(lineData3);
    halfData4 = calc50(lineData4);

    Plotly.animate("alloaffin",{
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

function calcLinesAff(affinity, efficacy, recepDensity, efficiency,agoaffinity, agoeffect, agoconcentration){
    //console.log("calclines ran")
    //console.log(affinity, efficacy, recepDensity, efficiency)
    const STEP = 0.05;
    var data = [[],[]];
    //Inverse log input values

    var affin = 10**(-1*affinity);
    var efcay = 10**efficacy;
    var recep = 10**recepDensity;
    var efcey = 10**efficiency;
    var agoaffin = 10**(-1*agoaffinity);


    //var agoeff = 10**(agoeffect)
    var agoeff = 10**(-1*agoeffect);

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
            effect = ((10**i)*efcay*recep*efcey*100)/((10**i)*(efcay*recep*efcey+1)+((affin*(agoconc/agoaffin + 1))/(1+((agoeff*agoconc)/agoaffin))));
            data[0].push(i);
            data[1].push(effect);
        }
    }
    return data;
}

var linecolours = ["#000000", "#ff6666", "#ff3333", "#ff0000", "#cc0000"]

function plotGraphAff(chart){

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
	var data50 = [];
    for(j = 0; j<5; j++){
        var data= [];
        var lineData = calcLinesAff(affaff, effaff, denaff, efficaff, agoaffaff, agoeffaff, agoconcarr[j])

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
	data50[j] = calc50(lineData);
	
    Plotly.plot(chart,data,layout, {responsive: true});
    }
    var i;
    legendview = [true, false, false, false, false]
    for(i = 0; i<5; i++){
        var halfData = calcLinesAff(affaff, effaff, denaff, efficaff, agoaffaff, agoeffaff, agoconcarr[i]);
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

plotGraphAff("alloaffin");

