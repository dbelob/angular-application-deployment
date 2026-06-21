import {
  enableProdMode,
  provideZoneChangeDetection,
  importProvidersFrom,
} from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withXhr } from "@angular/common/http";

import { environment } from "./environments/environment";
import { HelloService } from "./app/shared/services/hello.service";
import { AppRoutingModule } from "./app/modules/routing/app-routing.module";
import { AppComponent } from "./app/app.component";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    provideHttpClient(withXhr()),
    provideZoneChangeDetection(),
    HelloService,
  ],
}).catch((err) => console.error(err));
