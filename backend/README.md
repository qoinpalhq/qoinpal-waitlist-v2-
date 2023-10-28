
# Before you start

## styling
- Below are the styles extracted from the figma file.
- Inspect the `index.css` file. Use those classes for Typography. Text responsiveness already done.
- Also inspect `tailwind.config.js` file. Added the classes for the colors and stuff.

## Workflow
- Fork repo.
- Clone
- Create new branch
- Work
- Add, commit and please please please pull upstream again (to avoid conflict)
- Push to your branch on origin (Not to main!!)
- send pull request.
-  Also please push your code regularly, preferably before resting.
- Lets do this!


# Colors

## Theme
- Primary(black): #111111
- secondary (cream): #FAFFE6
- accent (green): #CCFB00

## Background
light neutral - #F0F0F0


## Text colors
- white - #FFFFFF. 
- black - #111111. 
- light gray - #8C8C8C
- dark gray - #1F1F1F
- gradient: from #CAF900 to #FF7A00

# Typography
## family - `red hat display`
## weight - regular,bold

## desktop
- h1 - 3.625rem (58px)
- h2 - 2.25rem (36px)
- h3 - 1.5rem (24px)
- h4 - 1.25rem (20px)
+ subtitle - 1.125rem (18px)
+ Body, large button and placeholder - 1rem 
- small (and small button) - 0.875rem (14px)
- tiny - 0.75rem (12px)

## Mobile
- h1 -1.75rem (28px)
- h2 - 1.25rem (20px)
- <!-- h3 - 1.5rem (24px)
 -->
- h4 - 1rem (16px)
- subtitle - 0.875rem (14px)
- large button - 0.875rem (14px)
- Body and placeholder - 0.75rem (12px)
- <!-- small - 0.875rem (14px) -->
- tiny - 0.5rem(8px)
=======
## To start the project 
### run "go mod download"

## .env file
### Create a .env file in the root of your project
#### follow this format
PORT = 
DB_PASSWORD=
DB_HOST=
DB_USER=
DB_NAME=
DB_PORT=
DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}

## In case you have a docker installed on your machine
### run "docker-compose up" to start a docker container for this project

## To start the main entry point
### run "go run main.go"

## Api endpoint to query

###    Create a user with all the fields(name, email and password)
####   POST  localhost://8080/api/waitlist

###    create a user with ordinary email
####   POST  localhost://8080/api/waitlist/user

###    update user detail as email is unique and validation is done if email already exist
 ####  PUT  localhost://8080/api/waitlist/user


 ###  get all users details 
 #### GET   localhost://8080/api/waitlist

## Database Type
### Postgres
#### You can manually set your postgres configuration in .env file if you have postgresql installed on your machine.

## Request body parameters
### Name and Email is required


