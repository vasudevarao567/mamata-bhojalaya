const menuItems = [
    {
        category: "Paneer Dishes",
        items: [
            { name: "Matar Paneer", price: 120, image: "images/matar-paneer.jpg" },
            { name: "Kaju Paneer", price: 170, image: "images/kaju-paneer.jpg" },
            { name: "Shahi Paneer", price: 120, image: "images/shahi-paneer.jpg" }
        ]
    },
    {
        category: "Rice",
        items: [
            { name: "Plain Rice", price: 50, image: "images/plain-rice.jpg" },
            { name: "Jeera Rice", price: 70, image: "images/jeera-rice.jpg" }
        ]
    },
    {
        category: "Dal",
        items: [
            { name: "Dal Fry", price: 90, image: "images/dal-fry.jpg" },
            { name: "Dal Tadka", price: 100, image: "images/dal-tadka.jpg" }
        ]
    },
    {
        category: "Roti & More",
        items: [
            { name: "Tawa Roti", price: 6, image: "images/tawa-roti.jpg" },
            { name: "Butter Roti", price: 8, image: "images/butter-roti.jpg" }
        ]
    }
];

let selectedItems = [];

function generateMenu() {
    const menuContainer = document.getElementById("menu-container");

    menuItems.forEach(category => {
        let section = document.createElement("div");
        section.classList.add("category");

        let title = document.createElement("h3");
        title.innerText = category.category;
        section.appendChild(title);

        category.items.forEach(item => {
            let menuItem = document.createElement("div");
            menuItem.classList.add("menu-item");

            let img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;

            let name = document.createElement("span");
            name.innerText = item.name;

            let price = document.createElement("span");
            price.innerText = `₹${item.price}`;

            let button = document.createElement("button");
            button.innerText = "Add";
            button.onclick = () => addToBill(item);

            menuItem.appendChild(img);
            menuItem.appendChild(name);
            menuItem.appendChild(price);
            menuItem.appendChild(button);
            section.appendChild(menuItem);
        });

        menuContainer.appendChild(section);
    });
}

function addToBill(item) {
    let found = selectedItems.find(i => i.name === item.name);
    if (found) {
        found.quantity += 1;
    } else {
        selectedItems.push({ name: item.name, price: item.price, quantity: 1 });
    }
    updateBill();
}

function updateBill() {
    let billItems = document.getElementById("bill-items");
    let totalPrice = document.getElementById("total-price");
    billItems.innerHTML = "";

    let total = 0;
    selectedItems.forEach(item => {
        let row = document.createElement("div");
        row.innerText = `${item.name} x${item.quantity} - ₹${item.quantity * item.price}`;
        billItems.appendChild(row);
        total += item.quantity * item.price;
    });

    totalPrice.innerText = total;
}

function clearBill() {
    selectedItems = [];
    updateBill();
}

document.addEventListener("DOMContentLoaded", generateMenu);
