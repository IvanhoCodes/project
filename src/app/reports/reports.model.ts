export interface Report {
    name: string;
    type: string;
    values: {
        location: string;
        new_damage?: boolean;
        damage_type?: string;
        date?: Date;
        quick_reponse?: boolean;
        description?: string;
        maintenace_type?: string;
        costs?: string;
        installation_type?: string;
        reported_fault?: string;
        test_procedure?: string;
        approved?: boolean;
        documented_modifications?: string;
        carried_out_by?: string;
        description_modification?: string;
        action?: string;
    }
}