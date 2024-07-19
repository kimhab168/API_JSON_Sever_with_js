const products = document.getElementById("products");
let Products = [];

fetch("http://localhost:3000/product")
    .then(data => data.json())
    .then(data => {
        Products = data;
        products.innerHTML = Products.map((item) => {
            return `
            <div class="product-box" id="${item.id}">
                <img src="${item.img}" alt="medicine">
                <div class="letters">
                    <p>${item.title}</p>
                    <h3>${item.category}</h3>
                    <h2>${item.price}</h2>
                    <a class="add-cart" data-id="${item.id}">
                        <i class="fa-solid fa-cart-plus fa-2x"></i>
                    </a>
                </div>
            </div>
            `;
        }).join('');
    })
    .catch((err) => {
        console.log(err);
    });

const count_cards = document.getElementById("count-cards");

products.addEventListener('click', (event) => {
    if (event.target.closest('.add-cart')) {
        const itemId = event.target.closest('.add-cart').getAttribute('data-id');
        const item = Products.find(product => product.id == itemId);
        addCarts(item);
    }
});

function addCarts(item) {
    count_cards.style.width = "30px";
    count_cards.style.height = "20px";
    if (!count_cards.textContent || isNaN(parseInt(count_cards.textContent))) {
        count_cards.innerHTML = 1;
    } else {
        count_cards.textContent = parseInt(count_cards.textContent)+1;
    }
    console.log(item);
}
