import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
import User from '../models/User';

import passport from 'passport';
import bcrypt from 'bcryptjs';
import { Strategy } from 'passport-local';

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH || "../build"));

app.use(passport.initialize());

passport.use(new Strategy({ session: false },
  function (username, password, callback) {
    User.findOne({
        username: username
        }).select('username password timer').exec((err, user) => {

            console.log("WHat is USER HERE?", user)
            if (err) {
                return callback(err);
            }

            if (!user) {
                return callback(null, false, {
                    message: 'Incorrect Username'
                });
                
            }

            user.validatePassword(password, (err, isValid) => {
                if (err) {
                    return callback(err);
                }

                if (!isValid) {
                    return callback(null, false, {
                        message: 'Incorrect Password'
                    });
                }


                return callback(null, user);
            });
        }); 
}));

app.get('/api/user/:username', (req, res) => {
    User.findOne({ username: req.params.username }, (err, user) => {

        if (err) {
            console.error(err);
            return res.status(500).json({message: "Internal Server Error"});
        }

        if (user) {
            return res.status(200).json({user});
        } 

        return res.status(404).json({message: "User not found"});

    });

});

app.post('/api/user/:username', jsonParser, (req, res) => {

    User.findOne({ username: req.body.username }, (err, user) => {

        if (err) {
            console.error(err);
            return res.status(500).json({message: "Internal Server Error"});
        }

        if (!user) {
            console.error(err);
            return res.status(404).json({message: "User not found"});
        }


        if (req.body.breaks) {

            user.timer.breaks.push(req.body.breaks);
        }

        if (req.body.work) {

            user.timer.work.push(req.body.work);
        }

        user.save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }

            return res.status(200).json({user});
        });

    });
});

app.post('/api/login', jsonParser, passport.authenticate('local', { session: false }), (req, res) => {
    res.status(201).json({user: req.user});
});

app.post('/api/user', jsonParser, (req, res) => {
    User.findOne({ username: req.body.username }).select('username timer').exec((err, user) => {
        if (user) {

            return res.status(400).json({message: 'User does exist'});
        } 

        user = new User({
            username: req.body.username,
            timer: {
                breaks: [null],
                work: [null]
            }
        });

        console.log(user, "CREATED THIS USER");

        user.hashPassword(req.body.password, (err, hashPassword) => {
            if (err) {
                return res.status(500).json({
                    message: 'Internal Server Error'
                });
            }

            user.password = hashPassword;

            user.save((err, user) => {
                if (err) {
                    return res.status(500).json({
                        message: 'Internal Server Error'
                    });
                }

                return res.status(201).json({user})

            });
        });
    });
});

app.delete('/api/user/:username', (req, res) => {
    User.findOneAndRemove(req.params.username, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).json({message: "Internal Server Error"})
        }

        if (user) {
            return res.status(200).json({});
        } 

        return res.status(404).json({message: "User not found"})
    })
})

function runServer(callback) {
    console.log("BEGIN")
    mongoose.connect(config.DATABASE_URL, (err) => {
        if (err && callback) {
            return callback(err);
        }

        

        app.listen(config.PORT, process.env.IP, () => {
            console.log(`Listening on localhost: ${config.PORT}`);
            if (callback) {
                callback();
            }
        });

    });
}

if (require.main === module) {
    runServer((err) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: 'Internal Service Error'});
        }
    });
}


exports.app = app;
exports.runServer = runServer;