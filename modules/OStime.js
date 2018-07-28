function getOStime(uptime) {
			
	var h = Math.floor(uptime/3600);
	var min = Math.floor((uptime%3600)/60);
	var sec = Math.floor(uptime - h*3600 - min*60);	
	console.log("Uptime: "+ h +" h "+ min +" min "+ sec +" sec.");
	console.log("Test2");
	return uptime;
}
		
	
exports.print2 = getOStime;