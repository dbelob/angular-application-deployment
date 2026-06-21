import { enableProdMode, provideZoneChangeDetection } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideHttpClient, withXhr } from "@angular/common/http";
import { provideRouter } from "@angular/router";

import { environment } from "./environments/environment";
import { AppComponent } from "./app/app.component";
import { HelloService } from "./app/shared/services/hello.service";
import { routes } from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withXhr()),
    provideZoneChangeDetection(),
    HelloService,
  ],
}).catch((err) => console.error(err));
