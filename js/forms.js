/* ==========================================================================
   Elite Vision Photography Academy - JS Form Validation & Processing
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initBookingForm();
  initContactForm();
});

/* Helper: Set Minimum Date for Bookings to Today */
function setMinDate(dateInput) {
  if (!dateInput) return;
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0
  let dd = today.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  const minDate = `${yyyy}-${mm}-${dd}`;
  dateInput.setAttribute('min', minDate);
}

/* Helper: Get Query Parameter value */
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

/* 1. Appointment Booking Form Handler */
function initBookingForm() {
  const bookingForm = document.getElementById('booking-form');
  const formSuccess = document.getElementById('booking-success');
  const dateInput = document.getElementById('booking-date');

  if (!bookingForm) return;

  // Set minimum date constraint
  setMinDate(dateInput);

  // Pre-select service or course from URL parameter (e.g. ?service=wedding-photography or ?course=beginner)
  const preSelectedService = getQueryParam('service');
  const preSelectedCourse = getQueryParam('course');

  if (preSelectedService || preSelectedCourse) {
    const eventSelect = document.getElementById('booking-event');
    if (eventSelect) {
      const targetValue = preSelectedService || preSelectedCourse;
      const options = eventSelect.options;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value.toLowerCase() === targetValue.toLowerCase()) {
          options[i].selected = true;
          break;
        }
      }
    }
  }

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate all fields
    const isNameValid = validateField('booking-name', /^[a-zA-Z\s]{2,50}$/, 'Please enter a valid name (minimum 2 characters)');
    const isEmailValid = validateField('booking-email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address');
    const isPhoneValid = validateField('booking-phone', /^\+?[0-9\s\-()]{10,20}$/, 'Please enter a valid phone number (minimum 10 digits)');
    const isEventValid = validateSelect('booking-event', 'Please select an event or course category');
    const isDateValid = validateRequired('booking-date', 'Please select a preferred date');
    const isTimeValid = validateSelect('booking-time', 'Please select a preferred time slot');
    const isLocationValid = validateRequired('booking-location', 'Please enter a session location or write Online/Academy');
    const isBudgetValid = validateSelect('booking-budget', 'Please select your budget range');

    const isFormValid = isNameValid && isEmailValid && isPhoneValid && isEventValid && 
                        isDateValid && isTimeValid && isLocationValid && isBudgetValid;

    if (isFormValid) {
      processFormSubmission(bookingForm, formSuccess);
    }
  });

  attachValidationListeners(bookingForm);
}

/* 2. Contact Inquiry Form Handler */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('contact-success');

  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const isNameValid = validateRequired('contact-name', 'Please enter your name');
    const isEmailValid = validateField('contact-email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address');
    const isPhoneValid = validateField('contact-phone', /^\+?[0-9\s\-()]{10,20}$/, 'Please enter a valid phone number');
    const isServiceValid = validateSelect('contact-service', 'Please select a studio service or None');
    const isCourseValid = validateSelect('contact-course', 'Please select a training program or None');
    const isDateValid = validateRequired('contact-date', 'Please select a preferred date');
    const isMessageValid = validateField('contact-message', /^[\s\S]{10,}$/, 'Please enter an inquiry message (minimum 10 characters)');

    const isFormValid = isNameValid && isEmailValid && isPhoneValid && isServiceValid && isCourseValid && isDateValid && isMessageValid;

    if (isFormValid) {
      processFormSubmission(contactForm, formSuccess);
    }
  });

  attachValidationListeners(contactForm);
}

/* Validation Utility Functions */
function validateField(id, regex, errorMessage) {
  const input = document.getElementById(id);
  if (!input) return false;
  
  const value = input.value.trim();
  const isValid = regex.test(value);
  
  toggleErrorState(input, isValid, errorMessage);
  return isValid;
}

function validateRequired(id, errorMessage) {
  const input = document.getElementById(id);
  if (!input) return false;
  
  const isValid = input.value.trim() !== '';
  
  toggleErrorState(input, isValid, errorMessage);
  return isValid;
}

function validateSelect(id, errorMessage) {
  const select = document.getElementById(id);
  if (!select) return false;
  
  const isValid = select.value !== '';
  
  toggleErrorState(select, isValid, errorMessage);
  return isValid;
}

function toggleErrorState(element, isValid, errorMessage) {
  const group = element.closest('.form-group');
  if (!group) return;

  const errorDisplay = group.querySelector('.form-error');
  
  if (isValid) {
    group.classList.remove('invalid');
    if (errorDisplay) errorDisplay.style.display = 'none';
  } else {
    group.classList.add('invalid');
    if (errorDisplay) {
      errorDisplay.innerText = errorMessage;
      errorDisplay.style.display = 'block';
    }
  }
}

function attachValidationListeners(form) {
  const controls = form.querySelectorAll('.form-control');
  controls.forEach(control => {
    control.addEventListener('input', () => {
      const group = control.closest('.form-group');
      if (group && group.classList.contains('invalid')) {
        control.dispatchEvent(new Event('change'));
      }
    });

    control.addEventListener('blur', () => {
      if (control.value.trim() === '') {
        const group = control.closest('.form-group');
        if (group) {
          group.classList.remove('invalid');
          const errorDisplay = group.querySelector('.form-error');
          if (errorDisplay) errorDisplay.style.display = 'none';
        }
      }
    });
  });
}

/* Submit Form & Show Spinner Overlay */
function processFormSubmission(form, successContainer) {
  const submitBtn = form.querySelector('[type="submit"]');
  if (!submitBtn) return;
  
  const originalBtnText = submitBtn.innerHTML;
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Processing...`;
  submitBtn.style.opacity = '0.7';

  // Simulate server transaction delay
  setTimeout(() => {
    form.style.opacity = '0';
    form.style.transform = 'translateY(-20px)';
    form.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    setTimeout(() => {
      form.style.display = 'none';
      successContainer.style.display = 'block';
      successContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 500);

  }, 1800);
}
