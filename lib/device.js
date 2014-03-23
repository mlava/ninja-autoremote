var stream = require('stream');
var util = require('util');
var https = require('https');
var querystring = require('querystring');

util.inherits(Device,stream);

module.exports=Device;

function Device(snapshot_url,index,node,token,G) {

	var self = this;
	this.snapshot_url = snapshot_url;
	
	var split_snapshot = snapshot_url.split("=:=");
    this.AR_name = split_snapshot[0].slice(5);
    this.AR_type = split_snapshot[1].slice(5);
    this.AR_arpar = split_snapshot[2].slice(7);
    this.AR_key = split_snapshot[3].slice(4);
	
	this.readable = true;
	this.writeable = true;
	
	this.G = G;
	this.V = 0;
	this.D = 240;
	this.name = "Autoremote - "+this.AR_name+" - "+this.AR_type;
	this.device = self;
	this._guid = [node,this.G,this.V,this.D].join('_');

	process.nextTick(function() {
    self.emit('data','');
  });
};

Device.prototype.write = function(data) {

var self = this;

if (this.AR_type === "message") {
var data = querystring.stringify({
    message: this.AR_arpar+": "+data,
    key: this.AR_key
    });
}

if (this.AR_type === "notification") {
var data = querystring.stringify({
	title: this.AR_arpar,
	icon: "https://s3.amazonaws.com/ksr/avatars/1816468/Ninja-Blocks-Vimeo-Logo.small.jpg",
    text: data,
    key: this.AR_key
    });

}

var options = {
    host: 'autoremotejoaomgcd.appspot.com',
    port: 443,
    path: '/send'+this.AR_type,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
    }
};

var req = https.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log("Autoremote: "+chunk);
    });
});

req.write(data);
req.end();
self.emit('data','')
};