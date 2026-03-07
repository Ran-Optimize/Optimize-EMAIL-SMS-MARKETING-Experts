
export interface CaseStudy {
    id: string;
    title: string;
    description: string;
    results: string;
    imageUrl: string;
}

export interface EmailSample {
    id: string;
    title: string;
    imageUrl: string;
    category: 'Sales' | 'Newsletter' | 'Abandoned Cart';
}
