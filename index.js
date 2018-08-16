// console.log("hello")

(function() {
  'use strict';

  // YOUR CODE HERE
  const redButton = document.getElementById("stopButton");
  const stopLight = document.getElementById("stopLight");
  redButton.addEventListener("click", function(){
    stopLight.classList.toggle("stop")
    // goLight.classList.remove('go')
    // slowLight.classList.remove('slow')
  });
  const yellowButton = document.getElementById("slowButton");
  const slowLight = document.getElementById('slowLight');
  yellowButton.addEventListener('click', function(){
    slowLight.classList.toggle('slow')
    // stopLight.classList.remove('stop')
    // goLight.classList.remove('go')
  })
  const goButton = document.getElementById('goButton');
  const goLight = document.getElementById('goLight');
  goButton.addEventListener('click', function(){
    goLight.classList.toggle('go');
    // stopLight.classList.remove('stop')
    // slowLight.classList.remove('slow')
  })
  redButton.addEventListener('mouseover', function(){
    console.log("Entered Stop button");
  })
  redButton.addEventListener('mouseleave', function(){
    console.log("Left Stop button");
  })
  yellowButton.addEventListener('mouseover', function(){
    console.log('Entered Slow Button');
  })
  yellowButton.addEventListener('mouseleave', function(){
    console.log("left slow Button");
  })
  goButton.addEventListener('mouseover', function(){
    console.log('Entered Go Button');
  })
  goButton.addEventListener('mouseleave', function(){
    console.log('Left Go Button');
  })

  function buttonTouch(){
    const bulbs = document.querySelectorAll(".bulb")
    const buttons = document.querySelectorAll('.button')
    for(let i=0; i<buttons.length; i++){
      buttons[i].addEventListener('click', function(){
        if(bulbs[i].classList.contains('go') || bulbs[i].classList.contains('slow') || bulbs[i].classList.contains('stop')){
          console.log(`${buttons[i].innerText} bulb on`)
        } else {
          console.log(`${buttons[i].innerText} bulb off`)
        }
      })
    }
  }
  const bulbs = document.querySelectorAll(".bulb")
  const buttons = document.querySelectorAll('.button')
  for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
      if(bulbs[i].classList.contains('go') || bulbs[i].classList.contains('slow') || bulbs[i].classList.contains('stop')){
        console.log(`${buttons[i].innerText} bulb on`)
      } else {
        console.log(`${buttons[i].innerText} bulb off`)
      }
    })
  }


})();
