import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const user = req.user;
    // Print user data and token
    res.send(`
      <h1>Google Authentication Successful</h1>
      <p><b>User Info:</b></p>
      <pre>${JSON.stringify(user, null, 2)}</pre>
      <p><b>Token:</b> ${user.accessToken}</p>
    `);
  }
}