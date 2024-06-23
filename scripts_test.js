import { Product } from "./product.js";

// Create an array to hold the product objects
const products = [];

// Create instances of the Product class
products.push(new Product('images/img_1.txt', 'Swedish Oval Table', 'This is a short description of product 1.', '$19.99', 'In Stock: 20'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));
products.push(new Product('images/img_1.txt', 'Product 2', 'This is a short description of product 2.', '$29.99', 'In Stock: 15'));

// Add more products as needed

// Get the product list container
const productList = document.getElementById('productList');

// Loop through the products array and generate HTML for each product
products.forEach(product => {
    const productItem = document.createElement('div'); 
    productItem.classList.add('product-item');

    const productImage = document.createElement('img');
    productImage.src = product.image;
    productImage.alt = product.name;

    const productDetails = document.createElement('div');
    productDetails.classList.add('product-details');

    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productDescription = document.createElement('p');
    productDescription.classList.add('description');
    productDescription.textContent = product.description;

    const productPrice = document.createElement('p');
    productPrice.classList.add('price');
    productPrice.textContent = product.price;

    const productStock = document.createElement('p');
    productStock.classList.add('stock');
    productStock.textContent = product.stock;

    productDetails.appendChild(productName);
    productDetails.appendChild(productDescription);
    productDetails.appendChild(productPrice);
    productDetails.appendChild(productStock);

    productItem.appendChild(productImage);
    productItem.appendChild(productDetails);

    productList.appendChild(productItem);
});
