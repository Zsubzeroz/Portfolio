export interface Project {
    name: string;
    desc: string;
    tech: string[];
    url: string;
    image?: string;
    featured?: boolean;
}

export interface TechStack {
    name: string;
    icon: string;
    category?: string;
}

export interface ResumeItem {
    date: string;
    title: string;
    place: string;
    desc: string;
}

export interface ResumeSection {
    title: string;
    icon: string;
    items: ResumeItem[];
}
