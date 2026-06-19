/* ==========================================================================
   Elite Vision Photography Academy - JS Global main script
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initNavbar();
  initMobileMenu();
  initScrollAnimations();
  initCounterStats();
  initTestimonialsCarousel();
  initFloatingActions();
  initButtonRipples();
});

/* 1. Page Preloader */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
      }, 700); // Luxury delay for smooth exit
    });
    
    // Safety fallback
    setTimeout(() => {
      preloader.style.opacity = '0';
      preloader.style.visibility = 'hidden';
    }, 3000);
  }
}

/* 2. Navbar Scrolling State & Active Indicators */
function initNavbar() {
  const header = document.querySelector('header');
  if (header) {
    const checkScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', checkScroll);
    checkScroll();
  }

  // Auto-highlight navbar link based on current page filename
  const navLinks = document.querySelectorAll('.nav-link');
  const path = window.location.pathname;
  let page = path.split("/").pop();
  
  if (page === "" || page === "index.html" || page === "photoshoot") {
    page = "index.html";
  }

  // Handle case where training page might be referred
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (page === href) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

/* 3. Mobile Menu Toggle */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('open');
      
      const lines = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('open')) {
        lines[0].style.transform = 'translateY(11px) rotate(45deg)';
        lines[1].style.opacity = '0';
        lines[2].style.transform = 'translateY(-11px) rotate(-45deg)';
      } else {
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
        const lines = hamburger.querySelectorAll('span');
        lines[0].style.transform = 'none';
        lines[1].style.opacity = '1';
        lines[2].style.transform = 'none';
      });
    });
  }
}



/* 5. Scroll Reveal Animation observer */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
      observer.observe(element);
    });
  } else {
    // Fallback for older browsers
    revealElements.forEach(element => {
      element.classList.add('active');
    });
  }
}

/* 6. Statistics Counter animation when visible */
function initCounterStats() {
  const counters = document.querySelectorAll('.counter-number');
  if (counters.length === 0) return;

  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds total count animation
    const frameRate = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;
    
    const countUp = () => {
      frame++;
      // easeOutQuad calculation
      const progress = frame / totalFrames;
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.round(easeProgress * target);
      
      counter.innerText = currentCount + suffix;
      
      if (frame < totalFrames) {
        requestAnimationFrame(countUp);
      } else {
        counter.innerText = target + suffix;
      }
    };
    
    requestAnimationFrame(countUp);
  };

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(counter => {
      counterObserver.observe(counter);
    });
  } else {
    counters.forEach(counter => animateCounter(counter));
  }
}

/* 7. Client Testimonial Slider */
function initTestimonialsCarousel() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.testimonial-indicators');
  const prevBtn = document.querySelector('.testimonial-nav-prev');
  const nextBtn = document.querySelector('.testimonial-nav-next');
  
  if (slides.length === 0) return;
  
  let currentSlide = 0;
  let carouselInterval = null;

  // Create dot indicators
  if (dotsContainer) {
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
      const dot = document.createElement('div');
      dot.classList.add('testimonial-dot');
      if (idx === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots() {
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function showSlide(index) {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    currentSlide = index;
    updateDots();
  }

  function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
      next = 0;
    }
    showSlide(next);
  }

  function prevSlide() {
    let prev = currentSlide - 1;
    if (prev < 0) {
      prev = slides.length - 1;
    }
    showSlide(prev);
  }

  function goToSlide(index) {
    showSlide(index);
    resetInterval();
  }

  function startInterval() {
    carouselInterval = setInterval(nextSlide, 6000); // 6 seconds auto rotation
  }

  function resetInterval() {
    if (carouselInterval) {
      clearInterval(carouselInterval);
      startInterval();
    }
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  showSlide(0);
  startInterval();
}

/* 8. Floating Action Buttons (WhatsApp & Scroll to Top) */
function initFloatingActions() {
  const backToTop = document.querySelector('.back-to-top');
  const whatsapp = document.querySelector('.whatsapp-float');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  if (whatsapp) {
    whatsapp.addEventListener('click', () => {
      const phoneNumber = '919876543210';
      const message = 'Hello Elite Vision Photography Academy! I would like to inquire about booking a session or enrolling in a course.';
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  }
}

/* 9. Premium Button Ripple Click animation */
function initButtonRipples() {
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}
