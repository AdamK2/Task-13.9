// Import modułów "OSinfo" i "OStime"
var OSinfo = require('../modules/OSInfo');


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
			case '/getOSinfo':
				// Użycie zaimportowanych danych z modułu "OSinfo".
				OSinfo.print();				
				break;		
			/* case '/getOStime':
				// Użycie zaimportowanych danych z modułu "OStime".
				OStime.print2();				
				break; 
			*/		
			case '/getOStime2':
				// Użycie zaimportowanych danych z modułu "OStime".
				OSinfo.print3();				
				break;				
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});




