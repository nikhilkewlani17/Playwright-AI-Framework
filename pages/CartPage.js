export class CartPage{
    constructor(page){
        this.page = page;
        this.cartItems = this.page.locator('.cart_list');
        this.cartPageTitle = this.page.getByText('Your Cart');
        this.continueShopping = this.page.getByRole('button', {name : 'Continue Shopping'})
        this.checkoutButton = this.page.getByRole('button', {name : 'Checkout'})
    }
}