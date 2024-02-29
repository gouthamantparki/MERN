data = [
    {
        "ID": 1,
        "Name": "Chronograph Black Leather Watch",
        "URL": "https://www.armani.com/variants/images/1647597295629165/F/w480.jpg",
        "Description": "43mm watch featuring a black sunray dial with applied indexes and hands with white luminova, at least 50% recycled IP black stainless steel case, chronograph movement and black leather strap.",
        "Price": "290"
    },
    {
        "ID": 2,
        "Name": "Men's Chronograph Black Leather Watch",
        "URL": "https://www.armani.com/variants/images/17411127375628898/F/w480.jpg",
        "Description": "43mm watch features a black dial with silver stick indexes, chronograph movement and black leather strap.",
        "Price": "245"
    },
    {
        "ID": 3,
        "Name": "Men's Automatic Black Leather Watch",
        "URL": "https://www.armani.com/variants/images/17266703523712753/F/w480.jpg",
        "Description": "Men's watch features a matte black IP case, matte black skeleton dial with a pop of black IP plating on the inner movement and black rubberized leather strap",
        "Price": "390"
    },
    {
        "ID": 4,
        "Name": "Chronograph Stainless Steel Watch",
        "URL": "https://www.armani.com/variants/images/17266703523712746/F/w480.jpg",
        "Description": "Emporio Armani's 43mm watch features a blue sunray, cd finish dial, chronograph movement and stainless steel bracelet.",
        "Price": "330"
    },
    {
        "ID": 5,
        "Name": "Chronograph Orange Polyurethane Watch",
        "URL": "https://www.armani.com/variants/images/1647597310802187/F/w480.jpg",
        "Description": "Emporio Armani's 43mm watch features a blue sunray, cd finish dial, chronograph movement and stainless steel bracelet.",
        "Price": "310"
    },
    {
        "ID": 6,
        "Name": "Chronograph Gunmetal Stainless Steel Watch",
        "URL": "https://www.armani.com/variants/images/1647597295641178/F/w480.jpg",
        "Description": "Emporio Armani's 43mm watch features a blue sunray, cd finish dial, chronograph movement and stainless steel bracelet.",
        "Price": "280"
    },
];


loadProductImages = function() {
    var cartItems = document.getElementById("CartItems");
    cartItems.style.visibility = 'hidden';

    var watchElement = document.getElementById("Watches");

    var products = "";
    for(var i = 0; i < data.length; i++)
    {
        products += '<div class="hover:text-green-600 hover:no-underline cursor-pointer"><div class="flex flex-col gap-8 text-center"><img src="'+ (data[i].URL) +'" class="w-full hover:shadow-2xl hover:object-none hover:object-center" /><h6 class="font-bold">'+ (data[i].Name) +'</h6><text>$ '+ (data[i].Price) +'</text></div><button type="button" class="py-2 px-2 border-2 text-black hover:shadow-2xl hover:bg-gray-300" onclick="addToCart('+ (data[i].ID)+')">Add to Cart</button></div>';
    }

    watchElement.innerHTML = products;
}

addToCart = function(id) {
    var cartItems = document.getElementById("CartItems")
    var items = cartItems.innerHTML;
    
    if(items.replace(/\s/g, "") !== "") {
        var cartItems = document.getElementById("CartItems");
        if(cartItems.querySelector('#item' + String(id)) !== null) {
            var itemCount = cartItems.querySelector('#itemCount' + String(id))
            itemCount = Number(itemCount.textContent) + 1;
            cartItems.querySelector('#itemCount' + String(id)).textContent = itemCount
            return;
        }
    }

    for(var i = 0; i < data.length; i++)
    {
        if(data[i].ID == id) {
            items += '<li class="flex w-96 my-2 cursor-none" id="item'+(data[i].ID)+'"><text class="w-2/3 text-black">'+(data[i].Name)+'</text><text class="w-1/6 px-2 py-2 text-black">$ '+(data[i].Price)+'</text><text class="w-1/6 px-2 py-2 text-black" id="itemCount'+(data[i].ID)+'">1</text><div class="ml-2 my-2 p-1 cursor-pointer"><i class="fa-solid fa-x text-black" onclick=removeItemFromCart('+(data[i].ID)+')></i></div><hr></li>';
        }
    }
    cartItems.innerHTML = items;
}

showCartList = function() {
    var cartItems = document.getElementById("CartItems")
    var items = cartItems.innerHTML.replace(/\s/g, "");
    if(items !== "") {
        if(cartItems.style.visibility == 'hidden') {
            cartItems.style.visibility = 'visible';
        }
        else {
            cartItems.style.visibility = 'hidden';
        }
    }
}

removeItemFromCart = function(id) {
    var cartItems = document.getElementById("CartItems");
    var item = document.getElementById('item'+id);
    cartItems.removeChild(item);
    var cartItems = document.getElementById("CartItems")
    var items = cartItems.innerHTML.replace(/\s/g, "");
    if(items == "") {
        cartItems.style.visibility = 'hidden';
    }
}