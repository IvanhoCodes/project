export type ReportType = 'damage_assessment' | 'overdue_maintenance' | 'installation_inspection' | 'modifications';

export interface DamageAssessment {
    new_damage: boolean;
    damage_type: string;
    urgent: boolean;
    description: string;
}

export interface OverdueMaintenance {
    maintenance_type: string;
    urgent: boolean;
    costs: string;
}

export interface InstallationInspection {
    installation_type: string;
    reported_fault: string;
    test_procedure: string;
    approved: boolean;
    description: string;
}

export interface Modifications {
    documented_modifications: string;
    carried_out_by: string;
    description_modification: string;
    action: string;
    description: string;
}

export interface Report {
    name: string;
    date: Date;
    location: string;
    type: string;
    assigned_to?: string;
    values: DamageAssessment | OverdueMaintenance | InstallationInspection | Modifications;
}