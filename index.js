const express = require('express')
const user = require('./models/userModel')
const {connection} = require('./DB/db')
const mongoose = require('mongoose')
const routes = require('./routes/index')
const app = express()

app.use(express.json())

app.use('/', routes)

app.use('/', routes)

app.delete('/delete/:userName', async (req,res) => {
    const {userName} = req.params
    const check =  await user.deleteOne({userName})
    if(check){
        res.status(200).send("Deleted successfully")
    }
})

app.put('/update/:userName', async (req, res) => {
    const { userName } = req.params;
    const firstName = req.body;
    try {
        const result = await user.updateOne({ userName }, { $set: firstName });
        if (result) {
            res.status(200).send("User updated successfully");
        } else {
            res.status(404).send("User not found or no changes made");
        }
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get('/aggregate/lastNameCounts', async (req, res) => {
    try {
        const results = await user.aggregate([
            { $match: { firstName: "dsjgh" } }
        ]);

        res.status(200).json(results);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }})

const startServer = async () => {
    await connection()
    app.listen(3000, () => {
        console.log("Server is listening ...");
        
    })
} 

startServer()