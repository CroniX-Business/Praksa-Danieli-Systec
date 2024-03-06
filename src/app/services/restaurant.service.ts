import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public constructor() {}
  private restaurants: Restaurant[] = [
    {
      name: 'Restaurant 1',
      phoneNumber: '123-456-7890',
      address: '123 Main St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 2',
      phoneNumber: '456-789-0123',
      address: '456 Elm St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 3',
      phoneNumber: '789-012-3456',
      address: '789 Oak St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 4',
      phoneNumber: '012-345-6789',
      address: '012 Maple St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 5',
      phoneNumber: '345-678-9012',
      address: '345 Pine St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 6',
      phoneNumber: '678-901-2345',
      address: '678 Cedar St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 7',
      phoneNumber: '901-234-5678',
      address: '901 Birch St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 8',
      phoneNumber: '234-567-8901',
      address: '234 Walnut St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 9',
      phoneNumber: '567-890-1234',
      address: '567 Spruce St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
    {
      name: 'Restaurant 10',
      phoneNumber: '890-123-4567',
      address: '890 Fir St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z'),
    },
  ];

  public getRestaurantsForGrid(): Restaurant[] {
    return this.restaurants;
  }
}
