var siteNavHamburger = document.querySelector(".siteNav-hamburger");
var swipeOver = document.querySelector(".swipeOver");
var closeButton = document.querySelector(".close");
var swipeOverToggle = function () {
    if (siteNavHamburger && swipeOver && closeButton) {
        swipeOver.classList.toggle("swipeOver-isOpen");
    }
    document.querySelector("body").classList.toggle("disable-scroll");
};
siteNavHamburger.addEventListener("click", swipeOverToggle);
closeButton.addEventListener("click", swipeOverToggle);
// Dynamically generate the list of links based on the content
var menuItems = document.querySelectorAll(".menuList-link");
var swipeOverLinkList = document.querySelector(".swipeOver-linkList");
menuItems.forEach(function (item) {
    var li = "<li class=\"swipeOver-link\">" + item.outerHTML + "</li>";
    swipeOverLinkList.insertAdjacentHTML("beforeend", li);
});
var array = ["apples", "oranges", "bananas"];
console.log(array);
