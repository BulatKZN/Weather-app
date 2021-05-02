import {colorsMap} from "./config";

export function findColor(temperature : number) : string {
    for (let [key,value] of (Object as any).entries(colorsMap)){
        if(temperature < value) {
            return key;
        }
    }
    return 'red';
}