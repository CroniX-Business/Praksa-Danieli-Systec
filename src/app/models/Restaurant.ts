export class Restaurant {
  public id: number;
  public name: string;
  public location: string;
  public createdAt: string;

  public constructor(
    id: number,
    name: string,
    location: string,
    createdAt: string
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.createdAt = createdAt;
  }
}
