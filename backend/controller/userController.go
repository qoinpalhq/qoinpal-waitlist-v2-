package controller

import (
	"log"

	"github.com/ayowilfred95/database"
	"github.com/ayowilfred95/model"
	"github.com/gofiber/fiber/v2"
	"github.com/go-playground/validator/v10"
	"gorm.io/gorm"
	 "fmt"

)

var validate = validator.New()


type user struct {
	type user struct {
    Name        string `json:"name" validate:"required"`
    Email       string `json:"email" validate:"required,email"`
    PhoneNumber string `json:"phoneNumber"`
}

}

type ValidationErrors struct {
    FieldErrors map[string]string
}


func CreateUser(c *fiber.Ctx) error {
    // Get data from the req body and validate the body
    // We store the data first in a struct
    var body user
    if err := c.BodyParser(&body); err != nil {
        log.Println("Error parsing request body:", err)
        return c.Status(400).JSON(fiber.Map{
            "error": "Invalid body",
        })
    }

	validationErrors := ValidationErrors{FieldErrors: make(map[string]string)}

	if err := validate.Struct(body); err != nil {
        for _, err := range err.(validator.ValidationErrors) {
            field := err.Field()
      

            // Define custom error messages for each field
			
			customErrorMessages := map[string]string{
				"name":  "Name is required",
				"email": "Email is required and must be valid",
			}
            customErrorMsg, ok := customErrorMessages[field]
            if ok {
                validationErrors.FieldErrors[field] = customErrorMsg
            } else {
                validationErrors.FieldErrors[field] = fmt.Sprintf("%s is invalid", field)
            }
        }


        log.Println("Validation errors:", validationErrors.FieldErrors)

        return c.Status(400).JSON(fiber.Map{
            "error": "Validation error",
            "field_errors": validationErrors.FieldErrors,
        })
    }



    // Check if the user with the provided email exists in the database
	var existingUser model.User
    result := database.DB.Where("email = ?", body.Email).First(&existingUser)

    if result.Error != nil {
        if result.Error == gorm.ErrRecordNotFound {
            // The email does not exist, create a new user
            return createNewUser(c, &body)
        } else {
            log.Println("Database error:", result.Error)
            return c.Status(500).JSON(fiber.Map{
                "error": "Database error",
            })
        }
    }

    // The email exists, update the user
    return updateUser(c, &body, &existingUser)
}


func createNewUser(c *fiber.Ctx, body *user) error {
    // Create a new user object with data from the request data
    newUser := &model.User{Name: body.Name, Email: body.Email, PhoneNumber: body.PhoneNumber}

    // Create the user in the database
    result := database.DB.Create(newUser)

    if result.Error != nil {
        log.Println("Database error:", result.Error)
        return c.Status(500).JSON(fiber.Map{
            "error": "Failed to create user",
        })
    }

    response := fiber.Map{
        "name": body.Name,
        "email": body.Email,
        "phoneNumber": body.PhoneNumber,
    }
    return c.Status(201).JSON(response)
}

func updateUser(c *fiber.Ctx, body *user, existingUser *model.User) error {
    // Update the existing user with data from the request
    existingUser.Name = body.Name
    existingUser.PhoneNumber = body.PhoneNumber

    // Update the user in the database
    result := database.DB.Save(existingUser)

    if result.Error != nil {
        log.Println("Database error:", result.Error)
        return c.Status(500).JSON(fiber.Map{
            "error": "Failed to update user",
        })
    }

    response := fiber.Map{
        "name": existingUser.Name,
        "email": existingUser.Email,
        "phoneNumber": existingUser.PhoneNumber,
    }
    return c.Status(200).JSON(response)
}



// create a user with just email input field
func CreateUserWithEmail(c *fiber.Ctx)error{
		// Get data from the req body and validate the body
	// we store the data first in a struct
	var body user
	if err := c.BodyParser(&body); err != nil {
		log.Println("Error parsing request body:", err)
		return c.Status(400).JSON(fiber.Map{
			"error": "Invalid body",
		})
	}

	// check if a user with the same email already exists in the database
	var existingUser model.User
	result := database.DB.Where("email=?", body.Email).First(&existingUser)
	if result.Error == nil {
		// user with the same email already exists
		return c.Status(400).JSON(fiber.Map{
			"error": "User with this email already exists",
		})
	}

		// craete  a new user object with data from the request data
		newUser := &model.User{Email: body.Email}

		// create the user in the database
	result = database.DB.Create(newUser) 

	if result.Error != nil {
		log.Println("Database error:", result.Error)
		return c.Status(500).JSON(fiber.Map{
			"error" : "Failed to create user",
		})
	}


		response := fiber.Map{
			"email":body.Email,
		}
		return c.Status(201).JSON(response)
}



// Get all users created
func GetUsers(c *fiber.Ctx)error{
	// get all users
// store the return data from the daabase in a slice
	var users []model.User

	result := database.DB.Find(&users)

	if result.Error !=nil {
		return c.Status(401).JSON(fiber.Map{
			"error":" error fetching users data from database",
		})
	} 
	
		return c.Status(200).JSON(fiber.Map{
			"users": users,
		})
}


// delete users 

// func DeleteUser(c *fiber.Ctx)error{
// 	// 
	

// }