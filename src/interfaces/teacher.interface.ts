export interface Teacher {
    id: number;
    name: string;
    profession: string[];
    image: string;
    description: string;
    tags: string[];
    from: string;
    rate: number;
    comments: Comments[];
}

export interface Comments {
    id: string;
    comment: string;
    reviews: number;
    qualification: number;
    date: string;
}