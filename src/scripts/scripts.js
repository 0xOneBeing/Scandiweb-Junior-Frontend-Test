function shoppingCartMenu() {
    document.getElementById("dropdown").classList.toggle("show");
}

// const shoppingCartMenu = () => {
//     const showMenu = document.getElementById('dropdown');
//     showMenu.classList.toggle("show");
// }

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.shopping_cart_menu')) {
        var dropdowns = document.getElementsByClassName("cart-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {    
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

