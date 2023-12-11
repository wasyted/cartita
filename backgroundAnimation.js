function backgroundAnimation() {
  var reveals = document.querySelectorAll(".fullscreen-container");
  const body = document.querySelector('body');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      body.classList.remove('light-background');
      body.classList.add('dark-background');
      console.log('changin background')
    } else{

      body.classList.add('light-background');
      body.classList.remove('dark-background');
      console.log('changin background')
    }
  }
}

window.addEventListener("scroll", backgroundAnimation);