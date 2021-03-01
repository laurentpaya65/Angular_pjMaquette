export interface TVShow {
    id: number;
    seasonNumber: number;
    viewSeasons: Array<ViewSeason>;
}

export interface ViewSeason {
    id: number;
    episodes: Array<Episode>;
}

export interface Episode {
    id: number;
    episodeNumber: number;
    viewDate: string;
}