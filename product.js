export class Product {
    constructor(image, name, description, price, stock) {
      this.image = image;
      this.name = name;
      this.description = description;
      this.price = price;
      this.stock = stock;
    }
  
    static async createProduct(imageFilePath, name, description, price, stock) {
      const imageUrl = await Product.fetchImageLink(imageFilePath);
      return new Product(imageUrl, name, description, price, stock);
    }
  
    static async fetchImageLink(filePath) {
      try {
        const response = await fetch(filePath);
        const imageUrl = await response.text();
        return imageUrl.trim(); // Trim to remove any extra whitespace
      } catch (error) {
        console.error('Error fetching image link:', error);
        return '';
      }
    }
  }
  