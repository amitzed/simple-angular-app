import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take, catchError, filter, takeUntil, pluck } from 'rxjs/operators';

import { Breweries } from './models/external-model';
import { IBreweries } from './interfaces/external-interface';

@Injectable({
  providedIn: 'root'
})
export class ExternalService {

  constructor(
    private http: HttpClient
  ) { }

  // public getBreweries(): Observable<Object> {
  //   return this.http.get('https://api.openbrewerydb.org/breweries')
  // }
  // public getBreweries() {
  //   return this.http.get<IBreweries>('https://api.openbrewerydb.org/breweries')
  // }
  public getBreweries() {
    return this.http.get<IBreweries>('https://api.openbrewerydb.org/breweries')
                    .pipe(
                      filter(x => x.name_brewery !== ''),
                      catchError(err => of(
                        console.error(err),
                        console.error('Something Went Wrong')
                        ))
                    )
  }

  public jsonPlace(): Observable<void> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
                    .pipe(
                      map((res: any) => console.log('jsonPlaceholder Response:', res)),
                      // take(0),
                      // take(1),
                      // take(2),
                      catchError(err => of(console.error(err)))
                    )
  }

  public usingOF(): void {
    of(10, 20, 'THIRTY')
      .subscribe(
        next => console.log('NEXT:', next),
        err => console.log('ERROR:', err),
        () => console.log('STOPPED')
      )
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

  // Example from ToH when using internal data
  // public getHeroes(): Observable<IHero[]> {
  //   const heroes = of(MOCK_HEROES);
  //   this.messageService.addMessage('HeroService: fetched heroes');

  //   return heroes;
  // }

}
