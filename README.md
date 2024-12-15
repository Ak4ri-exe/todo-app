# ToDoApp
A simple to do app implementation

## Athentication steps

- Register a user:
  - get username, email and password (from json file)
  - salt/hash user password
  - store user information into database
  - return success
- Login
  - find user by username value
  - if found in DB compare passwords 
  - if the passwords match send JSON Web Token (JWT)
