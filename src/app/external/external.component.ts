import { Component, OnInit } from '@angular/core';

import { ExternalService } from '../external.service';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.scss']
})
export class ExternalComponent implements OnInit {
  public title = 'Brewery Name';
  // public breweries: Object | undefined;
  public breweries: any;

  constructor(
    private externalService: ExternalService
  ) { }

  ngOnInit(): void {
    this.getBreweries();
    this.getJsonPlace();
    this.getUsingOF();
  }

  private getBreweries(): void {
    this.externalService.getBreweries()
                        .subscribe(<T>(res: T) => {
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

}
