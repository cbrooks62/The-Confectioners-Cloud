using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Hosting;
using Capstone.Models;
using Capstone.Utils;

namespace Capstone.Repositories
{
    public class FlavorRepository : BaseRepository, IFlavorRepository
    {
        public FlavorRepository(IConfiguration configuration) : base(configuration) { }
        public List<Flavor> GetAllFlavors()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = " SELECT Id, Name FROM Flavor ORDER BY Name ASC";
                    var reader = cmd.ExecuteReader();

                    var flavors = new List<Flavor>();
                    while (reader.Read())

                    {
                        flavors.Add(new Flavor()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                        });
                    }
                    reader.Close();
                    return flavors;
                }

            }
        }
        public Flavor GetFlavorById(int id)
        {
            using (SqlConnection conn = Connection)
            {
                {
                    conn.Open();

                    using (SqlCommand cmd = conn.CreateCommand())
                    {
                        cmd.CommandText = @"SELECT Id, [Name] FROM Flavor WHERE Id = @id";
                        DbUtils.AddParameter(cmd, "@Id", id);

                        var reader = cmd.ExecuteReader();


                        if (reader.Read())
                        {
                            Flavor flavor = new Flavor
                            {
                                Id = DbUtils.GetInt(reader, "Id"),
                                Name = DbUtils.GetString(reader, "Name"),
                            };
                            reader.Close();
                            return flavor;

                        }
                        reader.Close();
                        return null;
                    }
                }
            }
        }
        public void Add(Flavor flavor)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        INSERT INTO Flavor (Name)
                        OUTPUT INSERTED.ID
                        VALUES (@Name)
                                       ";
                    DbUtils.AddParameter(cmd, "@Name", flavor.Name);

                    flavor.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
        public void Update(Flavor flavor)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        UPDATE Flavor
                           SET Name = @Name
                        WHERE Id = @Id;
                                       ";
                    DbUtils.AddParameter(cmd, "@Name", flavor.Name);
                    DbUtils.AddParameter(cmd, "@Id", flavor.Id);

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
                    cmd.CommandText = "DELETE FROM Flavor WHERE Id = @Id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
