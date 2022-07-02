# REST API for a Triple Triad Game

Create, update and delete Characters

## ARCHITECTURE

Request => Router => Controller => Service Layer => Data Access Layer

Response <= Router <= Controller <= Service Layer <= Data Access Layer

## LAYERS

### ROUTER

Inside our router we will call a different method handled by our controller for each different endpoint.

### CONTROLLER

Inside our workout controller we extract the request body for creating a new workout and we pass it on to the workout service.

### SERVICE

Inside our service methods we'll be handling our business logic like transforming data structures and communicating with our Database Layer.

### DATA ACCESS

Database and a collection of methods that actually handle the database interaction.
