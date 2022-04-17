let addToCart = 0;
document.addEventListener('DOMContentLoaded', (event) => {
  addingEventListener();
  fetch('https://testimonialapi.toolcarton.com/api')
    .then(response => response.json())
    .then(data => {
      setInterval(function () {
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
function addingEventListener() {
  var elements = document.getElementsByClassName("add-cart");

  function clickAddToCart() {
    addToCart += 1;
    document.getElementById("cart").innerText = "Cart(" + addToCart + ")";
    document.getElementById("emptyCart").style.opacity = 1;
  }

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', clickAddToCart);
  }

  document.getElementById("emptyCart").addEventListener("click", clearCart);

  const btn = document.querySelector('.btn-toggle');
  // Listen for a click on the button
  btn.addEventListener('click', function () {
    // Then toggle (add/remove) the .dark-theme class to the body
    console.log("In the event listener")
    document.body.classList.toggle('dark-theme');
  })
}

function clearCart() {
  addToCart = 0;
  document.getElementById("cart").innerText = "Cart";
  document.getElementById("emptyCart").style.opacity = 0;
}
