const hamburgerButton = document.getElementById('hamburger')
const mobileMenu = document.getElementById('mobile-menu')


hamburgerButton.onclick = () =>{
    if(hamburgerButton.classList.contains("hamburger-active"))
        { 
          hamburgerButton.classList.remove("hamburger-active")
          mobileMenu.style.display = "none"
        }
    else{
            hamburgerButton.classList.add("hamburger-active")
            mobileMenu.style.display = "block"

        }
}