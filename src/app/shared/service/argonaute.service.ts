import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Argonaute } from '../model/argonaute.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ArgonauteService {
  constructor(private http: HttpClient) {}
  public getArgonaute(): Observable<Argonaute[]> {
    return this.http.get<Argonaute[]>(environment.apiUrl);
  }

  public getArgonauteById(id: number): Observable<Argonaute> {
    return this.http.get<Argonaute>(environment.apiUrl + id);
  }
  public postArgonaute(formData: FormData): Observable<Argonaute> {
    return this.http.post<Argonaute>(environment.apiUrl, formData);
  }
  public putArgonaute(id: number, formData: FormData): Observable<Argonaute> {
    return this.http.put<Argonaute>(environment.apiUrl + id, formData);
  }
  public deleteArgonaute(id: number): Observable<Argonaute> {
    return this.http.delete<Argonaute>(environment.apiUrl + id);
  }
}
