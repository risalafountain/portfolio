emailjs.init("service_n283uwd");

document.getElementById('four').addEventListener('submit', function(event) {
	event.preventDefault();
  
	// Send form data using EmailJS
	emailjs.sendForm('service_n283uwd', 'template_lvx6fte', this)
	  .then(function(response) {
		 console.log('SUCCESS!', response.status, response.text);
		 alert('Your message has been sent successfully!');
	  }, function(error) {
		 console.log('FAILED...', error);
		 alert('Failed to send your message. Please try again later.');
	  });
  });
  
