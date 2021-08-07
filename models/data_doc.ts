export enum Proovestate{
    CLEAN,
    UNCLEAN,
    UNMARK
}

export default interface Data{
    id?:number,
    prooveState?:Proovestate,
    detailName?:string,
    detailMoney?:string,
    vote?:any
}