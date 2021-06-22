# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
    REST API services developed using express and mongoose, to handle todo list application with React.js frontend
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
    express, mongoose, nodemon
* Database configuration
    use local mongodb server & compass GUI
* How to run tests
    ***GET TODO ENDPOINT***
        GET ->http://localhost:3000/todos
            Res: [
                    {
                        "completed": true,
                        "_id": "60d2345bb6284018d078ba0f",
                        "task": "eating",
                        "__v": 0
                    },
                    {
                        "completed": true,
                        "_id": "60d234973b09113b6c067732",
                        "task": "loving",
                        "__v": 0
                    }
                ]
    
    ***CREATE TODO ENDPOINT***
       POST -> http://localhost:3000/todos
            Body: {
                "task": "loving",
                "completed": true
            }
            Res: {
                "completed": true,
                "_id": "60d234973b09113b6c067732",
                "task": "loving",
                "__v": 0
            }

     ***UPDATE TODO ENDPOINT***
        PUT -> http://localhost:3000/todos/60d2338e1f122f20980cdf3c
            Body: {
                "completed": true
            }
            Res: {
                "completed": true,
                "_id": "60d2338e1f122f20980cdf3c",
                "task": "reading",
                "__v": 0
            }


    ***DELETE TODO ENDPOINT***
        DELETE -> http://localhost:3000/todos/60d2338e1f122f20980cdf3c
            Res: "todo deleted!"

* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact