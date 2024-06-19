const mobile_nav = document.querySelector('.burger_mobile');
const menu_show = document.getElementById('fa-show');
const menu_hide = document.getElementById('fa-hide');

menu_show.addEventListener('click', function(){
      if(mobile_nav.style.display === 'none'){
        mobile_nav.style.display = 'block';
        menu_show.style.display = 'none';
        menu_hide.style.display = 'block';
      } else {
        mobile_nav.style.display = 'none';
        menu_show.style.display = 'block';
        menu_hide.style.display = 'none'
      }


});


menu_hide.addEventListener('click', function(){
    if(mobile_nav.style.display === 'block'){
      mobile_nav.style.display = 'none';
      menu_show.style.display = 'block';
      menu_hide.style.display = 'none';
    }


});