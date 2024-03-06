export class Restaurant {
  public restaurantID: number;
  public name: string;
  public address: string;
  public phoneNumber: string;
  public createdAt: string;

  private constructor(
    restaurantID: number,
    name: string,
    address: string,
    phoneNumber: string,
    createdAt: string
  ) {
    this.restaurantID = restaurantID;
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.createdAt = createdAt;
  }
}
