(function() {
	'use strict';





	let stop = document.getElementById('stopButton');
	let stopR = document.getElementById('stopLight');
	stop.addEventListener('click',function(){stopR.classList.toggle('stop');});

	let slow = document.getElementById('slowButton');
	let slowY = document.getElementById('slowLight');
	slow.addEventListener('click',function(){slowY.classList.toggle('slow');});

	let go = document.getElementById('goButton');
	let goG = document.getElementById('goLight');
	go.addEventListener('click',function(){goG.classList.toggle('go');});




	// let slow = document.getElementById('slowButton');
	// slow.classList.toggle('yellow');
	// slow.classList.toggle('slow');
	// let slowY = document.getElementById('controls');
	// slowY.addEventListener('click', false);
	//
	//
	// let go = document.getElementById('goButton');
	// go.classList.toggle('green');
	// go.classList.toggle('go');
	// let goG = document.getElementById('controls');
	// goG.addEventListener('click', false);



})();



// add event listener to table
