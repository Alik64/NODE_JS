# REST API for a CrossTraining Application.

CRUD for WOD's (Workouts of the Day)

## ARCHITECTURE

Request => Router => Controller

Response <= Router <= Controller

## LAYERS

### ROUTER

Inside our router we will call a different method handled by our controller for each different endpoint.

### CONTROLLER

MongoDB management

### SERVICES

MULTER - static files control

ENVIRONEMENT
process.env.REACT_APP_MONGO_DB_URL
process.env.REACT_APP_SECRET
