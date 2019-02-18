import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DogsService {

    constructor(private _http: HttpClient) { }

    public getAllGreeds(): Observable<any> {
        return this._http.get<any>('https://dog.ceo/api/breeds/list/all');
    }

    // public update(id: string, cashTray: CashTray): Observable<CashTray> {
    //     return this._http.put<CashTray>(`${AppSettings.apiHost}/cashTray/${id}`, cashTray);
    // }

    // public create(cashTray: CashTray): Observable<CashTray> {
    //     return this._http.post<CashTray>(`${AppSettings.apiHost}/cashTray/`, cashTray);
    // }

    // public filterCashTrays(query: ICashTrayQueryParameters): Observable<CashTray[]> {
    //     const params: HttpParams = convertToHttpParams<ICashTrayQueryParameters>(query);

    //     return this._http.get<CashTray[]>(`${AppSettings.apiHost}/cashTray/filter`, { params });
    // }

    // public findByName(name: string): Observable<CashTray> {
    //     return this._http.get<CashTray>(`${AppSettings.apiHost}/cashTray/${name}`);
    // }

    // public findCashTrayById(list: CashTray[], id: string): CashTray {
    //     return list.find((cashTray: CashTray) => (cashTray.id === id));
    // }

}
