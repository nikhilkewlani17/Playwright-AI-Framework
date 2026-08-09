export class InventoryPage
{
    constructor(page){
        this.page = page;
        this.productsTitle = this.page.getByText('Products');
        this.productsName = this.page.locator('.inventory_item_name');
        this.products = this.page.locator('.inventory_item');
        
    }

    async getProductsName(){
        return this.productsName.allTextContents();
    }

    async addProductToCart(productName){
        const product = this.products.filter({
            hasText : productName
        });

        await product.getByRole('button', {name : 'Add to cart'}).click();
    }

    async openCart(){
        await this.page.locator("#shopping_cart_container").click();
    }
}