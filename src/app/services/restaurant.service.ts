import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public constructor(private http: HttpClient) {}

  public apiUrl = 'https://localhost:7013/api/Restaurant';

  private restaurantsArray: Restaurant[] = [
    {
      id: 1,
      name: 'The Tasty Spoon',
      address: '123 Main Street, Cityville, State',
      phoneNumber: '555-1234',
      createdDate: '2022-03-15',
    },
    {
      id: 2,
      name: 'Savory Bites Cafe',
      address: '456 Elm Street, Townsville, State',
      phoneNumber: '555-5678',
      createdDate: '2022-05-20',
    },
    {
      id: 3,
      name: 'Gourmet Fusion',
      address: '789 Oak Avenue, Villageton, State',
      phoneNumber: '555-9876',
      createdDate: '2022-07-10',
    },
    {
      id: 4,
      name: 'Food Haven',
      address: '101 Pine Street, Metropolis, State',
      phoneNumber: '555-4567',
      createdDate: '2022-09-30',
    },
    {
      id: 5,
      name: 'Cuisine Junction',
      address: '202 Maple Avenue, Urban Springs, State',
      phoneNumber: '555-7890',
      createdDate: '2022-08-25',
    },
    {
      id: 6,
      name: 'Flavors Palace',
      address: '303 Cedar Street, Harbor City, State',
      phoneNumber: '555-3456',
      createdDate: '2022-07-10',
    },
    {
      id: 7,
      name: 'Taste Oasis',
      address: '404 Walnut Avenue, Oakwood, State',
      phoneNumber: '555-6543',
      createdDate: '2022-06-12',
    },
    {
      id: 8,
      name: 'Epicurean Delight',
      address: '505 Birch Street, Hillside, State',
      phoneNumber: '555-8901',
      createdDate: '2022-10-05',
    },
    {
      id: 9,
      name: 'Bistro Bliss',
      address: '606 Spruce Street, Riverside, State',
      phoneNumber: '555-2345',
      createdDate: '2022-11-15',
    },
    {
      id: 10,
      name: 'Sizzle & Spice',
      address: '707 Oakwood Drive, Meadowview, State',
      phoneNumber: '555-6789',
      createdDate: '2022-12-20',
    },
    {
      id: 11,
      name: 'Yummy Junction',
      address: '808 Pinecrest Road, Hillside, State',
      phoneNumber: '555-1234',
      createdDate: '2022-04-25',
    },
    {
      id: 12,
      name: 'Pantry Perfection',
      address: '909 Elm Street, Townsville, State',
      phoneNumber: '555-5678',
      createdDate: '2022-03-15',
    },
    {
      id: 13,
      name: 'Spice Island',
      address: '1010 Cedar Avenue, Cityville, State',
      phoneNumber: '555-9876',
      createdDate: '2022-02-10',
    },
    {
      id: 14,
      name: 'Taco Haven',
      address: '1111 Walnut Street, Villageton, State',
      phoneNumber: '555-2345',
      createdDate: '2022-01-05',
    },
    {
      id: 15,
      name: 'Burger Palace',
      address: '1212 Birch Road, Metropolis, State',
      phoneNumber: '555-6789',
      createdDate: '2022-09-30',
    },
    {
      id: 16,
      name: 'Pizza Paradise',
      address: '1313 Oakwood Drive, Urban Springs, State',
      phoneNumber: '555-1234',
      createdDate: '2022-08-25',
    },
    {
      id: 17,
      name: 'Noodle House',
      address: '1414 Pinecrest Road, Harbor City, State',
      phoneNumber: '555-5678',
      createdDate: '2022-07-10',
    },
    {
      id: 18,
      name: 'Sushi Spot',
      address: '1515 Elm Street, Oakwood, State',
      phoneNumber: '555-9876',
      createdDate: '2022-06-12',
    },
    {
      id: 19,
      name: 'BBQ Joint',
      address: '1616 Cedar Avenue, Hillside, State',
      phoneNumber: '555-2345',
      createdDate: '2022-05-05',
    },
  ];

  public getRestaurantsForGrid(): Observable<Array<Restaurant>> {
    return of(this.restaurantsArray);
  }

  public removeSelectedRestaurants(selectedItems: Array<number>): void {
    selectedItems.forEach(id => {
      const selectedRestaurantIndex = this.restaurantsArray.findIndex(
        restaurant => restaurant.id === id
      );

      this.removeRestaurant(selectedRestaurantIndex);
    });
  }

  public removeRestaurant(restaurantIndex: number): void {
    this.restaurantsArray.splice(restaurantIndex, 1);
  }

  public getRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.apiUrl);
  }
}
