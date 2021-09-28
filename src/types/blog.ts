export interface BlogImage {
    position: number;
    url: string;
}

export interface CoreBlog {
    id: string;
    image?: string;
    name: string;
    summary?: string;
}
export interface Blog extends CoreBlog {
    author: string;
    date: Date;
    texts: string[];
    images: BlogImage[];
}
