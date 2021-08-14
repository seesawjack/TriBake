// wow
new WOW().init();

//視差效果
document.addEventListener("mousemove",parallax);
function parallax(e){
    this.querySelectorAll('.cloudy').forEach(layer=>{
        const speed = layer.getAttribute('data-speed');

        const x =(window.innerWidth - e.pageX*speed)/100
        const y =(window.innerHeight - e.pageY*speed)/100
        layer.style.transform =`translateX(${x}px) translateY(${y}px)`

    })
}

//合作夥伴點擊效果
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  let npoBtn = document.querySelector('.npo');
  let farmerBtn = document.querySelector('.famrer-group');
  let backBtn = document.querySelectorAll('.back');
  let farmerImg = Array.from(document.querySelectorAll('.farmer-group-img'));
  let npoImg = Array.from(document.querySelectorAll('.npo-img'));
  npoBtn.addEventListener('click',function(){
    farmerImg.forEach((arrayElement, index) => {
     farmerImg[index].className  += " active";
    });
    npoImg.forEach((arrayElement, index) => {
      npoImg[index].classList.remove('active');
     });
  })
  farmerBtn.addEventListener('click',function(){
    npoImg.forEach((arrayElement, index) => {
     npoImg[index].className  += " active";
    });
    farmerImg.forEach((arrayElement, index) => {
      farmerImg[index].classList.remove('active');
     });
  })
  backBtn.forEach(function(item,idx){
    item.addEventListener('click', function () {
      npoImg.forEach((arrayElement, index) => {
        npoImg[index].classList.remove('active');
       });
       farmerImg.forEach((arrayElement, index) => {
         farmerImg[index].classList.remove('active');
        });
  });
  })

  
  //商品介紹點擊效果
  let iconBtn = document.querySelectorAll('.down-icon');
  let productAll = Array.from(document.querySelectorAll('.product-all'));
  let productMenu =Array.from(document.querySelectorAll('.product-menu'));
  let boxOut = Array.from(document.querySelectorAll('.box-outside')); 
  
  for (var i = 0; i < iconBtn.length; i++) {
    iconBtn[i].addEventListener('click', function (e) {
      contentDisplay(e);
    });
  }
  function contentDisplay(e){
    var t = e.target;
    t.classList.toggle('active');
    let it = Array.from(iconBtn).indexOf(event.target)

    
    if (productAll[it].classList.contains('active')) {
            productAll[it].classList.remove('active');
            productMenu[it].classList.remove('active');  
            boxOut[it].classList.remove('active');  

            setTimeout(function () {
              productAll[it].classList.remove('hidden');
              productMenu[it].classList.remove('hidden');
              boxOut[it].classList.remove('hidden');
        
            }, 10);
          } else {
            productAll[it].classList.add('hidden');
            productMenu[it].classList.add('active');
            boxOut[it].classList.add('active');
            productAll[it].addEventListener('transitionend', function(e) {
              productAll[it].classList.add('active');
              productMenu[it].classList.add('hidden');  
              boxOut[it].classList.add('hidden');  
              
            }, {
              capture: false,
              once: true,
              passive: false
            });
          }
  }


  //navbar 點擊效果
  let burger = document.querySelector('.burger');
  let burgerImg = document.querySelector('.burger-img');
  let navbar = document.querySelector('.navbar');
  burger.addEventListener('click',function(){
    burger.classList.toggle('active');
    burgerImg.classList.toggle('active');
    navbar.classList.toggle('active');
  })

  //laoding 效果
  // let loading= document.querySelector('.loader-wrapper');
  // window.addEventListener('load',function(){
    
  //   let promise = new Promise((resolve)=>{
  //     window.setTimeout(function(){
  //       loading.classList.add('active');
  //       return resolve();
  //     },2500)    
  //   })

  //   promise.then(()=>{
  //     window.setTimeout(function(){
  //       loading.parentElement.removeChild(loading);
  //     },500)       
  //   });
    
  // })

  //視窗滾動效果
  const faders = document.querySelectorAll('.fade-in');
  const silders = document.querySelectorAll('.slide-in')
  const appearOptions= {
    threshold:0,
    rootMargin: "0px 0px 50px 0px"
  };

  const appearOnScroll = new IntersectionObserver (function(entries,appearOnScroll){
    entries.forEach(entry=>{
      if(!entry.isIntersecting){
        return;
      }else{
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);

  faders.forEach(fader =>{
    appearOnScroll.observe(fader);
  });
  silders.forEach(slider=>{
    appearOnScroll.observe(slider);
  });

 
  
