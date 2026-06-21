import { Routes } from "@angular/router";
import { FirstComponent } from "./modules/hello/first.component";
import { SecondComponent } from "./modules/hello/second.component";
import { ThirdComponent } from "./modules/hello/third.component";

export const routes: Routes = [
  { path: "first", component: FirstComponent },
  { path: "second", component: SecondComponent },
  { path: "third", component: ThirdComponent },
  { path: "", pathMatch: "full", redirectTo: "first" },
];
