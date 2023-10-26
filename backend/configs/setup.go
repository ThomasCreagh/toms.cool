package configs

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)


func ConnectDB() *mongo.Client	{
	client, err := mongo.NewClient(options.Client().ApplyURI(GetEnv("mongouri")))
	if err != nil {
		log.Fatal(err)
	}
 
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	err = client.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to Database successfully...")
	fmt.Println("The Database is ready to go! :)")
	return client
}

// client instance
var DB *mongo.Client = ConnectDB()

// Getting database connections
func GetCollections(client *mongo.Client, collectionName string) *mongo.Collection {
	collection := client.Database("toms-cool").Collection(collectionName)
	return collection
}