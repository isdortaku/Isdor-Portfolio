(function() {
    const cursor = document.querySelector('.cursor');
    
    const innerCursor = document.querySelector('.inner-cursor');
    
    const followCursor = e => {
      const { clientX: x, clientY: y} = e;
      cursor.style.left = x + 'px';
      cursor.style.top = y + 'px';
      
      innerCursor.style.left = x + 'px';
      innerCursor.style.top = y + 'px';
    }
    
    window.addEventListener('mousemove', followCursor);
  })();

  (function() {
    const cursor = document.querySelector('.cursor');
    const innerCursor = document.querySelector('.inner-cursor');
    
    const followCursor = e => {
        const { clientX: x, clientY: y} = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
        
        innerCursor.style.left = x + 'px';
        innerCursor.style.top = y + 'px';
    };
    
    window.addEventListener('mousemove', followCursor);
})();



document.addEventListener("DOMContentLoaded", () => {
  const main2 = document.querySelector('.main2');
  const aboutImg = document.querySelector('.about-img');
  const aboutText = document.querySelector('.about-text');
  const juk = document.querySelector('.juk');
  const hello = document.querySelector('.hello');
  const sero = document.querySelector('.sero');
  const puls = document.querySelector('.puls');
  

  // Set up IntersectionObserver to observe elements
  const options = {
      threshold: 0.4 // 60% of the element must be visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add appropriate class when 60% of the element is visible
              if (entry.target.classList.contains('main2')) {
                  entry.target.classList.add('animate-slide-down');
              } else if (entry.target.classList.contains('about-img')) {
                  entry.target.classList.add('animate-slide-left');
              } else if (entry.target.classList.contains('about-text')) {
                  entry.target.classList.add('animate-slide-right');
              } else if (entry.target.classList.contains('juk')) {
                entry.target.classList.add('animate-slide-right');
              } else if (entry.target.classList.contains('hello')) {
                entry.target.classList.add('animate-slide-left');
              } else if (entry.target.classList.contains('about-text')) {
                  entry.target.classList.add('animate-slide-right');
              } else if (entry.target.classList.contains('sero')) {
                entry.target.classList.add('animate-slide-left')
              } else if (entry.target.classList.contains('puls')) {
                entry.target.classList.add('animate-slide-left')
              }

          }
      });
  }, options);

  // Observe the elements you want to animate
  observer.observe(main2);
  observer.observe(aboutImg);
  observer.observe(aboutText);
  observer.observe(juk);
  observer.observe(hello);
  observer.observe(sero)
  observer.observe(puls)
});


// corousel 

document.addEventListener('DOMContentLoaded', function() {
  var carousel = new bootstrap.Carousel(document.getElementById('projectCarousel'), {
    interval: false // Prevents auto-sliding
  });
  
  // Disable sliding on mobile
  if (window.innerWidth < 768) {
    carousel._element.addEventListener('slide.bs.carousel', function(e) {
      e.preventDefault();
    });
  }
});

// corusel 
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});


// skills animations 

$(document).ready(function () {
	function hex_initial_animation() {
		$(".hex-wrap,.hover-notify").velocity("transition.expandIn", { stagger: 150 });
		$(".hex-wrap").velocity("callout.pulse");
		$(".hoverblock").velocity("fadeOut", { delay: 3000, duration: 0 });
		}
	hex_initial_animation();

var hoverdetect = setInterval(function(){ hovernotify() }, 3000);
function hovernotify() {
    $(".hover-notify").velocity("callout.tada");
}
function myStopFunction() {
$(".hover-notify").velocity('stop', true).velocity("fadeOut");
    clearInterval(hoverdetect);
}

		$(".hex-init").mouseenter(function () {
			
			myStopFunction();

			var title_color =  $(this).parent().attr("data-color");
			var title_name = $(this).parent().attr("data-title");
			var desc_name = $(this).parent().attr("data-content");

				function hex_description() {
					$('.code-description').velocity('stop', true).velocity("transition.slideRightBigIn");
					$('.' + desc_name).siblings().removeClass('desc-active');
						setTimeout(function() {
							$('.' + desc_name).addClass('desc-active');
							$('.code-descriptopn > div, .desc-active').children().velocity('stop', true).velocity("transition.slideRightBigIn", { stagger: 300 });
							$('.code-title, .desc-active span').velocity({color: title_color}, { queue: false });
							$('.code-title').text(title_name)
						}, 0);
			    }
			    hex_description();

				$(this).parent().addClass('hexactive'); 
				$('.hexactive').velocity({scaleX:"1.1",scaleY:"1.1"}, { duration: 200 });

			}).mouseleave(function () {
				 $('.hexactive').velocity('stop', true).velocity('reverse').removeClass('hexactive');
			});
});