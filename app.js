var workTime = 25;
var breakTime = 5;
var seconds = 0;
var loop = 'Work';
var countInterval;
var time;

var incrementWorkTime = () => {
	workTime += 1;
	document.getElementById("workTimer").innerHTML = workTime;
	document.getElementById("time").innerHTML = workTime + ':00';
}

var decrementWorkTime = () => {
	if (workTime > 1) {
		workTime -= 1;
	} else {
		workTime = 1;
	}
	document.getElementById("workTimer").innerHTML = workTime;
	document.getElementById("time").innerHTML = workTime + ':00';
}

var incrementBreakTime = () => {
	breakTime += 1;
	document.getElementById("breakTimer").innerHTML = breakTime;
}

var decrementBreakTime = () => {
	if (breakTime > 1) {
		breakTime -= 1;
	} else {
		breakTime = 1;
	}
	document.getElementById("breakTimer").innerHTML = breakTime;
}

var count = (minutes, seconds) => {

	countInterval = setInterval(() => {
		if (minutes == 0 && seconds == 0) {
			clearInterval(countInterval);
			if (loop == 'Work') {
				time = breakTime;
				loop = 'Break';
				document.getElementById("session").innerHTML = 'Break Time';
			} else {
				time = workTime;
				loop = 'Work';
				document.getElementById("session").innerHTML = 'Work Time';
			}
			count(time, 0);
		} else if (seconds != 0) {
			if (seconds <= 10) {
				seconds -= 1;
				time = minutes + ':0' + seconds;
			} else {
				seconds -= 1;
				time = minutes + ':' + seconds;
			}
		} else if (seconds == 0) {
			seconds = 59;
			minutes -= 1;
			time = minutes + ':' + seconds;
		}

		if (minutes < 10) {
			time = '0' + minutes + ':' + seconds;
		}

		if (seconds < 10) {
			time = minutes + ':0' + seconds;
		}

		if (minutes < 10 && seconds < 10) {
			time = '0' + minutes + ':0' + seconds;
		}

		document.getElementById("time").innerHTML = time;

	}, 1000);

}

var reset = () => {
	clearInterval(countInterval);
	workTime = 25;
	breakTime = 5;
	document.getElementById("workTimer").innerHTML = workTime;
	document.getElementById("time").innerHTML = workTime + ':00';
	document.getElementById("breakTimer").innerHTML = breakTime;
	document.getElementById("session").innerHTML = 'Work Time';
}
