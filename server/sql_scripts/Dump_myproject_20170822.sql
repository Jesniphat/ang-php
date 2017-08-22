CREATE DATABASE  IF NOT EXISTS `project_jphp` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `project_jphp`;
-- MySQL dump 10.13  Distrib 5.7.19, for Linux (x86_64)
--
-- Host: 13.59.164.106    Database: project_jphp
-- ------------------------------------------------------
-- Server version	5.5.5-10.2.7-MariaDB-10.2.7+maria~jessie

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cate_name` varchar(50) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `cate_description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `product_qty` int(11) DEFAULT NULL,
  `cover_pic` longblob DEFAULT NULL,
  `status` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `uuid` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Index 2` (`uuid`(100))
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (10,'กบยาง','กบยางหลากสีสวยงาม ราคาไม่แพง',NULL,NULL,'Y','de4c9c17-3fb7-11e7-93f0-1867b02605c0','2017-05-23 20:00:59',1,'2017-08-08 00:36:44',1),(11,'กบไม้','ประกันคุณภาพ',NULL,NULL,'Y','e85b1465-3fb7-11e7-93f0-1867b02605c0','2017-05-23 20:01:16',1,'2017-08-08 00:36:27',1),(12,'กุ้งเครฟิส','สวยงาม',NULL,NULL,'Y','13c79714-3fb8-11e7-93f0-1867b02605c0','2017-05-23 20:02:29',1,'2017-08-08 00:36:10',1),(14,'กบยาง','กบยางหลากสีสวยงาม',NULL,NULL,'N','51a59b10-6fb9-11e7-ad4d-65dab3ed2e8e','2017-07-23 22:12:19',6,'2017-07-28 21:36:39',6),(17,'กบยาง','กบยางหลากสีสวยงาม',NULL,NULL,'N','4d39fc30-6fbc-11e7-8b0d-f5968dc83e42','2017-07-23 22:33:40',6,'2017-07-28 21:36:47',6),(18,'กบยาง','กบยางหลากสีสวยงาม',NULL,NULL,'N','8c25ed00-6fbc-11e7-a947-9da2a7df8dd3','2017-07-23 22:35:26',6,'2017-07-28 21:36:55',6),(19,'Add','Test add thing.',NULL,NULL,'N','aa657270-73a6-11e7-8b62-a168f34df154','2017-07-28 22:08:53',6,'2017-07-28 22:16:35',6),(20,'sdfsdf','adfhd',NULL,NULL,'N','c1ae5770-7519-11e7-bae3-ef8a17148837','2017-07-30 18:25:15',6,'2017-07-30 18:28:02',6),(21,'New','NNNN',NULL,NULL,'N','2c83bcc0-751a-11e7-aded-e522e961d098','2017-07-30 18:28:14',6,'2017-07-30 23:08:20',6),(22,'sssf','hhhhh',NULL,NULL,'N','fd0963e0-751a-11e7-912c-0debcf43323c','2017-07-30 18:34:04',6,'2017-07-30 23:13:40',6),(24,'sdfsdfsdfasdfasdaKKKKK','JJJJJJJJJJJJJJJ',NULL,NULL,'N','ac7a1b20-7526-11e7-8b2b-1d14fd0e6b7d','2017-07-30 19:57:42',6,'2017-07-30 23:13:48',6),(27,'Find','Finddddddd',NULL,NULL,'N','453735f0-7527-11e7-93d3-9197e8e90232','2017-07-30 20:01:58',6,'2017-07-30 23:13:57',6),(28,'Ert','ss',NULL,NULL,'N','238d9640-7529-11e7-887c-8d92e0e0f9ba','2017-07-30 20:15:21',6,'2017-07-30 23:14:07',6),(30,'ssssssfdfsdfasd','hefhdfgdsfg',NULL,NULL,'N','8fdc0700-7529-11e7-aa64-a35996dfd05f','2017-07-30 20:18:22',6,'2017-07-30 23:14:18',6),(31,'gg','ssssssssssss',NULL,NULL,'N','c4a37cc0-7533-11e7-b164-c949bc7106e1','2017-07-30 21:31:26',6,'2017-07-30 23:14:28',6),(33,'OIP','sdf',NULL,NULL,'N','dd0745c0-7534-11e7-8d01-935a38a8f76c','2017-07-30 21:39:16',6,'2017-07-30 23:14:38',6),(34,'GGGoP','ffg',NULL,NULL,'N','0602e920-7535-11e7-a626-8523d89c2f33','2017-07-30 21:40:25',6,'2017-07-30 23:14:47',6),(35,'Committed','Test',NULL,NULL,'N','1a6a1e30-7538-11e7-8bb5-99e4ef124b64','2017-07-30 22:02:28',6,'2017-07-30 23:14:55',6),(36,'ddd_fg','fg_nmo',NULL,NULL,'N','94cb1270-7541-11e7-8097-e77738f00ee3','2017-07-30 23:10:18',6,'2017-07-30 23:15:07',6),(37,'New','Test 2',NULL,NULL,'N','46178f90-7542-11e7-af27-e5bb39ebd820','2017-07-30 23:15:16',6,'2017-07-30 23:15:34',6),(39,'เรียบร้อย','โรงเรียนไทย',NULL,NULL,'N','b42cdda0-7542-11e7-a23e-abf998c27472','2017-07-30 23:18:21',6,'2017-07-30 23:18:31',6),(40,'ทดสอบ','ลองดู',NULL,NULL,'N','60160660-7b91-11e7-8f01-7fe0bd5dcd06','2017-08-07 23:56:37',6,'2017-08-08 00:30:06',6),(41,'sssss','df',NULL,NULL,'N','d9fa1bc0-7b95-11e7-8f01-7fe0bd5dcd06','2017-08-08 00:28:39',6,'2017-08-08 00:29:24',6),(42,'sfsfsdf','asdfd',NULL,NULL,'Y','f706e450-7b9f-11e7-b8f4-677e2b75e421','2017-08-08 01:41:03',6,'2017-08-08 01:41:03',6),(43,'sdfsdfsdf','s',NULL,NULL,'Y','faed4640-7b9f-11e7-b8f4-677e2b75e421','2017-08-08 01:41:09',6,'2017-08-08 01:41:09',6),(44,'gggwetetetete','',NULL,NULL,'Y','fe0868f0-7b9f-11e7-b8f4-677e2b75e421','2017-08-08 01:41:15',6,'2017-08-08 01:41:15',6),(45,'ggrryryryr','',NULL,NULL,'Y','017ccf30-7ba0-11e7-b8f4-677e2b75e421','2017-08-08 01:41:20',6,'2017-08-08 01:41:20',6),(46,'opopopopo','',NULL,NULL,'N','04c654e0-7ba0-11e7-b8f4-677e2b75e421','2017-08-08 01:41:26',6,'2017-08-22 09:55:34',6),(47,'77798987','',NULL,NULL,'N','085b8990-7ba0-11e7-b8f4-677e2b75e421','2017-08-08 01:41:32',6,'2017-08-08 17:43:34',6),(48,'eeeu','',NULL,NULL,'N','0badc1d0-7ba0-11e7-b8f4-677e2b75e421','2017-08-08 01:41:38',6,'2017-08-08 11:44:17',6),(49,'iiuiui','',NULL,NULL,'N','0eb50e60-7ba0-11e7-b8f4-677e2b75e421','2017-08-08 01:41:43',6,'2017-08-08 11:37:23',6),(50,'lop','',NULL,NULL,'N','36a8deb0-7ba0-11e7-b8f4-677e2b75e421','2017-08-08 01:42:50',6,'2017-08-08 11:37:06',6);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `order` (
  `id` int(11) NOT NULL,
  `cname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `clastname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `addr` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `district` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `subdistrict` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `province` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `postcode` int(11) DEFAULT NULL,
  `cphone` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cemail` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `totalprice` double DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL DEFAULT 1,
  `code` varchar(10) COLLATE utf8_unicode_ci NOT NULL DEFAULT 'P0001',
  `product_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `product_description` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `status` enum('Y','N') CHARACTER SET utf8 NOT NULL DEFAULT 'Y',
  `product_price` double NOT NULL DEFAULT 0,
  `product_qty` bigint(20) NOT NULL DEFAULT 0,
  `recommend` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `rec_row` int(11) NOT NULL DEFAULT 0,
  `uuid` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_date` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) NOT NULL DEFAULT 0,
  `updated_date` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Index 2` (`uuid`(100),`code`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (26,11,'P00001','กบยางลายจุด','กบยางลายจุดรับรองคุณภาพ เรามีรีวิวสินค้ามากมาย ผลิตจากยางคุณภาพ ราคาไม่แพง \nกบลายนี้ล่อเหยื่อที่มีขนาดใหญ่ได้เป็นอย่างดี\nไม่พอใจเราไม่คืนเงินเพราะเราจน\nซื้อแล้วซื้อเลยไม่รับคืนครับผม ^^','Y',80,150,'Y',2,'d7031921-3fbb-11e7-93f0-1867b02605c0','2017-05-23 20:29:25',6,'2017-08-15 17:06:58',6),(27,10,'P00002','กบสาดเลือด','กบลายสาดเลือด\nลายนี้หายากครับ\nทำยากแต่รับรองคุณภาพครับผม ^^','Y',80,100,'N',0,'9b99aab2-3fc1-11e7-93f0-1867b02605c0','2017-05-23 21:10:42',1,'2017-08-05 21:42:09',6),(28,10,'P00003','กบแก้คัน','กบทรงแก้คัน สีสันสวยงาม\nใช้งานได้ดี ยางมีคุณภาพไม่ขาดง่าย\nราคาเป็นมิตร','Y',80,100,'N',0,'7623fcd3-3fc2-11e7-93f0-1867b02605c0','2017-05-23 21:16:49',1,'2017-08-04 17:12:50',6),(29,10,'P00004','กบวัดกระจาย','สินค้าตัวใหม่สวยสดใส่ต้องลอง รับประกันคุณภาพ ราคาไม่แพง ได้ปลาตัวใหญ่แน่นอน ครับผม','Y',80,150,'N',0,'a03d3660-3fc2-11e7-93f0-1867b02605c0','2017-05-23 21:18:00',1,'2017-06-22 08:29:05',6),(35,10,'P00005','กบไม้ตัวแรก','ตัวนี้ยังไม่มีรูปมาให้ดูครับ แต่ลองดูได้ ดูแมวไปก่อนเนาะ','Y',180,5,'N',0,'81e6db3f-562b-11e7-a699-0242ac120002','2017-06-22 08:40:07',6,'2017-06-22 08:40:48',6),(36,10,'P00006','กุ้งสีสวย','กุ้งสีจะประมาณนี้นะครับ','N',500,3,'N',0,'bae0050b-562b-11e7-a699-0242ac120002','2017-06-22 08:41:43',6,'2017-07-05 21:29:32',6),(48,10,'00000','klol','jjjjjjj','N',0,0,'N',0,'77da3e60-78fd-11e7-b3e1-c1efa948e970','2017-08-04 17:12:49',6,'2017-08-05 22:33:02',0),(49,10,'00000','ทดสอบ','dddd','N',3,7,'Y',0,'bcf909a0-7933-11e7-851f-a93cc66c4338','2017-08-04 23:41:18',6,'2017-08-15 17:06:57',0),(50,10,'00000','Teste','ssss','N',3,1,'N',0,'cca859b0-79eb-11e7-b5ca-8ddf18c44905','2017-08-05 21:38:51',6,'2017-08-05 22:33:16',0),(51,10,'00000','ssssss','','N',0,0,'N',0,'93298a80-7c5f-11e7-94cb-51ac8fc59657','2017-08-09 00:32:39',6,'2017-08-09 23:18:48',0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_order`
--

DROP TABLE IF EXISTS `product_order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_order` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `item` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_order`
--

LOCK TABLES `product_order` WRITE;
/*!40000 ALTER TABLE `product_order` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_pic`
--

DROP TABLE IF EXISTS `product_pic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) NOT NULL DEFAULT 0,
  `productpic_name` varchar(150) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `productpic_path` varchar(150) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `productpic_type` varchar(150) COLLATE utf8_unicode_ci NOT NULL DEFAULT '0',
  `productpic_size` int(11) NOT NULL DEFAULT 0,
  `cover` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'N',
  `status` enum('Y','N') COLLATE utf8_unicode_ci NOT NULL DEFAULT 'Y',
  `uuid` longtext COLLATE utf8_unicode_ci NOT NULL,
  `created_by` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) NOT NULL DEFAULT 0,
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `uuid` (`uuid`(100))
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_pic`
--

LOCK TABLES `product_pic` WRITE;
/*!40000 ALTER TABLE `product_pic` DISABLE KEYS */;
INSERT INTO `product_pic` VALUES (82,26,'12521045_1165132126851728_1719504070_n.jpg','public/images/product-img/20170523032757pm_12521045_1165132126851728_1719504070_n.jpg','image/jpeg',48309,'N','N','a2ad117c-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:27:57',0,'2017-07-29 00:31:58'),(83,26,'14546652_1299935063392818_61225089516961792_n.jpg','public/images/product-img/20170523032802pm_14546652_1299935063392818_61225089516961792_n.jpg','image/jpeg',49313,'N','N','a5b66dbd-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:02',0,'2017-07-29 00:32:31'),(84,26,'14546653_1129514337129863_888066711301914624_n.jpg','public/images/product-img/20170523032812pm_14546653_1129514337129863_888066711301914624_n.jpg','image/jpeg',50407,'N','N','ab39da38-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:12',0,'2017-07-29 00:32:31'),(85,26,'14546971_1205688339492804_2559577024087719936_n.jpg','public/images/product-img/20170523032819pm_14546971_1205688339492804_2559577024087719936_n.jpg','image/jpeg',48373,'N','N','afb73c8a-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:19',0,'2017-07-29 00:32:31'),(86,26,'14546996_1376065605744818_6238710211012460544_n.jpg','public/images/product-img/20170523032827pm_14546996_1376065605744818_6238710211012460544_n.jpg','image/jpeg',49946,'N','N','b4584460-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:27',0,'2017-07-29 00:32:31'),(87,26,'14547022_1306007669418908_6912761253165268992_n.jpg','public/images/product-img/20170523032833pm_14547022_1306007669418908_6912761253165268992_n.jpg','image/jpeg',48439,'N','N','b80d2104-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:33',0,'2017-07-29 00:32:31'),(88,26,'14547025_1286113224752504_5067565705629532160_n.jpg','public/images/product-img/20170523032840pm_14547025_1286113224752504_5067565705629532160_n.jpg','image/jpeg',51038,'N','N','bbeae8a1-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:40',0,'2017-07-29 00:32:31'),(89,26,'14750771_1093929240720475_6887073294286061568_n.jpg','public/images/product-img/20170523032846pm_14750771_1093929240720475_6887073294286061568_n.jpg','image/jpeg',47564,'N','N','bfb7cce2-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:46',0,'2017-07-29 00:32:31'),(90,26,'14750872_1279224742098890_6041011513462882304_n.jpg','public/images/product-img/20170523032853pm_14750872_1279224742098890_6041011513462882304_n.jpg','image/jpeg',51517,'N','N','c3e7c93c-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:28:53',0,'2017-07-29 00:32:31'),(91,26,'14751081_1212089765532725_1998236270358167552_n.jpg','public/images/product-img/20170523032903pm_14751081_1212089765532725_1998236270358167552_n.jpg','image/jpeg',53294,'N','N','c9f16ef9-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:29:03',0,'2017-07-29 00:32:31'),(92,26,'14751140_1083118478470125_85480762702299136_n.jpg','public/images/product-img/20170523032911pm_14751140_1083118478470125_85480762702299136_n.jpg','image/jpeg',50316,'N','N','ce54d4ef-3fbb-11e7-93f0-1867b02605c0',0,'2017-05-23 20:29:11',0,'2017-07-29 00:32:31'),(93,27,'12384990_1388474084503438_612937110_n.jpg','public/images/product-img/20170523041024pm_12384990_1388474084503438_612937110_n.jpg','image/jpeg',31065,'N','N','90b816db-3fc1-11e7-93f0-1867b02605c0',0,'2017-05-23 21:10:24',0,'2017-07-29 00:32:31'),(94,28,'15729381_1607619272588333_2390009443203940352_n.jpg','public/images/product-img/20170523041610pm_15729381_1607619272588333_2390009443203940352_n.jpg','image/jpeg',38796,'N','N','5eb751a8-3fc2-11e7-93f0-1867b02605c0',0,'2017-05-23 21:16:10',0,'2017-07-29 00:32:31'),(95,28,'15729489_1133272966770846_7790129901012516864_n.jpg','public/images/product-img/20170523041617pm_15729489_1133272966770846_7790129901012516864_n.jpg','image/jpeg',34699,'N','N','633b4e38-3fc2-11e7-93f0-1867b02605c0',0,'2017-05-23 21:16:17',0,'2017-07-29 00:32:31'),(96,28,'16175035_1372592912811000_9215124084738752512_n.jpg','public/images/product-img/20170523041626pm_16175035_1372592912811000_9215124084738752512_n.jpg','image/jpeg',40633,'N','N','6811dff6-3fc2-11e7-93f0-1867b02605c0',0,'2017-05-23 21:16:26',0,'2017-07-29 00:32:31'),(97,28,'16175054_1326127310795892_2478462778541604864_n.jpg','public/images/product-img/20170523041630pm_16175054_1326127310795892_2478462778541604864_n.jpg','image/jpeg',35548,'N','N','6ad76d31-3fc2-11e7-93f0-1867b02605c0',0,'2017-05-23 21:16:30',0,'2017-07-29 00:32:31'),(98,28,'16175636_1290077997752004_1302611581707747328_n.jpg','public/images/product-img/20170523041639pm_16175636_1290077997752004_1302611581707747328_n.jpg','image/jpeg',35400,'N','N','7006a75b-3fc2-11e7-93f0-1867b02605c0',0,'2017-05-23 21:16:39',0,'2017-07-29 00:32:31'),(99,29,'12600805_1025718510817022_1732530515_n.jpg','public/images/product-img/20170523041755pm_12600805_1025718510817022_1732530515_n.jpg','image/jpeg',38592,'N','N','9d689dec-3fc2-11e7-93f0-1867b02605c0',0,'2017-05-23 21:17:55',0,'2017-07-29 00:32:31'),(100,0,'12521045_1165132126851728_1719504070_n.jpg','public/images/product-img/20170605073000am_12521045_1165132126851728_1719504070_n.jpg','image/jpeg',48309,'N','Y','05072b4c-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:30:00',0,'2017-07-29 00:32:31'),(101,26,'12521045_1165132126851728_1719504070_n.jpg','public/images/product-img/20170605073231am_12521045_1165132126851728_1719504070_n.jpg','image/jpeg',48309,'Y','Y','5f1821b9-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:32:31',0,'2017-08-15 17:06:56'),(102,26,'14546652_1299935063392818_61225089516961792_n.jpg','public/images/product-img/20170605073234am_14546652_1299935063392818_61225089516961792_n.jpg','image/jpeg',49313,'N','Y','61170c6e-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:32:35',0,'2017-08-15 17:06:56'),(103,26,'14546653_1129514337129863_888066711301914624_n.jpg','public/images/product-img/20170605073238am_14546653_1129514337129863_888066711301914624_n.jpg','image/jpeg',50407,'N','Y','631193fe-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:32:38',0,'2017-08-15 17:06:56'),(104,26,'14546971_1205688339492804_2559577024087719936_n.jpg','public/images/product-img/20170605073242am_14546971_1205688339492804_2559577024087719936_n.jpg','image/jpeg',48373,'N','Y','6592cb78-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:32:42',0,'2017-08-15 17:06:56'),(105,26,'14546996_1376065605744818_6238710211012460544_n.jpg','public/images/product-img/20170605073247am_14546996_1376065605744818_6238710211012460544_n.jpg','image/jpeg',49946,'N','Y','68d41423-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:32:47',0,'2017-08-15 17:06:56'),(106,26,'14547022_1306007669418908_6912761253165268992_n.jpg','public/images/product-img/20170605073254am_14547022_1306007669418908_6912761253165268992_n.jpg','image/jpeg',48439,'N','Y','6cdbb76f-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:32:54',0,'2017-08-15 17:06:56'),(107,26,'14547025_1286113224752504_5067565705629532160_n.jpg','public/images/product-img/20170605073301am_14547025_1286113224752504_5067565705629532160_n.jpg','image/jpeg',51038,'N','Y','70c2cb68-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:33:01',0,'2017-08-15 17:06:56'),(108,26,'14750771_1093929240720475_6887073294286061568_n.jpg','public/images/product-img/20170605073308am_14750771_1093929240720475_6887073294286061568_n.jpg','image/jpeg',47564,'N','N','75376555-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:33:08',0,'2017-08-15 17:06:56'),(109,26,'14750872_1279224742098890_6041011513462882304_n.jpg','public/images/product-img/20170605073315am_14750872_1279224742098890_6041011513462882304_n.jpg','image/jpeg',51517,'N','Y','793ce515-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:33:15',0,'2017-08-15 17:06:56'),(110,26,'14751081_1212089765532725_1998236270358167552_n.jpg','public/images/product-img/20170605073320am_14751081_1212089765532725_1998236270358167552_n.jpg','image/jpeg',53294,'N','N','7c6e0f57-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:33:20',0,'2017-08-15 17:04:52'),(111,26,'14751140_1083118478470125_85480762702299136_n.jpg','public/images/product-img/20170605073328am_14751140_1083118478470125_85480762702299136_n.jpg','image/jpeg',50316,'N','N','80eed044-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:33:28',0,'2017-08-15 17:04:52'),(112,27,'12384990_1388474084503438_612937110_n.jpg','public/images/product-img/20170605073409am_12384990_1388474084503438_612937110_n.jpg','image/jpeg',31065,'N','N','99377f8f-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:34:09',0,'2017-07-29 00:32:31'),(113,28,'15729381_1607619272588333_2390009443203940352_n.jpg','public/images/product-img/20170605073517am_15729381_1607619272588333_2390009443203940352_n.jpg','image/jpeg',38796,'Y','Y','c1a5e1a0-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:35:17',0,'2017-07-29 00:32:31'),(114,28,'15729489_1133272966770846_7790129901012516864_n.jpg','public/images/product-img/20170605073520am_15729489_1133272966770846_7790129901012516864_n.jpg','image/jpeg',34699,'N','Y','c386bd79-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:35:20',0,'2017-07-29 00:32:31'),(115,28,'16175035_1372592912811000_9215124084738752512_n.jpg','public/images/product-img/20170605073524am_16175035_1372592912811000_9215124084738752512_n.jpg','image/jpeg',40633,'N','Y','c640ba11-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:35:24',0,'2017-07-29 00:32:31'),(116,28,'16175636_1290077997752004_1302611581707747328_n.jpg','public/images/product-img/20170605073529am_16175636_1290077997752004_1302611581707747328_n.jpg','image/jpeg',35400,'N','Y','c924e20d-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:35:29',0,'2017-07-29 00:32:31'),(117,28,'16175054_1326127310795892_2478462778541604864_n.jpg','public/images/product-img/20170605073543am_16175054_1326127310795892_2478462778541604864_n.jpg','image/jpeg',35548,'N','Y','d166c075-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:35:43',0,'2017-07-29 00:32:31'),(118,29,'12600805_1025718510817022_1732530515_n.jpg','public/images/product-img/20170605073629am_12600805_1025718510817022_1732530515_n.jpg','image/jpeg',38592,'N','N','ecc84e22-49b0-11e7-bab9-1867b05430d2',0,'2017-06-05 12:36:29',0,'2017-07-29 00:32:31'),(119,0,'12600805_1025718510817022_1732530515_n.jpg','public/images/product-img/20170609055633pm_12600805_1025718510817022_1732530515_n.jpg','image/jpeg',38592,'N','Y','648cc1f6-4c59-11e7-ac95-1867b05430d2',0,'2017-06-09 22:56:33',0,'2017-07-29 00:32:31'),(120,0,'12384990_1388474084503438_612937110_n.jpg','public/images/product-img/20170609060022pm_12384990_1388474084503438_612937110_n.jpg','image/jpeg',31065,'N','Y','ed32a051-4c59-11e7-ac95-1867b05430d2',0,'2017-06-09 23:00:22',0,'2017-07-29 00:32:31'),(121,0,'16175636_1290077997752004_1302611581707747328_n.jpg','public/images/product-img/20170612083903am_16175636_1290077997752004_1302611581707747328_n.jpg','image/jpeg',35400,'N','Y','bc393822-4dd3-11e7-ac95-1867b05430d2',0,'2017-06-12 13:39:03',0,'2017-07-29 00:32:31'),(122,0,'16175054_1326127310795892_2478462778541604864_n.jpg','public/images/product-img/20170612084041am_16175054_1326127310795892_2478462778541604864_n.jpg','image/jpeg',35548,'N','Y','f6cc7c6f-4dd3-11e7-ac95-1867b05430d2',0,'2017-06-12 13:40:41',0,'2017-07-29 00:32:31'),(123,30,'120175398.jpg','public/images/product-img/20170621042146am_120175398.jpg','image/jpeg',310000,'N','Y','f3ec1516-55bb-11e7-a699-0242ac120002',0,'2017-06-21 04:21:46',0,'2017-07-29 00:32:31'),(124,30,'Capture.PNG','public/images/product-img/20170621042152am_Capture.PNG','image/png',39154,'N','Y','f74b42b5-55bb-11e7-a699-0242ac120002',0,'2017-06-21 04:21:52',0,'2017-07-29 00:32:31'),(125,30,'images.jpg','public/images/product-img/20170621042159am_images.jpg','image/jpeg',6235,'N','Y','fb6fc381-55bb-11e7-a699-0242ac120002',0,'2017-06-21 04:21:59',0,'2017-07-29 00:32:31'),(126,31,'120175398.jpg','public/images/product-img/20170621042427am_120175398.jpg','image/jpeg',310000,'Y','Y','53bba024-55bc-11e7-a699-0242ac120002',0,'2017-06-21 04:24:27',0,'2017-07-29 00:32:31'),(127,31,'Capture2.PNG','public/images/product-img/20170621042438am_Capture2.PNG','image/png',24183,'N','Y','5aa3ab46-55bc-11e7-a699-0242ac120002',0,'2017-06-21 04:24:38',0,'2017-07-29 00:32:31'),(128,32,'Capture2.PNG','public/images/product-img/20170621070405am_Capture2.PNG','image/png',24183,'Y','Y','a0c44747-55d2-11e7-a699-0242ac120002',0,'2017-06-21 07:04:05',0,'2017-07-29 00:32:31'),(129,33,'120175398.jpg','public/images/product-img/20170621073853am_120175398.jpg','image/jpeg',310000,'Y','Y','7d719527-55d7-11e7-a699-0242ac120002',0,'2017-06-21 07:38:53',0,'2017-07-29 00:32:31'),(130,33,'images.jpg','public/images/product-img/20170621073859am_images.jpg','image/jpeg',6235,'N','Y','80eca9a7-55d7-11e7-a699-0242ac120002',0,'2017-06-21 07:38:59',0,'2017-07-29 00:32:31'),(131,0,'images.jpg','public/images/product-img/20170621073952am_images.jpg','image/jpeg',6235,'N','Y','a0ad3e0a-55d7-11e7-a699-0242ac120002',0,'2017-06-21 07:39:52',0,'2017-07-29 00:32:31'),(132,34,'images.jpg','public/images/product-img/20170621074100am_images.jpg','image/jpeg',6235,'Y','Y','c93fefb9-55d7-11e7-a699-0242ac120002',0,'2017-06-21 07:41:00',0,'2017-07-29 00:32:31'),(133,29,'12600805_1025718510817022_1732530515_n.jpg','public/images/product-img/20170622083610am_12600805_1025718510817022_1732530515_n.jpg','image/jpeg',38592,'N','N','f4a3f612-562a-11e7-a699-0242ac120002',0,'2017-06-22 08:36:10',0,'2017-07-29 00:32:31'),(134,27,'12384990_1388474084503438_612937110_n.jpg','public/images/product-img/20170622083858am_12384990_1388474084503438_612937110_n.jpg','image/jpeg',31065,'Y','Y','58e5a43c-562b-11e7-a699-0242ac120002',0,'2017-06-22 08:38:58',0,'2017-07-29 00:32:31'),(135,29,'12600805_1025718510817022_1732530515_n.jpg','public/images/product-img/20170622083926am_12600805_1025718510817022_1732530515_n.jpg','image/jpeg',38592,'Y','Y','6989f026-562b-11e7-a699-0242ac120002',0,'2017-06-22 08:39:26',0,'2017-07-29 00:32:31'),(136,35,'images.jpg','public/images/product-img/20170622084037am_images.jpg','image/jpeg',6235,'Y','Y','9398ca55-562b-11e7-a699-0242ac120002',0,'2017-06-22 08:40:37',0,'2017-07-29 00:32:31'),(137,36,'DL408_1659_0010228136_FR_AEB.jpg','public/images/product-img/20170622084122am_DL408_1659_0010228136_FR_AEB.jpg','image/jpeg',320014,'Y','Y','aeb8d7d1-562b-11e7-a699-0242ac120002',0,'2017-06-22 08:41:22',0,'2017-07-29 00:32:31'),(138,36,'D4J2L_0158_0010223054_FR_AEB.jpg','public/images/product-img/20170622084130am_D4J2L_0158_0010223054_FR_AEB.jpg','image/jpeg',251646,'N','N','b3574f98-562b-11e7-a699-0242ac120002',0,'2017-06-22 08:41:30',0,'2017-07-29 00:32:31'),(139,36,'D4J2L_0158_0010223054_FR_AEB.jpg','public/images/product-img/20170622084219am_D4J2L_0158_0010223054_FR_AEB.jpg','image/jpeg',251646,'N','Y','d07874ae-562b-11e7-a699-0242ac120002',0,'2017-06-22 08:42:19',0,'2017-07-29 00:32:31'),(140,0,'2017-07-29_09-24-35_IMG_20170716_181531.jpg','public/images/product-img/2017-07-29_09-24-35_IMG_20170716_181531.jpg','image/jpeg',1608342,'N','Y','a5a1ec50-7469-11e7-8a12-bf5bcbe56e77',0,'2017-07-29 21:24:36',0,'2017-07-29 21:24:36'),(141,0,'2017-07-29_09-27-34_IMG_20170716_181406.jpg','public/images/product-img/2017-07-29_09-27-34_IMG_20170716_181406.jpg','image/jpeg',1778404,'N','Y','0fef35e0-746a-11e7-88d7-19e25e54c74f',0,'2017-07-29 21:27:35',0,'2017-07-29 21:27:35'),(142,0,'2017-07-29_09-28-56_IMG_20170716_181510.jpg','public/images/product-img/2017-07-29_09-28-56_IMG_20170716_181510.jpg','image/jpeg',1729296,'N','Y','40e8e650-746a-11e7-ab7c-798c41f5b92a',0,'2017-07-29 21:28:57',0,'2017-07-29 21:28:57'),(143,0,'2017-07-29_09-31-00_IMG_20170716_181510.jpg','public/images/product-img/2017-07-29_09-31-00_IMG_20170716_181510.jpg','image/jpeg',1729296,'N','Y','8ae79e40-746a-11e7-95fd-e3d12e350e2d',0,'2017-07-29 21:31:01',0,'2017-07-29 21:31:01'),(144,0,'2017-07-29_09-31-55_IMG_20170716_181552.jpg','public/images/product-img/2017-07-29_09-31-55_IMG_20170716_181552.jpg','image/jpeg',1792477,'N','Y','ab864bb0-746a-11e7-88c0-8791a2f91192',0,'2017-07-29 21:31:56',0,'2017-07-29 21:31:56'),(145,0,'2017-07-29_09-33-26_IMG_20170716_181531.jpg','public/images/product-img/2017-07-29_09-33-26_IMG_20170716_181531.jpg','image/jpeg',1608342,'N','Y','e1fdee00-746a-11e7-b288-ddd10c36e38b',0,'2017-07-29 21:33:27',0,'2017-07-29 21:33:27'),(146,0,'2017-07-29_09-35-38_IMG_20170716_181406.jpg','public/images/product-img/2017-07-29_09-35-38_IMG_20170716_181406.jpg','image/jpeg',1778404,'N','Y','30ae4720-746b-11e7-8ef9-bff370f935c6',0,'2017-07-29 21:35:39',0,'2017-07-29 21:35:39'),(147,0,'2017-07-29_09-35-57_IMG_20170716_181433.jpg','public/images/product-img/2017-07-29_09-35-57_IMG_20170716_181433.jpg','image/jpeg',2059852,'N','Y','3bd580a0-746b-11e7-8ef9-bff370f935c6',0,'2017-07-29 21:35:58',0,'2017-07-29 21:35:58'),(148,0,'2017-07-29_09-38-34_IMG_20170716_181510.jpg','public/images/product-img/2017-07-29_09-38-34_IMG_20170716_181510.jpg','image/jpeg',1729296,'N','Y','99a6af10-746b-11e7-924b-85ae24c783ce',0,'2017-07-29 21:38:35',0,'2017-07-29 21:38:35'),(149,0,'2017-07-29_09-39-12_IMG_20170716_181510.jpg','public/images/product-img/2017-07-29_09-39-12_IMG_20170716_181510.jpg','image/jpeg',1729296,'N','Y','b00f12b0-746b-11e7-8856-5dcc70207bc9',0,'2017-07-29 21:39:13',0,'2017-07-29 21:39:13'),(150,0,'2017-07-29_10-45-32_IMG_20170716_181638.jpg','public/images/product-img/2017-07-29_10-45-32_IMG_20170716_181638.jpg','image/jpeg',1997515,'N','Y','f4b488b0-7474-11e7-8856-5dcc70207bc9',0,'2017-07-29 22:45:33',0,'2017-07-29 22:45:33'),(151,0,'2017-08-04_03-17-56_Screenshot from 2017-07-12 11-06-50.png','public/images/product-img/2017-08-04_03-17-56_Screenshot from 2017-07-12 11-06-50.png','image/png',97973,'N','Y','6bbb2aa0-78ed-11e7-9942-a3a1bb815781',0,'2017-08-04 15:17:58',0,'2017-08-04 15:17:58'),(152,0,'2017-08-04_03-19-37_what-does-it-mean-when-cat-wags-tail.jpg','public/images/product-img/2017-08-04_03-19-37_what-does-it-mean-when-cat-wags-tail.jpg','image/jpeg',47966,'N','Y','a78ac040-78ed-11e7-be1b-7bdcd8f73ec4',0,'2017-08-04 15:19:38',0,'2017-08-04 15:19:38'),(153,0,'2017-08-04_03-19-47_Screenshot from 2017-07-24 10-48-55.png','public/images/product-img/2017-08-04_03-19-47_Screenshot from 2017-07-24 10-48-55.png','image/png',47245,'N','Y','ada2f650-78ed-11e7-be1b-7bdcd8f73ec4',0,'2017-08-04 15:19:48',0,'2017-08-04 15:19:48'),(154,49,'2017-08-04_11-40-46_IMG_20170716_181638.jpg','public/images/product-img/2017-08-04_11-40-46_IMG_20170716_181638.jpg','image/jpeg',1997515,'Y','Y','aa753330-7933-11e7-851f-a93cc66c4338',0,'2017-08-04 23:40:47',0,'2017-08-04 23:57:25'),(155,49,'2017-08-04_11-40-55_IMG_20170716_181531.jpg','public/images/product-img/2017-08-04_11-40-55_IMG_20170716_181531.jpg','image/jpeg',1608342,'N','Y','af5dc2e0-7933-11e7-851f-a93cc66c4338',0,'2017-08-04 23:40:55',0,'2017-08-04 23:57:24'),(156,49,'2017-08-04_11-41-07_IMG_20170716_181552.jpg','public/images/product-img/2017-08-04_11-41-07_IMG_20170716_181552.jpg','image/jpeg',1792477,'N','Y','b6a02110-7933-11e7-851f-a93cc66c4338',0,'2017-08-04 23:41:08',0,'2017-08-04 23:41:18'),(157,50,'2017-08-05_09-38-42_IMG_20170716_181433.jpg','public/images/product-img/2017-08-05_09-38-42_IMG_20170716_181433.jpg','image/jpeg',2059852,'Y','Y','c746c970-79eb-11e7-b5ca-8ddf18c44905',0,'2017-08-05 21:38:43',0,'2017-08-05 21:38:53'),(158,0,'2017-08-05_10-11-57_IMG_20170716_181406.jpg','public/images/product-img/2017-08-05_10-11-57_IMG_20170716_181406.jpg','image/jpeg',1778404,'N','Y','6c10ed10-79f0-11e7-8627-63ba4b325f8b',0,'2017-08-05 22:11:57',0,'2017-08-05 22:11:57'),(159,0,'2017-08-05_10-12-57_IMG_20170716_181531.jpg','public/images/product-img/2017-08-05_10-12-57_IMG_20170716_181531.jpg','image/jpeg',1608342,'N','Y','90015d90-79f0-11e7-8627-63ba4b325f8b',0,'2017-08-05 22:12:58',0,'2017-08-05 22:12:58'),(160,0,'2017-08-05_10-15-14_IMG_20170716_181552.jpg','public/images/product-img/2017-08-05_10-15-14_IMG_20170716_181552.jpg','image/jpeg',1792477,'N','Y','e1d69d60-79f0-11e7-8627-63ba4b325f8b',0,'2017-08-05 22:15:15',0,'2017-08-05 22:15:15'),(161,0,'2017-08-05_10-15-50_IMG_20170716_181406.jpg','public/images/product-img/2017-08-05_10-15-50_IMG_20170716_181406.jpg','image/jpeg',1778404,'N','Y','f738dba0-79f0-11e7-8627-63ba4b325f8b',0,'2017-08-05 22:15:51',0,'2017-08-05 22:15:51'),(162,0,'2017-08-05_10-16-36_IMG_20170716_181406.jpg','public/images/product-img/2017-08-05_10-16-36_IMG_20170716_181406.jpg','image/jpeg',1778404,'N','Y','12cfd8a0-79f1-11e7-8627-63ba4b325f8b',0,'2017-08-05 22:16:37',0,'2017-08-05 22:16:37'),(163,48,'2017-08-05_10-18-21_IMG_20170716_181638.jpg','public/images/product-img/2017-08-05_10-18-21_IMG_20170716_181638.jpg','image/jpeg',1997515,'Y','Y','514ab820-79f1-11e7-8627-63ba4b325f8b',0,'2017-08-05 22:18:22',0,'2017-08-05 22:18:32'),(164,51,'2017-08-09_12-32-35_IMG_20170716_181433.jpg','public/images/product-img/2017-08-09_12-32-35_IMG_20170716_181433.jpg','image/jpeg',2059852,'Y','Y','910d1320-7c5f-11e7-94cb-51ac8fc59657',0,'2017-08-09 00:32:36',0,'2017-08-09 00:32:40');
/*!40000 ALTER TABLE `product_pic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slider` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `link_to` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `link_id` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic_name` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic_path` varchar(225) CHARACTER SET utf8 DEFAULT NULL,
  `status` enum('Y','N') COLLATE utf8_unicode_ci DEFAULT 'Y',
  `created_at` datetime DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT 0,
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
INSERT INTO `slider` VALUES (4,'กบยาง','กบยางหลากหลายสี เลือกได้เลยครับดีดีทั้งนั้น','product','all_product','head1.png','project_shop_api/slider-img/20170613032446pm_head1.png','Y','2017-06-10 22:36:46',6,'2017-06-22 08:47:16',6),(5,'กบแบบใหม่','กบออกใหม่','category','10','head2.png','project_shop_api/slider-img/20170613032457pm_head2.png','Y','2017-06-10 22:42:43',6,'2017-06-22 08:51:04',6),(6,'ทดสอบ','ทดลอง','product','all_product','15729381_1607619272588333_2390009443203940352_n.jpg','slider-img/20170612015733pm_15729381_1607619272588333_2390009443203940352_n.jpg','N','2017-06-12 18:57:52',6,'2017-06-12 21:39:43',6),(7,'test','test','product','all_product','15729489_1133272966770846_7790129901012516864_n.jpg','project_shop_api/slider-img/20170613032325pm_15729489_1133272966770846_7790129901012516864_n.jpg','N','2017-06-13 20:24:26',6,'2017-06-13 20:25:03',6),(8,'ทดสอบ','','product','all_product','head2.png','project_shop_api/slider-img/20170613033841pm_head2.png','N','2017-06-13 20:39:01',6,'2017-06-13 20:39:08',6);
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider_pic`
--

DROP TABLE IF EXISTS `slider_pic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slider_pic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slider_id` int(11) DEFAULT NULL,
  `pic_name` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pic_path` varchar(225) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT 0,
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider_pic`
--

LOCK TABLES `slider_pic` WRITE;
/*!40000 ALTER TABLE `slider_pic` DISABLE KEYS */;
INSERT INTO `slider_pic` VALUES (7,NULL,'14750872_1279224742098890_6041011513462882304_n.jpg','slider-img/20170609061201pm_14750872_1279224742098890_6041011513462882304_n.jpg','2017-06-09 23:12:01',0,'2017-06-09 23:12:01',NULL),(8,NULL,'14546971_1205688339492804_2559577024087719936_n.jpg','slider-img/20170609061450pm_14546971_1205688339492804_2559577024087719936_n.jpg','2017-06-09 23:14:50',0,'2017-06-09 23:14:50',NULL),(9,NULL,'14750872_1279224742098890_6041011513462882304_n.jpg','slider-img/20170609065808pm_14750872_1279224742098890_6041011513462882304_n.jpg','2017-06-09 23:58:08',0,'2017-06-09 23:58:08',NULL),(10,NULL,'14547022_1306007669418908_6912761253165268992_n.jpg','slider-img/20170609065824pm_14547022_1306007669418908_6912761253165268992_n.jpg','2017-06-09 23:58:24',0,'2017-06-09 23:58:24',NULL),(11,NULL,'14751081_1212089765532725_1998236270358167552_n.jpg','slider-img/20170609065933pm_14751081_1212089765532725_1998236270358167552_n.jpg','2017-06-09 23:59:33',0,'2017-06-09 23:59:33',NULL),(12,NULL,'14750872_1279224742098890_6041011513462882304_n.jpg','slider-img/20170609065941pm_14750872_1279224742098890_6041011513462882304_n.jpg','2017-06-09 23:59:41',0,'2017-06-09 23:59:41',NULL),(13,NULL,'14751140_1083118478470125_85480762702299136_n.jpg','slider-img/20170610082038am_14751140_1083118478470125_85480762702299136_n.jpg','2017-06-10 13:20:38',0,'2017-06-10 13:20:38',NULL);
/*!40000 ALTER TABLE `slider_pic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff`
--

DROP TABLE IF EXISTS `staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `password` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `uuid` longtext COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `created_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Index 2` (`uuid`(100))
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff`
--

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;
INSERT INTO `staff` VALUES (1,'Jes Jesniphat','Jesniphat','jesse','0f359740bd1cda994f8b55330c86d845','4616785a-bd79-11e6-a27b-1867b02605c0','2016-12-09 02:05:12',1,'2017-05-15 20:31:44',1),(2,'Jedniphan','Pukkham','Jeni','a4060150e6895a5efc19e16bbf9e9755','bd5512c4-c159-11e6-b305-1867b02605c0','2016-12-14 00:29:49',0,'2016-12-14 00:29:49',0),(5,'Jesniphat','Pukkham','Jes','90f2c9c53f66540e67349e0ab83d8cd0','102baefd-c15c-11e6-b305-1867b02605c0','2016-12-14 00:46:27',0,'2016-12-14 00:46:27',0),(6,'ผู้ดูแลระบบ','ของเรา นะครับ','admin','0f359740bd1cda994f8b55330c86d845','6291e192-c161-11e6-b305-1867b02605c0','2016-12-14 01:24:32',0,'2017-08-06 18:11:27',0);
/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-08-22 10:00:54
