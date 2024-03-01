import moment from 'moment';

export class JwtPayload {
  public expires_at: number;
  public expireTime: number = moment().unix();

  public constructor(expires_at: number) {
    this.expires_at = expires_at;
  }
}
