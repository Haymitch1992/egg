'use strict';

const Service = require('egg').Service;

class NewsService extends Service {
  async getNewList() {
    // 主要获取新闻数据
    const list = [ 11, 22, 33 ];
    return list;
  }
}

module.exports = NewsService;
