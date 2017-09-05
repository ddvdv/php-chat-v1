-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Sep 04, 2017 at 10:17 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `chatPHP`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `idmessages` int(11) NOT NULL,
  `content` varchar(1063) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `users_idusers` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`idmessages`, `content`, `date`, `users_idusers`) VALUES
(1, 'test', NULL, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `nom` varchar(45) NOT NULL,
  `email` varchar(511) NOT NULL,
  `password` varchar(511) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`idusers`, `nom`, `email`, `password`) VALUES
(1, 'david', 'david@becode.org', '$2y$10$qHwbxJUDLKTQIC2H3o2t9u6TFyqmJ6fWrUl6TEUDwvWFP5TaPkSOq');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`idmessages`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `idmessages` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;