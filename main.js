// model
var cats = [
    { name: "Andy", image: "andy.jpg", clicks: 0 },
    { name: "Bob", image: "bob.jpg", clicks: 0 },
    { name: "Charlie", image: "charlie.jpg", clicks: 0 },
    { name: "David", image: "david.jpg", clicks: 0 },
    { name: "Effy", image: "effy.jpeg", clicks: 0 }
];

//view
const catList = document.querySelector("#cats");
const display = document.querySelector("#display");

function initList(cats) {
    for (cat of cats) {
        const li = document.createElement("li");
        li.classList.add("pointer");
        li.classList.add("list-group-item");
        li.textContent = cat.name;
        li.addEventListener("click", e => {
            renderCat(findCat(e.target.textContent));
        });
        catList.append(li);
    }
}

function renderCat(cat) {
    // Create elements for display area
    let name = renderName(cat);
    let image = renderImage(cat);
    let counter = renderClicks(cat);
    clearCat();
    const div = document.createElement("div");
    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
}

function renderClicks(cat) {
    const counter = document.createElement("h3");
    counter.innerHTML = `Clicks: <span>${cat.clicks}</span>`;
    return counter;
}

function renderImage(cat) {
    const image = document.createElement("img");
    image.setAttribute("src", cat.image);
    image.classList.add("pointer");
    image.addEventListener("click", () => {
        increament(cat);
    });
    return image;
}

function renderName(cat) {
    const name = document.createElement("h1");
    name.classList.add("text-center");
    name.textContent = cat.name;
    return name;
}

function clearCat() {
    display.innerHTML = "";
}

//octopus
initList(cats);

function findCat(name) {
    for (cat of cats) {
        if (cat.name === name) {
            return cat;
        }
    }
    return null;
}

function increament(currentCat) {
    for (cat of cats) {
        if (cat === currentCat) {
            cat.clicks++;
            renderCat(cat);
            break;
        }
    }
}
