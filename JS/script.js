const menuhamburguer = document.querySelector('.menu-hamburguer');
menuhamburguer.addEventListener('click',() => {
    toggleMenu();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuhamburguer.classList.toggle('change');
    
    if (menuhamburguer.classList.contains('change')){
        nav.style.display = 'block';
     
    } else  {
        nav.style.display = 'none';
    }
 }

 
 function toggleText(textId, buttonId) {
    var moreText = document.getElementById(textId);
    var btnText = document.getElementById(buttonId);

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "Read Less"; 
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More"; 
    }
}
