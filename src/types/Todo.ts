export type CompletedT='O'|'X'

export interface Todo{
    "id": string;
    "text": string;
    "completed": CompletedT;
}