import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})

export class NoteService {
    notes = [];

    constructor(private http: HttpClient) {
        this.notes = this.getNotes();
    }

    getNotes() {
        this.http.get(API_URL + '/notes')
            .pipe(catchError(this.errorHandler))
            .subscribe((response) => {
                (
                    this.notes = response;
            })
    }

    errorHandler(error) {
        return observableThrowError(error.message || 'Something went wrong!!!!');
    }

}