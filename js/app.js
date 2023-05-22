// DOM => Document Object Model
// BOM => Browser Object Model

const prouducts = [
  {
    id: 1,
    name: "sports shoes",
    price: 25,
    details:
      "CLYMB is the leading manufacturer of sports and casual footwear. CLYMB offers performance and sport-inspired lifestyle products in categories such as",
    image: "images/1.png",
  },
  {
    id: 2,
    name: "men shoes",
    price: 35,
    details:
      "CLYMB is the leading manufacturer of sports and casual footwear. CLYMB offers performance and sport-inspired lifestyle products in categories such as",
    image: "images/2.png",
  },
  {
    id: 3,
    name: "boots",
    price: 45,
    details:
      "CLYMB is the leading manufacturer of sports and casual footwear. CLYMB offers performance and sport-inspired lifestyle products in categories such as",
    image: "images/3.png",
  },
];
const containerElm = document.querySelector(".container");
function showProducts(prouducts) {
  prouducts.forEach(function (product) {
    containerElm.insertAdjacentHTML("beforeend", "<div class=product-card>"+
   "<h1>"+product.name+"</h1>"+
    "<p>Lorem ipsum, or lipsum as it is sometimes known</p>"+
   " <div class=product-pic"+" style=background-image:url("+product.image+");></div>"+
    "<div class=product-info>"+
     "<div class=product-price>"+"$"+product.price+"</div>"+
     "<a "+"href=product.html?id=" + product.id +" class=product-button>See More</a>"+
    "</div>"+
 "</div>");
  });
}
showProducts(prouducts)
