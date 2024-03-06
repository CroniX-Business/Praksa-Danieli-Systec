import { Injectable } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  public constructor() {}
  public Restaurants = [
    {
      Name: 'Spon',
      Address: '123 Main Street',
      Phone_number: '555-2133',
      Created_date: '24/8/2002',
    },
    {
      Name: 'Gourmet Delight',
      Address: '456 Oak Avenue',
      Phone_number: '555-9876',
      Created_date: '15/4/2010',
    },
    {
      Name: 'The Hungry Panda',
      Address: '789 Elm Street',
      Phone_number: '555-4567',
      Created_date: '5/11/2015',
    },
    {
      Name: 'Taste of Italy',
      Address: '101 Vineyard Road',
      Phone_number: '555-1234',
      Created_date: '12/3/2005',
    },
    {
      Name: 'Burger Haven',
      Address: '246 Maple Avenue',
      Phone_number: '555-7890',
      Created_date: '8/9/2018',
    },
    {
      Name: 'Sushi Express',
      Address: '369 Pine Street',
      Phone_number: '555-2345',
      Created_date: '20/7/2012',
    },
    {
      Name: 'Mexican Fiesta',
      Address: '802 Cedar Avenue',
      Phone_number: '555-5678',
      Created_date: '3/6/2008',
    },
    {
      Name: 'Golden Wok',
      Address: '147 Willow Lane',
      Phone_number: '555-3456',
      Created_date: '18/10/2016',
    },
    {
      Name: 'Café Paris',
      Address: '513 Birch Street',
      Phone_number: '555-6789',
      Created_date: '9/2/2013',
    },
    {
      Name: 'Steakhouse Grill',
      Address: '932 Oakwood Drive',
      Phone_number: '555-4321',
      Created_date: '27/12/2007',
    },
    {
      Name: 'Thai Orchid',
      Address: '623 Maple Avenue',
      Phone_number: '555-8765',
      Created_date: '14/5/2011',
    },
    {
      Name: 'Mamma Mia Pizzeria',
      Address: '204 Cedar Lane',
      Phone_number: '555-7891',
      Created_date: '7/8/2004',
    },
    {
      Name: 'Fusion Bistro',
      Address: '409 Elm Street',
      Phone_number: '555-2341',
      Created_date: '22/9/2017',
    },
    {
      Name: 'Seafood Shack',
      Address: '718 Pine Avenue',
      Phone_number: '555-9876',
      Created_date: '11/11/2009',
    },
    {
      Name: 'Indian Spice',
      Address: '825 Birch Road',
      Phone_number: '555-3452',
      Created_date: '6/4/2014',
    },
    {
      Name: 'Crispy Chicken Coop',
      Address: '132 Cedar Avenue',
      Phone_number: '555-6783',
      Created_date: '28/2/2019',
    },
    {
      Name: 'Mediterranean Delight',
      Address: '315 Willow Lane',
      Phone_number: '555-1239',
      Created_date: '10/1/2006',
    },
    {
      Name: 'Vegetarian Haven',
      Address: '529 Oakwood Drive',
      Phone_number: '555-7895',
      Created_date: '2/7/2010',
    },
    {
      Name: 'Pasta Paradise',
      Address: '746 Pine Street',
      Phone_number: '555-2348',
      Created_date: '19/3/2015',
    },
    {
      Name: 'BBQ Junction',
      Address: '928 Maple Avenue',
      Phone_number: '555-5673',
      Created_date: '4/5/2008',
    },
  ];
  public getRestaurantsForGrid(): Restaurant[] {
    return this.Restaurants;
  }
}
