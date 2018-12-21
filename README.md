# Petful (Arun and Sam)

## About Petful

Petful is a web application for adopting pets online. Users may either choose to adopt a cat or dog; no other pets are hosted on the platform. All adoptions are done on a first-in, first-out basis, meaning that the pets kept on the platform for the longest period of time must be adopted first. Dogs and cats are kept in separate queues stored on our server. Users have a choice of either adopting a cat or dog, but have no choice in which dog or cat they wish to adopt.

## Our API

There are two routes for our API, '/api/dog' and '/api/cat', and two functionalities, GET and DELETE. GET retrieves the first pet in the queue for either dogs or cats. GET occurs whenever the client is refreshed or whenever a pet is adopted and the client needs to retrieve the next pet in the queue. GET operates by using peek() on the queue, so it does not alter it's state at all. DELETE works by dequeueing the very first pet in the queue for either dogs or cats. Pressing the adopt button sets off the DELETE method for the queue.

## Tech Stack

### Front-End

- React
- Redux
- Redux Thunk

### Back-End

- Node
- Express
