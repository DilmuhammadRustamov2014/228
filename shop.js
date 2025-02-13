const product = [
    {
        rasm: "./images/cavrik.png",
        nomi: "Mars rug",
        narxi:100,
        mavjud:24,
    },
    {
        rasm: "./images/kliviatura.png",
        nomi: "Keyboard sticker",
        narxi:49,
        mavjud:11,
    },
    {
        rasm: "./images/sota.png",
        nomi: "Smart watch",
        narxi:899,
        mavjud:24,
    },
    {
        rasm: "./images/cavrik.png",
        nomi: "Wireless keyboard",
        narxi:100,
        mavjud:24,
    },
    {
        rasm: "./images/cavrik.png",
        nomi: "Mouse",
        narxi:100,
        mavjud:24,
    }
    
]

const box = document.querySelector(".product__list");
const searchProduct = document.querySelector("#product__input");
const searchForm = document.querySelector("#product__form");

function renderProduct (mahsulot){
    box.innerHTML = "";
    mahsulot.map(objectlar => {
        const newItem = document.createElement("li");

        newItem.className = "item"
        newItem.innerHTML = `<img src="${objectlar.rasm}" 
        <h2>${objectlar.nomi}</h2>
        <p>Coin: ${objectlar.narxi}</p>
        <p>Mavjud: ${objectlar.mavjud} ta</p>
        <button>Buyurtma qilish</button>
        `

        box.appendChild(newItem)

    })
}

renderProduct(product)

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchValue = searchProduct.value.toLowerCase();
    const filteredProducts = product.filter(mahsulot => mahsulot.nomi.toLowerCase().includes(searchValue));
    
    if (filteredProducts.length > 0) {
        renderProduct(filteredProducts);
    } else {
        box.innerHTML = "<p>Ma'lumot topilmadi</p>"
    }
    
    searchProduct.value = "";
 
})
