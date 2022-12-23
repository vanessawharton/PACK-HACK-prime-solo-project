
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "trips" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (255) UNIQUE NOT NULL,
    "start_date" DATE NOT NULL,
    "end_date" DATE NOT NULL,
    "location" TEXT(255),
    "packing_list_id" INT REFERENCES "packing_lists",
    "todo_list_id" INT REFERENCES "todo_lists",
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "packing_lists" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (255) NOT NULL
);

CREATE TABLE "packing_list_items" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (255) NOT NULL,
    "isPacked" BOOLEAN,
    "isToDo" BOOLEAN,
    "packing_list_id" INT REFERENCES "packing_lists"
);

CREATE TABLE "todo_lists" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (255) NOT NULL
);

CREATE TABLE "todo_items" (
    "id" SERIAL PRIMARY KEY,
    "text" VARCHAR (255) NOT NULL,
    "isComplete" BOOLEAN,
    "todo_list_id" INT REFERENCES "todo_lists",
    "fromPackingList" BOOLEAN
);