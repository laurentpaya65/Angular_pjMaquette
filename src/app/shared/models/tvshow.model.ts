import {Video} from './video.model';
import {Evaluation} from './evaluation.model';

export interface TVShow {
    id: number;
    video: Video;
    registeredDate: string;
    idAPI: string;
    evaluation: Evaluation;
    viewSeasons: Array<ViewSeason>;
}

export interface ViewSeason {
    id: number;
    episodes: Array<Episode>;
    seasonNumber: number;
}

export interface Episode {
    id: number;
    episodeNumber: number;
    viewDate: string;
}
