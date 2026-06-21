import { BrowserModule } from '@angular/platform-browser';
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { provideHttpClient, withXhr } from '@angular/common/http';

import { AppRoutingModule } from './modules/routing/app-routing.module';

import { AppComponent } from './app.component';
import { HelloService } from './shared/services/hello.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
],
  providers: [
    provideHttpClient(withXhr()),
    provideZoneChangeDetection(),
    HelloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
