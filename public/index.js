let addToCart = 0;

document.addEventListener("DOMContentLoaded", (event) => {

fetch("https://testimonialapi.toolcarton.com/api")
    .then(response => response.json())
    .then(data => {
      setInterval(function () {
        rotateTestimonials(data);
      }, 4000);
    });

fetch("http://localhost:3000/gloves")
  .then(response => response.json()
  .then(gloves => {
    gloves.forEach(glove => {
    renderGlove(glove)
     })
    addingEventListener();
    }))
});

// fetch('http://localhost:3000/gloves', {
//   method: "POST",
//   headers: {'Content-Type': 'application/json'}, 
//   body: JSON.stringify(data)
// })
// .then(response => response.json()
// .then(glove)

function renderGlove(glove) {
  const productTable = document.querySelector(".productTable")
  const gloveImg = document.createElement("img")
  gloveImg.src = glove.imageUrl
  gloveImg.className = "productImage"
  const gloveNameH2 = document.createElement("h4")
  gloveNameH2.innerText = glove.name
  const gloveAmount = document.createElement("h5")
  gloveAmount.innerText = glove.amount
  let addToCartButton = document.createElement("button")
  addToCartButton.className = "cart"
  addToCartButton.className += "add-cart"
  addToCartButton.innerText = "Add To Cart"
  let hzRule = document.createElement('hr');
  
  function clickAddToCart () {
    addToCart += 1;
    document.getElementById("cart").innerText = "Cart(" + addToCart + ")";
    document.getElementById("emptyCart").style.opacity = 1;
    
  }
  
  addToCartButton.onclick = clickAddToCart;
  
  const gloveDiv = document.createElement("div")

  /**
   * create elements for rendering glove
   * create img, h2, h3, div
   * button to add to cart
   * event listener uses CB function add to cart
   * append to render to page
   */


  gloveDiv.appendChild(gloveImg)
  gloveDiv.appendChild(gloveNameH2)
  gloveDiv.appendChild(gloveAmount)//img h2 dollar
  gloveDiv.appendChild(addToCartButton)
  productTable.appendChild(gloveDiv)
  productTable.appendChild(hzRule)
}
function rotateTestimonials(_payload) {
  let i = Math.floor(Math.random() * 10) % _payload.length;
  let testimonial = _payload[i]
  let message = testimonial.message;
  let name = testimonial.name;
  let location = testimonial.location;

  document.getElementById("name").innerText = name;
  document.getElementById("location").innerText = location;
  document.getElementById("testimonial").innerText = message;
}

function addingEventListener() {

  document.getElementById("emptyCart").addEventListener("click", clearCart);

  const btn = document.querySelector('.btn-toggle');
  btn.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  })
}

function clearCart() {
  addToCart = 0;
  document.getElementById("cart").innerText = "Cart";
  document.getElementById("emptyCart").style.opacity = 0;
}
