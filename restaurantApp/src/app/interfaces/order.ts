import { MenuItem } from "./menu-item";

export interface Order {
    id: number,
    orderId: string,
    dateTime : Date,
    orderedThrough : number,
    orderType : number,
    orderStatus : number,
    menuItems : MenuItem[]
}
