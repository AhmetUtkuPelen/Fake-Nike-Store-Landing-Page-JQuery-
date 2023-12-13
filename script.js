const wrapper = document.querySelector(".sliderWrapper");


const menuItems = document.querySelectorAll(".menuItem");



const products = [

  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },


  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },


  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },



  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },




  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },



];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");

const currentProductTitle = document.querySelector(".productTitle");

const currentProductPrice = document.querySelector(".productPrice");

const currentProductColors = document.querySelectorAll(".color");

const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {

  item.addEventListener("click", () => {
    //slayt degistir

    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //secili urun degistir

    choosenProduct = products[index];

    //secili urun text degistir
    
    currentProductTitle.textContent = choosenProduct.title;
    
    currentProductPrice.textContent = "$" + choosenProduct.price;
    
    currentProductImg.src = choosenProduct.colors[0].img;

    //renk degistir
    
    currentProductColors.forEach((color, index) => {
    
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color, index) => {

  color.addEventListener("click", () => {

    currentProductImg.src = choosenProduct.colors[index].img;

  });

});

currentProductSizes.forEach((size, index) => {

  size.addEventListener("click", () => {

    currentProductSizes.forEach((size) => {

      size.style.backgroundColor = "white";

      size.style.color = "black";

    });

    size.style.backgroundColor = "black";

    size.style.color = "white";

  });

});


const productButton = document.querySelector(".productButton");

const payment = document.querySelector(".payment");

const close = document.querySelector(".close");

productButton.addEventListener("click", () => {

  payment.style.display = "flex";

});

close.addEventListener("click", () => {

  payment.style.display = "none";

});


// ! CSS DOSYALARI ! \\


$('.navTop').css({
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'space-between'
})

$('.search').css({
  'display': 'flex',
  'align-items': 'center',
  'background-color': 'gray',
  'padding': '10px 20px',
  'border-radius': '10px',
})

$('.searchInput').css({
  'border':'none',
  'background-color':'transparent'
})

$('.searchInput::placeholder').css({
  'color':'lightgray'
})

$('.limitedOffer').css({
  'font-size': '20px',
  'border-bottom': '2px solid crimson',
  'cursor': 'pointer',
})

$('.navBottom ').css({
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
})

$('.menuItem').css({
  'margin-right': '50px',
  'cursor': 'pointer',
  'color': 'lightgray',
  'font-weight': '400',
})

$('.slider').css({
  'background': 'url("https://images.unsplash.com/photo-1604147495798-57beb5d6af73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")',
  'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
  'overflow': 'hidden',
})

$('.sliderWrapper').css({
  'display': 'flex',
  'width': '500vw',
  'transition': 'all 1.5s ease-in-out',
})

$('.sliderItem').css({
  'width': '100vw',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'position': 'relative',
})

$('.sliderBg').css({
  'width': '750px',
  'height': '750px',
  'border-radius': '50%',
  'position': 'absolute',
})

$('.sliderImg').css({
  'z-index': '1',
  'cursor': 'pointer',
})

$('.sliderTitle').css({
  'position': 'absolute',
  'top': '10%',
  'right': '10%',
  'font-size': '60px',
  'font-weight': '900',
  'text-align': 'center',
  'color': 'white',
  'z-index': '1',
})

$('.sliderPrice').css({
  'position': 'absolute',
  'top': '10%',
  'left': '10%',
  'font-size': '60px',
  'font-weight': '300',
  'text-align': 'center',
  'color': 'white',
  'border': '1px solid crimson',
  'z-index': '1',
})

$('.buyButton').css({
  'position': 'absolute',
  'top': '50%',
  'right': '10%',
  'font-size': '30px',
  'font-weight': '900',
  'color': 'white',
  'border': '1px solid gray',
  'background-color': 'black',
  'z-index': '1',
  'cursor': 'pointer',
})

$('.features').css({
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'space-between',
  'padding': '50px',
})

$('.feature').css({
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'text-align': 'center',
})

$('.featureIcon').css({
  'width': '50px',
  'height': '50px',
})

$('.featureTitle').css({
  'font-size': '20px',
  'font-weight': '600',
  'margin': '20px',
})

$('.featureDesc').css({
  'color': 'gray',
  'width': '50%',
  'height': '100px',
})

$('.product ').css({
  'height': '100vh',
  'background-color': 'whitesmoke',
  'position': 'relative',
  'clip-path': 'polygon(0 15%, 100% 0, 100% 100%, 0% 100%)',
})

$('.payment').css({
  'width': '500px',
  'height': '500px',
  'background-color': 'white',
  'position': 'absolute',
  'top': '0',
  'bottom': '0',
  'left': '0',
  'right': '0',
  'margin': 'auto',
  'padding': '10px 50px',
  'display': 'none',
  'flex-direction': 'column',
  '-webkit-box-shadow': '0px 0px 13px 2px rgba(0, 0, 0, 0.3)',
  'box-shadow': '0px 0px 13px 2px rgba(0, 0, 0, 0.3)',
})

$('.payTitle ').css({
  'font-size': '20px',
  'color': 'lightgray',
})

$('nav').css({
  'background-color': '#111',
  'color': 'white',
  'padding': '20px 50px',
})

$('label').css({
  'font-size': '14px',
  'font-weight': '300',
})

$('.payInput').css({
  'padding': '10px',
  'margin': '10px 0px',
  'border': 'none',
  'border-bottom': '1px solid gray',
})

$('.cardIcons').css({
  'display': 'flex',
})

$('.cardIcon ').css({
  'margin-right': '10px',
})

$('.cardInfo').css({
  'display': 'flex',
  'justify-content': 'space-between',
})

$('.sm').css({
  'width': '30%',
})

$('.payButton').css({
  'position': 'absolute',
  'height': '40px',
  'bottom': '-40',
  'width': '100%',
  'left': '0',
  '-webkit-box-shadow': '0px 0px 13px 2px rgba(0, 0, 0, 0.3)',
  'box-shadow': '0px 0px 13px 2px rgba(0, 0, 0, 0.3)',
  'background-color': '#369e62',
  'color': 'white',
  'border': 'none',
  'cursor': 'pointer',
})

$('.close').css({
  'width': '20px',
  'height': '20px',
  'position': 'absolute',
  'background-color': 'gray',
  'color': 'white',
  'top': '10px',
  'right': '10px',
  'display': 'flex',
  'align-items': 'center',
  'justify-content': 'center',
  'cursor': 'pointer',
  'padding': '2px',
})

$('.productImg').css({
  'width': '50%',
})

$('.productDetails').css({
  'position': 'absolute',
  'top': '10%',
  'right': '0',
  'width': '40%',
  'padding': '50px',
})

$('.productTitle').css({
  'font-size': '75px',
  'font-weight': '900',
})

$('.productDesc').css({
  'font-style': '24px',
  'color': 'gray',
})

$('.colors').css({
  'display': 'flex',
  'margin-bottom': '20px',
})

$('.sizes ').css({
  'display': 'flex',
  'margin-bottom': '20px',
})

$('.color').css({
  'width': '32px',
  'height': '32px',
  'border-radius': '5px',
  'background-color': 'black',
  'margin-right': '10px',
  'cursor': 'pointer',
})

$('.size').css({
  'padding': '5px 20px',
  'border': '1px solid black',
  'margin-right': '10px',
  'cursor': 'pointer',
  'font-size': '20px',
})

$('.productButton').css({
  'float': 'right',
  'padding': '10px 20px',
  'background-color': 'black',
  'color': 'white',
  'font-weight': '600',
  'cursor': 'pointer',
})

$('.gallery').css({
  'padding': '50px',
  'display': 'flex',
})

$('.galleryItem').css({
  'flex': '1',
  'padding': '50px',
})

$('.galleryImg').css({
  'width': '100%',
})

$('.newSeason').css({
  'display': 'flex',
})

$('.nsItem').css({
  'flex': '1',
  'background-color': 'black',
  'color': 'white',
  'display': 'flex',
  'flex-direction': 'column',
  'align-items': 'center',
  'justify-content': 'center',
  'text-align': 'center',
})

$('.nsImg').css({
  'width': '100%',
  'height': '500px',
})

$('.nsTitle').css({
  'font-size': '40px',
})

$('.nsButton').css({
  'padding': '15px',
  'font-weight': '600',
  'cursor': 'pointer',
})

$('footer').css({
  'display': 'flex',
})

$('.footerLeft').css({
  'flex': '2',
  'display': 'flex',
  'justify-content': 'space-between',
  'padding': '50px',
})

$('.fMenuTitle').css({
  'font-size': '16px',
})

$('.fList').css({
  'padding': '0',
  'list-style': 'none',
})

$('.fListItem').css({
  'margin-bottom': '10px',
  'color': 'gray',
  'cursor': 'pointer',
})

$('.footerRight').css({
  'flex': '1',
  'padding': '50px',
 'display': 'flex',
  'flex-direction': 'column',
  'justify-content': 'space-between',
})

$('.fInput').css({
  'padding': '5px',
})

$('.fButton').css({
  'padding': '5px',
  'background-color': 'black',
  'color': 'white',
})

$('.fIcons').css({
  'display': 'flex',
})

$('.fIcon').css({
  'width': '20px',
  'height': '20px',
  'margin-right': '10px',
})

$('.copyright').css({
  'font-weight': '300',
  'font-size': '14px',
})

$('.logo').css({
  'width': '150px',
  'height': '50px',
})