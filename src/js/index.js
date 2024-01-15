window.addEventListener("DOMContentLoaded", (event) => {
    let areasButtons = document.querySelectorAll(".areas__list li")
    let areasContent = document.querySelectorAll(".areas__content-list>li")
    let burger = document.querySelector(".burger");
    let menu = document.querySelector('.header__menu');
    let employees = document.querySelectorAll('.employees li');
    let currentYear = new Date().getFullYear();

    let yearElement = document.querySelector('.year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    areasButtons.forEach((button, index) => {
        button.onclick = function() {
            areasButtons.forEach((btn, btnIndex) => {
                btnIndex === index ? btn.classList.add('item_active') : btn.classList.remove('item_active')
            });

            areasContent.forEach((item, itemIndex) => {
                itemIndex === index ? item.classList.add("active") : item.classList.remove("active")
            })
        };
    });   

    burger.addEventListener("click", (event) => {
        burger.classList.toggle("burger_active");
        menu.classList.toggle("header__menu_active");
    })  

    if (window.innerWidth <= 768) {
        employees.forEach((item, index) => {
            item.onclick = function(e) {
                const employeesAbout = item.querySelector('.employees__about');
                if (employeesAbout) {
                    employeesAbout.style.opacity = (parseFloat(employeesAbout.style.opacity) === 1) ? '0' : '1';
                }
            };
        });   
    }

})

