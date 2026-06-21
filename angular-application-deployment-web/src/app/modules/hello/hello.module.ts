import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstComponent } from './first.component';
import { SecondComponent } from './second.component';
import { ThirdComponent } from './third.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FirstComponent,
        SecondComponent,
        ThirdComponent
    ]
})
export class HelloModule {
}
