import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurant: Restaurant[] = [];
  private apiUrl = 'http://localhost:1433/api/Restaurant';

  public constructor(private http: HttpClient) {}

  public getRestaurantsForGrid(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl);
  }

  public addRestaurants(
    name: string,
    address: string,
    phoneNumber: string
  ): Observable<boolean> {
    console.log(name, address, phoneNumber);
    return of(true);
  }

  public deleteRestaurants(restaurantsID: number[]): boolean {
    restaurantsID.forEach(id => {
      const url = `${this.apiUrl}/${id}`;
      this.http.delete(url).subscribe(() => console.log('success'));
    });
    return true;
  }
}
