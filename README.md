# Node-Sequelize-SQLite
This is a small CRUD API using Express, Sequelize, Faker for data, and SQLite

## RUNNING THE PROJECT
```
npm i
node app.js

if Sequelize throws a SQLite  package error, try npm rebuild
```

```
GET("/") // get all the members
GET("/:id") // get a specific member
POST("/create") // create a member
PUT("/update/:id") // update a member
DELETE("/destroy/:id") // delete a member
```
