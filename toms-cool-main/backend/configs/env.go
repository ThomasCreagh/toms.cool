package configs

import (
	//"log"
	"os"
	"strings"

	//"github.com/joho/godotenv"
)

func GetEnv(key string) string {
	//err := godotenv.Load() // OFF IN PRODUCTION
	//if err != nil {
//		log.Fatal("Error loading .env file!")
//	}
	return os.Getenv(strings.ToUpper(key))
}
