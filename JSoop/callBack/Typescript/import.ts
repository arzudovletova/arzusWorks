import { IProductService } from "./type";
import {Product} from "./import1";

class ProductService implements IProductService{
    getById(id: number): Product{
        throw new Error("method not implement.")
    }
    getProducts(): Product[] {
        throw new Error("method not implement.")
    }
    saveProducts(product: Product): void {
        throw new Error("method not implement.")
    }
    deleteProduct(product: Product): void {
        throw new Error("method not implement.")
    }
}