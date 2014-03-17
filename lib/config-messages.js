exports.probeGreeting = {
  "contents":[
    { "type":"paragraph",  "text":"Manage your Autoremote devices attached to the Ninja Platform"},
    { "type": "submit", "name": "Add New", "rpc_method": "manual_get_url" },
    { "type": "submit", "name": "Remove Existing", "rpc_method": "manual_show_remove" },
    { "type":"close", "text":"Close"}
  ]
};

exports.fetchIpModal = {
  "contents":[
    { "type":"paragraph", "text":"Please enter the device key and name of your Autoremote device"},
    { "type":"input_field_text", "field_name": "snapshot_url", "value": "", "label": "Device key", "placeholder": "", "required": true},
	{ "type":"input_field_text", "field_name": "name", "value": "", "label": "Name", "placeholder": "", "required": true},
    { "type":"submit", "name": "Add", "rpc_method": "manual_set_url" },
    { "type":"link", "name": "Autoremote help", "href": "http://joaoapps.com/autoremote/direct/" },
    { "type":"close", "text":"Close"}
  ]
};

exports.removeIpModal = {
  "contents":[
    { "type":"paragraph", "text":"Please choose the device to remove"},
    { "type": "input_field_select", "field_name": "snapshot_url", "label": "Choose device", "options": [{ "name": "No devices", "value": "", "selected": true}], "required": false },
    { "type":"submit"   ,    "name": "Remove", "rpc_method": "manual_remove_url" },
    { "type":"close", "text":"Close"}
  ]
};


exports.removeIpSuccess = {
  "contents": [
    { "type":"paragraph",    "text":"Your Autoremote device has been removed."},
    { "type":"paragraph",    "text":"Important: you will still need to manually delete the widget from your dashboard"},
    { "type":"close", "text":"Close"}
  ]
}

exports.finish = {
  "finish": true
};