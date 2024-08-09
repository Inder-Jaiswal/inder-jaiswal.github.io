import { InMemoryDbService } from 'angular-in-memory-web-api';
export class AppData implements InMemoryDbService {

  createDb(): { products: Product[], reviews Review[]} {
  const products = ProductData.products;
  const reviews = ProductData.reviews;
  
    return {products,reviews};
  }
}

