document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('#navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-dark");
            navbar.classList.add("nav-sticky");
        } else {
            navbar.classList.remove("bg-dark");
            navbar.classList.remove("nav-sticky");
        }
    });
  
    //hover-effect on contact btn
    const contact = document.querySelector('.contact');
    
    contact.addEventListener('mouseenter', () => {
        contact.style.color = 'black'; 
    });
    
    contact.addEventListener('mouseleave', () => {
        contact.style.color = '';
         // This will reset the color to the default value.
    });
    
});
