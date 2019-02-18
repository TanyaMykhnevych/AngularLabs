import { Component, OnInit } from '@angular/core';
import { IBreed } from '../../models/breed';
import { DogsService } from '../../services/dogs.service';

@Component({
    selector: 'app-task5',
    templateUrl: './task5.component.html',
})
export class Task5Component implements OnInit {
    public breeds: IBreed[] = [];

    constructor(private _dogsService: DogsService) { }

    public ngOnInit(): void {
    }

    public addBreed(): void {
        this._dogsService.getAllGreeds().subscribe((response: any) => {
            const breedKeys = Object.keys(response.message);
            const index = Math.floor(Math.random() * (breedKeys.length - 1));
            this.breeds.push({ name: breedKeys[index] });
        });
    }

    public removeBreed(): void {
        const index = Math.floor(Math.random() * (this.breeds.length - 1));
        this.breeds.splice(index, 1);
    }

    public mixBreeds(): void {
        this.breeds.sort(() => {
            return 0.5 - Math.random();
        });
    }
}
