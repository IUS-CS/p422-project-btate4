import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export enum ViewStatus {
    TOPS,
    BOTTOMS,
    SHOES,
    ACCESSORIES
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) {
  }

}
