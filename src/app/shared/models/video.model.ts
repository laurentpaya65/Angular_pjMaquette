import {Author} from './Author';
import {Season} from './Season';

export interface Video {
    id: number;
    typeVideo: string;
    title: string;
    categories: Array<string>;
    imagePath: string;
    overview: string;
    authors: Array<Author>;
    original_language: string;
    seasons: Array<Season>;
}
