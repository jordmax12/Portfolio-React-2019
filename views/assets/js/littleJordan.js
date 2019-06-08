var canvas;
var context;
var images = {};
var totalResources = 11;
var numResourcesLoaded = 0;
var fps = 30;
var x = 25;
var y = 75;
var breathInc = 0.1;
var breathDir = 1;
var breathAmt = 0;
var breathMax = 2;
var breathInterval = setInterval(updateBreath, 1000 / fps);
var maxEyeHeight = 8;
var curEyeHeight = maxEyeHeight;
var eyeOpenTime = 0;
var timeBtwBlinks = 4000;
var blinkUpdateTime = 200;
var boxUpdateTime = 1000;
var blinkTimer = setInterval(updateBlink, blinkUpdateTime);
var boxTimer = setInterval(updateBox, boxUpdateTime);
var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;
var numTimesJumped = 0;
var boxIsOriginalState = true;
var jumping = false;
var justJumped = false;
var showMarioBox = false;
var jumpHeight = 3;

$(document).ready(() => {
   if(window.location.pathname != "/") return;
   prepareCanvas(document.getElementById('littleJordanCanvas'), '100px', '100px');
   if(window.location.pathname == "/") {
      $('.navbar').css('background-color: transparent !important')
   } 
})

function updateFPS() {
   curFPS = numFramesDrawn;
   numFramesDrawn = 0;
}

function prepareCanvas(canvasDiv, canvasWidth, canvasHeight) {
   // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
   canvas = document.createElement('canvas');
   canvas.setAttribute('width', canvasWidth);
   canvas.setAttribute('height', canvasHeight);
   canvas.setAttribute('id', 'canvas');
   canvasDiv.appendChild(canvas);
   if (typeof G_vmlCanvasManager != 'undefined') {
      canvas = G_vmlCanvasManager.initElement(canvas);
   }
   context = canvas.getContext("2d"); // Grab the 2d canvas context
   // Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
   //     context = document.getElementById('canvas').getContext("2d");
   loadImage("leftArm");
   loadImage("legs");
   loadImage("torso");
   loadImage("rightArm");
   loadImage("head");
   loadImage("hair");
   loadImage("leftArm-jump");
   loadImage("legs-jump");
   loadImage("rightArm-jump");
   loadImage("Mario0Square");
   loadImage("Mario1Square");
}

function loadImage(name) {
   images[name] = new Image();
   images[name].onload = function () {
      resourceLoaded();
   }
   images[name].src = "./" + name + ".png";
   images[name].id = name + "_id";
}

function resourceLoaded() {
   numResourcesLoaded += 1;
   if (numResourcesLoaded === totalResources) {
      setInterval(redraw, 1000 / fps);
      var $dropDiv = $('#littleJordanHolder');
      var dh = $dropDiv.outerHeight();
      var dw = $dropDiv.outerWidth();
      var offset = $('.aa_inner').offset();
      var screenSize = $(window).width();
      let width = window.innerWidth;
      if (screenSize > 860) {
         // animate drop
         var left = (offset.left + dh);
         // var left = '200 '
         var top = (offset.top - dh) + 30;
      } else {
         var left = -30;
         var top = (offset.top - dh) + 42;
      }

      if (width > 767) {
         $('#basic-navbar-nav').css('height', '40px');
         $dropDiv.css({
            left: $('#headerMarker').offset().left + 300,
            top: $('#headerMarker').offset().top - 106
         });
      } else {
         $dropDiv.css({
            left: 10,
            top: $('#headerMarker').offset().top - 85
         });
      }
      // console.log($('body').css('overflow'))
      $('.navbar-toggler').on('click', (e) => {
         let isShown = $('#basic-navbar-nav').hasClass('show');

         if (isShown) {

            setTimeout(() => {
               $('#littleJordanHolder').css('display', 'block')
               $('body').css('overflow-y', 'visible')
            }, 400)
         } else {
            // $('#home').css('height', 'calc(100% - 150px)')
            $('#littleJordanHolder').css('display', 'none');
            $('body').css('overflow-y', 'hidden')
         }
      })

      $(window).on('resize', () => {
         width = window.innerWidth;
         let isShown = $('#basic-navbar-nav').hasClass('show');

         if (width > 767) {
            //TODO: move this to header.js
            $('#basic-navbar-nav').css('height', '40px');
            $dropDiv.css({
               left: $('#headerMarker').offset().left + 300,
               top: $('#headerMarker').offset().top - 106
            });
         } else {
            $dropDiv.css({
               left: 10,
               top: $('#headerMarker').offset().top - 85
            });
         }
      })
   }
}

function wait(ms) {
   var start = new Date().getTime();
   var end = start;
   while (end < start + ms) {
      end = new Date().getTime();
   }
}

function redraw() {
   //hardcoded values
   //box position x: 245 + 9, y: 185 -180
   //cached Y for Little Jordan is 185

   var cachedY = '';
   canvas.width = canvas.width; // clears the canvas 
   //drawEllipse(x + 9, y - 160, 60, 20, 'grey'); // Shadow
   if (showMarioBox) {
      if (boxIsOriginalState) context.drawImage(images["Mario0Square"], 245 + 9, 185 - 180);
      else context.drawImage(images["Mario1Square"], 245 + 9, 185 - 180);
   }

   if (jumping) {
      y -= jumpHeight;
   } else if (justJumped && !jumping) {
      if (y < 190) {
         y += jumpHeight;
      } else {
         justJumped = false;
      }

      switch (numTimesJumped) {
         case 1:
            //jumpHeight = 3;
            //y = 185;
            break;
         case 2:
            //jumpHeight = 5;
            //y = 185;
            break;
         case 3:
            //wait(500);
            //y = 185;
            break;
      }
   }
   //change this to a square, maybe make it look like ma
   if (jumping)
      context.drawImage(images["leftArm-jump"], x + 30, y - 45 - breathAmt);
   else
      context.drawImage(images["leftArm"], x + 20, y - 21 - breathAmt);

   if (jumping)
      context.drawImage(images["legs-jump"], x, y - 5);
   else
      context.drawImage(images["legs"], x, y);
   context.drawImage(images["torso"], x, y - 25);
   context.drawImage(images["head"], x - 10, y - 62.5 - breathAmt);
   context.drawImage(images["hair"], x - 23, y - 70 - breathAmt);


   if (jumping)
      context.drawImage(images["rightArm-jump"], x - 20, y - 21 - breathAmt);
   else
      context.drawImage(images["rightArm"], x - 10, y - 21 - breathAmt);

   drawEllipse(x + 18, y - 35 - breathAmt, 4, curEyeHeight, 'black'); // Left Eye
   drawEllipse(x + 25, y - 35 - breathAmt, 4, curEyeHeight, 'black'); // Right Eye

   //context.font = "bold 12px sans-serif";
   //context.fillText("fps: " + curFPS + "/" + fps + " (" + numFramesDrawn + ")", 40, 200);
   ++numFramesDrawn;
}

function drawEllipse(centerX, centerY, width, height, fillStyle) {
   context.beginPath();
   context.moveTo(centerX, centerY - height / 2);
   context.bezierCurveTo(centerX + width / 2, centerY - height / 2, centerX + width / 2, centerY + height / 2, centerX, centerY + height / 2);
   context.bezierCurveTo(centerX - width / 2, centerY + height / 2, centerX - width / 2, centerY - height / 2, centerX, centerY - height / 2);
   context.fillStyle = fillStyle;
   context.fill();
   context.closePath();
}

function updateBreath() {
   if (breathDir === 1) { // breath in
      breathAmt -= breathInc;
      if (breathAmt < -breathMax) {
         breathDir = -1;
      }
   } else { // breath out
      breathAmt += breathInc;
      if (breathAmt > breathMax) {
         breathDir = 1;
      }
   }
}

function updateBlink() {
   eyeOpenTime += blinkUpdateTime;
   if (eyeOpenTime >= timeBtwBlinks) {
      blink();
   }
}

function updateBox() {
   if (boxIsOriginalState) boxIsOriginalState = false;
   else boxIsOriginalState = true;
}

function blink() {
   curEyeHeight -= 1;
   if (curEyeHeight <= 0) {
      eyeOpenTime = 0;
      curEyeHeight = maxEyeHeight;
   } else {
      setTimeout(blink, 10);
   }
}

function jump() {
   if (!jumping) {
      jumping = true;
      numTimesJumped++;
      setTimeout(function () { land(); }, 500);
   }
}

function land() {
   jumping = false;
   justJumped = true;
   redraw();

   //        if(numTimesJumped == 1 || numTimesJumped == 2) {
   //            setTimeout(function() {
   //                jump();
   //            }, 500);
   //        }  else if (numTimesJumped == 3) {
   //            //trigger perm landing of little jordan
   //            //trigger box dissapear
   //            showMarioBox = false;
   //            //trigger nav flicker
   //        }
}


/*
 Gradient
*/

var colors = new Array(
   // [62, 35, 255],
   // [60, 255, 60],
   // [255, 35, 98],
   // [45, 175, 230],
   // [255, 0, 255],
   // [255, 128, 0]
   [16, 23, 61],
   [3,0,53],
   [50,16,81],
   [27,0,56],
   // [31,28,59]
   [9,130,187]
);

var step = 0;
//color table indices for: 
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
   if(window.location.pathname != "/") {
      $('#main, #home').css({
         background: "transparent"
      })
      $('.navbar').css('background-color:  rgba(50,16,81, .5) !important')
      return;
   } 
   if ($ === undefined) return;

   var c0_0 = colors[colorIndices[0]];
   var c0_1 = colors[colorIndices[1]];
   var c1_0 = colors[colorIndices[2]];
   var c1_1 = colors[colorIndices[3]];

   var istep = 1 - step;
   var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
   var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
   var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
   var color1 = "rgba(" + r1 + "," + g1 + "," + b1 + ", .3)";

   var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
   var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
   var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
   var color2 = "rgba(" + r2 + "," + g2 + "," + b2 + ", .3)";

   //TODO: make sure this is only happening if on main page.
   $('#main, #home').css({
      background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
   }).css({
      background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
   });

   step += gradientSpeed;
   if (step >= 1) {
      step %= 1;
      colorIndices[0] = colorIndices[1];
      colorIndices[2] = colorIndices[3];

      //pick two new target color indices
      //do not pick the same as the current one
      colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
      colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
   }
}

setInterval(updateGradient,10);