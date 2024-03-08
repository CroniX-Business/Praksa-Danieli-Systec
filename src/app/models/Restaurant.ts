export class Restaurant {
  public address: string;
  public createdDate: string;
  public id: number;
  public isActive: boolean;
  public modifiedDate: string;
  public name: string;
  public phoneNumber: string;

  private constructor(
    address: string,
    createdDate: string,
    id: number,
    isActive: boolean,
    modifiedDate: string,
    name: string,
    phoneNumber: string
  ) {
    this.address = address;
    this.createdDate = createdDate;
    this.id = id;
    this.isActive = isActive;
    this.modifiedDate = modifiedDate;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
}
