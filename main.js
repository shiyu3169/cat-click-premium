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
    inputName: "",
    inputImage: "",
    inputClicks: 0,

    listenForm: function() {
        document
            .querySelector("#form")
            .addEventListener("submit", this.onSubmit);
    },

    nameChange: function(name) {
        this.inputName = name;
    },

    imageChange: function(source) {
        this.inputImage = source;
    },

    clicksChange: function(clicks) {
        this.inputClicks = clicks;
    },

    onSubmit: function(e) {
        e.preventDefault();
        const newCat = {
            name: view.inputName,
            image: view.inputImage,
            clicks: view.inputClicks
        };
        const oldName = display.childNodes[0].childNodes[0].textContent;
        console.log(newCat);
        octopus.changeCat(oldName, newCat);
        view.clearForm();
    },

    clearForm: function() {
        this.inputName = "";
        this.inputImage = "";
        this.inputClicks = 0;
    },

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
    },

    clearList: function() {
        this.catList.innerHTML = "";
    }
};

//octopus

const octopus = {
    init: function() {
        this.initList(model.cats);
        view.hideAdmin();
        view.listenForm();
    },

    initList: function(cats) {
        view.clearList();
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
    },

    changeCat: function(oldName, newCat) {
        for (let i = 0; i < model.cats.length; i++) {
            if (model.cats[i].name === oldName) {
                model.cats[i] = newCat;
                view.renderCat(model.cats[i]);
                this.initList(model.cats);
            }
        }
    }
};

octopus.init();
