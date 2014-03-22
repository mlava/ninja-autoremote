ninja-autoremote
================

v0.2

A driver for Ninja Blocks to allow communication via the Autoremote plugin for Tasker, written by Jo&atilde;o Dias.

This driver contains large parts of code that comes directly from the ninja-ipcam driver written by @thatguydan. Thanks to @paulcull for answering several noob questions that nonetheless were stumping me completely!
Any mistakes made in the reintegration of the work of the above are mine.

With thanks for the open nature of the Ninja Blocks platform and community.


Installation
================

cd /opt/ninja/drivers

git clone https://github.com/mlava/ninja-autoremote

cd ninja-autoremote && npm install

sudo service ninjablock restart


Configuration
================

Select 'Drivers' in the ninja dashboard.

Select the ninja-autoremote driver.

Add or remove Autoremote devices via the menu.

Enter a suitable device name: this will be used to name the widget as well as differentiate your devices in the rules engine.

For arcomm fill in the value you want to appear to the left side of the =:= in your message. For help, see http://joaoapps.com/autoapps-command-system/.

Enter the device key for the device you want to send data to. This can be found by following the instructions at http://joaoapps.com/autoremote/direct/.

Message will send a message to your device with arcomm=:=data where data is what you enter in the widget or in the rules engine. Notification will send a notification to your device with the notification title being arcomm and the notification text the data you enter.


Use
================

Type your message in the widget (old dashboard), and send.

Check your Autoremote log to confirm you are receiving messages from the Ninja Blocks platform, or, if you selected to send a notification, check your device's notification area.

Your Autoremote devices should also be available via the rules engine as actuators - complete the text to receive that message on your Autoremote device when the rule fires.


To-do
================

1.	Gist for widgets on beta dashboard.
2.	Allow further notification configuration options as per http://autoremotejoaomgcd.appspot.com/AutoRemoteNotification.html.



DONE:
- Implement Send message vs Send Notification option when adding Autoremote devices, and invoke different widgets for each option.
- Implement naming of Autoremote devices. (In the meantime, just click on the gear and Rename on the old dashboard widget...)
- Implement user-defined arcomm text in messages (ie. the left side of the =:= in the Autoapps commands structure). For now this defaults to 'Nina=:='.
