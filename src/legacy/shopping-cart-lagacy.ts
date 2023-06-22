type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem>[] {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, actual) => total + actual.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
    }

    this._orderStatus = 'closed';
    this.sendMenssage(`Seu pedido com total de ${this.total()} foi recebido.`);
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMenssage(msg: string): void {
    console.log('Mensagem enviada: ' + msg);
  }

  saveOrder(): void {
    console.log('Pedido salvo com sucesso!');
  }
  clear(): void {
    this._items.length = 0;
    console.log('Carrinho de compras foi limpo!');
  }
}

const shoppingCart = new ShoppingCartLegacy();

shoppingCart.addItem({ name: 'Camiseta', price: 49.9131 });
shoppingCart.addItem({ name: 'Caderno', price: 9.9 });
shoppingCart.addItem({ name: 'Lapis', price: 1.59 });

console.log(shoppingCart.items);
console.log(shoppingCart.orderStatus);
console.log(shoppingCart.total());

shoppingCart.checkout();
console.log(shoppingCart.orderStatus);
