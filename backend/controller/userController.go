package controller

import (
	"log"

	"github.com/ayowilfred95/database"
	"github.com/ayowilfred95/model"
	"github.com/gofiber/fiber/v2"
)

type user struct {
	Name  string `json:"name"`
	Email string  `json:"email"`
}

func CreateUser(c *fiber.Ctx) error {
	// Get data from the req body and validate the body
	// we store the data first in a struct
	var body user
	if err := c.BodyParser(&body); err != nil {
		log.Println("Error parsing request body:", err)
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid body",
		})
	}

	// craete  a new user object with data from the request data
	newUser := &model.User{Name: body.Name, Email: body.Email}

	// create the user in the database
	result := database.DB.Create(newUser) 

	if result.Error != nil {
		log.Println("Database error:", result.Error)
		return c.Status(500).JSON(fiber.Map{
			"error" : "Failed to create user",
		})
	}

	response := fiber.Map{
		"name":body.Name,
		"email":body.Email,
	}
	return c.Status(201).JSON(response)

}
