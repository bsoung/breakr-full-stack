# Breakr

Interval training to increase mindful productivity while working, stressing the importance of taking regular breaks. With Breakr set a timer for each and yield extraordinary results! 



## Motivation

* Studies show that taking a break once an hour increases our work productivity. After a while, our brain becomes numb to constant stimulation and it becomes harder to focus. A break can serve as creative fuel so that we are able to come back to the task at hand renewed and reenergized. Breakr can assure that happens.
* Breakr allows users to set an interval for their work time, after which a popup notification and sound will alert the user that it is time to take a break. Set a new timer for your break period and be alerted when it is time to get back to work.
* Users have the option to create an account and login. In doing so, they will gain access to their statistics to track their work and break times.



## Technologies

* React
* Redux
* CSS
* MongoDB
* Express
* Passport
* Gulp
* Webpack / Babel

## Wireframes

![breakr](http://i.imgur.com/u0eMHzR.png "Breakr interface")
![breakr](http://i.imgur.com/dFXShGY.png "Breakr interface")


## API Reference

* GET /api/user    :: returns all users who have been created
* POST /api/user   :: creates a new user with a username, password, and timer object
* POST /api/login  :: authenticates the user and log the user in


## Develop

* Clone the repository.
* Run npm install.
* Enter 'npm run dev' into the terminal.
* Visit localhost:8080


### Contributers
* bsoung
* dennellmarie
* emontecalvo


##### Directory layout

```
.
├── client      Client-side code
│   ├── assets  Timer Sound
│   ├── js      JavaScript
│   └── scss    SASS stylesheets
├── server      Server-side code
└── test        Tests
    ├── client  Client tests
    └── server  Server tests
```


