import { Controller, Get, Delete, Res, Post, Req } from '@nestjs/common';
import { resBody } from '../resBody';

@Controller('session')
export class SessionController {

    @Get('info')
    getSessionInfo(@Req() req) {
        if (!req.cookies.user) {
            return new resBody({ code: 'no-login', message: '用户未登录'});
        }
        return new resBody({ data: 'aaaa' });
    }

    @Delete('logout')
    logout(@Res() res) {
        res.clearCookie('user');
        res.send(new resBody({ message: '登出成功' }));
    }
}
