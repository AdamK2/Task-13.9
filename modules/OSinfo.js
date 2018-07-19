// Import modułu "os", dołączonego razem z pakietem instalacyjnym "Node.js". 
var os = require('os');

function getOSinfo() {
    var type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    var release = os.release();
	// Info o modelu procesora. Po pobraniu info o procesorach odniesiemy się do np. 1-go elementu tablicy, a konkretniej do jego modelu.
    var cpu = os.cpus()[0].model;    	
	// Info o uzytkowniku systemu: nazwą użytkownika i lokalizacją jego katalogu domowego.
    var userInfo = os.userInfo();
    console.log('System:', type);
    console.log('Release:', release);
    console.log('CPU model:', cpu);
    console.log('User name:', userInfo.username);
    console.log('Home dir:', userInfo.homedir);
}

// Eksport function getOSinfo()
exports.print = getOSinfo;
