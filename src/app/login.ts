import { Component } from "@angular/core";
import { LoginForm } from "./components/loginForm";

@Component({
    selector: "login",
    template: `
        <div class="form-container">
            <login-form />
        </div>
    `,
    imports: [LoginForm],
    styles: `
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }

        login-form {
            width: 100%;
            max-width: 30rem;
        }
    `,
})

export class Login {}