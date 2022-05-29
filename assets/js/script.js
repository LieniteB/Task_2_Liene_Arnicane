//navigation - mobile menu
const mobileBtn = document.getElementById("mobile-cta")
        nav = document.querySelector("nav")
        mobileBtnExit = document.getElementById("mobile-exit");

        mobileBtn.addEventListener('click', () => {
            nav.classList.add('menu-btn');
        })
        mobileBtnExit.addEventListener("click", () => {
            nav.classList.remove("menu-btn");
        });

//99 iedvesmas stāsti
window.addEventListener("load", () => {
    const start = 10;
    const end = 99;
    var data = [...Array(end - start + 1).keys()].map(x => x+ start);
    var container = document.getElementById("grid");
    var more = document.getElementById("more");
    for (var i of data) {
        var cell = document.createElement("div");
        var p = document.createElement("p");
        p.innerHTML = i;
        cell.className = "cell";
        if (i > 18) {
            cell.appendChild(p);
            more.appendChild(cell);
        }else{
        cell.appendChild(p);
        container.appendChild(cell);
    }
    }
});

function moreStories() {
    var x = document.getElementById("more");
    if (x.style.display === "none") {
        x.style.display = "grid";
    } else {
        x.style.display = "none";
    }
}


