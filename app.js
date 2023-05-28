'use strict';







function Employeedata(employeename,employeedepartment,employeelevel,employeeImg){

  
  this.Fullname =employeename
  this.Department= employeedepartment
  this.Level = employeelevel
  this.Image =employeeImg
  this.employeesalary =0
  this.employeeid=0
  

 
}

// Employeedata.prototype.Image=
// function (){
//     let img = document.createElement("img");
//     img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";
//     let div = document.getElementById("x");
//     div.appendChild(img);
//     return img;
// }



let x=1001
let id=0
Employeedata.prototype.epid = 
 function empID(id){
    id=x;
    x+=1;
    return id
}
let result;
let min;
let max;
Employeedata.prototype.epsalray=function(){
    if (this.Level=="Senior")
    {
        min = 1500;
        max = 2000;
        result=Math.floor(Math.random() * (max - min) + min);
        return (result-(result*0.075));
    }
    else if(this.Level=="Mid-Senior"){
        min = 1000;
        max = 1500;
        result=Math.floor(Math.random() * (max - min) + min);
        return (result-(result*0.075));
    }
    else if (this.Level=="Junior"){
        min = 500;
        max = 1000;
        result=Math.floor(Math.random() * (max - min) + min);
        return (result-(result*0.075));
    }
}



let body=document.getElementsByTagName("body")[0];
let header=document.createElement("header")
header.id="header"
body.appendChild(header)


let pageName=document.createElement("h2")
pageName.textContent="HR-mangment"
pageName.style.paddingRight="700px"
pageName.style.paddingTop="20px"
pageName.style.color="#1b7072"
header.appendChild(pageName)

let pageLogo=document.createElement("img")
pageLogo.setAttribute("src","https://t4.ftcdn.net/jpg/03/04/90/35/360_F_304903511_pS6PV6uNCQgGUFiKW5BbZLKxB6A84tTj.jpg")
pageLogo.setAttribute("width","70")
pageLogo.style.position="absolute"
pageLogo.style.marginRight="588px"

header.appendChild(pageLogo)

let navBar=document.createElement("ul")
navBar.id="navbar"
navBar.style.textDecoration="none"
navBar.style.display="flex"
header.appendChild(navBar)


let homeLink= document.createElement("A")
homeLink.setAttribute("href","./index.html")
homeLink.textContent="Home"
homeLink.style.paddingTop="30px"
homeLink.style.textDecoration="none"
homeLink.style.color="#1b7072"
homeLink.style.paddingRight="20px"
header.appendChild(homeLink)

let accountingLink=document.createElement("A")
accountingLink.setAttribute("href","./accounting.html")
accountingLink.textContent="Accounting"
accountingLink.style.paddingTop="30px"
accountingLink.style.textDecoration="none"
accountingLink.style.color="#1b7072"
header.appendChild(accountingLink)

let main=document.createElement("main")

main.style.display="flex"
   main.style.flexWrap="wrap"
   main.style.gap="20px"
   main.style.paddingLeft="90px"
   main.style.paddingRight="90px"
   main.style.paddingTop="20px"
   main.style.paddingBottom="20px"

   let div2=document.createElement("div")
   div2.id=div2
  
    main.appendChild(div2)

    let div3=document.createElement("div")
    div3.id=div3
    main.appendChild(div3)

    let div4=document.createElement("div")
    div4.id=div4
    main.appendChild(div4)

    let div5=document.createElement("div")
    div5.id=div5
    main.appendChild(div5)

Employeedata.prototype.renderEmplyee = function(){

    let body=document.getElementsByTagName("body")[0];
    
    body.appendChild(main)

   
    

   
   if(this.Department == "Administration"){

    let div1=document.createElement("div")
    div2.appendChild(div1)
    div1.style.border="10px solid #1b7072"
    div1.id=div1
    div1.style.height="300px";
    div1.style.width="300px";
    div1.style.textAlign="center";
    div1.style.marginTop="10px"
    // margin-top: 20px;

    let ImageeEmployee=document.createElement("img")
    ImageeEmployee.src=this.Image
    ImageeEmployee.style.height="200px"
    div1.appendChild(ImageeEmployee)
  

    let mainp=document.createElement("p")
    mainp.textContent= (`Employee name : ${this.Fullname}  `) 
     div1.appendChild(mainp)

    let mainp2=document.createElement("p")
    mainp2.textContent= (` Department: ${this.Department}   `) 
    div1.appendChild(mainp2)
  
    
    let mainp3=document.createElement("p3")
    mainp3.textContent= this.employeesalary
    div1.appendChild(mainp3)

   

    
    }
    else if(this.Department == "Finance"){
        let div1=document.createElement("div")
        div3.appendChild(div1)
        div1.style.border="10px solid #1b7072"
        div1.id=div1
        div1.style.height="300px";
        div1.style.width="300px";
        div1.style.textAlign="center";
        div1.style.marginTop="10px"

        let ImageeEmployee=document.createElement("img")
        ImageeEmployee.src=this.Image
        ImageeEmployee.style.height="200px"
        div1.appendChild(ImageeEmployee)
    

        let mainp=document.createElement("p")
        mainp.textContent= (`Employee name : ${this.Fullname}  `) 
        div1.appendChild(mainp)

        let mainp2=document.createElement("p")
        mainp2.textContent= (` Department: ${this.Department}   `) 
        div1.appendChild(mainp2)
    
        
        let mainp3=document.createElement("p3")
        mainp3.textContent= this.employeesalary
        div1.appendChild(mainp3)

    }
    else if(this.Department == "Marketing"){
        let div1=document.createElement("div")
        div4.appendChild(div1)
        div1.style.border="10px solid #1b7072"
        div1.id=div1
        div1.style.height="300px";
        div1.style.width="300px";
        div1.style.textAlign="center";
        div1.style.marginTop="10px"

        let ImageeEmployee=document.createElement("img")
        ImageeEmployee.src=this.Image
        ImageeEmployee.style.height="200px"
        div1.appendChild(ImageeEmployee)
    

        let mainp=document.createElement("p")
        mainp.textContent= (`Employee name : ${this.Fullname}  `) 
        div1.appendChild(mainp)

        let mainp2=document.createElement("p")
        mainp2.textContent= (` Department: ${this.Department}   `) 
        div1.appendChild(mainp2)
    
        
        let mainp3=document.createElement("p3")
        mainp3.textContent= this.employeesalary
        div1.appendChild(mainp3)    
    
        }
        else if(this.Department == "Development"){
            let div1=document.createElement("div")
            div5.appendChild(div1)
            div1.style.border="10px solid #1b7072"
            div1.id=div1
            div1.style.height="300px";
            div1.style.width="300px";
            div1.style.textAlign="center";
            div1.style.marginTop="10px"
    
            let ImageeEmployee=document.createElement("img")
            ImageeEmployee.src=this.Image
            ImageeEmployee.style.height="200px"
            div1.appendChild(ImageeEmployee)
        
    
            let mainp=document.createElement("p")
            mainp.textContent= (`Employee name : ${this.Fullname}  `) 
            div1.appendChild(mainp)
    
            let mainp2=document.createElement("p")
            mainp2.textContent= (` Department: ${this.Department}   `) 
            div1.appendChild(mainp2)
        
            
            let mainp3=document.createElement("p3")
            mainp3.textContent= this.employeesalary
            div1.appendChild(mainp3)        
        
            }




    // div1.style.border="10px solid #1b7072"
}

   
   
    


 







let Ghazi = new Employeedata ("Ghazi samer","Administration","Senior","assets/Ghazi.jpg") 


Ghazi.employeeid=Ghazi.epid();
Ghazi.employeesalary=Ghazi.epsalray();
Ghazi.renderEmplyee()



let Lana = new Employeedata ("Lana Ali","Finance","Senior","assets/Lana.jpg")  

Lana.employeeid=Lana.epid();
Lana.employeesalary=Lana.epsalray();
Lana.renderEmplyee()


let  Tamara = new Employeedata ("Tamara Ayoub","Marketing","Senior","assets/Tamara.jpg") 

Tamara.employeeid=Tamara.epid();
Tamara.employeesalary=Tamara.epsalray();
Tamara.renderEmplyee()



let  Safi = new Employeedata ("Safi Walid","Administration","Mid-Senior","assets/Safi.jpg") 
Safi.employeeid=Safi.epid();
Safi.employeesalary=Safi.epsalray();
Safi.renderEmplyee()

let  Omar = new Employeedata ("Omar Zaid","Development","Senior","assets/Omar.jpg") 
Omar.employeeid=Omar.epid();
Omar.employeesalary=Omar.epsalray();
Omar.renderEmplyee()


let  Rana = new Employeedata ("Rana Saleh","Development","Junior","assets/Rana.jpg") 
Rana.employeeid=Tamara.epid();
Rana.employeesalary=Rana.epsalray();
Rana.renderEmplyee()

let  Hadi = new Employeedata ("Hadi Ahmad","Finance","Mid-Senior","assets/Hadi.jpg") 

Hadi.employeeid=Hadi.epid();
Hadi.employeesalary=Hadi.epsalray();
Hadi.renderEmplyee()



let footer=document.createElement("div")
footer.id=footer
body.appendChild(footer)


let hrMangment= document.createElement("A")
hrMangment.setAttribute("href","https://www.linkedin.com/in/walaa-sbeitan-79b899184/")
hrMangment.textContent="HR- help"
hrMangment.style.margin="140px"
hrMangment.style.color="#1b7072"
hrMangment.style.textDecoration="none"
hrMangment.style.paddingBottom="20px"
footer.appendChild(hrMangment)


let hrInstgram=document.createElement("img")
hrInstgram.setAttribute("src","https://img.freepik.com/premium-vector/black-outline-social-media-logo_197792-2416.jpg")
hrInstgram.style.width="20px"
hrInstgram.style.marginLeft="-115px"
hrInstgram.style.marginBottom="-5px"
footer.appendChild(hrInstgram)


let hrFacebook=document.createElement("img")
hrFacebook.setAttribute("src","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANoAAADnCAMAAABPJ7iaAAAAdVBMVEX///8AAACGhobJyck8PDzY2Njn5+cJCQlgYGC7u7sEBATc3Nz6+vpra2tPT0+Ojo6lpaXS0tLk5ORVVVX09PRmZmaVlZUQEBBcXFwcHByurq4XFxdXV1c3Nze0tLQmJiZISEinp6d0dHR/f38rKyuKioo4ODgLpCqfAAAC8klEQVR4nO3d6XLaMBRAYZctoRZgDAESiB22vv8jtk2XKYtkabggXfec346dbwADxpKyjIiIiIiIiIiIiIiIiIiIiIiI2tq0mHSidVxU8zu5TPHxJXLLff8eskVs169mA3HZKrbpb8IPnJnFBv1TV1T2HJtz0lSQ1omNOa2We71NY1vO64jR0no6/qwUkg1eY0su2grR3mJDLlsJ0V5iQy5bCz0jo3++upLQ+3YvtuNKQm9tKdKEPpFAe2jQoCUVNGhJBQ2afE/vH7vtNL9WOVJMW86q3HE1eKeWVhcNl27UPmqLxoMqpfU8viPrpM2Mx0FV0sY+MpW0Vy+ZSprnVQ2FtL3nQfXRPJ+OGmkT34Pqo+WtpY29D6qO9tZemv+lem20g/8vtdpoG99Tf5btldGOTYfKh9vis6rhoMnR3GcRU/jfd5MczfkPDd+l9hSD5jpBht2bookWeHebIlo3cE96aPOQ15kuWhW6Jz204HsS1dDMurW0wbK9tCdo0KBBgwYNGjRo0P47mu13mkHwnuLS1sXwrMp68bg63/T3H4zTpG0EDj1Jk+Z1e0hD1jEvcWl+94c4M9YxWOpp9tOLepp9uKN6mn3knHqa9QSpn2YfpKqdNrcPUtVOc3z+0k7rt5fm+P1GO81+gtROM5vW0uZ1a2muL6hxaTcP5s+TpX3rn2cfuVBebNvv567btGJfG/l6mn0uDVOfb/u5ecK0i2xXtMrgPamhteBiHTRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBg9YGmnXAZkSa0MJJcit5ydG853R1V6RH6wmtC1sGTwV1d5r3HMNNiS2XKkYTWzY1dK68u9N2UrLGOV8fTpNaoPJH80NStEpO5h4D8nBa88IbQZUia4uK0ApZWZYZiTduAVotuTbxn7q3f+Cy0nx3cFgIzBlxJVMWu9HzDa1s83Abn92+jI7dey1OT0RERERERERERERERERERETt6DvK9GSPm4j88QAAAABJRU5ErkJggg==")
hrFacebook.style.width="20px"
hrFacebook.style.marginLeft="3px"
hrFacebook.style.marginBottom="-5px"
footer.appendChild(hrFacebook)


let copyRight=document.createElement("p")
copyRight.textContent="©"
copyRight.style.marginLeft="3px"
copyRight.style.marginBottom="-5px"
copyRight.style.display="inline"
footer.appendChild(copyRight)







//header


//main



























// let x=1001
// let id=0
// function empID(id){
//     id=x;
//     x+=1;
//     return id
// }

// let Ghazi = {
//     EmployeeID: empID(),

//     Fullname: "Ghazi samer",
//     Department: "Administration",
//     Level: "Senior",
//     Image: function () {
//         let img = document.createElement("img");
//         img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

//         let div = document.getElementById("x");
//         div.appendChild(img);

//         return img;
//     },
//     Salary: getsalaryAndLevel(1500,2000, "Senior"),
// }

// console.log(Ghazi.EmployeeID)
// console.log(Ghazi.Image())
// console.log("Employee Salary = " + Ghazi.Salary)
// document.write('<b>Employee name: </b>' + Ghazi.Fullname + '</br>');
// document.write('<b>Employee salary: </b>' + Ghazi.Salary + '</br></br>' );


// let Lana = {
//     EmployeeID: empID(),
//     Fullname: "Lana Ali",
//     Department: "Finance",
//     Level: "Senior",
//     Image: function () {
//         let img = document.createElement("img");
//         img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

//         let div = document.getElementById("x");
//         div.appendChild(img);

//         return img;
//     },
//     Salary: getsalaryAndLevel(1500,2000, "Senior"),

// }
// console.log(Lana.Image())
// console.log(Lana.EmployeeID)
// console.log("Employee Salary = " + Lana.Salary)
// document.write('<b>Employee name: </b>' + Lana.Fullname + '</br>');
// document.write('<b>Employee salary: </b>' + Lana.Salary + '</br></br>');


// let Tamara = {
//     EmployeeID: empID(),
//     Fullname: "Tamara Ayoub",
//     Department: "Marketing",
//     Level: "Senior",
//     Image: function () {
//         let img = document.createElement("img");
//         img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

//         let div = document.getElementById("x");
//         div.appendChild(img);

//         return img;
//     },
//     Salary: getsalaryAndLevel(1500,2000, "Senior"),

// }
// console.log(Tamara.Image())
// console.log(Tamara.EmployeeID)
// console.log("Employee Salary = " + Tamara.Salary)
// document.write('<b>Employee name: </b>' + Tamara.Fullname + '</br>');
// document.write('<b>Employee salary: </b>' + Tamara.Salary + '</br></br>');

// let Safi = {
//     EmployeeID:empID(),
//     Fullname: "	Safi Walid",
//     Department: "Administration",
//     Level: "Mid-Senior",
//     Image: function () {
//         let img = document.createElement("img");
//         img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

//         let div = document.getElementById("x");
//         div.appendChild(img);

//         return img;
//     },
//     Salary: getsalaryAndLevel(1000,1500, "Mid-Senior"),

// }
// console.log(Safi.Image())
// console.log(Safi.EmployeeID)
// console.log("Employee Salary = " + Safi.Salary)
// document.write('<b>Employee name: </b>' + Safi.Fullname + '</br>');
// document.write('<b>Employee salary: </b>' + Safi.Salary + '</br></br>');






// let Omar = {
//     EmployeeID:empID(),
//     Fullname: "Omar Zaid",
//     Department: "Development",
//     Level: "Senior",
//     Image: function () {
//         let img = document.createElement("img");
//         img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

//         let div = document.getElementById("x");
//         div.appendChild(img);

//         return img;
//     },
//     Salary:getsalaryAndLevel(1500,2000, "Senior"),

// }
// console.log(Omar.Image())
// console.log(Omar.EmployeeID)
// console.log("Employee Salary = " + Omar.Salary)
// document.write('<b>Employee name: </b>' + Omar.Fullname + '</br>');
// document.write('<b>Employee salary: </b>' + Omar.Salary + '</br></br>');





// let Rana = {
//     EmployeeID: empID(),
//     Fullname: "Rana Saleh",
//     Department: "Development",
//     Level: "Junior",
//     Image: function () {
//         let img = document.createElement("img");
//         img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

//         let div = document.getElementById("x");
//         div.appendChild(img);

//         return img;
//     },
//     Salary: getsalaryAndLevel(500,1000, "Junior"),

// }
// console.log(Rana.Image())
// console.log(Rana.EmployeeID)
// console.log("Employee Salary = " + Rana.Salary)
// document.write('<b>Employee name: </b>' + Rana.Fullname + '</br>');
// document.write('<b>Employee salary: </b>' + Rana.Salary + '</br></br>');







// let Hadi = {
//     EmployeeID: empID(),
//     Fullname: "Hadi Ahmad",
//     Department: "Finance",
//     Level: "	Mid-Senior",
//     Image: function () {
//         let img = document.createElement("img");
//         img.src = "https://cdn-icons-png.flaticon.com/512/4128/4128176.png";

//         let div = document.getElementById("x");
//         div.appendChild(img);

//         return img;
//     },
//     Salary: getsalaryAndLevel(1000,1500, "Mid-Senior"),

// }
// console.log(Hadi.Image())
// console.log(Hadi.EmployeeID)
// console.log("Employee Salary = " + Hadi.Salary)
// document.write('<b>Employee name: </b>' + Hadi.Fullname + '</br>');
// document.write('<b>Employee salary: </b>' + Hadi.Salary + '</br></br>');




// function getsalaryAndLevel(min, max, level) {

//     min = Math.ceil(min);
//     max = Math.floor(max);
//     let salary = Math.floor(Math.random() * (max - min) + min);
//     let result = salary-(salary * 0.075); 
//     if (level == "Senior") {
//         return result
//     }
//     else if (level == "Mid-Senior") {
//         return result;
//     }
//     else {
//         return result;
//     }
// }



