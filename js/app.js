let name = prompt("what is your name");

alert("Hey, Wlecome to my Website " + name);

let age = Number(prompt('please enter your age?'));

console.log(age);

let favPhone = prompt("what is you fav Phone? , please choose one of these ; iphone , samsung , huawei , Redmi ")

while (favPhone != "iphone" && favPhone != "samsung" && favPhone != "huawei" && favPhone != "Redmi") {

  favPhone = prompt("what is you fav Phone? , please choose one of these ; iphone , samsung , huawei , Redmi ")

}

let Q4 = prompt("Do you like phones?");

alert("Your name is " + name + "\n Your age is " + age + "\n your favphone is " + favPhone + "\n Nice to meet you ");

