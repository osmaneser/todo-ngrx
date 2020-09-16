import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pAssignment'
})

export class AssignmentPipe implements PipeTransform {
  transform(value: any, element: HTMLElement): any {
    switch (value) {

      case 0:
        element.style.backgroundColor = "rgba(22, 255, 5, 0.62)";
        return "Atandı";
      case 1:
        element.style.backgroundColor = "rgba(0, 0, 0, 0.30)";
        return "Atanmadı";

      default:
        break;
    }
  }
}
