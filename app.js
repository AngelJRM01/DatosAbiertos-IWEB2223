const express = require("express");
const app = express();
const mongoose = require("mongoose");

const uri = "mongodb+srv://SwishHouse:SwishHouse@iweb.f2z0lzs.mongodb.net/?retryWrites=true&w=majority";

async function connectMongoose(){
    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
        console.log("mongoose connected...")
    })
}

async function initialLoad(){
    await connectMongoose();
}

initialLoad();