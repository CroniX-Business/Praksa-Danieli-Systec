import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Restaurant } from '../models/restaurant';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public constructor() {}
  public restaurants: Array<Restaurant> = [
    {
      id: 1,
      name: 'Restaurant 1',
      phoneNumber: '123-456-7890',
      address: '123 Main St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 2,
      name: 'Restaurant 2',
      phoneNumber: '456-789-0123',
      address: '456 Elm St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 3,
      name: 'Restaurant 3',
      phoneNumber: '789-012-3456',
      address: '789 Oak St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 4,
      name: 'Restaurant 4',
      phoneNumber: '012-345-6789',
      address: '012 Maple St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 5,
      name: 'Restaurant 5',
      phoneNumber: '345-678-9012',
      address: '345 Pine St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 6,
      name: 'Restaurant 6',
      phoneNumber: '678-901-2345',
      address: '678 Cedar St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 7,
      name: 'Restaurant 7',
      phoneNumber: '901-234-5678',
      address: '901 Birch St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 8,
      name: 'Restaurant 8',
      phoneNumber: '234-567-8901',
      address: '234 Walnut St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 9,
      name: 'Restaurant 9',
      phoneNumber: '567-890-1234',
      address: '567 Spruce St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 10,
      name: 'Restaurant 10',
      phoneNumber: '890-123-4567',
      address: '890 Fir St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 11,
      name: 'Restaurant 11',
      phoneNumber: '123-456-7890',
      address: '123 Main St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 12,
      name: 'Restaurant 12',
      phoneNumber: '456-789-0123',
      address: '456 Elm St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 13,
      name: 'Restaurant 13',
      phoneNumber: '789-012-3456',
      address: '789 Oak St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 14,
      name: 'Restaurant 14',
      phoneNumber: '012-345-6789',
      address: '012 Maple St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 15,
      name: 'Restaurant 15',
      phoneNumber: '345-678-9012',
      address: '345 Pine St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 16,
      name: 'Restaurant 16',
      phoneNumber: '678-901-2345',
      address: '678 Cedar St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 17,
      name: 'Restaurant 17',
      phoneNumber: '901-234-5678',
      address: '901 Birch St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 18,
      name: 'Restaurant 18',
      phoneNumber: '234-567-8901',
      address: '234 Walnut St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 19,
      name: 'Restaurant 19',
      phoneNumber: '567-890-1234',
      address: '567 Spruce St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 20,
      name: 'Restaurant 20',
      phoneNumber: '890-123-4567',
      address: '890 Fir St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 21,
      name: 'Restaurant 21',
      phoneNumber: '123-456-7890',
      address: '123 Main St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 22,
      name: 'Restaurant 22',
      phoneNumber: '456-789-0123',
      address: '456 Elm St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 23,
      name: 'Restaurant 23',
      phoneNumber: '789-012-3456',
      address: '789 Oak St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 24,
      name: 'Restaurant 24',
      phoneNumber: '012-345-6789',
      address: '012 Maple St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 25,
      name: 'Restaurant 25',
      phoneNumber: '345-678-9012',
      address: '345 Pine St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 26,
      name: 'Restaurant 26',
      phoneNumber: '678-901-2345',
      address: '678 Cedar St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 27,
      name: 'Restaurant 27',
      phoneNumber: '901-234-5678',
      address: '901 Birch St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 28,
      name: 'Restaurant 28',
      phoneNumber: '234-567-8901',
      address: '234 Walnut St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 29,
      name: 'Restaurant 29',
      phoneNumber: '567-890-1234',
      address: '567 Spruce St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
    {
      id: 30,
      name: 'Restaurant 30',
      phoneNumber: '890-123-4567',
      address: '890 Fir St, City, Country',
      createdAt: new Date('2024-03-05T08:00:00Z').toLocaleTimeString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    },
  ];

  public getRestaurantsForGrid(): Observable<Array<Restaurant>> {
    return of(this.restaurants);
  }

  public removeRestaurants(selectedItems: Array<number>): void {
    selectedItems.forEach(id => {
      const index = this.restaurants.findIndex(
        restaurant => restaurant.id === id
      );
      this.removeRestaurantByIndex(index);
    });
  }

  private removeRestaurantByIndex(index: number): void {
    if (index !== -1) {
      this.restaurants.splice(index, 1);
    }
  }
}
