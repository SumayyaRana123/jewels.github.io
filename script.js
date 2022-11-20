//====================== JS for Banner==========================

var slideNum = 0;
var scounter = 0;
let slides = document.getElementsByClassName('slide');
let rSelector = document.getElementsByClassName('radio-btn');


function displayBanner()
{  
    if (scounter  == slides.length) {
      scounter=0;
    }
    for (let y of slides) {
                y.style.display = "none";
            }
     slides[scounter].style.display = "block";
     document.getElementsByClassName('radio-btn')[scounter].checked = true;
           scounter++;
            
}
setInterval(displayBanner, 2000);

//====================== JS for Testimonial==========================
let counter = 0, lcounter = -1,mcounter = -1,tcounter = -1,windowtype = "";
let testimonial = document.getElementsByClassName("testimonial-col");

function checkForReset(counter) {
    if (counter == testimonial.length-1) {
        resetValue = -1;
    }

    else {
        resetValue = counter;
    }
    return resetValue;
}

function arrowPrevClick() {
    
    if (getwindowtype() == "laptop") {
          lcounter=lcounter-2;
            LaptopView(-1);
            lcounter=lcounter-4;
            if(lcounter>1)
            {
                showArrow();
            }
            else{
                hideArrow();
            }
        
    }
    else if (getwindowtype() == "tab") {
    
        tcounter=tcounter-1;
        tabView(-1);
        tcounter=tcounter-2;
        
        if(tcounter>1)
        {
            showArrow();
        }
        else{
            hideArrow();
        }
    
    }
    else if (getwindowtype() == "mobile") {
        // mcounter = checkForReset(mcounter);
        mobileView(-1);
    }

}
function arrowNextClick() {
   

    if (getwindowtype() == "laptop") {
    
        if(lcounter==testimonial.length-1)
        {
        lcounter = checkForReset(lcounter);
        LaptopView(1);
        lcounter=lcounter+3;
        }
        else
        {
        LaptopView(1);
        lcounter=lcounter+3;
        }
        
        if(lcounter>2)
        {
        showArrow();
        }
        else
        {hideArrow();
        }
    }
    else if (getwindowtype() == "tab") {
        
        tcounter = checkForReset(tcounter);
        tabView(1);
        tcounter=tcounter+2;
        if(tcounter>1)
        {
        showArrow();
        }
        else
        {hideArrow();
        }
    }
    else if (getwindowtype() == "mobile") {

        mcounter = checkForReset(mcounter);
        mobileView(1);
      mcounter=mcounter+1;
        if(mcounter>0)
        {
        showArrow();
        }
        else
        {hideArrow();
        }
    }

}

function mobileView(index) {

    for (let y of testimonial) {
        y.style.display = "none";
    }

    testimonial[mcounter+index].style.width = "100%";
    testimonial[mcounter+index].style.display = "flex";

}

function tabView(index) {
    let counter=tcounter;
    
    for (let y of testimonial) {
        y.style.display = "none";
    }

    for (let i = 0; i < 2; i++) {
        testimonial[counter+index].style.width = "45%";
        testimonial[counter+index].style.display = "flex";
        counter=counter+index;        
      }

}

function LaptopView(index) {
  let counter=lcounter;
    
   
    for (let y of testimonial) {
        y.style.display = "none";
        y.style.width = "30%";
    }
    for (let i = 0; i < 3; i++) {
        testimonial[counter+index].style.display = "flex";
        counter=counter+index;               
      }


}
function getwindowtype() {
    var w = document.documentElement.clientWidth;
    if (w > 768) {

        windowtype = "laptop";


    }
    else if (w > 481 && w < 769) {
        windowtype = "tab";



    }
    else if (w > 320 && w < 482) {
        windowtype = "mobile";

    }
    return windowtype;
}
function showArrow()
{

document.getElementById("arrow-previous").style.display="flex";
}
function hideArrow()
{
    document.getElementById("arrow-previous").style.display="none";
}
function display() {
    hideArrow();
    if (getwindowtype() == "laptop") {
        lcounter=-1;
       
        LaptopView(1);
         lcounter=lcounter+3;
    }
    else if (getwindowtype() == "tab") {
        tcounter=-1;
        tabView(1);
        tcounter = tcounter + 2;
    }
    else if (getwindowtype() == "mobile") {
        mcounter=-1;
        mobileView(1);
        mcounter=mcounter+1;
       
    }
}
display();
window.addEventListener('resize', display);

