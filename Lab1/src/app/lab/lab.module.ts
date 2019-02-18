import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LabRoutingModule } from './routes/lab-routing.module';
import { Task1Component } from './components/task1/task1.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { Task2Component } from './components/task2/task2.component';
import { FooterComponent } from './components/footer/footer.component';
import { Task4Component } from './components/task4/task4.component';
import { Task3Component } from './components/task3/task3.component';
import { Task5Component } from './components/task5/task5.component';
import { DogsService } from './services/dogs.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LabRoutingModule,
        MaterialModule,
        FormsModule,
    ],
    declarations: [
        FooterComponent,
        Task1Component,
        Task2Component,
        Task3Component,
        Task4Component,
        Task5Component,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LabModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: LabModule,
            providers: [
                DogsService,
            ],
        };
    }
}
