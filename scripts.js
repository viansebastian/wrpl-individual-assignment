import { Product } from "./product.js";

// Create an array to hold the product objects
const products = [];

// Function to initialize products
async function initializeProducts() {
    const product1 = await Product.createProduct('images/img1.txt', 'Swedish Oval Table', 'Elegant oval table perfect for any dining room.', '$19.99', 'In Stock: 20');
    const product2 = await Product.createProduct('images/img2.txt', 'Bent Scands Chair Set', 'Stylish and comfortable chair set.', '$29.99', 'In Stock: 15');
    const product3 = await Product.createProduct('images/img3.txt', 'Royal English Kitchen Table Set', 'Classic kitchen table set for your home.', '$59.99', 'In Stock: 4');
    const product4 = await Product.createProduct('images/img4.txt', 'Samurai Table Set', 'Unique table set inspired by Samurai culture.', '$119.99', 'In Stock: 3');
    const product5 = await Product.createProduct('images/img5.txt', 'Minimalist Work Table', 'Sleek work table for a modern workspace.', '$29.99', 'In Stock: 14');
    const product6 = await Product.createProduct('images/img6.txt', 'Good Chair', 'Comfortable chair for everyday use.', '$49.99', 'In Stock: 9');
    const product7 = await Product.createProduct('images/img7.txt', 'Icelandic Junior Rest Bed', 'Cozy bed for juniors with Icelandic design.', '$69.99', 'In Stock: 20');
    const product8 = await Product.createProduct('images/img8.txt', 'Brue Set Table', 'Compact and versatile table set.', '$89.99', 'In Stock: 11');
    const product9 = await Product.createProduct('images/img9.txt', "Emperor's Thrill Table", 'Luxurious table fit for an emperor.', '$299.99', 'In Stock: 4');
    const product10 = await Product.createProduct('images/img11.txt', 'Chill Sofa', 'Relax in style with this comfortable sofa.', '$119.99', 'In Stock: 15');
    const product11 = await Product.createProduct('images/img12.txt', 'Korean Contemporer Chair', 'Modern chair with Korean influence.', '$169.99', 'In Stock: 3');
    
    // Add more products as needed

    products.push(product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11);

    // Call the function to generate HTML after products are initialized
    generateProductList();
}

// Function to generate product list HTML
function generateProductList() {
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
}

// Initialize products and generate the product list
initializeProducts();
