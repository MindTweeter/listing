import { Component, OnInit } from '@angular/core';
import { CatApiService } from '../../services/cat-api.service';
import forEach from 'lodash/forEach';
import * as stubObj from '../cat-listing/stub-data.json';
import { orderList } from './../../shared/common-functions';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-cat-listing',
  templateUrl: './cat-listing.component.html',
  styleUrls: ['./cat-listing.component.scss'],
})
export class CatListingComponent implements OnInit {
  originalList: any = [];
  sortedList: any = [];
  errorMessage = '';
  errorStatus = false;
  catLoading = '';
  isLoading = true;
  isNormalisedLoading = true;

  title = 'Listing of Cats';

  jsonDataStub: any = (stubObj as any).default; // this is for test
  constructor(private catServie: CatApiService, private logger: NGXLogger) {}

  ngOnInit(): void {
    this.catLoading = './../../../assets/images/busy-spinner.gif';
    this.getCatList();
  }

  getCatList() {
    this.catServie.getCatListing().subscribe(
      (resp) => {
        this.originalList = resp;
        this.isLoading = false;

        this.normaliseList(this.originalList);
        this.isNormalisedLoading = false;
      },
      (error) => {
        this.errorStatus = true;
        this.errorMessage = error.statusText;
        if (error === 'Timeout Exception') {
          this.logger.log('Timed out');
        }
      }
    );
  }

  normaliseList(ArrayList: any) {
    const maleList: any = [];
    const femaleList: any = [];
    let maleArrayNames = [];
    let femaleArrayNames = [];

    if (ArrayList && ArrayList.length > 0) {
      forEach(ArrayList, (record) => {
        const catList = record.pets?.filter(
          (pet) => pet.type.toUpperCase() === 'CAT'
        );

        if (record.gender && record.gender.toUpperCase() === 'MALE') {
          if (catList != null) {
            maleList.push(catList);
          }
        } else {
          if (catList != null) {
            femaleList.push(catList);
          }
        }
      });
    }
    forEach(maleList, (records) => {
      forEach(records, (item) => {
        maleArrayNames.push({ name: item.name });
      });
    });
    forEach(femaleList, (records) => {
      forEach(records, (item) => {
        femaleArrayNames.push({ name: item.name });
      });
    });

    femaleArrayNames = orderList(femaleArrayNames);
    maleArrayNames = orderList(maleArrayNames);

    this.setSortedList(maleArrayNames, femaleArrayNames);
  }

  setSortedList(maleList, femaleList) {
    const newObjMale = { Type: 'Male', List: maleList };
    const newObjFemale = { Type: 'Female', List: femaleList };
    this.sortedList.push(newObjMale);
    this.sortedList.push(newObjFemale);
  }

  RefreshData() {
    this.errorStatus = false;
    this.originalList = [];
    this.sortedList = [];
    this.isNormalisedLoading = true;
    this.isLoading = true;
    this.getCatList();
  }
}
