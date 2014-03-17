var Device = require('./lib/device')
  , util = require('util')
  , stream = require('stream')
  , configHandlers = require('./lib/config-handlers');

util.inherits(driver,stream);

var HELLO_WORLD_ANNOUNCEMENT = {
  "contents": [
    { "type": "heading",      "text": "Autoremote Driver Loaded" },
    { "type": "paragraph",    "text": "The Autoremote driver has been loaded. Further configuration is required. ('Drivers', 'Configure')" }
  ]
};


function driver(opts,app) {

  var self = this;
  this._app = app;
  this._opts = opts;


  app.on('client::up',function(){

    if (!opts.hasSentAnnouncement) {
      self.emit('announcement',HELLO_WORLD_ANNOUNCEMENT);
      opts.hasSentAnnouncement = true;
      self.save();
    }
	
	if (!opts.urls) {opts.urls = [];};

    self.emit('register', new Device());
  });
};


driver.prototype.config = function(rpc,cb) {

  var self = this;

  if (!rpc) {
    return configHandlers.probe.call(this,cb);
  }

  switch (rpc.method) {
    case 'manual_set_url':     return configHandlers.manual_set_url.call(this,rpc.params,cb); break;
    case 'manual_get_url':     return configHandlers.manual_get_url.call(this,rpc.params,cb); break;
    case 'manual_show_remove': return configHandlers.manual_show_remove.call(this,rpc.params,cb); break;
    case 'manual_remove_url': return configHandlers.manual_remove_url.call(this,rpc.params,cb); break;

    default:                   return cb(true);                                              break;
  }
};

//driver.prototype.add = function(devOptions) {
	//Don't add if already exists
	//if(this._devices[devOptions.snapshot_url]) {
		//return;
	//}

	//this._app.log.info('Adding Autoremote device:' + devOptions.name + ' (' + devOptions.snapshot_url + ')');
	//var self = this;
	//var Device = new Device(devOptions,self._app);
	//self._devices[devOptions.snapshot_url] = Device;

	//Wait a few seconds, to be sure it is connected to the cloud.
	//setTimeout(function() {
		//Object.keys(Device.devices).forEach(function(snapshot_url) {
			//self._app.log.info('Adding sub-device', snapshot_url);
			//self.emit('register', Device.devices[snapshot_url]);
		//});
	//},4000);

//}

module.exports = driver;
