import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './routes/home-routing.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';


@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        RouterModule,
        MaterialModule,
    ],
    declarations: [
        HomeComponent,
    ],
})
export class HomeModule { }
