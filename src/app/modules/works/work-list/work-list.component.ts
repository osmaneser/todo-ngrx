import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Work } from 'src/app/shared/models/work';

import * as fromApp  from '../../../shared/store/app.reducer';

@Component({
  selector: 'app-work-list',
  templateUrl: './work-list.component.html',
  styleUrls: ['./work-list.component.scss']
})
export class WorkListComponent implements OnInit {

   works:Observable<{works:Work[]}>;

  constructor(private store:Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.works = this.store.select('works');
    this.store.select('works').subscribe((result)=>{
      console.log(result.works);
    })
  }

}
