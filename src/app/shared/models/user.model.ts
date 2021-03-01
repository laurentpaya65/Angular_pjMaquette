export interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    active: boolean;
    rolesList: Array<string>;
    // itemVideos: Array<ItemVideo>
    subscribeDate: string;
}






export interface List {
    id: number;
    name: string;
    cards: Array<Card>;
}

export interface Card {
    id: number;
    title: string;
    content: string;
    priority: Priority;
}
export enum Priority {
    green = 1,
    orange = 2,
    red = 3
}