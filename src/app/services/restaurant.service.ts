import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public constructor() {}

  public Restaurants = [
    {
      name: 'Chai',
      address: 'Trg Prosvjete',
      phoneNumber: '0984237341',
      createdAt: '03-05-2018',
    },
    {
      name: 'Soho',
      address: 'Kralja Dmitra Zvonimira 12',
      phoneNumber: '0912341246',
      createdAt: '02-01-2017',
    },
    {
      name: 'La Piazza',
      address: 'Maksimirska 21',
      phoneNumber: '0987654321',
      createdAt: '06-10-2019',
    },
    {
      name: 'Burger Palace',
      address: 'Ilica 75',
      phoneNumber: '0956781234',
      createdAt: '12-03-2020',
    },
    {
      name: 'Pasta Paradiso',
      address: 'Frankopanska 15',
      phoneNumber: '0912345678',
      createdAt: '08-20-2017',
    },
    {
      name: 'Sushi Heaven',
      address: 'Vlaška 12',
      phoneNumber: '0923456789',
      createdAt: '04-14-2021',
    },
    {
      name: 'Mediterranean Delight',
      address: 'Ribnjak 4',
      phoneNumber: '0998765432',
      createdAt: '10-30-2018',
    },
    {
      name: 'Taco Fiesta',
      address: 'Masarykova 9',
      phoneNumber: '0976543210',
      createdAt: '07-05-2022',
    },
    {
      name: 'Steak House',
      address: 'Bogovićeva 3',
      phoneNumber: '0943216789',
      createdAt: '11-11-2019',
    },
    {
      name: 'Café Bistro',
      address: 'Ilica 32',
      phoneNumber: '0965432178',
      createdAt: '09-02-2020',
    },
    {
      name: 'Thai Orchid',
      address: 'Trg bana Jelačića 8',
      phoneNumber: '0987654321',
      createdAt: '05-15-2017',
    },
    {
      name: 'Pizza Italia',
      address: 'Jurjevska 24',
      phoneNumber: '0912345678',
      createdAt: '03-01-2021',
    },
    {
      name: 'Fusion Grill',
      address: 'Ribnjak 15',
      phoneNumber: '0923456789',
      createdAt: '08-22-2018',
    },
    {
      name: 'Seafood Sensation',
      address: 'Preradovićeva 7',
      phoneNumber: '0998765432',
      createdAt: '02-12-2022',
    },
    {
      name: 'Vegetarian Delight',
      address: 'Tkalčićeva 18',
      phoneNumber: '0976543210',
      createdAt: '10-25-2019',
    },
    {
      name: 'Indian Spice',
      address: 'Vlaška 30',
      phoneNumber: '0943216789',
      createdAt: '06-07-2020',
    },
    {
      name: 'Mediterranean Fusion',
      address: 'Ilica 55',
      phoneNumber: '0965432178',
      createdAt: '11-03-2017',
    },
    {
      name: 'Ramen House',
      address: 'Preradovićeva 12',
      phoneNumber: '0987654321',
      createdAt: '04-18-2021',
    },
    {
      name: 'Bakery Delights',
      address: 'Opatička 8',
      phoneNumber: '0912345678',
      createdAt: '09-09-2018',
    },
    {
      name: 'Barbecue Bliss',
      address: 'Vlaška 45',
      phoneNumber: '0923456789',
      createdAt: '01-14-2023',
    },
  ];

  public getRestaurantsForGrid(): Restaurant[] {
    return this.Restaurants;
  }
}
