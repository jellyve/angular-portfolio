export interface Experience {
    type: string;
    institution: string;
    title: string;
    start: string;
    end: string;
    responsibilities: string[];
    achievements: string[];
}

export interface Resume {
    objective: string;
    langEnv: string[];
    skills: string[];
    expEdu: Experience[];
    awards: string[];
 }