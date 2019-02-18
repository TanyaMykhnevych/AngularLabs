import { Route } from '@angular/router';
import { Task1Component } from '../components/task1/task1.component';
import { Task2Component } from '../components/task2/task2.component';
import { Task5Component } from '../components/task5/task5.component';
import { Task4Component } from '../components/task4/task4.component';
import { Task3Component } from '../components/task3/task3.component';

export const routes: Route[] = [
    {
        path: 'task1',
        component: Task1Component,
    },
    {
        path: 'task2',
        component: Task2Component,
    },
    {
        path: 'task3',
        component: Task3Component,
    },
    {
        path: 'task4',
        component: Task4Component,
    },
    {
        path: 'task5',
        component: Task5Component,
    },
];

