Before Run:
Install node.js

Install Mongodb.

Create the following Directories: 

C:\data\db

make sure these are in your path(system variable):
C:\Program Files\nodejs\;

C:\Program Files\MongoDB\Server\3.0\bin\;

open admin command prompt. navigate to project folder run following command

npm install --msvs_version=(your visual studio version number ex. 2013)


To Run:
open admin command prompt. run following command and leave open:

mongod



open second admin command prompt. navigate to project folder.
run following command and leave open:

node server.js





open web browser and navigate to http://localhost:27017

List of Known Bugs:

Miscalculation on TotalPrice for Itineraries
Will search + book flights with 0 passengers
Will try to search for flights in the past
Flights may have a landing date before the take off date
You may partially use the site without logging in as long as you know a userId