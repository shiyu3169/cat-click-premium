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
    const name = document.createElement("h1");
    const image = document.createElement("img");
    const counter = document.createElement("h3");
    const div = document.createElement("div");

    // Set up content
    name.textContent = cat.name;
    image.setAttribute("src", cat.image);
    image.addEventListener("click", () => {
        increament(cat);
    });

    counter.innerHTML = `Clicks: <span>${cat.clicks}</span>`;

    display.innerHTML = "";
    div.append(name);
    div.append(image);
    div.append(counter);
    display.append(div);
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

// // add event listerner
// document.querySelector("#andy").addEventListener("click", showAndy);
// document.querySelector("#bob").addEventListener("click", showBob);
// document.querySelector("#charlie").addEventListener("click", showCharlie);
// document.querySelector("#david").addEventListener("click", showDavid);
// document.querySelector("#effy").addEventListener("click", showEffy);

// // select display area
// const display = document.querySelector("#display");

// // Create elements for display area
// const name = document.createElement("h1");
// const image = document.createElement("img");
// const counter = document.createElement("h3");
// const div = document.createElement("div");

// //declare counter vaiable
// let andyClick = 0;
// let bobClick = 0;
// let charlieClick = 0;
// let davidClick = 0;
// let effyClick = 0;

// // add event listener to the image
// image.addEventListener("click", increament);

// function increament() {
//     switch (name.textContent) {
//         case "Andy":
//             andyClick++;
//             counter.innerHTML = `Clicks: <span>${andyClick}</span>`;
//             break;
//         case "Bob":
//             bobClick++;
//             counter.innerHTML = `Clicks: <span>${bobClick}</span>`;
//             break;
//         case "Charlie":
//             charlieClick++;
//             counter.innerHTML = `Clicks: <span>${charlieClick}</span>`;
//             break;
//         case "David":
//             davidClick++;
//             counter.innerHTML = `Clicks: <span>${davidClick}</span>`;
//             break;
//         case "Effy":
//             effyClick++;
//             counter.innerHTML = `Clicks: <span>${effyClick}</span>`;
//             break;
//     }
// }

// function showAndy() {
//     name.textContent = "Andy";
//     image.setAttribute("src", "andy.jpg");
//     counter.innerHTML = `Clicks: <span>${andyClick}</span>`;

//     div.append(name);
//     div.append(image);
//     div.append(counter);
//     display.append(div);
// }

// function showBob() {
//     name.textContent = "Bob";
//     image.setAttribute("src", "bob.jpg");
//     counter.innerHTML = `Clicks: <span>${bobClick}</span>`;

//     div.append(name);
//     div.append(image);
//     div.append(counter);
//     display.append(div);
// }
// function showCharlie() {
//     name.textContent = "Charlie";
//     image.setAttribute("src", "charlie.jpg");
//     counter.innerHTML = `Clicks: <span>${charlieClick}</span>`;

//     div.append(name);
//     div.append(image);
//     div.append(counter);
//     display.append(div);
// }
// function showDavid() {
//     name.textContent = "David";
//     image.setAttribute("src", "david.jpg");
//     counter.innerHTML = `Clicks: <span>${davidClick}</span>`;

//     div.append(name);
//     div.append(image);
//     div.append(counter);
//     display.append(div);
// }
// function showEffy() {
//     name.textContent = "Effy";
//     image.setAttribute("src", "effy.jpeg");
//     counter.innerHTML = `Clicks: <span>${effyClick}</span>`;

//     div.append(name);
//     div.append(image);
//     div.append(counter);
//     display.append(div);
// }
