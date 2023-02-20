


    let menuButton = document.getElementById('menuButton');

    menuButton.addEventListener('click',()=>{

        menuButton.style.WebkitTransitionDuration='1s';
        menuButton.style.webkitTransform = 'rotate(180deg)';

        let navBar=document.getElementById("navBar");
        navBar.classList.toggle("navBar_toggle");
     
        let navBar_items=document.getElementById("navBar_items");
        navBar_items.classList.toggle("navBar_items_toggle");

        let navBar_items_item = document.querySelectorAll(".navBar_items_item");
        
        navBar_items_item.forEach(function (items){
                items.classList.toggle("navBar_item_items_toggle");
        })
        
        
        
        
    })

