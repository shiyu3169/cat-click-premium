// model
const model = {
    cats: [
        { name: "Andy", image: "andy.jpg", clicks: 0 },
        { name: "Bob", image: "bob.jpg", clicks: 0 },
        { name: "Charlie", image: "charlie.jpg", clicks: 0 },
        { name: "David", image: "david.jpg", clicks: 0 },
        { name: "Effy", image: "effy.jpeg", clicks: 0 }
    ]
};

//view
const view = {
    catList: document.querySelector("#cats"),
    display: document.querySelector("#display"),
    admin: document.querySelector("#admin"),

    showAdmin: function() {
        this.admin.style.display = "block";
    },

    hideAdmin: function() {
        this.admin.style.display = "none";
    },

    renderListItem: function(cat) {
        const li = document.createElement("li");
        li.classList.add("pointer");
        li.classList.add("list-group-item");
        li.textContent = cat.name;
        li.addEventListener("click", e => {
            this.renderCat(octopus.findCat(e.target.textContent));
        });
        this.catList.append(li);
    },

    renderCat: function(cat) {
        // Create elements for display area
        let name = this.renderName(cat);
        let image = this.renderImage(cat);
        let counter = this.renderClicks(cat);
        this.clearCat();
        const div = document.createElement("div");
        div.append(name);
        div.append(image);
        div.append(counter);
        display.append(div);
    },

    renderClicks: function(cat) {
        const counter = document.createElement("h3");
        counter.innerHTML = `Clicks: <span>${cat.clicks}</span>`;
        return counter;
    },

    renderImage: function(cat) {
        const image = document.createElement("img");
        image.setAttribute("src", cat.image);
        image.classList.add("pointer");
        image.addEventListener("click", () => {
            octopus.increament(cat);
        });
        return image;
    },

    renderName: function(cat) {
        const name = document.createElement("h1");
        name.textContent = cat.name;
        return name;
    },

    clearCat: function() {
        display.innerHTML = "";
    }
};

//octopus

const octopus = {
    init: function() {
        this.initList(model.cats);
        view.hideAdmin();
    },

    initList: function(cats) {
        for (cat of cats) {
            view.renderListItem(cat);
        }
    },

    findCat: function(name) {
        for (cat of model.cats) {
            if (cat.name === name) {
                return cat;
            }
        }
        return null;
    },

    increament: function(currentCat) {
        for (cat of model.cats) {
            if (cat === currentCat) {
                cat.clicks++;
                view.renderCat(cat);
                break;
            }
        }
    }
};

octopus.init();
