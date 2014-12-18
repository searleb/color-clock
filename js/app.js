function colorClock () {
	// get time
	var newDate = new Date();
	var hours = newDate.getHours();
	var minutes = newDate.getMinutes();
	var seconds = newDate.getSeconds();
	// format time to HHMMSS
	if (hours < 10) { hours = "0" + hours };
	if (minutes < 10) { minutes = "0" + minutes };
	if (seconds < 10) { seconds = "0" + seconds };
	var time = hours +":"+ minutes +":"+ seconds;
	// create # color code
	var hex = '#' + hours + minutes + seconds;
	// update the time on the page
	document.getElementById("time").innerHTML = time;
	// fade the background color
	Velocity( document.getElementsByTagName("body"), { backgroundColor: hex }, 1000);
};


setInterval(function(){
	colorClock();
},1000);

colorClock();
