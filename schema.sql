-- Create syntax for TABLE 'Episodes'
CREATE TABLE `Episodes` (
  `title` varchar(255) DEFAULT NULL,
  `ytURL` varchar(255) DEFAULT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'EpisodesTags'
CREATE TABLE `EpisodesTags` (
  `TagId` int(11) NOT NULL DEFAULT '0',
  `EpisodeId` int(11) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`TagId`,`EpisodeId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'Shownotes'
CREATE TABLE `Shownotes` (
  `content` blob NOT NULL,
  `language` varchar(255) NOT NULL DEFAULT 'en',
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EpisodeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'Tags'
CREATE TABLE `Tags` (
  `text` varchar(255) DEFAULT NULL,
  `episodeId` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Create syntax for TABLE 'Users'
CREATE TABLE `Users` (
  `name` varchar(255) NOT NULL,
  `role` int(11) NOT NULL,
  `twitter_username` varchar(255) NOT NULL,
  `twitter_access_token` varchar(255) NOT NULL,
  `twitter_access_secret` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `EpisodeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;