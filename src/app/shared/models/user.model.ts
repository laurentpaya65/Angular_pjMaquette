import {ItemVideo} from './movie.model';

export class User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    active: boolean;
    rolesList: Array<string>;
    videos: Array<ItemVideo>
    subscribeDate: Date;

    constructor( id: number,
        username: string,
        firstname: string,
        lastname: string,
        email: string,
        password: string,
        active: boolean,
        rolesList: Array<string>,
        // itemVideos: Array<ItemVideo>
        subscribeDate: Date   ) {
            this.id = id;
            this.username = username;
            this.firstname = firstname;
            this.lastname = lastname ;
            this.email = email ;
            this.password = password;
            this.active = active;
            this.rolesList = rolesList;
            // itemVideos: Array<ItemVideo>
            this.subscribeDate = new Date(subscribeDate);
        }
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
