import { Video} from './video.model';
import { Evaluation } from './evaluation.model';

export interface ItemVideo {
    id: number;
    video: Video;
    registeredDate: string;
    idAPI: string;
    evaluation: Evaluation;
    viewDate: string;
}