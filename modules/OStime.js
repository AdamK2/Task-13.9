// Import modułu "os", dołączonego razem z pakietem instalacyjnym "Node.js". 
var os = require('os');

function getOStime() {
	var uptime = os.uptime();		
	var h = Math.floor(uptime/3600);
	var min = Math.floor((uptime%3600)/60);
	var sec = Math.floor(uptime - h*3600 - min*60);	
	console.log("Uptime: "+ h +" h "+ min +" min "+ sec +" sec.");	
}
	
exports.print2 = getOStime;