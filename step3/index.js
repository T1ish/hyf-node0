//Checking if we are getting connected with index.html
//console.log("index.js is loaded");

//We are making a class, think it as a blueprint of how a "person" should be
class Person {
	// your code here
	//The constructor tells us what is in every new person we make
	constructor(name, age){
		this.name = name;
		this.age = age;
	}

	//This is a function we made inside the class. This is how a function inside a class looks. 
	//The function takes phoneNumber as argument which is then set to the phone number for the person by using "this"
	addPhone(phoneNumber){
		this.phoneNumber = phoneNumber;
	}

	//This is a function we made inside the class. This is how a function inside a class looks. 
	//The function doesn't take any arguments but it checks if the phone number for the "person" is empty or not and then console the proper message
	call(){
		if(!this.phoneNumber || this.phoneNumber === 0 || typeof this.phoneNumber === "undefined"){
			console.log(`${this.name} has no phone number saved.` );
		} else {
			console.log(`Calling ${this.name} at ${this.phoneNumber}...` );
		}
		
	}

	//This is a function we made inside the class. This is how a function inside a class looks. 
	//The function doesn't take any arguments but console logs the birthday message
	//Notice how we use ` - ticks and template literals instead of " - doublequotes and variables to make a clean message. :)
	birthday(){
		this.age += 1;
		console.log(`Whishing ${this.name} a happy ${this.age}th birthday!`);
	}
};

// remember to write a constructor function
//Here we take the blueprint(class) of a "person" and make an actual person(object) named Jimmy and 28 years old.
//We save the new person object Jimmy in the variable "jimmy".
let jimmy = new Person("Jimmy", 28);

//Since we made the function "addPhone" in the "Person" class we can use it with the "jimmy" variable where the object is saved.
//This is because the actual person object Jimmy has all the stuff from the "person" blueprint(class) so it can use all those functions! 
//Here we use the function "addPhone" to add a phone number.
jimmy.addPhone("55551234");

//Here we use the function "call" because of the same reason as with "addPhone" function.
jimmy.call();
// should say "Calling Jimmy at 55551234..."

//Here we use the function "birthday" because of the same reason as with "addPhone" function.
jimmy.birthday();
// should say "Wishing Jimmy a happy 29th birthday!"

//Here we take the blueprint(class) of a "person" and make an actual person(object) named Jill.
//We save the new person object Jill in the variable "jill".
let jill = new Person("Jill");

//Here we use the function "call" because of the same reason as with "addPhone" function.
jill.call();
// should say "Jill has no phone number saved."
