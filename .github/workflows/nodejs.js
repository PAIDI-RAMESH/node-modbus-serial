var ModbusRTU = require("modbus-serial");
console.log("step 1");
var client = new ModbusRTU();
console.log("step 2");

// open connection to a serial port
client.connectRTUBuffered("COM1", { baudRate: 9600,parity: 'none', dataBits : 8,stopBits : 1 }, read);

 function read() {

		client.readDiscreteInputs(1, 1)//(address, length) read discrete input values for Proximity sensor values
		.then(function(data) {
			
			//console.log("Proximity")
			
		   console.log(data);
		   client.close();
			


		});


}
