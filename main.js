'use strict';

// autoslider//////////////////////////

autoSlider();
var left = 0;
var timer;

 function autoSlider() {
     timer = setTimeout(function(){
        var slider = document.getElementById ('header_slider_roll');
        left = left - 100;
        if (left < -200) {
                    left = 0;
                    clearTimeout(timer);
                }   
        slider.style.left = left + 'vw';
        autoSlider();
            }, 4000);
    }




// Scrolling//////////////////////////////////////////////////////////////

 console.log(window.pageYOffset)   
// scrollicon//////////////////////////////////
var scrolledSection0;
    var timerBot0;
    var maxHeight0 =  document.documentElement.scrollHeight;

    document.getElementById('button_down').onclick = function() {
        
        scrolledSection0 = window.pageYOffset;
        scrollToSection0();
    }

    function scrollToSection0() {
        
        console.log(scrolledSection0);
        if (scrolledSection0 < 666) {
            window.scrollTo (0, scrolledSection0);
            scrolledSection0 = scrolledSection0 + 35;
            timerBot0 = setTimeout(scrollToSection0, 20); 
        }
        else {
            clearTimeout(timerBot0);
            window.scrollTo(0, 666);
        }
    }



//    1button//////////////////////////
    var scrolledSection;
    var timerBot;
    var maxHeight =  document.documentElement.scrollHeight;

    document.getElementById('portfolio_button').onclick = function() {
        
        scrolledSection = window.pageYOffset;
        scrollToSection();
    }

    function scrollToSection() {
        
        console.log(scrolledSection);
        if (scrolledSection < 666) {
            window.scrollTo (0, scrolledSection);
            scrolledSection = scrolledSection + 30;
            timerBot = setTimeout(scrollToSection, 20); 
        }
        else {
            clearTimeout(timerBot);
            window.scrollTo(0, 666);
        }
    }

    
//    TEAM button//////////////////////////

    var scrolledSection2;
    var timerBot2;
    var maxHeight2 =  document.documentElement.scrollHeight;

    document.getElementById('team_button').onclick = function() {
        
        scrolledSection2 = window.pageYOffset;
        scrollToSection2();
    }

    function scrollToSection2() {
        
        console.log(scrolledSection2);
        if (scrolledSection2 < 2105) {
            window.scrollTo (0, scrolledSection2);
            scrolledSection2 = scrolledSection2 + 35;
            timerBot2 = setTimeout(scrollToSection2, 20); 
        }
        else {
            clearTimeout(timerBot2);
            window.scrollTo(0, 2105);
        }
    }

//    Contact US button//////////////////////////


var scrolledSection3;
var timerBot3;
var maxHeight3 =  document.documentElement.scrollHeight;

document.getElementById('contact_us_button').onclick = function() {
    
    scrolledSection3 = window.pageYOffset;
    scrollToSection3();
}

function scrollToSection3() {
    
    console.log(scrolledSection3);
    if (scrolledSection3 < 3703) {
        window.scrollTo (0, scrolledSection3);
        scrolledSection3 = scrolledSection3 + 40;
        timerBot3 = setTimeout(scrollToSection3, 20); 
    }
    else {
        clearTimeout(timerBot3);
        window.scrollTo(0, 3703);
    }
}











