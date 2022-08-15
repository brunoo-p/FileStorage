using MongoDB.Driver;


namespace Infrastructure.Database
{
    public class DbContext
    {
        public IMongoDatabase database;
        public DbContext()
        {
            try
            {
                /*var client = new MongoClient("mongodb://root:exemple@mongo");*/
                var client = new MongoClient("mongodb://brunoo-p:false@cluster-shard-00-00.oyyye.mongodb.net:27017,cluster-shard-00-01.oyyye.mongodb.net:27017,cluster-shard-00-02.oyyye.mongodb.net:27017/database?ssl=true&replicaSet=atlas-b0z4pc-shard-0&authSource=admin&retryWrites=true&w=majority");
                database = client.GetDatabase("FileStorage");

            }
            catch ( Exception ex )
            {
                throw new MongoException("It wasn't possible connect to database", ex);
            }
        }
    }
}
