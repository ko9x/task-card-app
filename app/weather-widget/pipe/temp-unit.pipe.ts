import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tempUnit'
})
export class TempUnitPipe implements PipeTransform {
    transform(temp: number, unitType: string) {
        switch(unitType) {
            case "celsius":
            const celsius = (temp - 32) / 1.8;
            return celsius;
            default:
            return temp

        }
    }
}