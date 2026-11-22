const box = document.querySelector('.boxs');
const sortName = document.querySelector('.ad');
const sortPrice = document.querySelector('.qiymet');
const sortDiscount = document.querySelector('.endirim');

let products = []
async function Api() {
    try {
        let data = await fetch("./data/product.json")
        let res = await data.json()
        products = res

        res.map((item) => {
            box.innerHTML += `
         <div class="box">
            <img src=${item.img} alt="">
            <div class="discount">${item.discount}</div>
            <div class="category">${item.name}</div>
            <div class="description">${item.description}</div>
            <div class="end-part">
                <div class="price">
                    <p>${item.discountPrice} <i class="fa-sharp fa-regular fa-manat-sign"></i></p>
                    <p class="old-price">${item.price}</p>
                </div>
                <div class="basket"><i class="fa-light fa-basket-shopping"></i></div>
            </div>
        </div>`
        })

    } catch {
        console.log("salam");

    }
}
Api()

function sortByName() {
    box.innerHTML = ""
    let obj = products.sort((a, b) => a.name.localeCompare(b.name, 'az'))
    ShowProducts(obj)
}
sortName.addEventListener("click", () => {
    sortByName()
})

function sortByPrice() {
    let obj = products.sort((a, b) => Number(a.discountPrice) - Number(b.discountPrice))
    ShowProducts(obj)
}
sortPrice.addEventListener("click", () => {
    sortByPrice()
})


function sortByDiscount() {

    let obj = products.sort((a, b) =>
        Number(a.discount.replace("%", "")) -
        Number(b.discount.replace("%", ""))
    )
    ShowProducts(obj)

}
sortDiscount.addEventListener("click", () => {
    sortByDiscount()
})

function ShowProducts(arr) {
    box.innerHTML = ""
    arr.map((item) => {
        box.innerHTML += `
        <div class="box">
            <img src=${item.img} alt="">
            <div class="discount">${item.discount}</div>
            <div class="category">${item.name}</div>
            <div class="description">${item.description}</div>
            <div class="end-part">
                <div class="price">
                    <p>${item.discountPrice} <i class="fa-sharp fa-regular fa-manat-sign"></i></p>
                    <p class="old-price">${item.price}</p>
                </div>
                <div class="basket"><i class="fa-light fa-basket-shopping"></i></div>
            </div>
        </div>`
    })
}