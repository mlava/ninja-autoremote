var stream = require('stream')
var util = require('util');
var https = require('https');
var querystring = require('querystring');

util.inherits(Device,stream);

module.exports=Device;

function Device() {

  var self = this;

  this.readable = true;
  this.writeable = true;

  this.G = "0";
  this.V = 0;
  this.D = 240;
  this.name = 'Autoremote';

  process.nextTick(function() {

    self.emit('data','Hello World');
  });
};


Device.prototype.write = function(data) {

  // console.log(data);

var data = querystring.stringify({
      message: data,
      key: 'Device_Key_Here'
    });

var options = {
    host: 'autoremotejoaomgcd.appspot.com',
    port: 443,
    path: '/sendmessage',
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log(chunk);
    });
});

req.write(data);
req.end();

};


