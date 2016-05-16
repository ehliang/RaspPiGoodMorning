# RaspPiGoodMorning

#Details
Inspired by the Raspberry Pi Mirror project, the aim of RaspPiGoodMorning was to display an agenda/weather/time in the mornings on the television in front of the bed. Currently only displays weather. 

#Stuff I Used
The website runs on a node.js server hosted on the Raspberry Pi. The frontend uses AngularJS. With the libCEC library, the raspberry pi is able to turn the TV on and off through HDMI-CEC controls. 

To run: 
```
npm install 
node server.js
```
