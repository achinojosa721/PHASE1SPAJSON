document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://testimonialapi.toolcarton.com/api')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
});

function rotateTestimonials(_payload) {
  var i = 1;
  while(true) {
    var testimonial = _payload[i%10]
    var message = testimonial.message;
    var name = testimonial.name;
    var location = testimonial.location;

    

    i += 1;
    setTimeout(5000);
  }

}