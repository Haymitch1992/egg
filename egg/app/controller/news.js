'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    const msg = 'ejs';
    const list = [ '11', '22', '33' ];
    await this.ctx.render('news', {
      msg,
      list,
    });
  }
  async content() {
    // 获取传值
    const query = this.ctx.query;
    console.log(query);
    // 获取动态路由 ctx.parmas
    console.log(this.ctx.params);
    this.ctx.body = '详情';

  }
}

module.exports = NewsController;
