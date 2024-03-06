import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public constructor() {}

  private restaurantsArray: Restaurant[] = [
    {
      name: 'The Tasty Spoon',
      address: '123 Main Street, Cityville, State',
      phoneNumber: '555-1234',
      createdDate: '2022-03-15',
    },
    {
      name: 'Savory Bites Cafe',
      address: '456 Elm Street, Townsville, State',
      phoneNumber: '555-5678',
      createdDate: '2022-05-20',
    },
    {
      name: 'Gourmet Fusion',
      address: '789 Oak Avenue, Villageton, State',
      phoneNumber: '555-9876',
      createdDate: '2022-07-10',
    },
    {
      name: 'Food Haven',
      address: '101 Pine Street, Metropolis, State',
      phoneNumber: '555-4567',
      createdDate: '2022-09-30',
    },
    {
      name: 'Cuisine Junction',
      address: '202 Maple Avenue, Urban Springs, State',
      phoneNumber: '555-7890',
      createdDate: '2022-08-25',
    },
    {
      name: 'Flavors Palace',
      address: '303 Cedar Street, Harbor City, State',
      phoneNumber: '555-3456',
      createdDate: '2022-07-10',
    },
    {
      name: 'Taste Oasis',
      address: '404 Walnut Avenue, Oakwood, State',
      phoneNumber: '555-6543',
      createdDate: '2022-06-12',
    },
    {
      name: 'Epicurean Delight',
      address: '505 Birch Street, Hillside, State',
      phoneNumber: '555-8901',
      createdDate: '2022-10-05',
    },
    {
      name: 'Bistro Bliss',
      address: '606 Spruce Street, Riverside, State',
      phoneNumber: '555-2345',
      createdDate: '2022-11-15',
    },
    {
      name: 'Sizzle & Spice',
      address: '707 Oakwood Drive, Meadowview, State',
      phoneNumber: '555-6789',
      createdDate: '2022-12-20',
    },
    {
      name: 'Yummy Junction',
      address: '808 Pinecrest Road, Hillside, State',
      phoneNumber: '555-1234',
      createdDate: '2022-04-25',
    },
    {
      name: 'Pantry Perfection',
      address: '909 Elm Street, Townsville, State',
      phoneNumber: '555-5678',
      createdDate: '2022-03-15',
    },
    {
      name: 'Spice Island',
      address: '1010 Cedar Avenue, Cityville, State',
      phoneNumber: '555-9876',
      createdDate: '2022-02-10',
    },
    {
      name: 'Taco Haven',
      address: '1111 Walnut Street, Villageton, State',
      phoneNumber: '555-2345',
      createdDate: '2022-01-05',
    },
    {
      name: 'Burger Palace',
      address: '1212 Birch Road, Metropolis, State',
      phoneNumber: '555-6789',
      createdDate: '2022-09-30',
    },
    {
      name: 'Pizza Paradise',
      address: '1313 Oakwood Drive, Urban Springs, State',
      phoneNumber: '555-1234',
      createdDate: '2022-08-25',
    },
    {
      name: 'Noodle House',
      address: '1414 Pinecrest Road, Harbor City, State',
      phoneNumber: '555-5678',
      createdDate: '2022-07-10',
    },
    {
      name: 'Sushi Spot',
      address: '1515 Elm Street, Oakwood, State',
      phoneNumber: '555-9876',
      createdDate: '2022-06-12',
    },
    {
      name: 'BBQ Joint',
      address: '1616 Cedar Avenue, Hillside, State',
      phoneNumber: '555-2345',
      createdDate: '2022-05-05',
    },
    {
      name: 'Diner Delight',
      address: '1717 Walnut Street, Riverside, State',
      phoneNumber: '555-6789',
      createdDate: '2022-04-20',
    },
  ];

  public getRestaurantsForGrid(): Restaurant[] {
    return this.restaurantsArray;
  }
}
