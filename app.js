const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const user = require('./user');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('working');
})

app.post('/sendData', (req, res) => {
    user.create({
        name: req.body.name,
        post: req.body.msg,
    }).then(u => {
        console.log(u);
    })
})


app.get('/getdata', (req, res) => {
    user.find().then(post => {
        res.json({ post: post })
    })
})

app.get('/Delete/:id', (req, res) => {
    user.findByIdAndRemove({ _id: req.params.id }, function (err, user) {
        if (err) res.json(err);
        else res.json('Successfully removed');
        user.save();
    });

})

app.post('/Edit/:id', function (req, res) {
    console.log(req.params.id);
    console.log(req.body);

    user.findOneAndUpdate({_id:req.params.id}, {$set:{post:req.body.post}}, {new: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }

        else if(!doc) {
            console.log('user not found');
        }
    
        console.log(doc);
    });
    

});
   

app.listen(5500, () => {
    console.log('listening on port 5500');
})