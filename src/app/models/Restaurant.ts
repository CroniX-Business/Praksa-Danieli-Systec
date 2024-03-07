export class Restaurant {
  public RestoID: number;
  public Name: string;
  public Address: string;
  public Phone_number: string;
  public Created_date: string;

  private constructor(
    restoID: number,
    name: string,
    address: string,
    phone_number: string,
    created_date: string
  ) {
    this.RestoID = restoID;
    this.Name = name;
    this.Address = address;
    this.Phone_number = phone_number;
    this.Created_date = created_date;
  }
}
