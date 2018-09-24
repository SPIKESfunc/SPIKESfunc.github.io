
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
var calc50aff

function updateAffinityAff(value){
    affaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
	lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
	lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
	lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    calc50aff = [calc50(lineData0), calc50(lineData1), calc50(lineData2), calc50(lineData3), calc50(lineData4)];
	
	Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, {x: calc50aff}], 
        traces: [0,1,2,3,4,5], 
        layout: {}
        },animation)
	 
} 

function updateEfficacyAff(value){
    effaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    calc50aff = [calc50(lineData0), calc50(lineData1), calc50(lineData2), calc50(lineData3), calc50(lineData4)];
	
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, {x: calc50aff}], 
        traces: [0,1,2,3,4,5], 
        layout: {}
        },animation)
} 

function updateDensityAff(value){
    denaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    calc50aff = [calc50(lineData0), calc50(lineData1), calc50(lineData2), calc50(lineData3), calc50(lineData4)];
	
    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, {x: calc50aff}], 
        traces: [0,1,2,3,4,5], 
        layout: {}
        },animation)
} 

function updateEfficiencyAff(value){
    efficaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    calc50aff = [calc50(lineData0), calc50(lineData1), calc50(lineData2), calc50(lineData3), calc50(lineData4)];

    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, {x: calc50aff}], 
        traces: [0,1,2,3,4,5], 
        layout: {}
        },animation)

} 

function updateAgoAffinityAff(value){
    agoaffaff = value;
    lineData0 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[0]);
    lineData1 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[1]);
    lineData2 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[2]);
    lineData3 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[3]);
    lineData4 = calcLinesAff(affaff,effaff,denaff,efficaff,agoaffaff,agoeffaff,agoconcarr[4]);
    calc50aff = [calc50(lineData0), calc50(lineData1), calc50(lineData2), calc50(lineData3), calc50(lineData4)];

	Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, {x: calc50aff}], 
        traces: [0,1,2,3,4,5], 
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
    calc50aff = [calc50(lineData0), calc50(lineData1), calc50(lineData2), calc50(lineData3), calc50(lineData4)];

    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, {x: calc50aff}], 
        traces: [0,1,2,3,4,5], 
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
    calc50aff = [calc50(lineData0), calc50(lineData1), calc50(lineData2), calc50(lineData3), calc50(lineData4)];

    Plotly.animate("alloaffin",{
        data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}, {x: calc50aff}], 
        traces: [0,1,2,3,4,5], 
        layout: {}
        },animation)
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

function calc50(lineData){
	var index=lineData[1].findIndex(function(number) {
	return number > 50;
	});
	return lineData[0][index];
}

function plotGraphAff(chart){

    var layout = {
        xaxis:{
            title: "[Agonist] (log M)",
            showline: true,
            range: [-12,-2],
            
        },
        yaxis:{
            title: "Effect (% Emax)",
            showline: true,
            range: [0,100],
            tickvals: [0,20,40,60,80,100]

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
                width: 1
                }
            }
        }
    data.push(graph);
	data50[j] = calc50(lineData);
	
    Plotly.plot(chart,data,layout);
    }
	var trace1 = [{
		x: data50,
		y: [50, 50, 50, 50, 50],
		mode: 'markers',
		name: "50% effect"
	}];
	Plotly.plot(chart,trace1,layout);
}

plotGraphAff("alloaffin");

