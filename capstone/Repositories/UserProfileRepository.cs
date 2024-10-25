using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Capstone.Models;
using Capstone.Utils;

namespace Capstone.Repositories
{
    public class UserProfileRepository : BaseRepository, IUserProfileRepository
    {
        public UserProfileRepository(IConfiguration configuration) : base(configuration) { }

        public List<UserProfile> GetAllUsers()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, UserName, FirstName, LastName, Email, ImageUrl 
                          FROM UserProfile 
                      ORDER BY UserName ASC    
                                       ";
                    var reader = cmd.ExecuteReader();
                    var userProfiles = new List<UserProfile>();

                    while (reader.Read())
                    {
                        userProfiles.Add(new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "id"),
                            UserName = DbUtils.GetString(reader, "userName"),
                            FirstName = DbUtils.GetString(reader, "firstName"),
                            LastName = DbUtils.GetString(reader, "lastName"),
                            Email = DbUtils.GetString(reader, "email"),
                            ImageUrl = DbUtils.GetString(reader, "imageUrl"),

                        });
                    }
                    reader.Close();
                    return userProfiles;
                }
            }
        }
        public UserProfile GetUserProfileById(int id) 
        {
            using (var conn = Connection) 
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                        SELECT Id AS UserProfileId, UserName, FirstName, LastName, Email, ImageUrl
                          FROM UserProfile
                         WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@Id", id);

                    UserProfile userProfile = null;
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                     
                         userProfile = new UserProfile()
                         {
                            Id = DbUtils.GetInt(reader, "UserProfileId"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                         };
                        
                    }
                    reader.Close();
                    return userProfile;

                }

            }
        }
        public UserProfile GetByEmail(string email)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id AS UserProfileId, FirstName, LastName, UserName, Email, ImageUrl
                          FROM UserProfile
                         WHERE Email = @Email
                            ";
                    DbUtils.AddParameter(cmd, "@email", email);

                    UserProfile userProfile = null;
                    var reader = cmd.ExecuteReader();
                    if (reader.Read()) 
                    {
                        userProfile = new UserProfile()
                        {
                            Id = DbUtils.GetInt(reader, "UserProfileId"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            ImageUrl = DbUtils.GetString(reader, "ImageUrl")
                        };
                    }
                    reader.Close();
                    return userProfile;
                }
            }
        }
        public void Add(UserProfile profile)
        {
            using (var conn = Connection) 
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                        INSERT INTO UserProfile (UserName, FirstName, LastName, Email, ImageUrl)
                        OUTPUT INSERTED.ID
                        VALUES (@UserName, @FirstName, @LastName, @Email, @ImageUrl)
                                       ";
                    DbUtils.AddParameter(cmd, "@UserName", profile.UserName);
                    DbUtils.AddParameter(cmd, "@FirstName", profile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", profile.LastName);
                    DbUtils.AddParameter(cmd, "@Email", profile.Email);
                    DbUtils.AddParameter(cmd, "@ImageUrl", profile.ImageUrl);

                    profile.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(UserProfile profile) 
        {
            using (var conn = Connection) 
            { 
                conn.Open ();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = @"
                        UPDATE UserProfile
                           SET UserName = @UserName,
                               FirstName = @FirstName,
                               LastName = @LastName,
                               Email = @Email,
                               ImageUrl = @ImageUrl
                         WHERE Id = @Id 
                                       ";
                    DbUtils.AddParameter(cmd, "@UserName", profile.UserName);
                    DbUtils.AddParameter(cmd, "@FirstName", profile.FirstName);
                    DbUtils.AddParameter(cmd, "@LastName", profile.LastName);
                    DbUtils.AddParameter(cmd, "@Email", profile.Email);
                    DbUtils.AddParameter(cmd, "@ImageUrl", profile.ImageUrl);
                    DbUtils.AddParameter(cmd, "@Id", profile.Id);

                    cmd.ExecuteNonQuery();

                }
            }
        }
        public void Delete(int id) 
        {
            using (var conn = Connection) 
            {
                conn.Open();
                using (var cmd = conn.CreateCommand()) 
                {
                    cmd.CommandText = "DELETE FROM UserProfile WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
