var stream = require('stream');
var util = require('util');
var https = require('https');
var querystring = require('querystring');

util.inherits(Device,stream);

module.exports=Device;

function Device(snapshot_url,index,node,token,G) {

	var self = this;
	this.snapshot_url = snapshot_url;
	
	this.readable = true;
	this.writeable = true;
	
	this.G = G;
	this.V = 0;
	this.D = 240;
	this.name = 'Autoremote';
	this.device = self;
	this._guid = [node,this.G,this.V,this.D].join('_');

	process.nextTick(function() {
    self.emit('data','');
  });
};

Device.prototype.write = function(data) {

var self = this;
var key = this.snapshot_url;

var data = querystring.stringify({
      message: "Nina=:="+data,
      key: key
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