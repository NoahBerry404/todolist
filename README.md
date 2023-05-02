# Project Proposal - Noah Berry, Drew Clutes, Jacob Woods

# Abstract:
Our group’s final project will be a To Do List app. You will be able to create an account, login to your account, and view/edit your list. The list will let you add, check off, and delete items. Each item in the list is required to have a name. Each item can also optionally have a description, a priority (a number), and a deadline (date). When an item is created, it is incomplete, but once an item is “checked off” it will be added to the top of the list of completed tasks (which lies below the main list, grayed out). It will be made with Angular, Express, and Node. It will use MongoDB for storing information about the lists and login info. It will have a register, login, and list page that uses routing.

# System requirements:
* Angular: We are going to implement a component to display/modify a user’s to-do lists, and another one to add items to a to-do list, as well as a header and footer component. 
* NodeJS: We are going to use Node to implement our backend, using http to receive data and connect to our database.
* ExpressJS: we are going to use expressJS to serve as the “buffer” between our frontend and backend, in the form of a RESTful API. This is for greater data security such that users cannot access our database.
* MongoDB: This is the database in which we are going to be using to store our data, such as user login information and the different to-do lists associated with any given user. 
* routing.ts: this file handles all the routes and ensures that the correct component(s) are displayed correctly for the given route
* serviceJS: this file contains the data transfer between components.
* component.css: this is the uniform style sheet that creates a pleasing and symmetric web application. 

# Other Features:
We will implement a login feature that allows the user to create an account to save their to-do lists. they must be able to register, and their data must be saved securely so that they can log in at any time.
