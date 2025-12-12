const product=[
    {
        id: 1,
        // image:'asset/asset/bacon-burger-beef.jpg',
        Name:"Bacon Burger",
        price: 1750.00

    },
     {
        id:2,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\bacon-cheddar-jalapeno-burger.jpg",
        name:"bacon-cheddar-jalapeno-burger",               
        price: 2000.00
    },
    {
          id:3,
        // image:"",
        name:"chili Crunch Burger",              
        price: 1100.00
    },
    {
         id:3,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\classic.jpg",
        name:"Classic Burger",              
        price: 430.00
},

{
    id:4,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\double-stack-beef-burger.jpg",
        name:"Double stack beef Burger",              
        price: 2600.00
},
{
    id:6,
    //   image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\hawaiian-burger-pineapple-ham-cheese-topped-crispy-fried-onion.jpg",
        name:"Hwaiian Burger",              
        price: 1900.00
},

{
    id:7,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\mushroom-swiss-burger.jpg",
        name:"Mushroom Burger",                            
        price: 1430.00
},


 {
    id:1,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\Classic French Fries.jpg",
        name:"Classic French Fries",                                        
        price:550.00
},
  {
    id:2,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\Curly Fries.jpg",
        name:"Curly Fries",
        price:626.00                                        
},
   {
    id:3,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\Sweet Potato Fries.jpg,",
        name:"Sweet Potato Fries",
        price:1645.00                                      
},
    {
    id:4,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\Waffle Fries.jpg",
        name:"Waffle Fries",
        price:1000.00                                     
},
    {
    id:1,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\coca.jpg",
        name:"Coca-cola",
        price:180.00                                     
},
   {
    id:2,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\fantaorange.jpg",
        name:"Fanta Orange",
        price:150.00                                     
},
   {
    id:3,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\fantapinaple.jpg",
        name:"Fanta Pinaple",
        price:200.00                                    
},
{
    id:4,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\fantapinaple.jpg",
        name:"Fanta Pinaple",
        price:200.00                                    
},
  
{
    id:5,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\pepsi.jpg",
        name:"Pepsi",
        price:180.00                                    
},
{
    id:6,
        // image:"C:\Users\lagen\Desktop\icet119\internet technology\final Pos2\asset\Cream-soda.jpg",
        name:"Cream-Soda",
        price:180.00                                    
},
];

const itemsCategories=[...new Set(product.map((item)=>
{return item}))]
let x=0;
document.getElementById('root').innerHTML=itemsCategories.map((item)=>
{
     var{image,name,price}=item;
     return(
        `<div class='box'>
        <div class='img-box'>
            <img class='images' src=${image}></img>
            </div>
            <div class='bottom'>
            <h3>${Name}</h3>
            <h3>$ ${Price}.00</h3>`+
            "<button onclick ='AddOrder("+(x++)+")'>Add Order </button>"+
            `</div>
            </div>`
            )

}).join('')

var cart=[];

function addorder(a){
    cart.push({... itemsCategories(a)});
    display();
}

function delElement(a){
    cart.splice(a, 1);
    display();
}

function display(a){
    let i=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('product').innerHTML="Your cart is empty";
    }
    else{
        document.getElementById("product").innerHTML=cart.map((items)=>
        {
            var{image,name,price}=items;
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:20px;'>${name}</p>
                    <h2 style='font-size:23px;'>${price}.00</h2>`+
                " <i class = 'fa-soild fa-trash'onclic='delElement("+(i++)+")'></i></div>"
            );
    }).join('');
    }
}z