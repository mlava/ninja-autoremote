var messages = require('./config-messages');

exports.probe = function(cb) {

  cb(null,messages.probeGreeting);
};

exports.manual_get_url = function(params,cb) {

  cb(null,messages.fetchIpModal);
};

exports.manual_set_url = function(params,cb) {

if (!params.name) {console.log("Autoremote config error: no name entered"); return;}
if (!params.arcomm) {console.log("Autoremote config error: no arcomm entered"); return;}
if (!params.snapshot_url) {console.log("Autoremote config error: no device key entered"); return;}

  var snapshot_url = "name:"+params.name+"=:=type:"+params.type+"=:=arcomm:"+params.arcomm+"=:=key:"+params.snapshot_url;
  var index = this._opts.urls.indexOf(snapshot_url||'');

  if (index===-1) {
    this._opts.urls.push(snapshot_url);
    this.save();
  }

  cb(null,messages.finish);
};

exports.manual_show_remove = function(params,cb) {

  var toShow = messages.removeIpModal;

  var urls = this._opts.urls;

  var optionArr = [];

  for (var i=0;i<urls.length;i++) {
	
	var split_snapshot = urls[i].split("=:=");
    this.AR_name = split_snapshot[0].slice(5);
    this.AR_type = split_snapshot[1].slice(5);
    
	optionArr.push({name:this.AR_name+" - "+this.AR_type,value:urls[i]});
  }

  if (optionArr.length>0) {
    toShow.contents[1].options = optionArr;
  }

  cb(null,toShow);
};

exports.manual_remove_url = function(params,cb) {

  var index = this._opts.urls.indexOf(params.snapshot_url||'');

  if (index>-1) {
    this._opts.urls.splice(index,1);
    this.save();
  }
  cb(null,messages.removeIpSuccess);
};