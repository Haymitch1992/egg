'use strict';

const Controller = require('egg').Controller;

class WangzhiweiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '<h1>hello world</h1>';
  }
}

module.exports = WangzhiweiController;
