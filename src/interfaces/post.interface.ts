export interface IPost {

    id: string
    comment: string
    picture: string
    userId: string;
    interactions: [{
        comments: [number],
        likes: [number]
    }]
}
   