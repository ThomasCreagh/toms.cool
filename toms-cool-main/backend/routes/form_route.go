package routes

import (
	"tomscool/controllers"

	"github.com/labstack/echo/v4"
)

func UserRoute(e *echo.Echo) {
	e.GET("/", controllers.ApiResponse)
	e.POST("/forms", controllers.CreateForm)
}