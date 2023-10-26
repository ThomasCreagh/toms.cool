package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Form struct {
	ID          primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Firstname   string             `json:"firstname,omitempty" bson:"firstname,omitempty"`
	Lastname    string             `json:"lastname,omitempty" bson:"lastname,omitempty"`
	Email       string             `json:"email,omitempty" bson:"email,omitemptyl"`
	PhoneNumber string             `json:"phone_number,omitempty" bson:"phone_number,omitempty"`
	Message	    string			   `json:"message,omitempty" bson:"message,omitempty"`
}