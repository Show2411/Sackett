window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 500)
  })
  function scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  window.addEventListener('scroll',function(){
    var scroll = document.querySelector('.TopNav');
    scroll.classList.toggle("active", window.scrollY > 100)
  })


function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("main").style.marginTop = "100%";

}

function closeNav(){
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("main").style.marginTop = "0%";

}