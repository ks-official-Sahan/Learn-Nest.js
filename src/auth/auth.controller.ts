import { Body, Controller, ParseIntPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDTO } from './dto';

// Controller files are here to handle the request data, endpoints and routes

@Controller('auth') /*  endpoint/ -> endpoint/auth/  */
export class AuthController {
  /* authService: AuthService;
    constructor(authService: AuthService) {
      this.authService = authService;
    } */
  constructor(private authService: AuthService) {} // same above thing in short hand

  /*  endpoint/auth/signin  */
  @Post('signin')
  signin(@Body() dto: AuthDTO) {
    return this.authService.signin(dto);
  }

  /*  endpoint/auth/signup  */
  @Post('signup')
  // signup(@Req() req: Request) {  // Not good practice
  // signup(@Body('email') email: string, @Body('password', ParseIntPipe) password: string) {   // Using pipes will prevent server from crashing due to incompatible data. // but we can do the same Pipe implementation through DTO via class validator
  signup(@Body() dto: AuthDTO) {
    return this.authService.signup(dto);
  }
}

/* The controller will need to call the service. So the controller will receive a request from the Internet. For instance, a post request asking to log in a user, right? And then it's going to call a function from the AuthService class and return its result back to to the client back to the browser. But to do so, AuthController will have to instantiate a AuthService class, right? Because in the end, it's javascript. */
/* DTO -> Data Transfer Object */
