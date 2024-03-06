export class Restaurant {
  public name: string;
  public address: string;
  public phoneNumber: string;
  public createdAt: string;

  private constructor(
    name: string,
    address: string,
    phoneNumber: string,
    createdAt: string
  ) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.createdAt = createdAt;
  }
}
