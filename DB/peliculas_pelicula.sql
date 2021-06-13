CREATE DATABASE  IF NOT EXISTS `peliculas` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `peliculas`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: peliculas
-- ------------------------------------------------------
-- Server version	5.7.21-log

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
-- Table structure for table `pelicula`
--

DROP TABLE IF EXISTS `pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pelicula` (
  `pelicula_codigo` int(11) NOT NULL,
  `pelicula_nombre` varchar(300) NOT NULL,
  `pelicula_descripcion` varchar(100) NOT NULL,
  `pelicula_imagen` varchar(4000) DEFAULT NULL,
  `pelicula_horario` varchar(200) NOT NULL,
  `sala_id` int(11) NOT NULL,
  PRIMARY KEY (`pelicula_codigo`),
  KEY `sala_id_idx` (`sala_id`),
  CONSTRAINT `sala_id` FOREIGN KEY (`sala_id`) REFERENCES `sala` (`sala_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelicula`
--

LOCK TABLES `pelicula` WRITE;
/*!40000 ALTER TABLE `pelicula` DISABLE KEYS */;
INSERT INTO `pelicula` VALUES (333,'La fuga del leon','Para adultos','https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/portada-1617966366.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*','Lunes a Viernes',1),(344,'prueba','prueba','www','Lunes a Sabado',1),(1236,'Rapido y Furiosos 3','Para todo publico ','https://imagenes.milenio.com/ptKPZl8naQZZWgMQjHmG0PHwR-Y=/958x596/smart/https://www.milenio.com/uploads/media/2020/04/14/algunos-estrenos-han-sido-aplazados-4_43_0_910_566.jpg','Lunes a Sabado',1),(1237,'La estrella del dia','Para niños','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidzum4mp6n_7KPQ2PLQcDdIu32MGMErmR5A&usqp=CAU','Lunes a Domingo',2),(1243,'Lagrimas del sol','Película de acción ','https://i.blogs.es/758b39/mejores-peliculas-viajes-tiempo-netflix/450_1000.jpeg','Lunes a Viernes',1);
/*!40000 ALTER TABLE `pelicula` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-13 16:59:46
