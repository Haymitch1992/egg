'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/wzw54180', controller.home.wzw54180);
  router.get('/news', controller.news.index);
  router.get('/newsContent/:id', controller.news.content);
  router.post('/article/create', controller.article.create);
  router.get('/article/lists', controller.article.lists);
  router.get('/article/detail/:id', controller.article.detail);
};
