package responses

import (
	"github.com/labstack/echo/v4"
)

type FormResponse struct {
	Status	int			`json:"status" bson:"status"`
	Message	string		`json:"message" bson:"message"`
	Data	*echo.Map	`json:"data" bson:"data"`
}