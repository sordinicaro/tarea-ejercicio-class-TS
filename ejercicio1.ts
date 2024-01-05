// Analizá bien todo el programa y pensá qué es lo que tendría que hacer la función creteItemId(). Completale el cuerpo con lo que haga falta.


type ItemId = `${string}--<${number}>--${string}`;

class User {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

class Product {
    name: string;
    cost: number;

    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }
}

function createItemId(item: User | Product): ItemId | undefined {
    if (item instanceof User) {
        return `${item.name}--<${item.id}>--user`
    } else if (item instanceof Product) {
        return `${item.name}--<${item.cost}>--produc`
    } else {
        undefined

    }
}
// Usar el operador instanceof para determinar qué ID retornar
// El operador instanceof permite verificar si un objeto pertenece a una clase determinada.
// Según se trate de User o de Product.


const user = new User("Edward Snowden", 459);
const product = new Product("Signal", 750);

console.log(createItemId(user));
console.log(createItemId(product));