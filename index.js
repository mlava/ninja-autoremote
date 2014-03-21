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
	if (!AR_keys) {var AR_keys = [];};
	
	self._opts.urls.forEach(function(url,index) {
		self.createCameraByUrl(url,index);
    });
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

driver.prototype.createCameraByUrl = function(snapshot_url,index) {

  var opts = snapshot_url;

  var Camera = new Device(opts,this._app.opts,this._app.id,this._app.token,index);
  this.emit('register', Camera);
};

module.exports = driver;
