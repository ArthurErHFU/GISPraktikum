"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//TEST
let testgfgu = {
    _id: "10",
    name: "WasserTest",
    spoilDate: new Date(),
    addDate: new Date(),
    note: "Text bla bla",
    tag: "huhn"
};
const pfad = "/items";
const url = "http://localhost:3500";
load();
async function load() {
    let itmes = await getItems();
    itmes.forEach(element => {
        createItem(element);
    });
}
function createItem(gefrieGut) {
    let items = document.getElementById("items");
    //server anfragen und liste der Items holen
    items.appendChild(createBox(gefrieGut)); //GefrieGut interface übergeben
}
function createBox(gefrieGut) {
    const itemBox = document.createElement("div");
    itemBox.className = "item flexChild";
    itemBox.dataset.id = gefrieGut._id;
    itemBox.appendChild(creatLink(gefrieGut));
    return itemBox;
}
function creatLink(gefrieGut) {
    const link = document.createElement("a");
    link.className = "itemLink";
    link.setAttribute("href", "../HTML/details.html?id=" + gefrieGut._id);
    let itmeInner = createItemAtributes(gefrieGut);
    itmeInner.forEach(element => {
        link.appendChild(element);
    });
    return link;
}
function createItemAtributes(gefrieGut) {
    let item_atirbutes = new Array(3);
    for (let i = 0; i < item_atirbutes.length; i++) {
        item_atirbutes[i] = document.createElement("div");
    }
    item_atirbutes[0].className = "item_pic";
    item_atirbutes[1].className = "item_name";
    item_atirbutes[2].className = "item_spoilDate";
    item_atirbutes[0].textContent = gefrieGut.tag;
    item_atirbutes[1].textContent = gefrieGut.name;
    item_atirbutes[2].textContent = dateConverter(new Date());
    return item_atirbutes;
}
//From aufgabe8
function dateConverter(date) {
    //W3Scool Array https://www.w3schools.com/jsref/jsref_getmonth.asp
    const month = ["01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"];
    return date.getUTCDate() + "." + month[date.getMonth()] + "." + date.getFullYear();
}
async function getItems() {
    let items;
    console.log("connecting to HTTP server");
    try {
        let response = await fetch(url + pfad, { method: "get" });
        let text = await response.text();
        items = JSON.parse(text);
    }
    catch (error) {
        console.error("server is Offline");
        console.log(error);
        throw new Error(error);
    }
    return items;
}
//# sourceMappingURL=index.js.map