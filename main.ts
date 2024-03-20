

const myFriends: string []= ["Khan","Zeeshan","bilal","Azhar", "Rehaman",]
console.log(`table is not available I can invite only 2 person\n`);

let  friend1= myFriends.pop();
console.log(`Sorry Mr. ${friend1} you are not invited!`);

let  friend2= myFriends.pop();
console.log(`Sorry Mr. ${friend2} you are not invited!`);

let  friend3= myFriends.pop();
console.log(`Sorry Mr. ${friend3} you are not invited!\n`);

for (let i = 0;i <myFriends.length;i++){
    console.log(`Mr. ${myFriends[i]} you are still inivited`)
}

myFriends.pop();
myFriends.pop();

console.log(myFriends);