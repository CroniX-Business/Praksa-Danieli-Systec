export class JwtPayload {
  public expires_at = 1000;

  public constructor(expires_at: number) {
    this.expires_at = expires_at;
  }
}
