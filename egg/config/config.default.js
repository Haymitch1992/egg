/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1634202645272_4502';

  // add your middleware config here
  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: 'root',
      // database
      database: 'egg_article',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // 配置末班引擎
  config.view = {
    mapping: {
      '.html': 'ejs',
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
