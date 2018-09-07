
var agoaffcom = document.getElementById("agoaffcomslider").defaultValue; //add 3 other concentration default values

var animation = {
    transition: {
        duration: 100,
        easing: "cubic-in-out"
    }
}

function calcSchild(logB){ //add 3 other concentrations as args
	logB1 = logB+1;
	logB2 = logB+2;
	logB3 = logB+3;
	var data = [[],[]];
	var xLogs = [logB, logB1, logB2, logB3] //x values for the schild
	var logDr1 = [(logB-logB), (logB1-logB), (logB2-logB), (logB3-logB)]
	

	data[0] = xLogs;
	data[1] = logDr1;
	
	return data;

}
function updateAgoAffinitySchild(value){
	agoaffcom= value;
	lineData = calcSchild(-agoaffcom); //add the 3 other concentrations
	Plotly.animate("schild",{data: [{x: lineData[0], y: lineData[1]}], traces: [0], layout: {}},animation)
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

	
	var lineData = calcSchild(-agoaffcom, -8, -7, -6) //replace with the concentrations
	var trace1 = {
		x: lineData[0],
		y: lineData[1],
		mode: 'lines',
		line: {
			width: 1
		}
	}
	data.push(trace1);
	
	Plotly.plot(chart, data, layout);
}

testPlot("schild");
