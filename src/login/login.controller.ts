import { Controller, Get, Query, Post, Body, Res } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { resBody } from '../resBody';

@Controller('login')
export class LoginController {
    @Post()
    getName(@Body() req, @Res() res) {
        let { account, password }: {account: string, password: string} = req;
        if (account !== 'wangjianchao' || password !== '123456') {
            res.send(new resBody({code: 'error', message: '帐号或密码错误'}))
        }
        res.cookie('user', 'aaaa', { maxAge: 1000*60*30, httpOnly: true });
        res.send(new resBody({ data: req, message: '登录成功' }))
    }
}
