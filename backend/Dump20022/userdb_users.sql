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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mah','manhacd','admin','$argon2id$v=19$m=65536,t=3,p=4$ABWWNBbVutCfkk+k1hXt4A$QkmAPka6Y+1zVvLYy6zt4nIdKNC4dN3oQdH4fpIMQf4','2022-11-17 15:49:50','2022-11-17 15:49:50'),(2,'Mah','manhcd','admin','$argon2id$v=19$m=65536,t=3,p=4$XHtDAqoegPP27K10fNZRhw$i39gzz2DjT7EOHwGGiGrlAOq1JJxjJj+dK8kwQ7N+yM','2022-11-18 04:34:50','2022-11-18 04:34:50'),(3,'Manha','mnhacd','admin','$argon2id$v=19$m=65536,t=3,p=4$ycp5egsSZ432Llv4s+P9qw$k5UWM3QpstklFqwrlexTMLdvCdrCMwHWdW7gwCji7ck','2022-11-26 04:19:17','2022-11-26 04:19:17'),(4,'M','manh123','cssx','$argon2id$v=19$m=65536,t=3,p=4$ABWWNBbVutCfkk+k1hXt4A$QkmAPka6Y+1zVvLYy6zt4nIdKNC4dN3oQdH4fpIMQf4','2022-11-28 03:47:22','2022-11-28 03:47:22'),(5,'M','manhdlpp','dlpp','$argon2id$v=19$m=65536,t=3,p=4$Aja4tLZO1j5mjk+rQM7a8A$SMo6nMI5AEV4cv58XCQXQdScBTDXThDT4IxSL/Nf2nY','2022-11-28 03:54:34','2022-11-28 03:54:34'),(6,'M','manhttbh','ttbh','$argon2id$v=19$m=65536,t=3,p=4$IAOwpSI4v81XANEwNal4bA$tSYTBFYbqutfktsUcKx9pBKU1Mem/tQIwGOHIY8K0OA','2022-11-28 03:55:30','2022-11-28 03:55:30');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-17  9:52:02
