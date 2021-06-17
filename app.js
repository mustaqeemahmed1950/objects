//OBJECT #1
var itemsArray = [{ name: "juice", price: 50, quantity: 3 }, {
    name: "cookie", price: 30, quantity: 9
},
{
    name: "shirt", price: 880, quantity: 1
},
{
    name: "pen", price: 100, quantity: 2
}]

alert(" Price Of Juice " + itemsArray[0].price * itemsArray[0].quantity)
alert(" Price Of Cookie " + itemsArray[1].price * itemsArray[1].quantity)
alert(" Price Of shirt " + itemsArray[2].price * itemsArray[2].quantity)
alert(" Price Of pen " + itemsArray[3].price * itemsArray[3].quantity)


//OBJECT #2


var obj = {
    name: "Mustaqeem Ahmed",
    email: "abc@gmail.com",
    password: "********",
    gender: "male",
    city: "karachi",
    country: "Pakistan",
    age: 17
}

if ("country" in obj == true) {
    alert("country" + " is Present")
}
if ("age" in obj == true) {
    alert("age is Present")
}

alert(obj.firstname)
alert(obj.lastname)

//OBJECT #3


function Cons(Name,Grade,Percentage) {
    this.spemn =Name;
    this.grde =Grade;
    this.prtag =Percentage;
}

var firstStudent = new Cons("Mustaqeem Ahmed", "A", 70)


var secondStudent = new Cons("Danish Ali", "c", 58)

var thirdStudent = new Cons("Zahid Shah", "B", 53)

console.log(firstStudent)
console.log(secondStudent)
console.log(thirdStudent)


//OBJECT #4




function Area(Name,Gender,address,profession){
this.frst=Name;
this.secOmd=Gender;
this.third=address;
this.fourth=profession;

}
