create database egg_article;

use egg_article;

create table article(
  id int(10) not null auto_increment,
  img text default null comment '缩略图',
  title varchar(80) default null comment '文章标题',
  summary varchar(300) default null comment '文章简介',
  createTime timestamp default null comment '发布时间',
  content text default null comment '文章内容',
  primary key(id)
)engine = InnoDB AUTO_INCREMENT =1 comment '文章表';

insert into article (img,title,summary ,content,createTime) values('变成必备知识','https://www.baidu.com','简介','内容','2021-11-04 11:11:11');