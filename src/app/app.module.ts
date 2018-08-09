import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppConfigModule } from './app-config.module';

export const APP_ID = 'my-app';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_ID }),
    BrowserTransferStateModule,
    AppConfigModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
