'use strict';

let x=1001
let id=0
function empID(id){
    id=x;
    x+=1;
    return id
}

let Ghazi = {
    EmployeeID: empID(),

    Fullname: "Ghazi samer",
    Department: "Administration",
    Level: "Senior",
    Image: function () {
        let img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

        let div = document.getElementById("x");
        div.appendChild(img);

        return img;
    },
    Salary: getsalaryAndLevel(1500,2000, "Senior"),
}

console.log(Ghazi.EmployeeID)
console.log(Ghazi.Image())
console.log("Employee Salary = " + Ghazi.Salary)
document.write('<b>Employee name: </b>' + Ghazi.Fullname + '</br>');
document.write('<b>Employee salary: </b>' + Ghazi.Salary + '</br></br>' );


let Lana = {
    EmployeeID: empID(),
    Fullname: "Lana Ali",
    Department: "Finance",
    Level: "Senior",
    Image: function () {
        let img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

        let div = document.getElementById("x");
        div.appendChild(img);

        return img;
    },
    Salary: getsalaryAndLevel(1500,2000, "Senior"),

}
console.log(Lana.Image())
console.log(Lana.EmployeeID)
console.log("Employee Salary = " + Lana.Salary)
document.write('<b>Employee name: </b>' + Lana.Fullname + '</br>');
document.write('<b>Employee salary: </b>' + Lana.Salary + '</br></br>');


let Tamara = {
    EmployeeID: empID(),
    Fullname: "Tamara Ayoub",
    Department: "Marketing",
    Level: "Senior",
    Image: function () {
        let img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

        let div = document.getElementById("x");
        div.appendChild(img);

        return img;
    },
    Salary: getsalaryAndLevel(1500,2000, "Senior"),

}
console.log(Tamara.Image())
console.log(Tamara.EmployeeID)
console.log("Employee Salary = " + Tamara.Salary)
document.write('<b>Employee name: </b>' + Tamara.Fullname + '</br>');
document.write('<b>Employee salary: </b>' + Tamara.Salary + '</br></br>');

let Safi = {
    EmployeeID:empID(),
    Fullname: "	Safi Walid",
    Department: "Administration",
    Level: "Mid-Senior",
    Image: function () {
        let img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

        let div = document.getElementById("x");
        div.appendChild(img);

        return img;
    },
    Salary: getsalaryAndLevel(1000,1500, "Mid-Senior"),

}
console.log(Safi.Image())
console.log(Safi.EmployeeID)
console.log("Employee Salary = " + Safi.Salary)
document.write('<b>Employee name: </b>' + Safi.Fullname + '</br>');
document.write('<b>Employee salary: </b>' + Safi.Salary + '</br></br>');






let Omar = {
    EmployeeID:empID(),
    Fullname: "Omar Zaid",
    Department: "Development",
    Level: "Senior",
    Image: function () {
        let img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

        let div = document.getElementById("x");
        div.appendChild(img);

        return img;
    },
    Salary:getsalaryAndLevel(1500,2000, "Senior"),

}
console.log(Omar.Image())
console.log(Omar.EmployeeID)
console.log("Employee Salary = " + Omar.Salary)
document.write('<b>Employee name: </b>' + Omar.Fullname + '</br>');
document.write('<b>Employee salary: </b>' + Omar.Salary + '</br></br>');





let Rana = {
    EmployeeID: empID(),
    Fullname: "Rana Saleh",
    Department: "Development",
    Level: "Junior",
    Image: function () {
        let img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

        let div = document.getElementById("x");
        div.appendChild(img);

        return img;
    },
    Salary: getsalaryAndLevel(500,1000, "Junior"),

}
console.log(Rana.Image())
console.log(Rana.EmployeeID)
console.log("Employee Salary = " + Rana.Salary)
document.write('<b>Employee name: </b>' + Rana.Fullname + '</br>');
document.write('<b>Employee salary: </b>' + Rana.Salary + '</br></br>');







let Hadi = {
    EmployeeID: empID(),
    Fullname: "Hadi Ahmad",
    Department: "Finance",
    Level: "	Mid-Senior",
    Image: function () {
        let img = document.createElement("img");
        img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

        let div = document.getElementById("x");
        div.appendChild(img);

        return img;
    },
    Salary: getsalaryAndLevel(1000,1500, "Mid-Senior"),

}
console.log(Hadi.Image())
console.log(Hadi.EmployeeID)
console.log("Employee Salary = " + Hadi.Salary)
document.write('<b>Employee name: </b>' + Hadi.Fullname + '</br>');
document.write('<b>Employee salary: </b>' + Hadi.Salary + '</br></br>');




function getsalaryAndLevel(min, max, level) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    let salary = Math.floor(Math.random() * (max - min) + min);
    let result = salary-(salary * 0.075); 
    if (level == "Senior") {
        return result
    }
    else if (level == "Mid-Senior") {
        return result;
    }
    else {
        return result;
    }
}