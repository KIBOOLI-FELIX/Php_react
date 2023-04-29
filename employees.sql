-- phpMyAdmin SQL Dump
-- version 5.1.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 29, 2023 at 11:15 AM
-- Server version: 5.7.36
-- PHP Version: 8.1.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react_crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `fullName` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `physicalAddress` varchar(50) NOT NULL,
  `phoneContact` varchar(15) NOT NULL,
  `jobTitle` varchar(100) NOT NULL,
  `salary` varchar(25) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`id`, `fullName`, `email`, `physicalAddress`, `phoneContact`, `jobTitle`, `salary`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Kibooli Felix', 'kiboolif@gmail.com', 'Kasubi', '2567686644987', 'Engineer', '2500000', '2023-04-28 20:57:02', '2023-04-28 20:57:02', '2023-04-28 20:57:02'),
(2, 'Joan', 'Joan', 'Joan', 'Joan', 'Joan', 'Joan', NULL, NULL, NULL),
(3, 'Joan', 'Joan', 'Joan', 'Joan', 'Joan', 'Joan', NULL, NULL, NULL),
(4, 'Baluku Dan', 'balukudan@gmail.com', 'Nsambya', '07866554452', 'Bio Lab Technician', '6000000', NULL, NULL, NULL),
(5, 'Wasukira Isaac', 'wasukira@gmail.com', 'Seta', '07866554452', 'Accountant', '345678', NULL, NULL, NULL),
(6, 'Mubangizi Felex', 'mubangizi@gmail.com', 'kasubi', '0786655345', 'Engineer', '3000000', NULL, NULL, NULL),
(7, 'Baluku Dan', 'balukudan@gmail.com', 'Nsambya', '07866554452', 'Bio Lab Technician', '384950000', NULL, NULL, NULL),
(8, 'Egwayu Boniface', 'Egwayu@gmail.com', 'Entebbe', '0786655345', 'Docotor', '5m', NULL, NULL, NULL),
(9, 'Mubangizi Felex', 'Egwayu@gmail.com', 'Entebbe', '0786655345', 'Docotor', '5m', NULL, NULL, NULL),
(10, 'Mubangizi Felex', 'Egwayu@gmail.com', 'Entebbe', '0786655345', 'Docotor', '5m', NULL, NULL, NULL),
(11, 'Mubangizi Felex', 'Egwayu@gmail.com', 'Entebbe', '0786655345', 'Docotor', '5m', NULL, NULL, NULL),
(12, 'Mubangizi Felex', 'balukudan@gmail.com', 'kasubi', '256789675476', 'Accountant', '345678', NULL, NULL, NULL),
(13, 'Mubangizi Felex', 'balukudan@gmail.com', 'kasubi', '256789675476', 'Web Developer', 'liiujjkk', NULL, NULL, NULL),
(14, 'Mubangizi Felex', 'balukudan@gmail.com', 'kasubi', '256789675476', 'Web Developer', 'liiujjkk', NULL, NULL, NULL),
(15, 'Mubangizi Felex', 'balukudan@gmail.com', 'kasubi', '256789675476', 'Web Developer', 'liiujjkk', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
