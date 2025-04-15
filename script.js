// STAR EXPLOSION ANIMATION
$(function () {
    var numberOfStars = 200;
  
    // Create 200 star blobs
    for (var i = 0; i < numberOfStars; i++) {
      $('.congrats').append('<div class="blob fa fa-star ' + i + '"></div>');
    }
  
    animateText();
    animateBlobs();
  });
  
  $('.congrats').click(function () {
    reset();
    animateText();
    animateBlobs();
  });
  
  function reset() {
    $.each($('.blob'), function (i) {
      TweenMax.set($(this), { x: 0, y: 0, opacity: 1 });
    });
  
    TweenMax.set($('h1'), { scale: 1, opacity: 1, rotation: 0 });
  }
  
  function animateText() {
    TweenMax.from($('h1'), 0.8, {
      scale: 0.4,
      opacity: 0,
      rotation: 15,
      ease: Back.easeOut.config(4),
    });
  }
  
  function animateBlobs() {
    var xSeed = _.random(350, 380);
    var ySeed = _.random(120, 170);
  
    $.each($('.blob'), function (i) {
      var $blob = $(this);
      var speed = _.random(1, 5);
      var rotation = _.random(5, 100);
      var scale = _.random(0.8, 1.5);
      var x = _.random(-xSeed, xSeed);
      var y = _.random(-ySeed, ySeed);
  
      TweenMax.to($blob, speed, {
        x: x,
        y: y,
        ease: Power1.easeOut,
        opacity: 0,
        rotation: rotation,
        scale: scale,
        onStartParams: [$blob],
        onStart: function ($element) {
          $element.css('display', 'block');
        },
        onCompleteParams: [$blob],
        onComplete: function ($element) {
          $element.css('display', 'none');
        },
      });
    });
  }
  
  // BUBBLING EMOJIS
  const container = document.getElementById('bubbles-container');
  const symbols = ['❤️', '⭐', '💖', '✨', '💫', '🌟'];
  
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}vw`;
    bubble.style.animationDuration = `${2 + Math.random() * 3}s`;
    bubble.style.fontSize = `${1 + Math.random() * 2}rem`;
    bubble.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    container.appendChild(bubble);
  
    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }
  
  setInterval(createBubble, 200);
  