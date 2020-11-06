"use strict"

var hor = 0;
var min = 0;
var seg = 0;

var tempo = 1000;
var cron;

function start() {
	cron = setInterval(() => { timer();}, tempo);
}

function pause() {
	clearInterval(cron);
}

function stop() {
	clearInterval(cron);
	hor = 0;
	min = 0;
	seg = 0;

	document.getElementbyId('counter').innerText= '00:00:00';
}

function timer() {
	seg++;

	if(seg == 59){
		seg = 0;
		min++;

    if(min == 59)
    	min = 0;
    	hor++;
	}
}