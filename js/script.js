// *tabs

const tabBtns = document.querySelectorAll(".tabs_btn");
const tabItems = document.querySelectorAll(".tabs_container");
tabBtns.forEach(function(elem){
    elem.addEventListener("click", function(){
        let currentBtn = elem;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId)

        tabBtns.forEach(function(elem){
            elem.classList.remove("active_btn");
        })
        tabItems.forEach(function(elem){
            elem.classList.remove("tabs_active");
        })

        currentBtn.classList.add("active_btn");
        currentTab.classList.add("tabs_active");
    })
})