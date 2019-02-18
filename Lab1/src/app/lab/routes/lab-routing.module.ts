import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from './lab.routes';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
})
export class LabRoutingModule { }
