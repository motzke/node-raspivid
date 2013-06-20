var FS = require("fs"),
	RASPISTILL_BIN = "/usr/bin/raspistill";

FS.exists(RASPISTILL_BIN, function(exists){
	if(!exists){
		 throw new Error(RASPISTILL_BIN + ' not found.')
	}
})