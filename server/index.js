import 'babel-polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import config from './config';
//

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(process.env.CLIENT_PATH));

// our model for storing timer
const Time = mongoose.model('Time', { time: Number });
const BreakTime = mongoose.model('BreakTime', { breakTime: Number });

app.get('/timer', (req, res) => {
    Time.findOne((err, item) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: 'Internal Service Error'});
        }

        res.status(200).json({time: item.time});
    })
    
})

// optional account creation
app.post('/timer', jsonParser, (req, res) => {
    Time.findOne((err, item) => {
        if (err) {
            console.error(err);
            res.status(500).json({message: 'Internal Service Error'});
        }
        console.log('what req body time', req.body)
        item.time = req.body.time;
        item.save((err) => {
            if (err) {
                console.error(err);
            } else {
                res.status(201).json({ time: item.time })
            }
        })
    })
})


function runServer(callback) {
    console.log("BEGIN")
    mongoose.connect(config.DATABASE_URL, (err) => {
        if (err && callback) {
            return callback(err);
        }

        Time.findOne((err, item) => {
            if (item == null) {    
                console.log("Did we create item????", item)
                item = { time: null }
                Time.create(item);
            }
        })

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















