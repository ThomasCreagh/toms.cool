package controllers

import (
	"tomscool/responses"
	"tomscool/configs"
	"tomscool/models"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/labstack/echo/v4"
	//"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/net/context"
)

var formCollection *mongo.Collection = configs.GetCollections(configs.DB, "forms")
var validate = validator.New()

func ApiResponse(c echo.Context) error {
	return c.String(http.StatusOK, "This is the toms.cool api responding successfully!")
	// ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	// var forms []models.Form
	// defer cancel()

	// result, err := formCollection.Find(ctx, bson.M{})

	// if err != nil {
	// 	return c.JSON(http.StatusInternalServerError, responses.FormResponse {
	// 		Status: http.StatusInternalServerError,
	// 		Message: "error",
	// 		Data: &echo.Map{"data": err.Error()},
	// 	})
	// }

	// // reading db
	// defer result.Close(ctx)
	// for result.Next(ctx) {
	// 	var singleForm models.Form
	// 	if err := result.Decode(&singleForm); err != nil {
	// 		return c.JSON(http.StatusInternalServerError, responses.FormResponse {
	// 			Status: http.StatusInternalServerError,
	// 			Message: "error",
	// 			Data: &echo.Map{"data": err.Error()},
	// 		})
	// 	}
	// 	forms = append(forms, singleForm)
	// }
	// return c.JSON(http.StatusOK, responses.MessageResponse {
	// 	Message: "this is untabs api. Form count is:",
	// 	Amount: len(forms),
	// })
}

func CreateForm(c echo.Context) error {
	// if err := c.Request().Header.Get("authorization"); err != configs.GetEnv("auth") {
	// 	return c.JSON(http.StatusUnauthorized, responses.FormResponse {
	// 		Status: http.StatusUnauthorized,
	// 		Message: "incorrect authorization credentials",
	// 		Data: nil,
	// 	})
	// }

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	var form models.Form
	defer cancel()
	
	// validate the requestbody
	if err := c.Bind(&form); err != nil {
		return c.JSON(http.StatusBadRequest, responses.FormResponse {
			Status: http.StatusBadRequest,
			Message: "error",
			Data: &echo.Map{"data": err.Error},
		})
	}

    //use the validator library to validate required fields
    if validationErr := validate.Struct(&form); validationErr != nil {
    	return c.JSON(http.StatusBadRequest, responses.FormResponse {
			Status: http.StatusBadRequest,
			Message: "error",
			Data: &echo.Map{"data": validationErr.Error()},
		})
    }

	newForm := models.Form	{
		ID: 			primitive.NewObjectID(),
		Firstname:	 	form.Firstname,
		Lastname:		form.Lastname,
		Email:			form.Email,
		PhoneNumber:	form.PhoneNumber,
		Message:		form.Message,
	}


	result, err := formCollection.InsertOne(ctx, newForm)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, responses.FormResponse {
			Status: http.StatusInternalServerError,
			Message: "error",
			Data: &echo.Map{"data": err.Error()},
		})
	}

	return c.JSON(http.StatusCreated, responses.FormResponse {
		Status: http.StatusCreated,
		Message: "success",
		Data: &echo.Map{"data": result},
	})
}