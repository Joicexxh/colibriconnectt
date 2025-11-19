(function(){
  // Config: change these to your real business contacts
  var WHATSAPP_PHONE = '4915227712596';
  var WHATSAPP_MESSAGE = 'Hey! I want information about studying Spanish in Spain.';
  var BUSINESS_EMAIL = 'hello@colibriconnect.example';

  // Helpers
  function openWhatsApp(phone, message) {
    var text = encodeURIComponent(message || '');
    var url = 'https://wa.me/4915227712596';
    window.open(url, '_blank');
  }

  // Nav toggle
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', function(){
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
      navToggle.setAttribute('aria-label','Open menu');
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      navToggle.setAttribute('aria-label','Close menu');
    }
  });

  // WhatsApp buttons
  var wButtons = document.querySelectorAll('#whatsappBtn, #whatsappBtn2');
  wButtons.forEach(function(btn){
    btn.addEventListener('click', function(){
      openWhatsApp(WHATSAPP_PHONE, WHATSAPP_MESSAGE);
    });
  });

  // Contact form: this is demo-only. It opens WhatsApp and pre-fills the message.
  var form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function(e){
    e.preventDefault();
    var name = form.name.value || '';
    var email = form.email.value || '';
    var notes = form.notes.value || '';
    var message = 'Hi, my name is ' + name + '. I want a free consult. Email: ' + email + '. ' + notes;
    openWhatsApp(WHATSAPP_PHONE, message);
    alert('Thank you! We will contact you on WhatsApp soon.');
    form.reset();
  });

  // Email button: set mailto link
  var emailBtn = document.getElementById('emailBtn');
  if (emailBtn) {
    emailBtn.setAttribute('href', 'mailto:' + BUSINESS_EMAIL);
  }

})();