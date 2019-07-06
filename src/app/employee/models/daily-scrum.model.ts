export interface IDailyScrum {
    id: number;
    name: string;
    time: IArrivingTime;
    onTime: string;
}
export interface IArrivingTime {
    hour: number;
    minute: number;
}
