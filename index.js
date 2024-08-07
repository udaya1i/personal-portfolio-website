var tablinks = document.getElementsByClassName('tab-links');
var tabcontains = document.getElementsByClassName('tab-contains');

// function opentab(tab) {
//     for (var i = 0; i < tablinks.length; i++) {
//         tablinks[i].classList.remove('active-link');
//         tabcontains[i].style.display = 'none';
//     }

//     var selectedTab = document.getElementById(tab);
//     var selectedTabLink = document.querySelector('[onclick="opentab(\'' + tab + '\')');

//     if (selectedTab && selectedTabLink) {
//         selectedTabLink.classList.add('active-link');
//         selectedTab.style.display = 'block';
//     }
// }

var sidemenu = document.getElementById("sidemenu")

function openMenu() {
    sidemenu.style.right = "0"

}
function closeMenu() {
    sidemenu.style.right = "-200px"

}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzce5CsKpv0P6TDVKHpCoJUVBc8cziQgmt5vf7YTYJEfW1vadV_dsNkoAWFPnW93AcE/exec'
const form = document.forms['submit-to-google-sheet']
const mess = document.getElementById('mess')
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            mess.innerHTML = "Message Sent Successfully!"
            setTimeout(function () {
                mess.innerHTML = ""
            }, 3000)
        })
        form.reset()

})
function openTab(evt, tabName) {
    var i, tabcontents, tablinks;

    tabcontents = document.getElementsByClassName("tab-contains");
    for (i = 0; i < tabcontents.length; i++) {
        tabcontents[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active-link");
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("experience").style.display = "block";

    var tabLinks = document.getElementsByClassName("tab-links");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener("click", function(event) {
            openTab(event, this.getAttribute("data-tab"));
        });
    }
});