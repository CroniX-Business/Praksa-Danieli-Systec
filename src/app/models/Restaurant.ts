export class Restaurant {
  public restaurantId: number;
  public name: string;
  public address: string;
  public phoneNumber: string;
  public createdAt: string;

  private constructor(
    restaurantId: number,
    name: string,
    address: string,
    phoneNumber: string,
    createdAt: string
  ) {
    this.restaurantId = restaurantId;
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.createdAt = createdAt;
  }
}
