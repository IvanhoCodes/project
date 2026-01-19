import { Component, input, effect } from "@angular/core";
import { MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { MatListModule } from "@angular/material/list";
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";

@Component({
    selector: "input-list",
    template: `
        <fieldset>
            <legend>Aanvullende gegevens</legend>
            <div>
                @for (input of inputs; track input.key) {
                    @if (input.type === "checkbox") {
                            <mat-checkbox 
                                [checked]="input.value"
                                [attr.aria-label]="input.label">
                                {{ input.label }}
                            </mat-checkbox>
                    } @else {
                        <mat-form-field>
                            <mat-label>{{ input.label }}</mat-label>
                            <input 
                                matInput 
                                [value]="input.value" 
                                type="text"
                                [attr.aria-label]="input.label" />
                        </mat-form-field>
                    }
                }
            </div>
        </fieldset>
    `,
    imports: [MatListModule, MatLabel, MatFormFieldModule, MatInputModule, MatCheckboxModule],
    styles: `
        div {
            display: flex;
            flex-direction: column;
        }

        fieldset {
            border: none;
            padding: 0;
            margin: 1.5rem 0 0 0;
        }

        legend {
            font-weight: bold;
            margin-bottom: 1rem;
        }

        .checkbox-wrapper {
            margin-bottom: 1rem;
        }
    `,
})

export class InputList {
    fields = input.required<any>();
    inputs: {
        key: string;
        value: any;
        type: string;
        label: string;
    }[] = [];
    checkboxKeys: Array<string> = [
        "new_damage",
        "urgent",
        "approved"
    ];
    keyReplacements: { [key: string]: string } = {
        "location": "Locatie",
        "damage_type": "Soort schade",
        "maintenance_type": "Soort onderhoud",
        "description": "Omschrijving",
        "costs": "Kostenindicatie",
        "installation_type": "Soort installatie",
        "reported_fault": "Gemelde storing",
        "test_procedure": "Testprocedure",
        "documented_modifications": "Bestaande situatie en reeds gedocumenteerde modificaties",
        "carried_out_by": "Uitgevoerd door",
        "description_modification": "Beschrijving modificatie",
        "action": "Te ondernemen actie",
        "new_damage": "Nieuwe schade",
        "urgent": "Acute actie vereist",
        "approved": "Goedgekeurd"
    };

    constructor() {
        effect(() => {
            this.fields();
            this.addTypesToFields();
        });
    }

    addTypesToFields() {
        this.inputs = [];
        for (const field of Object.entries(this.fields())) {
            const key = field[0];
            const value = field[1];
            let input = {
                key,
                value,
                type: "text",
                label: this.keyReplacements[key] || this.toCorrectCase(key)
            }
            if (this.checkboxKeys.includes(key)) {
                input.type = "checkbox";
            }
            this.inputs.push(input);
        }
    }

    toCorrectCase(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
}