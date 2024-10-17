﻿USE [master]

IF db_id('Capstone') IS NULL
  CREATE DATABASE [Capstone]
GO

USE [Capstone]
GO

DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Flavor];
DROP TABLE IF EXISTS [Category];
DROP TABLE IF EXISTS [Rating];
DROP TABLE IF EXISTS [Recipe];
DROP TABLE IF EXISTS [Review];
DROP TABLE IF EXISTS [Comment];
DROP TABLE IF EXISTS [SavedRecipe];
GO

CREATE TABLE [UserProfile] (
  [Id] int PRIMARY KEY IDENTITY,
  [UserName] varchar(255),
  [FirstName] varchar(255),
  [LastName] varchar(255),
  [Email] varchar(255),
  [ImageUrl] varchar(255)
)
GO

CREATE TABLE [Flavor] (
  [Id] int PRIMARY KEY IDENTITY,
  [Name] varchar(50) NOT NULL
)
GO

CREATE TABLE [Category] (
  [Id] int PRIMARY KEY IDENTITY,
  [Name] varchar(50) NOT NULL
)
GO

CREATE TABLE [Rating] (
  [Id] int PRIMARY KEY IDENTITY,
  [StarCount] int,
  [ImageUrl] varchar(255)
)
GO

CREATE TABLE [Recipe] (
  [Id] int PRIMARY KEY IDENTITY,
  [Title] varchar(100) NOT NULL,
  [Ingredients] text NOT NULL,
  [Directions] text NOT NULL,
  [ImageUrl] varchar(255),
  [CreateDateTime] datetime NOT NULL,
  [FlavorId] int NOT NULL,
  [CategoryId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [SavedRecipe] (
  [Id] int PRIMARY KEY IDENTITY,
  [RecipeId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [Review] (
  [Id] int PRIMARY KEY IDENTITY,
  [Subject] varchar(50) NOT NULL,
  [Content] text NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [RatingId] int,
  [RecipeId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO

CREATE TABLE [Comment] (
  [Id] int PRIMARY KEY IDENTITY,
  [Subject] varchar(50) NOT NULL,
  [Content] text NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [ReviewId] int NOT NULL,
  [UserProfileId] int NOT NULL
)
GO


ALTER TABLE [Category] ADD FOREIGN KEY ([Id]) REFERENCES [Recipe] ([CategoryId])
GO

ALTER TABLE [Flavor] ADD FOREIGN KEY ([Id]) REFERENCES [Recipe] ([FlavorId])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([Id]) REFERENCES [Recipe] ([UserProfileId])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([Id]) REFERENCES [Review] ([UserProfileId])
GO

ALTER TABLE [Recipe] ADD FOREIGN KEY ([Id]) REFERENCES [Review] ([RecipeId])
GO

ALTER TABLE [UserProfile] ADD FOREIGN KEY ([Id]) REFERENCES [Comment] ([UserProfileId])
GO

ALTER TABLE [Review] ADD FOREIGN KEY ([Id]) REFERENCES [Comment] ([ReviewId])
GO

ALTER TABLE [Review] ADD FOREIGN KEY ([RatingId]) REFERENCES [Rating] ([Id])
GO

ALTER TABLE [SavedRecipe] ADD FOREIGN KEY ([UserId]) REFERENCES [UserProfile] ([Id])
GO

ALTER TABLE [SavedRecipe] ADD FOREIGN KEY ([RecipeId]) REFERENCES [Recipe] ([Id])
GO
