const products = document.getElementById("products")

fetch("http://localhost:3000/product")
.then(data=>
    data.json()
)
.then(data=>{
    var Products = data;
    products.innerHTML = Products.map((item)=>{
        return `
        <div class="product-box" id="${item.id}">

                <img src="${item.img}" alt="medicine">
                <div class="letters">
                    <p>${item.title}</p>
                    <h3>${item.category}</h3>
                    <h2>${item.price}</h2>
                    <a onClick="addCarts('${encodeURIComponent(JSON.stringify(item))}')"><i class="fa-solid fa-cart-plus fa-2x"></i></a>
                </div>
            </div>
        `
    }).join('')
    
})
.catch((err)=>{
    console.log(err)
})

const count_cards = document.getElementById("count-cards")

function addCarts(itemString) {
    const item = JSON.parse(decodeURIComponent(itemString));

    count_cards.style.width = "30px";
    count_cards.style.height = "20px";
    if (!count_cards.textContent || isNaN(parseInt(count_cards.textContent))) {
        count_cards.innerHTML = 1;
    } else {
        let count = parseInt(count_cards.textContent);
        count++;
        count_cards.textContent = count;
    }
    console.log(item)
}