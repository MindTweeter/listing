

This application is build with Angular 9.1.6

#Prerequisites

node version 10.16.0
npm 6.9.0

Angular cli 9.1.6

If you have a different version of node, use nvm to install the right version of node.


What you need to do to run this application

1. clone/download the project
2. In the cloned/ downloaded folder => cd listing
2. npm install
3. ng build


To run the application 
# ng serve

In case you already have a running application at localhost:4200 use the below command to run in different port

i.e

# ng serve  --port 4250


Test cases have been included

to run test cases use the command below

# ng test

The project has all liniting issues fixed. formatter used (visual code extension -> prettier 5.0)

To test linting run below command
# ng lint

Around 14 test cases added.


Further notes
1. Timeout of 15 seconds is set at environment.ts file for the API call so if no response is there in 15 seconds it will console.log timeout. So rxjs timeout added. 
2. In case test cases failed, re-run to load button for the API
3. loading icon added to show till api data is available
4. for any issue contact syed wakil at syedawakil@gmail.com or syedwakil1@gmail.com

Feedback will be appreciated


Just clone and work with the application. routing concept enabled
