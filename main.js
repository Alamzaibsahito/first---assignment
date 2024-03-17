var myFriends = ["Ali", "Khan", "Ameen", "Azhar"];
console.log("due to some personal reasons Mr. ".concat(myFriends[1], " will not come my home"));
myFriends[1] = "Akhtar";
console.log("New list of my friends who are coming to my home \n");
for (var i = 0; i < myFriends.length; i++) {
    console.log("".concat(i + 1, ".").concat(myFriends[i]));
}
