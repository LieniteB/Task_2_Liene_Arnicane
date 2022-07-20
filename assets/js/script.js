//open video in 99 iedvesmas stāsti
function openVideo5() {
    var video = document.querySelector(".video5");
    video.classList.toggle("video_active");
    var play = document.querySelector("video5 video");
    play.pause();
    play.currentTime = 0;
}
function openVideo4() {
    var video = document.querySelector(".video4");
    video.classList.toggle("video_active");
    var play = document.querySelector("video4 video");
    play.currentTime = 0;
    play.pause();
}
function openVideo3() {
    var video1 = document.querySelector(".video3");
    video1.classList.toggle("video_active");
    var play = document.querySelector(".video3 video");
    play.pause();
    play.currentTime = 0;
}
function openVideo2() {
    var video2 = document.querySelector(".video2");
    video2.classList.toggle("video_active");
    var play = document.querySelector(".video2 video");
    play.pause();
    play.currentTime = 0;
}
function openVideo1() {
    var video2 = document.querySelector(".video1");
    video2.classList.toggle("video_active");
    var play = document.querySelector(".video1 video");
    play.pause();
    play.currentTime = 0;
}
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
    let data = [...Array(end - start + 1).keys()].map(x => x+ start);
    let container = document.getElementById("grid");
    let more = document.getElementById("more");
    for (var i of data) {
        
        let cell = document.createElement("div");
        let p = document.createElement("p");
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


//dropdown on page sapņus atbalsta
    
    function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}
    function dropdown2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//dropdown2 sadale pa uznēmumu veidiem (Sapņus atbalsta)
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("atbalsta");
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show_atbalsta");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show_atbalsta");
        }
    }
    
    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
            }
        }
        }
    
    function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
    }
//Uznēmuma veids dropdown parādās izvēlētais elements (Sapņus atbalsta lapa)


function shows(anything) {
    document.querySelector(".dropbtn2").innerText = anything
    document.querySelector(".dropbtn2").style.fontWeight = "bold";
}