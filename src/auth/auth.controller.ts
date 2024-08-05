import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// @Controller()    /*  endpoint/   */
// @Controller({})
@Controller('auth') /*  endpoint/ -> endpoint/auth/  */
export class AuthController {
  //   authService: AuthService;
  //   constructor(authService: AuthService) {
  //     this.authService = authService;
  //   }
  constructor(private authService: AuthService) {
    //same above thing in short hand
  }

  /*  endpoint/auth/signup  */
  @Post('signup')
  signup() {
    // return 'Sign Up';
    // return { msg: 'Sign Up' };
    return this.authService.signup();
  }

  /*  endpoint/auth/signin  */
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}

/* The controller will need to call the service. So the controller will receive a request from the Internet. For instance, a post request asking to log in a user, right? And then it's going to call a function from the AuthService class and return its result back to to the client back to the browser. But to do so, AuthController will have to instantiate a AuthService class, right? Because in the end, it's javascript. */
