ninja-autoremote
================

v0.1

A not yet functioning driver for Ninja Blocks to allow communication via the Autoremote plugin for Tasker, written by Jo&atilde;o Diaz.

This driver owes a lot to the work in @paulcull's ninja-logitechmediaserver driver, and **** in his ninja-sonos driver. Large parts of the code come directly from the nina-ipcam driver written by ****. A special shout-out to @paulcull for answering a noob question that nonetheless was stumping me completely!
This is an early version with more work to do, and the code is probably messy. Any mistakes made in the reinterpretation of the work of the above are mine.

With thanks to for open nature of the Ninja Blocks platform and community.


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
In the add menu, enter the device key for the device you want to send messages to. This can be found by following the instructions at http://joaoapps.com/autoremote/direct/. (Not yet implemented: Name the device whatever you like.)


Use
================

Type your message in the widget, and send.
Check your Autoremote log to confirm you are receiving messages from the Ninja Blocks platform.
Your Autoremote devices should also be available via the rules engine.


To-do
================

1.	Implement Send message vs Send Notification option when adding Autoremote devices, and invoke different widgets for each option.
2.	Implement naming of Autoremote devices.


Pull requests happily accepted.