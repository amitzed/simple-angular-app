import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';

import { ExternalService } from '../external.service';
import { IBreweries } from '../interfaces/external-interface';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit {
  public title = 'Brewery Name';
  // public breweries: Object | undefined;
  public breweries: IBreweries[] | any = [];
  public toggler: boolean = false;

  constructor(
    private externalService: ExternalService
  ) { }

  ngOnInit(): void {
    this.getBreweries();
    this.getJsonPlace();
    this.getUsingOF();
  }

  private getBreweries() {
    this.externalService.getBreweries()
                        .subscribe((res) => {
                          this.breweries = res,
                          console.log('BREWERIES:', res)
                        })
  }

  private getJsonPlace(): void {
    this.externalService.jsonPlace()
                        .subscribe((res: void) => res)
  }

  private getUsingOF(): void {
    this.externalService.usingOF();
  }

  public aToggler() {
    this.toggler = !this.toggler;
  }

}
