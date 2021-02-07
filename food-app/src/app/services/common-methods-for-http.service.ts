import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ObjectConverterService } from './object-converter.service';

@Injectable({
  providedIn: 'root'
})
export class CommonMethodsForHttpService {

  constructor(private converter: ObjectConverterService) { }

  processFetchedMultiData<TData, TResult>(data: TData[]): TResult[] {
    const results = [];

    data.forEach(dataPart => {
      results.push(this.processFetchedSingleData<TData, TResult>(dataPart));
    });
    return results;
  }

  processFetchedSingleData<TData, TResult>(data: TData): TResult {
    return this.converter.convertResponseToObject<TResult>(data);
  }

  handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }
}
