exports.probeGreeting = {
  "contents":[
    { "type":"paragraph",  "text":"Manage your Autoremote devices attached to the Ninja Platform"},
	{ "type":"paragraph", "text":""},
    { "type":"submit", "name": "Add New", "rpc_method": "manual_get_url" },
    { "type":"submit", "name": "Remove Existing", "rpc_method": "manual_show_remove" },
	{ "type":"paragraph", "text":""},
    { "type":"close", "text":"Close"}
  ]
};

exports.fetchIpModal = {
  "contents":[
    { "type":"paragraph", "text":"Please enter the name, arpar string, device key and type for your Autoremote device"},
	{ "type":"paragraph", "text":""},
	{ "type":"input_field_text", "field_name": "name", "value": "", "label": "Name", "placeholder": "", "required": true},
	{ "type":"input_field_text", "field_name": "arpar", "value": "", "label": "arpar", "placeholder": "", "required": true},
    { "type":"input_field_text", "field_name": "snapshot_url", "value": "", "label": "Device key", "placeholder": "", "required": true},
	{ "type":"input_field_select", "field_name": "type", "label": "Send message, notification or TTS announcement?", "options": [{ "name": "Message", "value": "message", "selected": true},{ "name": "Notification", "value": "notification", "selected": false},{ "name": "TTS Announcement", "value": "announcement", "selected": false}], "required": true },
    { "type":"paragraph", "text":""},
	{ "type":"submit", "name": "Add", "rpc_method": "manual_set_url" },
	{ "type":"submit", "name": "Back", "rpc_method": "back" },
	{ "type":"paragraph", "text":""},
    { "type":"link", "name": "Device key help", "href": "http://joaoapps.com/autoremote/direct/" },
	{ "type":"paragraph", "text":""},
	{ "type":"link", "name": "Autoremote help", "href": "http://joaoapps.com/autoremote/" },
	{ "type":"paragraph", "text":""},
	{ "type":"link", "name": "Autoapps command system help", "href": "http://joaoapps.com/autoapps-command-system/" },
	{ "type":"paragraph", "text":""},
	{ "type":"close", "text":"Cancel"}
  ]
};

exports.removeIpModal = {
  "contents":[
    { "type":"paragraph", "text":"Please choose the device to remove"},
    { "type":"input_field_select", "field_name": "snapshot_url", "label": "Choose device", "options": [{ "name": "No devices", "value": "", "selected": true}], "required": false },
    { "type":"submit", "name": "Remove", "rpc_method": "manual_remove_url" },
	{ "type":"submit", "name": "Back", "rpc_method": "back" },
	{ "type":"paragraph", "text":""},
    { "type":"close", "text":"Close"}
  ]
};


exports.removeIpSuccess = {
  "contents": [
    { "type":"paragraph",    "text":"Your Autoremote device has been removed."},
    { "type":"paragraph",    "text":"Important: you will still need to manually delete the widget from your dashboard"},
	{ "type":"paragraph", "text":""},
	{ "type":"submit", "name": "Remove another device", "rpc_method": "manual_show_remove" },
	{ "type":"paragraph", "text":""},
    { "type":"close", "text":"Close"}
  ]
}

exports.finish = {
  "finish": true
};