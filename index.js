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

  app.on('client::up',function(){

    if (!opts.hasSentAnnouncement) {
      self.emit('announcement',HELLO_WORLD_ANNOUNCEMENT);
      opts.hasSentAnnouncement = true;
      self.save();
    }

    self.emit('register', new Device());
  });
};


driver.prototype.config = function(rpc,cb) {

  var self = this;

  if (!rpc) {
    return configHandlers.menu.call(this,cb);
  }
  else if (typeof configHandlers[rpc.method] === "function") {
    return configHandlers[rpc.method].call(this,rpc.params,cb);
  }
  else {
    return cb(true);
  }
};



// Export it
module.exports = driver;
