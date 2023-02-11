import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Product } from '../types/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public fetchProduits(): Observable<Array<Product>>{
    return this.http.get("assets/data.json") as unknown as Observable<Array<Product>> 
  }
}
