import { DraganAuthService } from '../services/dragan_auth.service';
const authservis = new DraganAuthService();
export const loginGuard = (): boolean => {
  return authservis.hasTokenExpired();
};
