import { Component } from '@angular/core';

@Component({
    selector: 'app-task1',
    templateUrl: './task1.component.html',
})
export class Task1Component {

    public message: string;
    public initialModel: boolean = true;

    constructor() { }

    public handleNgModelChange(): void {
        this.initialModel = false;
    }
}
