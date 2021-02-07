import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { ObjectConverterService } from './object-converter.service';

@Injectable({
  providedIn: 'root'
})
export class CommonMethodsForHttpService {

  constructor(private http: HttpClient, private converter: ObjectConverterService) { }

  createData(creationData: any, url: string): Observable<boolean> {
    return this.http
      .post(url, creationData)
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }

  getSingleData<TResponse, TResult>(url: string): Observable<TResult> {
    return this.http
      .get<TResponse>(url)
      .pipe(
        catchError(this.handleError),
        map(result =>
          this.processFetchedSingleData<TResponse, TResult>(result))
      );
  }

  getMultiData<TResponse, TResult>(url: string): Observable<TResult[]> {
    return this.http.get<TResponse[]>(url)
      .pipe(
        catchError(this.handleError),
        map(result =>
          this.processFetchedMultiData<TResponse, TResult>(result))
      );
  }

  updataData(updateData: any, url: string): Observable<boolean> {
    return this.http.patch(url, updateData)
      .pipe(
        catchError(this.handleError),
        mapTo(true)
      );
  }

  deleteData(url: string): Observable<boolean> {
    return this.http.delete(url)
    .pipe(
      catchError(this.handleError),
      mapTo(true)
    );
  }

  private processFetchedMultiData<TData, TResult>(data: TData[]): TResult[] {
    const results = [];

    data.forEach(dataPart => {
      results.push(this.processFetchedSingleData<TData, TResult>(dataPart));
    });
    return results;
  }

  private processFetchedSingleData<TData, TResult>(data: TData): TResult {
    return this.converter.convertResponseToObject<TResult>(data);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    return throwError('Error');
  }
}
