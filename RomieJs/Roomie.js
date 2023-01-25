let label = document.querySelectorAll(".home .home-row .home-colm label");
let list = document.querySelectorAll(".home .home-colm ul li");
let bookBtn = document.querySelector(".home .book-btn");
let overlay = document.querySelector("body .overlay");
list.forEach(li => {
    li.addEventListener("click", (e) => {
        let select = e.target.parentElement.parentElement.querySelector("input");
        select.value = `${e.target.innerHTML}`;
    });
});
label.forEach(label => {
    label.addEventListener("click", (e) => {
        let ul = e.target.parentElement.querySelector("ul");
        let dir = e.target.querySelector("span");
        dir.classList.toggle("dir");
        ul.classList.toggle("active");
        let li = e.target.parentElement.querySelectorAll("ul li");
        li.forEach(li => {
            li.addEventListener("click", (e) => {
                let ul = e.target.parentElement;
                ul.classList.remove("active");
                dir.classList.remove("dir");
                
            });
        });
        
    });
});
bookBtn.onclick = function () {
    let input = document.querySelectorAll(".home-colm input")
    input.forEach(input => {
        if (input.value !== "") {
            overlay.style.top = "0";
            setTimeout(function () {
            location.reload(true);
        },800)
        }
    });
}
// swipper.............................................................
let span = document.querySelectorAll(".suggest .text span");
let slider = document.querySelectorAll(".swipper .slider");
let swipper = document.querySelector(".swipper");
let sliderWidth = 238;
let width = (slider.length) - 3;
let widthSwipper = width * 238;
let inceDec = 0;
console.log(widthSwipper);
let right_move = () => {
    if (inceDec >= 0) {
        inceDec = 0;
    } else {
        inceDec += sliderWidth;
        for (let i of slider) {
            i.style.left = `${inceDec}px`;
        }
    }
}
let left_move = () => {
    if (inceDec <= -widthSwipper) {
        inceDec = -widthSwipper;
    } else {
        inceDec -= sliderWidth;
        if (-swipper.scrollWidth >= inceDec) {
            inceDec = 0;
        }
        for (let i of slider) {
            i.style.left = `${inceDec}px`;
        }
    }
}
span[1].onclick = () => {
    right_move();
}
span[0].onclick = () => {
    left_move();
    console.log(typeof(inceDec));
}