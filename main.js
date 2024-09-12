let search1 = document.getElementById("rightHeader");
search1.onmouseenter = function () {
    let searchbar = document.getElementById("searchBar");
    let tr2 = document.getElementById("tr2");
    searchbar.style.visibility = "visible";
    tr2.style.visibility = "visible";
    tr2.style.animationName = "second";
    tr2.style.animationDuration = "2s";
    tr2.style.animationTimingFunction = "ease";
    searchbar.style.animationName = "second";
    searchbar.style.animationDuration = "2s";
    searchbar.style.animationTimingFunction = "ease";
}
search1.onmouseleave = function () {
    let searchbar = document.getElementById("searchBar");
    let tr2 = document.getElementById("tr2");
    searchbar.style.visibility = "hidden";
    tr2.style.visibility = "hidden";

    tr2.style.animationName = "third";
    tr2.style.animationDuration = "4s";
    tr2.style.animationTimingFunction = "ease-in";
    searchbar.style.animationName = "third";
    searchbar.style.animationDuration = "4s";
    searchbar.style.animationTimingFunction = "ease-in";
}
let res = document.getElementById("resnav");
kcount = 0
res.onclick = function () {
    if (kcount == 0) {
        let resdiv = document.getElementById("resDiv")
        // resdiv.style.animationName="kel";
        // resdiv.style.animationDuration="2s";
        // resdiv.style.animationTimingFunction="ease";
        resdiv.style.display = "block";
        kcount = 1;
    }
    else if (kcount == 1) {
        let resdiv = document.getElementById("resDiv")
        resdiv.style.display = "none";
        kcount = 0;
    }
}

// responsive search
let resSearch = document.getElementById("resSearch");
resSearch.onclick = function () {
    let dialog = document.getElementById("d1");
    let Header = document.getElementById("header");
    let nav = document.getElementById("responsiveNavbar");
    let main = document.getElementById("main");
    d1.style.display = "block";
    main.style.opacity = "0.6";
    header.style.opacity = "0.6";
    nav.style.opacity = "0.6";
    main.style.zIndex = "-1";
    nav.style.zIndex = "-1";
}
function closed() {
    let dialog = document.getElementById("d1");
    let Header = document.getElementById("header");
    let nav = document.getElementById("responsiveNavbar");
    let main = document.getElementById("main");
    d1.style.display = "none";
    main.style.opacity = "1";
    header.style.opacity = "1";
    nav.style.opacity = "1";
}


let rn1 = document.getElementById("rn1");
let rn2 = document.getElementById("rn2");
let rn3 = document.getElementById("rn3");
let rn4 = document.getElementById("rn4");
let rn5 = document.getElementById("rn5");
let rn6 = document.getElementById("rn6");
let rn7 = document.getElementById("rn7");
rn1.onmouseenter = function () {
    let t1 = document.getElementById("t1");
    t1.style.visibility = "visible";
}
rn1.onmouseleave = function () {
    let t1 = document.getElementById("t1");
    t1.style.visibility = "hidden";
}
rn2.onmouseenter = function () {
    let t2 = document.getElementById("t2");
    t2.style.visibility = "visible";
}
rn2.onmouseleave = function () {
    let t2 = document.getElementById("t2");
    t2.style.visibility = "hidden";
}
rn3.onmouseenter = function () {
    let t3 = document.getElementById("t3");
    t3.style.visibility = "visible";
}
rn3.onmouseleave = function () {
    let t3 = document.getElementById("t3");
    t3.style.visibility = "hidden";
}
rn4.onmouseenter = function () {
    let t4 = document.getElementById("t4");
    t4.style.visibility = "visible";
}
rn4.onmouseleave = function () {
    let t4 = document.getElementById("t4");
    t4.style.visibility = "hidden";
}
rn5.onmouseenter = function () {
    let t5 = document.getElementById("t5");
    t5.style.visibility = "visible";
}
rn5.onmouseleave = function () {
    let t5 = document.getElementById("t5");
    t5.style.visibility = "hidden";
}
rn6.onmouseenter = function () {
    let t6 = document.getElementById("t6");
    t6.style.visibility = "visible";
}
rn6.onmouseleave = function () {
    let t6 = document.getElementById("t6");
    t6.style.visibility = "hidden";
}
rn7.onmouseenter = function () {
    let t7 = document.getElementById("t7");
    t7.style.visibility = "visible";
}
rn7.onmouseleave = function () {
    let t7 = document.getElementById("t7");
    t7.style.visibility = "hidden";
}