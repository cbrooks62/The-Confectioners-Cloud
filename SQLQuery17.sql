SELECT * FROM UserProfile;

SELECT * FROM Review

SELECT sr.Id AS SavedRecipeId, sr.RecipeId, sr.UserProfileId AS SavedByUserId,
	   r.Id, r.Title, r.Ingredients, r.Directions, r.ImageUrl, r.CreateDateTime,
       r.FlavorId, r.CategoryId, r.UserProfileId AS RecipeAuthor,
	   f.[Name] AS FlavorName, 
	   c.[Name] AS CategoryName, 
	   u.UserName AS UserName, u.FirstName, u.LastName, u.Email, u.ImageUrl
FROM Recipe r
    INNER JOIN SavedRecipe sr ON r.Id = sr.RecipeId
    LEFT JOIN Flavor f ON r.FlavorId = f.Id
	LEFT JOIN Category c ON r.CategoryId = c.Id
    LEFT JOIN UserProfile u ON r.UserProfileId = u.Id
WHERE sr.UserProfileId = 1 AND r.UserProfileId = u.Id



UPDATE UserProfile
   SET UserName = BuffyFan1999'
 WHERE Id =2




 



	 SELECT rv.Id, rv.[Subject], rv.Content, rv.CreateDateTime, rv.RatingId, rv.RecipeId, rv.UserProfileId,
                                rt.StarCount AS ReviewRating,
                                rc.Title AS RecipeTitle,
                                u.UserName AS UserName, u.FirstName, u.LastName
                        FROM Review rv
                         LEFT JOIN Rating rt ON rv.RatingId = rt.Id
                         LEFT JOIN UserProfile u ON rv.UserProfileId = u.Id
                         LEFT JOIN Recipe rc ON rv.RecipeId = rc.Id
                         WHERE RecipeId = 4
                         ORDER BY rv.CreateDateTime DESC

						 SELECT rv.Id, rv.[Subject], rv.Content, rv.CreateDateTime, rv.RecipeId, rv.UserProfileId,
                                rc.Title AS RecipeTitle,
                                u.UserName AS UserName, u.FirstName, u.LastName
                        FROM Review rv
                         LEFT JOIN UserProfile u ON rv.UserProfileId = u.Id
                         LEFT JOIN Recipe rc ON rv.RecipeId = rc.Id
                         WHERE RecipeId = 1
                         ORDER BY rv.CreateDateTime DESC

                         SELECT * FROM SavedRecipe WHERE UserProfileId =1





