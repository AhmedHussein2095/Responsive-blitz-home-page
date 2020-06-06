
/*  for games list (left one)*/
const listDiv =document.getElementById('list-div');
const submenu =document.getElementById('submenu');
const arrow = document.getElementById('arrow')


/*  for download list (right one)*/
const menuBtn = document.getElementById('menu-btn')
const submenu2 = document.getElementById('submenu2')
const shiningCircle = document.getElementById('shining-circle')

/* for video play */
const videoBtn = document.getElementById('videoBtn');
const videoBox = document.getElementById('videoBox');
const videoExit = document.getElementById('videoExit');

// for footer submenu
const footerXmenu = document.getElementById('footer-xmenu');
const footerSubmenu = document.getElementById('footer-submenu');
const footerArrow = document.getElementById('footer-arrow');



/*  for games list (left one)*/
listDiv.addEventListener('click', function(){
    submenu.classList.toggle('show');
    shiningCircle.classList.toggle('show');
    arrow.classList.toggle('rotate')
    submenu2.classList.remove('show') /* to close the other menu if opend */
    menuBtn.classList.remove('show')
    
});

/*  for download list (right one)*/
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('show')
    submenu2.classList.toggle('show')
    submenu.classList.remove('show') /* to close the other menu if opend */
    arrow.classList.remove('rotate')
    shiningCircle.classList.remove('show');
});



/* for video play */
videoBtn.addEventListener('click', function(){
    videoBox.classList.add('show');
    
});

/* for video stop */
videoExit.addEventListener('click', function(){
    videoBox.classList.remove('show');
    
});

// for footer submenu
footerXmenu.addEventListener('click', function(){
    footerSubmenu.classList.toggle('show');
    footerArrow.classList.toggle('rotate');

});












