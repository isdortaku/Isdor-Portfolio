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
              }
          }
      });
  }, options);

  // Observe the elements you want to animate
  observer.observe(main2);
  observer.observe(aboutImg);
  observer.observe(aboutText);
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