import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';

@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HelloModule {
}
