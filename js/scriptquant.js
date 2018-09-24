function loadingScreen() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("page").style.position = "relative";
}

var agoconcarr = [0, -6, -7, -8, -9];
                    

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





var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}

/*
var trace = {
    x: [-10,-9,-8],
    y: [10,20,30],
    
};

//var data = [trace];
var sliderSteps = [];
for(i = -0.3;i<0.7;i+=0.01){
    sliderSteps.push({
        method:'animate',
        label: i,
              
        args: [[i],{
            
            mode:'immediate',
            transition:{duration: 100},
            frame: {duration: 100, redraw: false},
        }]
    });
    
    
}*/

function updateAffinityCom(value){
    //newData = [];
    affcom = value;
    //console.log(aff)
    //need to put agoaff instead of agoafflog?
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[4]); 
    /*var graph = {
        y: lineData[1],
        traces:[0]
    }
    console.log(lineData)
    newData.push(graph);*/
    
    //I'm doing something wrong if I try just place lineData into newData, below works though
    updateEverything();
    Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}],
            traces: [0,1,2,3,4],
            layout: {}
            },animation)
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)
} 

function updateEfficacyCom(value){
    effcom = value;
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[4]); 
    //I'm doing something wrong if I try just place lineData into newData, below works though
    updateEverything();
    Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}],
            traces: [0,1,2,3,4],
            layout: {}
            },animation)
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

} 

function updateDensityCom(value){
    dencom = value;
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[4]); 
    //I'm doing something wrong if I try just place lineData into newData, below works though
    updateEverything();
    Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}],
            traces: [0,1,2,3,4],
            layout: {}
            },animation)
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

} 

function updateEfficiencyCom(value){
    efficcom = value;
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[4]); 
    //I'm doing something wrong if I try just place lineData into newData, below works though
    updateEverything();
    Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}],
            traces: [0,1,2,3,4],
            layout: {}
            },animation)
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

} 

function updateAgoAffinity(value){
    agoaff = value;
    agoafflog = -1*Math.log10(value);
    document.getElementById("agoafflognum").value = agoafflog.toFixed(2);
    lineData0 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[0]);
    lineData1 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[1]);
    lineData2 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[2]);
    lineData3 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[3]);
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[4]); 
    //I'm doing something wrong if I try just place lineData into newData, below works though
    updateEverything();
    Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}],
            traces: [0,1,2,3,4],
            layout: {}
            },animation)
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
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
    lineData4 = calcLinesCom(affcom,effcom,dencom,efficcom,agoafflog, agoconcarr[4]); 
    updateEverything();
    Plotly.animate("quantitative",{
            data: [{y: lineData0[1]}, {y: lineData1[1]}, {y: lineData2[1]}, {y: lineData3[1]}, {y: lineData4[1]}],
            traces: [0,1,2,3,4],
            layout: {}
            },animation)
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist1(value){
    antval1 = value;
    antlogval1 = Math.log10(value);
    document.getElementById("antlog1").value = antlogval1.toFixed(2);
    updateEverything();
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonistLog1(value){
    antlogval1 = value;
    antval1 = Math.pow(10, value);
    document.getElementById("ant1").value = antval1.toExponential(2);
    updateEverything();
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist2(value){
    antval2 = value;
    antlogval2 = Math.log10(value);
    document.getElementById("antlog2").value = antlogval2.toFixed(2);
    updateEverything();
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonistLog2(value){
    antlogval2 = value;
    antval2 = Math.pow(10, value);
    document.getElementById("ant2").value = antval2.toExponential(2);
    updateEverything();
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonist3(value){
    antval3 = value;
    antlogval3 = Math.log10(value);
    document.getElementById("antlog3").value = antlogval3.toFixed(2);
    updateEverything();
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
    Plotly.animate("schild",{data: [{x: schildData[0], y: schildData[1]}], traces: [0], layout: {}},animation)

}

function updateAntagonistLog3(value){
    antlogval3 = value;
    antval3 = Math.pow(10, value);
    document.getElementById("ant3").value = antval3.toExponential(2);
    updateEverything();
    schildData = calcSchild(antlogval1, antlogval2, antlogval3, logdr1, logdr2, logdr3);
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


function calcLinesCom(affinity, efficacy, recepDensity, efficiency, agoaffinity, agoconcentration){
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

function plotGraphCom(chart){
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

        },
        /*sliders: [
            {
                label: 'Slider 1',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            },
            {
                label: 'Slider 2',
                pad: {t: 30},
                active: 50,
                font:{color: 'transparent'}, 
                tickcolor: 'transparent',
                steps: sliderSteps
            }
        ]*/
    }
    var j;
    for(j = 0; j<5; j++){
        var data = []
        var lineData = calcLinesCom(affcom, effcom, dencom, efficcom, agoafflog, agoconcarr[j])
    
        var graph = {
            x: lineData[0],
            y: lineData[1],
            mode: "lines",
            line: {
            width: 1
            }
        }
        data.push(graph);

        Plotly.plot(chart,data,layout);
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

function testPlot(chart){
	var layout = {
        xaxis:{
            title: "Log [Antagonist] (log M)",
            showline: true,
            range: [-11,-4],
            
        },
        yaxis:{
            title: "Log(Dr-1)",
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
	
	Plotly.plot(chart, data, layout);
}

testPlot("schild");
