const menuButton=document.querySelector(".menu_button");
const menu=document.querySelector(".mobile_menu");
console.log(menuButton);
console.log(menu);

menuButton.addEventListener("click",function(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active");
    }else{
     menu.classList.add("active");
    }
})
