// const items = [...new Set(product.map((item) => { return item }))]

// let i = 0;

// document.getElementById('root').innerHTML = categories.map((item) => {
//     var(image, tittle, price) = item;
//     return (
//         <div class='box'>
//             <img class='images' src=${image} ></img>
//         </div>
//     )
// })


// window.addEventListener("load", () => {

//     axios.get("https://https://jsonblob.com/1073065778206752768")
//         .then((res) => {
//             console.log(res.data);
//             res.data.forEach((item, index) => {
//                 document.getElementById("list-of-cards").innerHTML +=
//                     `
//             <div class="col-4">
//                 <img src="./img/astronauta-mobile.jpeg" alt="">
//                 <h4>Brand</h4>
//                 <p>Name</p>
//                 <p>Price</p>
//             </div>`

//             })
//         })
//         .catch((err) => {
//             console.log(err);
//         })

//     document.getElementsByClassName("pic1").innerHTML = res.data.image[0].join('');


// })


var MenuList = document.getElementById("MenuList");

MenuList.style.maxHeight = "0px";

function menu() {
    if (MenuList.style.maxHeight == "0px") {
        MenuList.style.maxHeight = "200px"
    }
    else {
        MenuList.style.maxHeight = "0px"
    }
}

//DATA

let shoppingCart = [];

let shopItemData = [
    {
        id: 1,
        image: "https://www.sephora.com/productimages/sku/s2173367-main-zoom.jpg?imwidth=166",
        brand: "SEPHORA COLLECTION",
        product_name: "Antioxidant Booster Drops",
        price: "$21"
    },
    {
        id: 2,
        image: "https://www.sephora.com/productimages/sku/s2372530-main-zoom.jpg?imwidth=166",
        brand: "Dior",
        product_name: "Lip Glow Oil",
        price: "$50.00"
    },
    {
        id: 3,
        image: "https://www.sephora.com/productimages/sku/s2620235-main-zoom.jpg?imwidth=166",
        brand: "Laneige",
        product_name: "Lip Glowy Balm",
        price: "$20.00"
    },
    {
        id: 4,
        image: "https://www.sephora.com/productimages/sku/s2172310-main-zoom.jpg?imwidth=166",
        brand: "NARS",
        product_name: "Radiant Creay Concealer",
        price: "$19.00"
    },
    {
        id: 5,
        image: "https://www.sephora.com/productimages/sku/s2639557-main-zoom.jpg?imwidth=166",
        brand: "SEPHORA COLLECTION",
        product_name: "Velour Makeup Face Puff",
        price: "$7.00"
    }
]



//DISPLAY ITEMS IN MAIN PAGE

let shop = document.getElementById("item-list");

console.log(shop);

let generateShop = () => {
    return (shop.innerHTML = shopItemData.map((x) => {
        let { id, image, brand, product_name, price } = x;
        return `
        <div id=product-id-${id} class="col-4">
            <img src="${image}" alt="">
            <h4>${brand}</h4>
            <p>${product_name}</p>
            <p>${price}</p>
            <a href="#" class="add-car" onclick="addToCart(${id})">Add To Car</a>
         </div>
         `
    }));

};

generateShop();

function addToCart(id) {
    console.log(id);
    let item = shopItemData.filter(item => item.id === id)[0];
    // console.log(item);
    shoppingCart.push(item);
    localStorage.setItem("cart", JSON.stringify(shoppingCart))
    console.log(shoppingCart);
    localStorage.setItem("count", shoppingCart.length)
    document.getElementById("cartAmount").innerHTML = localStorage.getItem("count")


}

//DISPLAY ITEMS IN SJOOPING CAR PAGE

let shoopingCar = document.getElementById("shoopingCar");

console.log(shoopingCar);

document.getElementById("link-to-cart").addEventListener("click", () => {
    window.location.href = "./shop-card.html";
})

let generateShopCar = () => {
    return (shoopingCar.innerHTML = shoppingCart.map((x) => {
        let { id, image, brand, product_name, price } = x;
        return `
        <div id=product-id-${id} class="col-4">
            <img src="${image}" alt="">
            <h4>${brand}</h4>
            <p>${product_name}</p>
            <p>${price}</p>
            <a href="#" class="add-car" onclick="addToCart(${id})">Add To Car</a>
         </div>
         `
    }));
};

generateShopCar();

//agregraelementos al carrito
// shop.addEventListener("click", e => {
//     addCarrito(e)
// })

//crear el carrito
let carrito = {}
const addCarrito = e => {
    // console.log(e.target.parentElement)
    if (e.target.classList.contains('add-car')) {
        console.log(e.target.parentElement)
        // setCarrito(e.target.parentElement)
    }
    // e.stopProppagation()
}

const setCarrito = objeto => {
    console.log(objeto)
}


//cantidad de items 

let incremet = (id) => {
    let selectItem = id;
    let search = basket.find((x) => x.id === selectItem.id);

    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }

    basket.push({
        id: selectedItem.id,
        item: 1,
    });
    update(selectedItem.id);
};

let decrement = (id) => {
    let selectItem = id;
    let search = basket.find((x) => x.id === selectItem.id);

    if (search.item === 0) return;
    else {
        search.item -= 1;
    }

    basket.push({
        id: selectedItem.id,
        item: 1,
    });
    update(selectedItem).id;
}

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
};

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket, map((x) => x.item).reduce((x, y) => x + y, 0);

};