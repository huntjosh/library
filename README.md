# Renti library app

## Notes

I timeboxed it to 10 hours total. This is my first time setting up a node app, so I lost a little bit of time to figuring out a setup for that.

The scope that I've completed is:
Books directory (hooked up to the backend)
Book details (hooked up to the backend)
Borrowed books directory (hooked up to the backend)
Checkout a book (mocked)
Currently there is no user management or login, it's all guest.

With more time I would:
Implement the remaining features

- Author's biography
- List of bookworms
- Mark books as returned
- Set how long books are checked out for
- Account creation

Role based permissions, backend returns a role for a user and the frontend could use some kind of hook to access the current role and check if it should hide/show content.

Don't fetch up front all books, borrowed books, only the first page and then fetch the subsequent page when going to the next page.

Tests
Frontend

- React testing library to test events and visual behaviour

Backend

- Unit tests
- Integration tests

## Run the server

(Apologies for not being containerized, I didn't have time)

1. Install mongodb https://www.mongodb.com/try/download/community?tck=docs_server
2. cd server
3. npm install
4. npm run seed-db
5. npm start

## Run the client

1. cd client
2. npm install
3. npm start
