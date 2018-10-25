// add event listerner
document.querySelector("#andy").addEventListener("click", showAndy);
document.querySelector("#bob").addEventListener("click", showBob);
document.querySelector("#charlie").addEventListener("click", showCharlie);
document.querySelector("#david").addEventListener("click", showDavid);
document.querySelector("#effy").addEventListener("click", showEffy);

// select display area
const display = document.querySelector("#display");

const name = document.createElement("h1");
const image = document.createElement("img");
const counter = document.createElement("h3");

const div = document.createElement("div");

function showAndy() {
    name.textContent = "Andy";
    image.setAttribute("src", "andy.jpg");
    counter.textContent = "Clicks: 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}

function showBob() {
    name.textContent = "Bob";
    image.setAttribute("src", "bob.jpg");
    counter.textContent = "Clicks: 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
function showCharlie() {
    name.textContent = "Charlie";
    image.setAttribute("src", "charlie.jpg");
    counter.textContent = "Clicks: 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
function showDavid() {
    name.textContent = "David";
    image.setAttribute("src", "david.jpg");
    counter.textContent = "Clicks: 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
function showEffy() {
    name.textContent = "Effy";
    image.setAttribute("src", "effy.jpeg");
    counter.textContent = "Clicks: 0";

    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}
