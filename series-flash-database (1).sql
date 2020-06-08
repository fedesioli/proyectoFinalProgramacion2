-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: series-flash-database
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.11-MariaDB

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
-- Table structure for table `megusta`
--

DROP TABLE IF EXISTS `megusta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `megusta` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_review` int(10) unsigned DEFAULT NULL,
  `id_user` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_idx` (`id_user`),
  KEY `idreview` (`id_review`),
  CONSTRAINT `idreview` FOREIGN KEY (`id_review`) REFERENCES `reviews` (`id_review`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `iduser` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `megusta`
--

LOCK TABLES `megusta` WRITE;
/*!40000 ALTER TABLE `megusta` DISABLE KEYS */;
INSERT INTO `megusta` VALUES (46,49,1),(48,52,1),(51,48,1),(52,50,1),(53,54,1),(54,55,1),(55,56,1),(56,51,1),(57,57,1),(58,58,1),(59,59,1),(60,60,1),(61,61,1),(62,62,1),(63,63,1),(64,64,1),(65,NULL,1),(66,65,1),(67,66,1),(68,67,1),(69,68,1),(70,69,1),(71,70,1),(72,71,1),(73,72,1),(74,57,31),(75,59,31),(76,73,1),(77,74,1),(78,58,31),(79,75,31),(80,75,1);
/*!40000 ALTER TABLE `megusta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id_review` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` int(10) unsigned DEFAULT NULL,
  `id_serie` int(10) unsigned DEFAULT NULL,
  `texto` varchar(200) NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `puntaje` int(11) NOT NULL,
  PRIMARY KEY (`id_review`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (48,26,1403,'muy buena','2020-06-01','2020-06-01',5),(49,1,48866,'genial','2020-06-01','2020-06-01',3),(50,1,1403,'Marvel no falla, pero deja que desear','2020-06-01','2020-06-01',3),(51,1,60625,'Muy graciosa','2020-06-01','2020-06-01',4),(52,1,48866,'No me gusto tanto','2020-06-03','2020-06-03',3),(54,1,60625,'Es simplemente espectacular','2020-06-04','2020-06-04',1),(55,1,79680,'La verdad que no me gusto nada','2020-06-05','2020-06-05',5),(56,1,48866,'una aburrida','2020-06-05','2020-06-05',4),(57,1,2734,'muy buenasa','2020-06-05','2020-06-05',1),(58,1,66788,'La verdad que esta muy bien lograda, recomiendo.','2020-06-05','2020-06-05',3),(59,1,2734,'asdasdfascsacs','2020-06-05','2020-06-05',3),(60,1,60572,'pikachuuuuuuuuuuuuuu','2020-06-05','2020-06-05',4),(61,1,79680,'pojpbjkbkb','2020-06-05','2020-06-05',3),(62,1,79680,'genial','2020-06-05','2020-06-05',1),(63,1,1403,'asdasdasdasdasd','2020-06-05','2020-06-05',5),(64,1,60572,'asdsad','2020-06-05','2020-06-05',4),(65,1,48866,'La verdad que no me gusto nada','2020-06-05','2020-06-05',1),(66,1,48866,'La verdad que no me gusto nada','2020-06-05','2020-06-05',1),(67,1,48866,'genial','2020-06-05','2020-06-05',1),(68,1,48866,'Me encanto!!','2020-06-05','2020-06-05',1),(69,1,48866,'muy buena','2020-06-05','2020-06-05',4),(70,1,48866,'La verdad que no me gusto nada','2020-06-05','2020-06-05',1),(71,1,48866,'La verdad que no me gusto nada','2020-06-05','2020-06-05',1),(72,1,79680,'La verdad que no me gusto nada','2020-06-05','2020-06-05',1),(73,1,2734,'muy buena','2020-06-06','2020-06-06',1),(74,1,2734,'muy buena','2020-06-07','2020-06-07',5),(75,1,66788,'asasd','2020-06-08','2020-06-08',1),(76,31,66788,'siento que podria ser mejor','2020-06-08','2020-06-08',3);
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(150) CHARACTER SET utf8 NOT NULL,
  `birth_date` date NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'FedeSioli','fede@gmail.com','$2a$10$HvN07DqERKXOEjC/Jya1OO2gl1PR8qu24aFlyhmgq7JSRPBvDuu2C','2020-06-05'),(12,'SusanSarandon','susan@gmail.com','$2b$10$ERAiu0r5XVvbo','1992-05-21'),(14,'Matucho','matu@gmail.com','$2a$10$LuEct6oYr10PQ','2020-05-14'),(23,'Juancete','johnce@gmail.com','$2b$10$TgYywlfxMs5pp','2020-05-22'),(26,'Mate','mate@gmail.com','$2a$10$G990s1riV1/46EdwwUoQV.WCdttqUibfhtCeSu7PnnmyiS..8.WsS','0000-00-00'),(28,'Paquito123','paco@gmail.com','$2a$10$ClaSPxRCpvFO10YskFI2hOFYint7Un2SgXqB4Q5/8.DNhrjJiTD2a','0000-00-00'),(30,'Marisa123','marisa@gmail.com','$2a$10$MjxZcLSxOrJ3SPhgvegyQ.7NgaHGA1crDSKME4T0/FcBmffzKPcve','2020-06-04'),(31,'Lucho','lucho@gmail.com','$2a$10$sDMeTKqTZt3C6O83ZjGaKOVD9aV.LOV4pOuQxpGIBy/zHbs7ddbwe','2020-06-02');
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

-- Dump completed on 2020-06-08 15:55:47
