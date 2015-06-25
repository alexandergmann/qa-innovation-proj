Before Run:
Install node.js

Install Mongodb.

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