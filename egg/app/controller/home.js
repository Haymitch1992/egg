'use strict';

const Controller = require('egg').Controller;

// egg 是一个mvc的框架

// view 视图模板 页面的展示
// Controller 负责业务逻辑
// model 模型：和数据打交道 请求数据

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // 调用服务里的方法
    const res = await app.mysql.select('article');
    console.log(res);
    ctx.body = {
      csrf: ctx.csrf,
    };
    // await this.ctx.render('index')
  }
  async wzw54180() {
    const { ctx } = this;
    console.log(this);


    ctx.body = 'hello world 456';
  }
}

module.exports = HomeController;
