-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: מרץ 09, 2022 בזמן 05:11 PM
-- גרסת שרת: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vacation`
--

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `followed_vacations`
--

CREATE TABLE `followed_vacations` (
  `id` int(11) NOT NULL,
  `user_id` int(50) NOT NULL,
  `vacation_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `is_admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- הוצאת מידע עבור טבלה `user`
--

INSERT INTO `user` (`id`, `first_name`, `last_name`, `user_name`, `password`, `is_admin`) VALUES
(41, 'naor', 'cohen', 'naorAdmin@gmail.com', '$2b$10$NkHroRqetzG8sFPvNec8JOeLqw34NCLBmTBshyylUhEg2lBkTrkJC', 1);

-- --------------------------------------------------------

--
-- מבנה טבלה עבור טבלה `vacation`
--

CREATE TABLE `vacation` (
  `id` int(11) NOT NULL,
  `description` varchar(200) NOT NULL,
  `destination` varchar(200) NOT NULL,
  `picture` varchar(200) NOT NULL,
  `travel_date` varchar(200) NOT NULL,
  `return_date` varchar(200) NOT NULL,
  `price` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- אינדקסים לטבלה `followed_vacations`
--
ALTER TABLE `followed_vacations`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- אינדקסים לטבלה `vacation`
--
ALTER TABLE `vacation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `followed_vacations`
--
ALTER TABLE `followed_vacations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=640;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `vacation`
--
ALTER TABLE `vacation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
