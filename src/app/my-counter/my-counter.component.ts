import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Increment, Decrement, Reset} from './../counter.actions'; 
@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;
  constructor(private store: Store<{count : number}>) {
    this.count$ = store.pipe(select('count'));
   }

  ngOnInit() {
  }

  Increment(){
    this.store.dispatch(new Increment())
  }

  Decrement(){
    this.store.dispatch(new Decrement())
  }

  Reset(){
        this.store.dispatch(new Reset())
  }

}