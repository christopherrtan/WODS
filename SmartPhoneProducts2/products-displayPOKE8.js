
const first_name = "Christopher";
const last_name = "Tan's";
const store_name="Christopher Tan";
top_title.innerHTML=(store_name + ("'s Used Smart Phone Store")); 

//send store name to footer title
bottom_title.innerHTML=("Your one stop shop for used phones - "+store_name+"'s");

//initialize hits, spins, over_half and send to the DOM
let hits= 0;
let spins=0;
let over_half=false;
hits_span.innerHTML = hits; 
spins_span.innerHTML = spins;

//defining names, prices, images
let name1 = "HTC";
let price1 = 40.00;
let image1 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/HTC.jpg";

let name2 = "Apple";
let price2 = 75.00;
let image2 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/iphone-3gs.jpg";

let name3 = "Nokia";
let price3 = 35.00;
let image3 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Nokia.jpg";

let name4 = "Samsung";
let price4 = 45.00;
let image4 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Samsung.jpg";

let name5 = "Blackberry";
let price5 = 10.00;
let image5 = "http://dport96.github.io/ITM352/morea/080.flow-control-II/Blackberry.jpg";

//querySelector
for (let i = 1; eval("typeof name" + i) != 'undefined'; i++) {
    document.querySelector('.main').innerHTML += `
    <section class = "item" onmouseover = "changeClassName(this);"
    onclick = "resetClassName(this)";>
        <h2>${eval("name" + i)}</h2>
        <p>${eval("price" + i)}</p>
        <img src = "${eval("image" + i)}" />

    </section>`;
}




function changeClassName(element) {
    if(element.className=='item'){
        element.className = 'item rotate';
        spins=spins+1;
    }
    if(spins<2*hits&&hits<spins){
       over_half=true;
    } 

    win_span.innerHTML=over_half;
    spins_span.innerHTML = spins; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)

}
function resetClassName(element) {
    if(element.className=='item rotate'){
        element.className = 'item';
        hits=hits+=2;
    } else {
        changeClassName(element);
    }

    if(spins<2*hits&&hits<spins){
        over_half=true;
    } 

    win_span.innerHTML=over_half;
    hits_span.innerHTML = hits; 
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2)
}