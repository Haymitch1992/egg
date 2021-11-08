'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async create(params) {
    // 主要获取新闻数据
    const { app } = this;
    try {
      const result = await app.mysql.insert('article', params);
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async lists() {
    const { app } = this;
    try {
      const result = await app.mysql.select('article');
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async detail(id) {
    const { app } = this;
    if (!id) {
      console.log('id必须传递');
      return null;
    }
    try {
      const result = await app.mysql.get('article', { id });
      return result;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

module.exports = ArticleService;
