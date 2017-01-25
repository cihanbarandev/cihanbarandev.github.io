

$(document).ready(function(){

  $(".button-collapse").sideNav();

  $('.animate-text').textillate({
    in: {
        effect: 'fadeIn',
        shuffle: true
    }
  });

  $('.parallax').parallax();

  $('.scrollspy').scrollSpy({
    scrollOffset: '50'
  });

// target='_blank' Hover-fix


  $('.project-button').hover(function(){
       $(this).css({
         'color': '#d01614',
         'background-color': '#ffffff'
       });
       }, function(){
       $(this).css({
         'color': '#ffffff',
         'background-color': '#d01614'
       });
   });



  /*ParticlesJS*/
  particlesJS('particles-js',

    {
    "particles": {
      "number": {
        "value": 58,
        "density": {
          "enable": true,
          "value_area": 631.3181133058181
        }
      },
      "color": {
        "value": "#d01614"
      },
      "shape": {
        "type": "polygon",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 3
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.4,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 157.82952832645452,
        "color": "#d01614",
        "opacity": 0.6155351604731727,
        "width": 0.7891476416322727
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }

  );

});
