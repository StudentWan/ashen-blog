# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.6.35)
# Database: ashen_db
# Generation Time: 2018-01-03 13:21:50 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table ABOUT
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ABOUT`;

CREATE TABLE `ABOUT` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `content` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ABOUT` WRITE;
/*!40000 ALTER TABLE `ABOUT` DISABLE KEYS */;

INSERT INTO `ABOUT` (`id`, `content`)
VALUES
	(1,'* 独立之精神\n* 自由之思想');

/*!40000 ALTER TABLE `ABOUT` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table ARTICLE
# ------------------------------------------------------------

DROP TABLE IF EXISTS `ARTICLE`;

CREATE TABLE `ARTICLE` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT '',
  `tags` varchar(255) DEFAULT '',
  `createTime` datetime NOT NULL,
  `publishTime` datetime NOT NULL,
  `content` longtext NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `ARTICLE` WRITE;
/*!40000 ALTER TABLE `ARTICLE` DISABLE KEYS */;

INSERT INTO `ARTICLE` (`id`, `title`, `tags`, `createTime`, `publishTime`, `content`, `isPublished`)
VALUES
	(220,'欢迎来到Ashen Blog!','Blog','2018-01-02 16:05:45','2018-01-02 16:07:26','Enjoy ur self here!\n\n<!-- more -->\n\n```js\nconsole.log(\'Hello World!\')\n```',1);

/*!40000 ALTER TABLE `ARTICLE` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table RD_LIST
# ------------------------------------------------------------

DROP TABLE IF EXISTS `RD_LIST`;

CREATE TABLE `RD_LIST` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `author` varchar(255) NOT NULL DEFAULT '',
  `score` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `RD_LIST` WRITE;
/*!40000 ALTER TABLE `RD_LIST` DISABLE KEYS */;

INSERT INTO `RD_LIST` (`id`, `name`, `author`, `score`)
VALUES
	(4,'哈利·波特','J.K.罗琳',5);

/*!40000 ALTER TABLE `RD_LIST` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table USER
# ------------------------------------------------------------

DROP TABLE IF EXISTS `USER`;

CREATE TABLE `USER` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `USER` WRITE;
/*!40000 ALTER TABLE `USER` DISABLE KEYS */;

INSERT INTO `USER` (`id`, `user`, `password`)
VALUES
	(1,'admin','e5d2a815230449badccf00bc67436696');

/*!40000 ALTER TABLE `USER` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
