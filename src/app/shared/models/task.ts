import { enumImportance } from '../enums/custom.enums';

export class Task {
  constructor(public id:number, public name:string, public description:string, public importance: enumImportance, public isAssign: number){}
}
