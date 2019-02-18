import { Component, OnInit } from '@angular/core';
import { IBreed } from '../../models/breed';
import { DogsService } from '../../services/dogs.service';

@Component({
    selector: 'app-task4',
    templateUrl: './task4.component.html',
})
export class Task4Component implements OnInit {
    public breedWithSubbreeds: IBreed = {};
    private _breedsWithSubbreeds: IBreed[] = [];

    constructor(private _dogsService: DogsService) { }

    public ngOnInit(): void {
        this.loadBreedsWithSubbreeds();
    }

    public loadBreedsWithSubbreeds(): void {
        this._dogsService.getAllGreeds().subscribe((response: any) => {
            const breeds = response.message;
            const breedKeys = Object.keys(breeds);

            for (let i = 0; i < breedKeys.length; i++) {
                if (breeds[breedKeys[i]] && breeds[breedKeys[i]].length) {
                    this._breedsWithSubbreeds.push({
                        name: breedKeys[i],
                        subbreeds: breeds[breedKeys[i]],
                    });
                }
            }

            const index = Math.floor(Math.random() * (this._breedsWithSubbreeds.length - 1));
            this.breedWithSubbreeds = this._breedsWithSubbreeds[index];
        });
    }
}
