// ✌ :))
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
let locationSearch=location.search
let locationSearchParams = new URLSearchParams(locationSearch)
 let userMainId = locationSearchParams.get('id')

 const h1Elm = document.querySelector('h1')
 const pElm = document.querySelector('p')
 const imgElm = document.querySelector('img')
 let mainUser=prouducts.find(function(product){
    return product.id==userMainId
 })
 console.log(mainUser);
 h1Elm.innerHTML=mainUser.name
imgElm.setAttribute('src',mainUser.image)
pElm.innerHTML=mainUser.details
const buttonElm = document.querySelector('button')
buttonElm.addEventListener('click',function(){
    window.location.href='http://127.0.0.1:5500/index.html'
})