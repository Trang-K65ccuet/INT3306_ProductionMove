-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: userdb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `productitems`
--

DROP TABLE IF EXISTS `productitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productitems` (
  `productcode` varchar(255) NOT NULL,
  `productline` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `status` int NOT NULL,
  `manufactureId` int NOT NULL,
  PRIMARY KEY (`productcode`),
  KEY `productline` (`productline`),
  KEY `manufactureId` (`manufactureId`),
  CONSTRAINT `productitems_ibfk_1` FOREIGN KEY (`productline`) REFERENCES `productlines` (`productline`),
  CONSTRAINT `productitems_ibfk_2` FOREIGN KEY (`manufactureId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productitems`
--

LOCK TABLES `productitems` WRITE;
/*!40000 ALTER TABLE `productitems` DISABLE KEYS */;
INSERT INTO `productitems` VALUES ('DELL0','DELL','máy tính dell','image/dell.png',332000,2,4),('DELL1','DELL','Máy tính DELL','image/dell.png',223456,0,4),('DELL2','DELL','Máy tính DELL','image/dell.png',223456,0,4),('DELL3','DELL','Máy tính DELL','image/dell.png',223456,0,4),('DELL4','DELL','Máy tính DELL','image/dell.png',223456,0,4),('DELL5','DELL','Máy tính DELL','image/dell.png',223456,0,4),('DELL6','DELL','Máy tính DELL','image/dell.png',223456,0,4),('DELL7','DELL','Máy tính DELL','image/dell.png',223456,0,4),('HP0','HP','Máy tính HP','image/hp.png',223444,2,4),('HP1','HP','Máy tính HP','image/hp.png',223444,2,4),('HP2','HP','Máy tính HP','image/hp.png',223444,1,4);
/*!40000 ALTER TABLE `productitems` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-23 13:35:40
