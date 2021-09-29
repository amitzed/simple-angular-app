import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take, catchError, filter, takeUntil } from 'rxjs/operators';

import { Breweries } from './models/external-model';
import { IBreweries } from './interfaces/external-interface';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor(
    private http: HttpClient
  ) { }

  public getBreweries(): Observable<Object> {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  // public getBreweries(): Observable<void> {
  //   return this.http.get('https://api.openbrewerydb.org/breweries').pipe(
  //                   map((brewery: Breweries) => {
  //                     const breweryObject: IBreweries = {
  //                       id: brewery.id,
  //                       name_brewery: brewery.name,
  //                       brewery_style: brewery.brewery_type
  //                     }
  //                     console.log('breweryObject:', breweryObject)
  //                     breweryObject
  //                   })
  //   )
  // }
}
