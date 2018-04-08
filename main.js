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




// Scrollinh//////////////////////////////////////////////////////////////

// console.log(window.pageYOffset)   to define coordinates

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

    
//    2button//////////////////////////

    var scrolledSection2;
    var timerBot2;
    var maxHeight2 =  document.documentElement.scrollHeight;

    document.getElementById('team_button').onclick = function() {
        
        scrolledSection2 = window.pageYOffset;
        scrollToSection2();
    }

    function scrollToSection2() {
        
        console.log(scrolledSection2);
        if (scrolledSection2 < 1489) {
            window.scrollTo (0, scrolledSection2);
            scrolledSection2 = scrolledSection2 + 35;
            timerBot2 = setTimeout(scrollToSection2, 20); 
        }
        else {
            clearTimeout(timerBot2);
            window.scrollTo(0, 1489);
        }
    }

//    3button//////////////////////////


var scrolledSection3;
var timerBot3;
var maxHeight3 =  document.documentElement.scrollHeight;

document.getElementById('contact_us_button').onclick = function() {
    
    scrolledSection3 = window.pageYOffset;
    scrollToSection3();
}

function scrollToSection3() {
    
    console.log(scrolledSection3);
    if (scrolledSection3 < 2291) {
        window.scrollTo (0, scrolledSection3);
        scrolledSection3 = scrolledSection3 + 40;
        timerBot3 = setTimeout(scrollToSection3, 20); 
    }
    else {
        clearTimeout(timerBot3);
        window.scrollTo(0, 2291);
    }
}














    // var scrolled;
	// var timerScroll;

	// document.getElementById('portfolio_button').onclick = function(){
	// 	scrolled = window.pageYOffset;
	// 	window.scrollTo(0,1000);
	// 	scrollToTop();
	// }
	// function scrollToTop(){
	// 	if (scrolled > 0) {
	// 		window.scrollTo(0, scrolled);
	// 		scrolled = scrolled - 800; //100 - скорость прокрутки
	// 		timerScroll = setTimeout(scrollToTop, 600);
	// 	}
	// 	else {
	// 		clearTimeout(timer);
	// 		window.scrollTo(0,1000);
	// 	}
	// }




 


     
//   var slider = document.getElementById ('header_slider_roll');
//      left = left - 100;
//      if (left < -200) {
//                  left = 0;
//              }
    
//      slider.style.left = left + 'vw';
//  }






















// document.getElementsByClassName('left_arrow')[0].onclick = sliderLeft;
// var left = 0;


// function sliderLeft() {
//     var slider = document.getElementsByClassName('background_images_wrapper')[0];
//     left = left - 1100;
//     if (left < -2200) {
//         left = 0;
//     }
//     slider.style.left = left + 'px';
// }

// document.getElementsByClassName('right_arrow')[0].onclick = sliderRight;


// function sliderRight() {
//     var slider = document.getElementsByClassName('background_images_wrapper')[0]
//     left += 1100;
//     if (left > 0) {
//         left = -2200;
//     }
//     slider.style.left = left + 'px';
// }

// var form = document.getElementsByClassName('subscribe_field');
// form.addEventListener('submit', function (e)) {
//     e.preventDefault();
//     var inputs = e.target.getElementsByTagName('input');
//     var textarea = e.target.getElementsByTagName('textarea')[0];
//     if (validateReq(e.target)) {
//         for (var i = 0; i < inputs.length; i++) {
//             // get data nd field object

//         }

//     }

// })

// function validateReq(form) {
//     form.querySelector('input[name="email"]').value.trim() {

//     }
// }





// function renderProducts(str) {

//     if (!str) {

//         // load all

//         for (var i = 0; i < dataProductcount; i++) {
//             var args = [];
//             for (var key in data.products[i]) {
//                 args.push(data.products[i][key])
//             }
//         }

//     } else {
//         // load matching products
//     }

// }
// var candyButton = document.querySelector('.input_search')
// candyButton.addEventListener('click', function () {
//     var inputValue = document.getElementsByClassName('search_button')[0].nodeValue.trim();
//     if (inputValue) {


//         renderProducts(inputValue);
//     }
// });

// function createElement(id, name, price, imglink) {
//     var product = document.createElement('div');
//     product.setAttribute('class', 'product_item');
//     var productId = "product" + id;
//     product.setAttribute("id", product);


//     var innerImg = document.createElement('div');
//     innerImg.setAttribute('class', 'product_image');
//     innerImg.style.backgroundImage = 'url("' + imgLink + '")';
//     product.appendChild(innerImg);

//     var innerContent = document.createElement('div');
//     innerContent.setAttribute('class', '')

// }

// var buttons = documents.getElementsByTagName('span')
// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function () {
//         renderProducts(this.getAttribute("class"))
//     })
// }



// });