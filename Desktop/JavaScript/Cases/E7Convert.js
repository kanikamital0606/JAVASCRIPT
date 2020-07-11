// The getDay() method returns the weekday as a number between 0 and 6.
// (Sunday=0, Monday=1, Tuesday=2 ..)
// This example uses the weekday number to calculate the weekday name:

//it will run when window is competely loaded 

window.onload =function(){
    // acess line 7 of html 
    let para=document.querySelector("#demo")
    const ans = kanika()
    para.append(`Today is       :   ${ans}`)
}

const kanika=function (){
    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            return day;
        case 1:
            day = "Monday";
            return day;
        case 2:
            day = "Tuesday";
            return day;
        case 3:
            day = "Wednesday";
            return day;
        case 4:
            day = "Thursday";
            return day;
        case 5:
            day = "Friday";
            return day;
        case 6:
            day = "Saturday";
            return day;
    }
    
}


//create a file index.html, convert this file into index.html
//i.e run this file in browser instead of console and terminal 