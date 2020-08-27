import { TestBed, inject } from '@angular/core/testing';

import { CatApiService } from './cat-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import * as stubObj from '../components/cat-listing/stub-data.json';
import { environment } from '../../environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { NGXLogger } from 'ngx-logger';
import { LoggerTestingModule } from 'ngx-logger/testing';

describe('CatApiService', () => {
  let service: CatApiService;
  let httpMock: HttpTestingController;
  // let logger: NGXLogger;
  const jsonDataStub: any = (stubObj as any).default; // this is for test

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, LoggerTestingModule ],
      providers: [
        CatApiService,
        HttpClientTestingModule,
        HttpTestingController
      ],
    });
    service = TestBed.inject(CatApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('service api should be created', () => {
    expect(service).toBeTruthy();
  });

  it('the data array returned from AGL cloud api expected to be having elements', (done: DoneFn) => {
    service.getCatListing().subscribe((data) => {
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
