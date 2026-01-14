interface DamageAssessment {
    location: string;
    new_damage: boolean;
    damage_type: string;
    date: Date;
    urgent: boolean;
    description: string;
}

interface OverdueMaintenance {
    location: string;
    maintenace_type: string;
    urgent: boolean;
    costs: string;
}

interface InstallationInspection {
    location: string;
    installation_type: string;
    reported_fault: string;
    test_procedure: string;
    approved: boolean;
    description: string;
}

interface Modifications {
    location: string;
    documented_modifications: string;
    carried_out_by: string;
    date: Date;
    description_modification: string;
    action: string;
    description: string;
}

export interface Report {
    name: string;
    date: Date;
    type: string;
    assigned_to?: string;
    values: DamageAssessment | OverdueMaintenance | InstallationInspection | Modifications;
}