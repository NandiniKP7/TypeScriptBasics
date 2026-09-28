const user:AppUser = {
    id: 101,
    name: "Nina",
    email: "nina@example.com"
};

user.name = "Maya";
user.id = 202;


interface AppUser{
    readonly id:number,
    name:string,
    email:string,
    phone?:string
}

const company:Company = {
    name: "Tech Corp",
    address: {
        city: "Columbus",
        state: "Ohio"
    },
    employees: ["Nina", "Maya", "Sam"]
};

// Requirements: create an Address interface and a Company interface. 
// Company should use Address for its address property, 
// and employees should be an array of strings. Then apply Company to the object.

interface Company{
  name:string,
  address:Address,
  employees:string[]

}
interface Address
{
    city:string,
    state:string
}

// Build a small user-directory model with these requirements:
// - Every user has an ID that is assigned when created and should not later be changed.
// - Every user has a name.
// - A user may have a phone number, but it isn't required.
// - Every user has contact information containing an email and city.
// - An admin has everything a normal user has, plus an array of permissions.
// - Create one admin named "Nina" with ID 101, email "nina@example.com", city "Columbus", and permissions "read" and "write".
// - Create a function createAdmin that accepts an admin and returns an admin.
// Design the interfaces, relationships, object, and function yourself.


interface User{
    readonly id:number,
    name:string,
    phonenumber?:string
    contact:Contact
}
interface Contact{
 email:string,
 city:string
}
interface Admin extends User{
    permissions:string[]
}

function createAdmin(admin:Admin){
 return admin
}

// Requirements:
// - A delivery has a tracking number that is set when the delivery is created and should not later be changed.
// - A delivery has a customer name.
// - Delivery instructions may be provided, but they are not required.
// - Every delivery has a destination containing:
//   - street
//   - city
//   - zip code
// - An Express Delivery contains everything a normal delivery contains, plus:
//   - a guaranteed delivery date
//   - an array of priority services
// - Create one express delivery with realistic data.
// - Write a function named createExpressDelivery that:
//   - accepts an express delivery
//   - returns an express delivery
// I'm intentionally not giving you interface names, structure, syntax, or which feature solves each requirement.