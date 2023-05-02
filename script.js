const container=document.getElementById('container');
const productDetails=document.getElementById('product-details-template');



async function FetchData()
{
    const response=await fetch('https://dummyjson.com/products');
    const productjson=await response.json();
    const productdata=productjson.products;
    // console.log(productdata);
    BindData(productdata);
}
function BindData(product)
{
    product.forEach((product) => {
        const productDataclone=productDetails.content.cloneNode(true);
        // console.log(productDataclone)
        const productId=productDataclone.querySelector('#product-id');
        const productDescr=productDataclone.querySelector('#product-description');
const productTitle=productDataclone.querySelector('#product-title');
const productImg=productDataclone.querySelector('#product-img');
const productPrice=productDataclone.querySelector('#product-price');
const productDiscount=productDataclone.querySelector('#product-discountpercentage');
const productRatings=productDataclone.querySelector('#product-rating');
const productBrand=productDataclone.querySelector('#product-brand');
const productCategory=productDataclone.querySelector('#product-category');
// const productimagess=productDataclone.querySelector('#product-image');
productId.innerHTML=`${product.id}`;
productImg.src=`${product.thumbnail}`;
productTitle.innerHTML=`${product.title}`;
productDescr.innerHTML=`Description:${product.description}`
productPrice.innerHTML=`Price:${product.price}`;
productDiscount.innerHTML=`Discount:${product.discountPercentage}`;
productRatings.innerHTML=`Rating:${product.rating}`;
productBrand.innerHTML=`Brand:${product.brand}`;
productCategory.innerHTML=`Category:${product.category}`;
// for(let i=0;i<product.images.length;i++)
// {
//     const product_Images=document.createElement('img');
//     product_Images.src=product.images[i];
//     // productimagess[0].append(product_Images);
    
// }

container.appendChild(productDataclone);
    });
    productDetails.style.display="none";
}
FetchData();