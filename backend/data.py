from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

db_url = "mongodb+srv://deployuser:3N07OWmmOq9Y4Rks@dormwarsdb.rn9gdyv.mongodb.net/?retryWrites=true&w=majority"


class DatabaseConnection:
    def __init__(self):
        self.client = MongoClient(db_url, server_api=ServerApi("1"), tls=True)
        try:
            self.client.admin.command("ping")
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print(e)
        self.db = self.client.get_database("DormCounts")

    def dorms(self):
        return self.db.get_collection("Droms")

    def challenges(self):
        return self.db.get_collection("challenges")
    
    def reviews(self):
        return self.db.get_collection("reviews")
