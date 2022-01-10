"use strict";
insertNavbar();
inserFooter();
//crates multiple used tags
function insertNavbar() {
    const navbar = document.getElementById("navbar");
    const pageName = document.getElementById("pageName").dataset.pagename;
    switch (pageName) {
        case "mainPage":
            navbar.appendChild(navButton("Hauptseite", "index.html", true));
            navbar.appendChild(navButton("Gefrieguthinzufügen", "additem.html", false));
            break;
        case "details":
            navbar.appendChild(navButton("Hauptseite", "index.html", false));
            navbar.appendChild(navButton("Details", "details.html", true));
            break;
        case "additem":
            navbar.appendChild(navButton("Hauptseite", "index.html", false));
            navbar.appendChild(navButton("Gefrieguthinzufügen", "additem.html", true));
            break;
        default:
            navbar.textContent = "404 - Pagename not found";
            break;
    }
}
function inserFooter() {
    const footer = document.getElementById("footer");
    const a = document.createElement("a");
    const author = document.createElement("div");
    a.id = "backLink";
    a.setAttribute("href", "/MainFolder/MainStartPage.html");
    a.textContent = "AufgabenPage";
    author.id = "author";
    author.textContent = "made by: Arthur Erlich";
    footer.appendChild(a);
    footer.appendChild(author);
}
function navButton(name, linkPath, isActive) {
    const navElement = document.createElement("div");
    const navLink = document.createElement("a");
    navLink.textContent = name;
    if (isActive) {
        navElement.className = "navbarButton active";
        navLink.className = "navLink active";
        navLink.setAttribute("href", "#");
    }
    else {
        navElement.className = "navbarButton";
        navLink.className = "navLink";
        navLink.setAttribute("href", "../HTML/" + linkPath);
    }
    navElement.appendChild(navLink);
    return navElement;
}
//# sourceMappingURL=scirpt.js.map