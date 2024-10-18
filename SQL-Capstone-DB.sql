USE [master]

IF db_id('Capstone') IS NULL  
  CREATE DATABASE [Capstone]
GO

USE [Capstone]
GO
DROP TABLE IF EXISTS [Comment];
DROP TABLE IF EXISTS [Review];
DROP TABLE IF EXISTS [Rating];
DROP TABLE IF EXISTS [SavedRecipe];
DROP TABLE IF EXISTS [Recipe];
DROP TABLE IF EXISTS [UserProfile];
DROP TABLE IF EXISTS [Flavor];
DROP TABLE IF EXISTS [Category];
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

CREATE TABLE [Recipe] (
  [Id] int PRIMARY KEY IDENTITY,
  [Title] varchar(100) NOT NULL,
  [Ingredients] text NOT NULL,
  [Directions] text NOT NULL,
  [ImageUrl] varchar(255),
  [CreateDateTime] datetime NOT NULL,
  [FlavorId] int NOT NULL,
  [CategoryId] int NOT NULL,
  [UserProfileId] int NOT NULL,
  CONSTRAINT [FK_Recipe_Flavor] FOREIGN KEY ([FlavorId]) REFERENCES [Flavor] ([Id]),
  CONSTRAINT [FK_Recipe_Category] FOREIGN KEY ([CategoryId]) REFERENCES [Category] ([Id]),
  CONSTRAINT [FK_Recipe_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)
GO

CREATE TABLE [SavedRecipe] (
  [Id] int PRIMARY KEY IDENTITY,
  [RecipeId] int NOT NULL,
  [UserProfileId] int NOT NULL,
  CONSTRAINT [FK_SavedRecipe_Recipe] FOREIGN KEY ([RecipeId]) REFERENCES [Recipe]([Id]) ON DELETE CASCADE,
  CONSTRAINT [FK_SavedRecipe_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile]([Id])
)
GO

CREATE TABLE [Rating] (
  [Id] int PRIMARY KEY IDENTITY,
  [StarCount] int,
  [ImageUrl] varchar(255)
)
GO

CREATE TABLE [Review] (
  [Id] int PRIMARY KEY IDENTITY,
  [Subject] varchar(50) NOT NULL,
  [Content] text NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [RatingId] int,
  [RecipeId] int NOT NULL,
  [UserProfileId] int NOT NULL,
  CONSTRAINT [FK_Review_Rating] FOREIGN KEY ([RatingId]) REFERENCES [Rating]([Id]) ON DELETE CASCADE,
  CONSTRAINT [FK_Review_Recipe] FOREIGN KEY ([RecipeId]) REFERENCES [Recipe]([Id]) ON DELETE CASCADE,
  CONSTRAINT [FK_Review_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile] ([Id])
)
GO

CREATE TABLE [Comment] (
  [Id] int PRIMARY KEY IDENTITY,
  [Subject] varchar(50) NOT NULL,
  [Content] text NOT NULL,
  [CreateDateTime] datetime NOT NULL,
  [ReviewId] int NOT NULL,
  [UserProfileId] int NOT NULL,
  CONSTRAINT [FK_Comment_Review] FOREIGN KEY ([ReviewId]) REFERENCES [Review]([Id]),
  CONSTRAINT [FK_Comment_UserProfile] FOREIGN KEY ([UserProfileId]) REFERENCES [UserProfile]([Id])
)
GO
