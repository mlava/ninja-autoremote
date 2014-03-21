ninja-autoremote
================

v0.1

A basically functioning driver for Ninja Blocks to allow communication via the Autoremote plugin for Tasker, written by Jo&atilde;o Diaz.

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
In the add menu, enter the device key for the device you want to send messages to. This can be found by following the instructions at http://joaoapps.com/autoremote/direct/.


Use
================

Type your message in the widget (old dashboard), and send.
Check your Autoremote log to confirm you are receiving messages from the Ninja Blocks platform.
Your Autoremote devices should also be available via the rules engine as actuators - complete the text to receive that message on your Autoremote device when the rule fires.


To-do
================

1.	Implement Send message vs Send Notification option when adding Autoremote devices, and invoke different widgets for each option.
2.	Implement naming of Autoremote devices. (In the meantime, just click on the gear and Rename on the old dashboard widget...)


Pull requests happily accepted.