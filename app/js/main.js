// start menu
document.getElementById('menu-btn').onclick = function() {
  document.getElementById('menu').classList.toggle('active'); 
   document.getElementById('menu-btn').classList.toggle('active');
   // document.getElementById('header').classList.toggle('active'); 
   //document.getElementById('body').classList.toggle('active');
}
document.getElementById('header__menu-item--sub').onclick = function() {
   document.getElementById('header__menu-item--sub-wrap').classList.toggle('active');
    document.getElementById('header__menu-down').classList.toggle('active');

}
// end menu



 //start video 
document.getElementById('play-btn2').onclick = function() {
   document.getElementById('video-popup').classList.add('active');
}
document.getElementById('close').onclick = function() {
   document.getElementById('video-popup').classList.remove('active');
}

document.getElementById('play-btn1').onclick = function() {
   document.getElementById('video-popup').classList.add('active');
}
document.getElementById('close').onclick = function() {
   document.getElementById('video-popup').classList.remove('active');
}
 //end video

