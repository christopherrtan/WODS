const storeName = "Christopher Tan";
const topTitle = document.getElementById("top_title");
const bottomTitle = document.getElementById("bottom_title");
const hitsSpan = document.getElementById("hits_span");
const spinsSpan = document.getElementById("spins_span");
const winSpan = document.getElementById("win_span");
const hitSpinSpan = document.getElementById("hit_spin_span");
const mainSection = document.querySelector('.main');

// Update store name in the header and footer
topTitle.textContent = `${storeName}'s Used Smart Phone Store`;
bottomTitle.textContent = `Your one-stop shop for used phones - ${storeName}'s`;

let hits = 0;
let spins = 0;
let overHalf = false;

hitsSpan.textContent = hits;
spinsSpan.textContent = spins;

const products = [
    { name: "HTC", price: 40.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg" },
    { name: "Apple", price: 75.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg" },
    { name: "Nokia", price: 35.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg" },
    { name: "Samsung", price: 45.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg" },
    { name: "Blackberry", price: 10.00, image: "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg" }
];

/* Render products using a for loop
populates table based on length of products array
used for (i = 0; i < products.length; i++)
    seems the most comprehensive to me
    assigns variable, shows stopping point, shows that i increases everytime for loop is run
*/
for (let i = 0; i < products.length; i++) {
    const product = products[i];
    const section = document.createElement('section');
    section.className = 'item';
    section.innerHTML = `
        <h2>${product.name}</h2>
        <p>$${product.price.toFixed(2)}</p>
        <img src="${product.image}" />
    `;
    section.addEventListener("mouseover", () => changeClassName(section));
    section.addEventListener("click", () => resetClassName(section));
    mainSection.appendChild(section);
}

function changeClassName(element) {
    if (element.className === 'item') {
        spins++;
        element.className = 'item rotate';
    }
    
    calculateProgress();
}

function resetClassName(element) {
    if (element.className === 'item rotate') {
        hits += 2;
        element.className = 'item';
    } else {
        changeClassName(element);
    }

    calculateProgress();
}

function calculateProgress() {
    const hitsSpinsRatio = hits / spins;
    overHalf = hitsSpinsRatio >= 0.5 && hits < spins;

    hitsSpan.textContent = hits;
    spinsSpan.textContent = spins;
    hitSpinSpan.textContent = (hits / spins).toFixed(2);
    
    let progress = '';

    if (overHalf) {
        progress = 'You win!';
    } else if (hitsSpinsRatio >= 0.25) {
        progress = 'Almost there!';
    } else if (hitsSpinsRatio > 0) {
        progress = 'On your way!';
    } else {
        progress = 'Get going!';
    }

    winSpan.textContent = progress;
}
