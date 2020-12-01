# Api Documentation

### What Is This?
In it's current form, it's a simple end point that lets you grab user data. Nothing more.

This is to be used for front end testing purposed until it's expanded on further later, and has as database backing it, as opposed to the hardcoded json files in the `/Data/Users` folder. If you want to change anything about the users, you may do that by altering the files in there.

### How Do I Run this?
To run boot up the webserver, all you have to do is double click the .exe file that is in the same directory as the .go files.

###Endpoints:
Currently, there is only one end point `/users/{userId}` which can be accessed like this:
* localhost:8080/users/10001

Where `10001` is the user id for the user whose data you want to retrieve. If you want to create a new user, make a new .json file in the `/Data/Users` directory and make sure the user Id is the name of the json file.
