import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return 'Sign In';
  }
  signup() {
    return 'Sign Up';
  }
}
