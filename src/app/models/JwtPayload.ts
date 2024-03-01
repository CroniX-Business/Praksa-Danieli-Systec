import moment from 'moment';

export class JwtPayload {
  public exp: number;
  private currentTime: number;
  public constructor() {
    this.currentTime = moment().unix();
    this.exp = this.currentTime + 600;
  }
}
