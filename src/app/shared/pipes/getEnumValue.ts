import { Pipe, PipeTransform } from '@angular/core';
import { enumImportance } from '../enums/custom.enums';

@Pipe({
  name: 'pImportance'
})

export class ImportancePipe implements PipeTransform {
  transform(value: enumImportance, element: HTMLElement): any {
    switch (value) {

      case enumImportance.easy:
        element.style.backgroundColor = "rgba(106, 255, 0, 0.5)";
        return "Önemsiz";
      case enumImportance.normal:
        element.style.backgroundColor = "rgba(0, 127, 255, 0.5)";
        return "Normal";
      case enumImportance.important:
        element.style.backgroundColor = "rgba(255, 0, 200, 0.5)";
        return "Önemli";
      case enumImportance.critical:
        element.style.backgroundColor = "rgba(255, 0, 0, 0.50)";
        return "Kritik";

      default:
        break;
    }
  }
}
