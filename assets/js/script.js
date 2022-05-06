const mobileBtn = document.getElementById("mobile-cta")
        nav = document.querySelector("nav")
        mobileBtnExit = document.getElementById("mobile-exit");

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })
        mobileBtnExit.addEventListener("click", () => {
            nav.classList.remove("menu-btn");
        })


myID = document.getElementById("customID");

var myScrollFunc = function() {
    var y = window.scrollY;
    if (y >= 1) {
    myID.className = "anchor show"
    } else {
    myID.className = "anchor hide"
    }
};

window.addEventListener("scroll", myScrollFunc);