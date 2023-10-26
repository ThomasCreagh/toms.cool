package main

import (
	"fmt"
	"tomscool/configs"
	"tomscool/routes"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	fmt.Println("Starting...")
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig {
		AllowOrigins: []string{"http://localhost:3000", "https://toms.cool"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	//run DB
	configs.ConnectDB()

	//routes
	routes.UserRoute(e)

	e.Logger.Fatal(e.Start(":8080"))
}
