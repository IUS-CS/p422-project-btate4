import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Course {
  section: string;
  title: string;
  description: string;
  gradingScale: string[];
  calendar: string[];
  bookInfo: string;
  meetingTime: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient
  ) {
  }

  private url = '/v1/classes';

  public getCourse(name: string): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${name}`);
  }

  public getCourseNames(): Observable<string[]> {
    return this.http.get<string[]>(this.url);
  }
}
