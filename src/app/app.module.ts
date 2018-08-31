import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppService } from './_services/app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export const APP_ID = 'my-app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    BrowserTransferStateModule,
    HttpClientModule
  ],
  providers:[AppService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
