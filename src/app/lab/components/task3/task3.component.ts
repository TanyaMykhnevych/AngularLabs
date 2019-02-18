import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { IBreed } from '../../models/breed';

@Component({
    selector: 'app-task3',
    templateUrl: './task3.component.html',
    styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

    public breeds: IBreed[] = [];

    constructor(private _dogsService: DogsService) { }

    public ngOnInit(): void {
        this._loadBreeds();
    }

    private _loadBreeds(): void {
        this._dogsService.getAllGreeds().subscribe((response: any) => {
            const breeds = response.message;
            const breedKeys = Object.keys(breeds);

            for (let i = 0; i < breedKeys.length; i++) {
                this.breeds.push({
                    name: breedKeys[i],
                    subbreeds: breeds[breedKeys[i]],
                });
            }
        });
    }
}
