
export interface BlogModel {
    id: number;
    imageUrl: string;
    authorName: string;
    authorAvatar: string;
    authorId: string;
    title: string;
    content: string;
    tags: string[];
    categories: string[];
    createdAt: string;
}


export var defaultBlogModel: BlogModel = {
    id: 0,
    imageUrl: '1674916984257.jpeg',
    authorName: 'Jason Francisco',
    authorAvatar: '',
    authorId: '',
    title: 'The Impact of Technology on the Workplace: How Technology is Changing',
    content: '',
    tags: ['technology', 'workplace'],
    categories: [],
    createdAt: "August 20, 2022"
}
