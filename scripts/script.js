var time = 0;
var running = 0;

function start() {
	if (running == 0)
		increment();
	running = 1;
}

function increment() {
	setTimeout(function() {
		time++;
		var minutes = Math.floor(time/10/60);
		var seconds = Math.floor(time/10 % 60);

		if (minutes < 10) {
			minutes = "0" + minutes;
		}
		if (seconds < 10) {
			seconds = "0" + seconds;
		}

		document.getElementById("output").innerHTML = minutes + " мин. " + seconds + " сек.";
		increment();
	}, 100);
}