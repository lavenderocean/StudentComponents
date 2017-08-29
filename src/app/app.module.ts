import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { InsertdataComponent } from './insertdata/insertdata.component';
import { PrintdataComponent } from './printdata/printdata.component';

@NgModule({
  declarations: [
    AppComponent,
    DataentryComponent,
    InsertdataComponent,
    PrintdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
