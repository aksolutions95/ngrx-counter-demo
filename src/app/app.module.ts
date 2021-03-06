import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
@NgModule({
  imports:      [ BrowserModule,
                  FormsModule, 
                  StoreModule.forRoot({count : counterReducer}),
                   StoreDevtoolsModule.instrument({
                      maxAge: 25, // Retains last 25 states
                    })],
  declarations: [ AppComponent, HelloComponent, MyCounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
