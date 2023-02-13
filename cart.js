//menu
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

//shooping ccar
let cart = localStorage.getItem("cart");
let arr = JSON.parse(cart);

let shoopingCar = document.getElementById("shoopingCar");

console.log(shoopingCar);
document.getElementById("cartAmount").innerHTML = localStorage.getItem("count")

let generateShopCar = () => {
    return (shoopingCar.innerHTML = arr.map((x) => {
        let { id, image, brand, product_name, price } = x;
        return `
        <tr>
        <td>
            <div class="cart-info">
                <img src="${image}" alt="" >
                <div>
                    <p>${brand}</p>
                    <small>Price: ${price}</small>
                    <br>
                    <a href="" onclick="remove()">Remove</a>
                </div>
            </div>
        </td>
        <td class="buttons">
            <i class="bi bi-dash-lg"></i>
            <div class="quantity">1</div>
            <i class="bi bi-plus-lg"></i>
        </td>
        <br>
        <td>$50.00</td>
        </tr>
         `
    }));
};

generateShopCar();

function remove(id) {
    // console.log(params);
    let item = cart.filter(item => item.id != params);
    console.log(item);
    cart = item;
    displayShoppingCart(cart);
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

// function remove(id) {
//     // console.log(params);
//     let item = cart.filter(item => item.id != params);
//     console.log(item);
//     cart = item;
//     displayShoppingCart(cart);
// }