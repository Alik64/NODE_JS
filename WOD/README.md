# REST API for a CrossFit Training Application.

Create, update and delete your WOD's (Workouts of the Day)

## ARCHITECTURE

Request => Router => Controller => Service Layer => Data Access Layer

Response <= Router <= Controller <= Service Layer <= Data Access Layer

## LAYERS

### ROUTER + CONTROLLER

Inside our router we will call a different method handled by our controller for each different endpoint.

### SERVICE

Inside our service methods we'll be handling our business logic like transforming data structures and communicating with our Database Layer.

### DATA ACCESS
