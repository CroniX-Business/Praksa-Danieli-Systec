import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public constructor() {}

  private Restaurants: Restaurant[] = [
    {
      restaurantId: 1,
      name: 'Chai',
      address: 'Trg Prosvjete',
      phoneNumber: '0984237341',
      createdAt: '03-05-2018',
    },
    {
      restaurantId: 2,
      name: 'Soho',
      address: 'Kralja Dmitra Zvonimira 12',
      phoneNumber: '0912341246',
      createdAt: '02-01-2017',
    },
    {
      restaurantId: 3,
      name: 'La Piazza',
      address: 'Maksimirska 21',
      phoneNumber: '0987654321',
      createdAt: '06-10-2019',
    },
    {
      restaurantId: 4,
      name: 'Burger Palace',
      address: 'Ilica 75',
      phoneNumber: '0956781234',
      createdAt: '12-03-2020',
    },
    {
      restaurantId: 5,
      name: 'Pasta Paradiso',
      address: 'Frankopanska 15',
      phoneNumber: '0912345678',
      createdAt: '08-20-2017',
    },
    {
      restaurantId: 6,
      name: 'Sushi Heaven',
      address: 'Vlaška 12',
      phoneNumber: '0923456789',
      createdAt: '04-14-2021',
    },
    {
      restaurantId: 7,
      name: 'Mediterranean Delight',
      address: 'Ribnjak 4',
      phoneNumber: '0998765432',
      createdAt: '10-30-2018',
    },
    {
      restaurantId: 8,
      name: 'Taco Fiesta',
      address: 'Masarykova 9',
      phoneNumber: '0976543210',
      createdAt: '07-05-2022',
    },
    {
      restaurantId: 9,
      name: 'Steak House',
      address: 'Bogovićeva 3',
      phoneNumber: '0943216789',
      createdAt: '11-11-2019',
    },
    {
      restaurantId: 10,
      name: 'Café Bistro',
      address: 'Ilica 32',
      phoneNumber: '0965432178',
      createdAt: '09-02-2020',
    },
    {
      restaurantId: 11,
      name: 'Thai Orchid',
      address: 'Trg bana Jelačića 8',
      phoneNumber: '0987654321',
      createdAt: '05-15-2017',
    },
    {
      restaurantId: 12,
      name: 'Pizza Italia',
      address: 'Jurjevska 24',
      phoneNumber: '0912345678',
      createdAt: '03-01-2021',
    },
    {
      restaurantId: 13,
      name: 'Fusion Grill',
      address: 'Ribnjak 15',
      phoneNumber: '0923456789',
      createdAt: '08-22-2018',
    },
    {
      restaurantId: 14,
      name: 'Seafood Sensation',
      address: 'Preradovićeva 7',
      phoneNumber: '0998765432',
      createdAt: '02-12-2022',
    },
    {
      restaurantId: 15,
      name: 'Vegetarian Delight',
      address: 'Tkalčićeva 18',
      phoneNumber: '0976543210',
      createdAt: '10-25-2019',
    },
    {
      restaurantId: 16,
      name: 'Indian Spice',
      address: 'Vlaška 30',
      phoneNumber: '0943216789',
      createdAt: '06-07-2020',
    },
    {
      restaurantId: 17,
      name: 'Mediterranean Fusion',
      address: 'Ilica 55',
      phoneNumber: '0965432178',
      createdAt: '11-03-2017',
    },
    {
      restaurantId: 18,
      name: 'Ramen House',
      address: 'Preradovićeva 12',
      phoneNumber: '0987654321',
      createdAt: '04-18-2021',
    },
    {
      restaurantId: 19,
      name: 'Bakery Delights',
      address: 'Opatička 8',
      phoneNumber: '0912345678',
      createdAt: '09-09-2018',
    },
    {
      restaurantId: 20,
      name: 'Barbecue Bliss',
      address: 'Vlaška 45',
      phoneNumber: '0923456789',
      createdAt: '01-14-2023',
    },
  ];

  public getRestaurantsForGrid(): Observable<Array<Restaurant>> {
    return of(this.Restaurants);
  }

  public addRestaurants(
    name: string,
    address: string,
    phoneNumber: string
  ): Observable<boolean> {
    console.log(name, address, phoneNumber);
    const obj = {
      restaurantId: 21,
      name: name,
      address: address,
      phoneNumber: phoneNumber,
      createdAt: '01-14-2023',
    };

    this.Restaurants.push(obj);
    return of(true);
  }

  public deleteRestaurants(restaurantsID: number[]): void {
    restaurantsID.forEach(id => {
      const index = this.Restaurants.findIndex(row => row.restaurantId === id);
      this.Restaurants.splice(index, 1);
    });
  }
}
