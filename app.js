// class Customer {
//     name;
//     age;
//     address;

//     constructor(name, age, address) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//     }
// }

// let customer1 = new Customer("Sharadha", 20, "Colombo");
// console.log(customer1);

// let customer2 = {
//     name: "John",
//     age: 25,
//     address: "New York",
//     salary: 5000
// };

// console.log(customer2.address);
// console.log(customer2.age);
// console.log(customer2.name);
// console.log(customer2.salary);



//Document Object Model (DOM)

//console.log(document.documentURI);
// document.write("<h2> Hello, Me! </h2>");

// console.log(document.title);

// let heading = document.getElementById("heading");
// heading.innerText = "Hello, World!";
// console.log(heading);


// let number =0;
// function increaseValue(){
//     heading.innerText = "Hello, World!"+(++number);
//     console.log("Clicked");
// }

// function decreaseValue(){
//     heading.innerText = "Hello, World!"+(--number);
// }

function ChangeHeading(){
    
    let txtInput=document.getElementById("inputText");
    console.log(txtInput.value)
    let heading=document.getElementById("heading");
    heading.innerText=txtInput.value;
}