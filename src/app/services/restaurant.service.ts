import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  private restaurants = [
    { id: 1, name: 'restaurant1', location: 'here', createdAt: 'now' },
    { id: 2, name: 'restaurant2', location: 'there', createdAt: 'later' },
    { id: 3, name: 'restaurant3', location: 'over there', createdAt: 'then' },
    { id: 4, name: 'restaurant4', location: 'here', createdAt: 'now' },
    { id: 5, name: 'restaurant5', location: 'Osijek', createdAt: 'now' },
    { id: 6, name: 'restaurant6', location: 'Slatina', createdAt: 'now' },
  ];
  public getRestaurants(): Restaurant[] {
    return this.restaurants;
  }
  public constructor() {}
}
