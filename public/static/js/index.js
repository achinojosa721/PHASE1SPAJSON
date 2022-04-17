document.addEventListener('DOMContentLoaded', (event) => {
    fetch('https://testimonialapi.toolcarton.com/api')
    .then(response => response.json())
    .then(data => {
      setInterval(function() {
        rotateTestimonials(data);
      }, 5000);
    });
});

function rotateTestimonials(_payload) {
    var i = Math.floor(Math.random() * 10) % _payload.length;
    var testimonial = _payload[i]
    var message = testimonial.message;
    var name = testimonial.name;
    var location = testimonial.location;

    document.getElementById("name").innerText = name;
    document.getElementById("location").innerText = location;
    document.getElementById("testimonial").innerText = message;
}