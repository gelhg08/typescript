
interface Products {
    name: string;
    price: number;
    category: string;
}

class Product implements Products {
    constructor( public name: string, public price: number, public category: string) {
        this.name = name;
        this.price = price;
        this.category = category
    }
}

const camara: Products = new Product("Camara", 500.000, "Electronics");

console.log("Nombre del producto:", camara.name);
console.log("Precio del producto:", camara.price);
console.log("Categoría del producto:", camara.category);
