document.addEventListener("DOMContentLoaded", function () {
    let preloader = document.getElementById("preloder");

    
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000);
});

let storeData = localStorage.getItem("user");


let userdata = JSON.parse(storeData);

let username = document.querySelector(".username");

username.innerHTML = userdata.name;






document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-item");
    const indicators = document.querySelectorAll(".custom-indicator");
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");
    let currentIndex = 0;
    let interval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    function nextSlide() {
        let newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
    }

    function prevSlide() {
        let newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000); 
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    nextButton.addEventListener("click", function () {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });





    prevButton.addEventListener("click", function () {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });




    indicators.forEach((indicator, i) => {
        indicator.addEventListener("click", function () {
            stopAutoSlide();
            showSlide(i);
            startAutoSlide();
        });
    });

   
    showSlide(currentIndex);
    startAutoSlide();
});




document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const productSections = document.querySelectorAll('.product-list > section');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            this.classList.add('active');

            
            productSections.forEach(section => {
                if (category === 'all' || section.classList.contains(category)) {
                    section.style.display = 'flex'; 
                } else {
                    section.style.display = 'none'; 
                }
            });
        });
    });
});





let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

function topPage() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}