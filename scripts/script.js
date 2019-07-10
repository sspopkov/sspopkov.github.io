var time = 0;
var running = 0;
console.log("dec");

function start() {
	console.log("start");
	if (running == 0)
		increment();
	running = 1;
}

function increment() {
	setTimeout(function() {
		time++;
		var minutes = Math.floor(time/10/60);
		var seconds = Math.floor(time/10);
		document.getElementById("output").innerHTML = minutes + " мин. " + seconds + " сек.";
		increment();
		console.log("inc");
	}, 100);
}