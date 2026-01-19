import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCard, MatCardContent, MatCardHeader } from "@angular/material/card";
import { MatButton } from "@angular/material/button";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
    selector: "login-form",
    template: `
        <mat-card>
            <mat-card-header>
                <h1>Login</h1>
            </mat-card-header>
            <mat-card-content>
                <form (ngSubmit)="onSubmit()">
                    <fieldset>
                        <mat-form-field>
                            <mat-label>Gebruikersnaam</mat-label>
                            <input 
                                matInput 
                                type="text" 
                                name="username"
                                [(ngModel)]="username"
                                required />
                        </mat-form-field>
                        <mat-form-field>
                            <mat-label>Wachtwoord</mat-label>
                            <input 
                                matInput 
                                type="password" 
                                name="password"
                                [(ngModel)]="password"
                                required />
                        </mat-form-field>
                        @if (errorMessage) {
                            <div role="alert" aria-live="assertive">
                                <p>{{ errorMessage }}</p>
                            </div>
                        }
                        <button type="submit" matButton="filled">Login</button>
                    </fieldset>
                </form>
            </mat-card-content>
        </mat-card>
    `,
    imports: [CommonModule, FormsModule, MatFormField, MatLabel, MatInputModule, MatCard, MatButton, MatCardContent, MatCardHeader],
    styles: `
        fieldset {
            display: flex;
            flex-direction: column;
            border: none;
            padding: 0;
            margin: 0;
        }

        div[role="alert"] {
            color: #d32f2f;
            font-weight: bold;
        }
    `
})

export class LoginForm {
    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit(): void {
        if (this.authService.login(this.username, this.password)) {
            this.router.navigate(['/']);
        } else {
            this.errorMessage = 'Ongeldige gebruikersnaam of wachtwoord';
        }
    }
}