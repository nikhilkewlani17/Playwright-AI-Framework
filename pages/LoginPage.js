export class LoginPage
{
    constructor(page){
        this.page = page;
        this.usernameInputBox = this.page.getByPlaceholder('Username');
        this.passwordInputBox = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', {name: 'Login'})
    }

    async goTo(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username,password){
        await this.usernameInputBox.fill(username);
        await this.passwordInputBox.fill(password);
        await this.loginButton.click();
    }
}