import { enumStatus } from '../enums/custom.enums';

export class Work{

  constructor(public id: number,public taskId: number,public userId: number,public status: enumStatus){

  }
}
