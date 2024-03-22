let youtubeName = "Sushil"
let anotherName = youtubeName
anotherName = "Sushi"
console.log(anotherName);
console.log(youtubeName);

let userOne = {
    email : "priya@gmail.com",
    upi : "hello@gmail.com"
}

let userTwo = userOne;

userTwo.email = "sushil@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);