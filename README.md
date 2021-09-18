JOB SEEK APP

This app is devided in 2 main directories.

1. Client directory - containing the client side - runs on port http://localhost:3000/
2. Server directory - containing the server side - runs on port http://localhost:3001/

Implemented using the folowing: ReactJS, NodeJS, Express (for the server side), MySQL (for the databse).

Requirements:
- Node version 14.17.1

Basic flow through the app:
1. run the npm install command
2. create the database, which has: id, title, description, location and full_time (it can have one of two values: yes or no). The database credentials I used,
   can be seen in server/index.js directory.
3. to start the client side, the command ```npm start``` needs to be executed
4. to start the server side, the command ```npm run devStart``` needs to be executed
5. On the port http://localhost:3000/ it can be seen 2 text fields, which contain: ```title ``` and ```location```, and one checkbox for ```full_remote```. 
   If the checkbox is selected, that means that we want to job to be just full remote.
6. After the search button is pressed, the jobs matching the requirements will be displayed.
