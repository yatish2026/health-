let menu = doucment.querySelector('#menu-btn');
let navbar = doucment.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.claasList.toggle('active');   
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    
}