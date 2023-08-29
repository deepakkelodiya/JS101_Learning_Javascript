// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.
let stored_username = "Deepak";
let stored_password = "123123";
let given_username = "d";
let given_password = "456456";
if (stored_username===given_username)&&(stored_password === given_password){
  console.log("User can login")
} else console.log("user cannot login invalid user ")