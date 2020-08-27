import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatListingComponent } from './cat-listing.component';
import { CatApiService } from '../../services/cat-api.service';
import { DebugElement, inject } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import * as stubObj from './stub-data.json';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { componentFactoryName } from '@angular/compiler';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

let catService: CatApiService;

describe('CatListingComponent', () => {
  let component: CatListingComponent;
  let fixture: ComponentFixture<CatListingComponent>;
  // let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [CatListingComponent],
      providers: [CatApiService, HttpClientTestingModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatListingComponent);
    component = fixture.componentInstance;
    catService = TestBed.inject(CatApiService);
    fixture.detectChanges();
  });

  it('should create Cat listing component', () => {
    //  const fixture = TestBed.createComponent(CatListingComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();

    expect(app).toBeTruthy();
  });

  it('should have expected title', () => {
    // const fixture = TestBed.createComponent(CatListingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(component.title).toBe('Listing of Cats');
  });

  it('setSortedList should return equal to combinedList', () => {
    //  const fixture = TestBed.createComponent(CatListingComponent);
    const app = fixture.debugElement.componentInstance;
    const maleList = [{ name: 'Garfield' }, { name: 'Jim' }];
    const femaleList = [{ name: 'Simba' }, { name: 'Tabby' }];

    const combineList = [
      { Type: 'Male', List: [{ name: 'Garfield' }, { name: 'Jim' }] },
      { Type: 'Female', List: [{ name: 'Simba' }, { name: 'Tabby' }] },
    ];
    component.setSortedList(maleList, femaleList);

    expect(component.sortedList.length).toBeGreaterThan(0);
  });

  it('the data array returned from AGL API cloud return value', (done: DoneFn) => {
    catService.getCatListing().subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  it('the originalList should have value', (done: DoneFn) => {
    catService.getCatListing().subscribe((data) => {
      expect(component.originalList.length).toBeGreaterThan(0);
      done();
    });
  });

  it('the sortedList should have value', (done: DoneFn) => {
    catService.getCatListing().subscribe((data) => {
      expect(component.sortedList.length).toBeGreaterThan(0);
      done();
    });
  });

  it('isLoading should be false after data gets loaded', (done: DoneFn) => {
    catService.getCatListing().subscribe((data) => {
      expect(component.isLoading).toEqual(false);
      done();
    });
  });

  it('isNormalisedLoading should be false after data gets loaded', (done: DoneFn) => {
    catService.getCatListing().subscribe((data) => {
      expect(component.isLoading).toEqual(false);
      done();
    });
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
