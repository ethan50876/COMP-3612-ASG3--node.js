//  COMP 3612 - ASG 3 - node.js
//  Name:   Ethan Ai
//  Prof:   Randy Connolly
//  Date:   12/11/23
// 
//  File:   This file defines an Express.js server that serves as the backend for an art database API. 
//  API Endpoints:
//       - /api/paintings
//       - /api/galleries
//       - /api/artists
//       - /api/painting/:id
//       - /api/painting/gallery/:id
//       - /api/painting/artist/:id
//       - /api/painting/year/:min/:max
//       - /api/painting/title/:text
//       - /api/painting/color/:name
//       - /api/artists/:country
//       - /api/galleries/:country
//
//  Dependencies:  
//       - Express.js
//       - fs module
//       - path module

const path = require('path');
const  fs = require('fs');
const express = require('express');
const api = express();
const PORT = 4000;
api.listen(PORT, () => console.log("Server is running on port " + PORT));


// path declarations + path merging
const artistsPath = path.join(__dirname, 'artists.json');
const galleriesPath = path.join(__dirname, 'galleries.json');
const paintingsPath = path.join(__dirname, 'paintings-nested.json');

let artists = null;
let galleries = null;
let paintings = null;
 
//artists parsing
fs.readFile(artistsPath,(err, data)=>{

    if (err) {
        console.log("Error reading artists.json file");        
    } else {
        artists = JSON.parse(data);
    }

});

//galleries parsing
fs.readFile(galleriesPath,(err, data)=>{

    if (err) {
        console.log("Error reading galleries.json file");
    } else {
        galleries = JSON.parse(data);
    }

})

//paintings parsing
fs.readFile(paintingsPath,(err, data)=>{

    if (err) {
        console.log("Error reading paintings-nested.json file");
    } else {
        paintings = JSON.parse(data);
    }

});

// API return for all paintings
api.get("/api/paintings", (req, res) =>
{
    const results = paintings;
    res.json(results);

});

// API return for all galleries
api.get("/api/galleries", (req, res) =>
{
    const results = galleries;
    res.json(results);
});

// API return for all artists
api.get("/api/artists",(req, res)=>
{
    const results = artists;
    res.json(results);
});

// API returns paintings with matching ids otherwise error message relaying non-match
api.get("/api/painting/:id", (req,resp) =>
{
    const results = paintings.filter(painting=> painting.paintingID == req.params.id);

    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No painting was found with the ID.` });
    }
});

// API returns paintings matching to the gallery ids otherwise error message relaying non-match
api.get("/api/painting/gallery/:id", (req,resp)=>
{
    const results = paintings.filter(painting => painting.gallery.galleryID == req.params.id);

    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No painting was found with the gallery ID.` });
    }

});

// API returns paintings matching to the artist ids otherwise error message relaying non-match
api.get("/api/painting/artist/:id", (req,resp)=>
{
    const results = paintings.filter(painting => painting.artist.artistID == req.params.id);

    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No painting was found with the artist ID.` });
    }
});

// API returns the paintings which are between the inputted min and max years otherwise error message relaying non-match
api.get("/api/painting/year/:min/:max", (req,resp) => 
{
    const results = paintings.filter(painting => painting.yearOfWork >= req.params.min && painting.yearOfWork <= req.params.max);

    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No painting was found between the inputted years.` });
    }

});

// API returns artists that contain inputted countries otherwise error message relaying non-match
api.get("/api/artists/:country", (req,resp) =>
{
    const results = artists.filter(painting => painting.Nationality.toLowerCase() == req.params.country 
        || painting.Nationality.toUpperCase() == req.params.country || painting.Nationality == req.params.country);

    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No artists were found that contain inputted countries.` });
    }
});

// API returns galleries that contain inputted countries otherwise error message relaying non-match
api.get("/api/galleries/:country", (req,resp) => 
{
    const results = galleries.filter(painting => painting.GalleryCountry.toLowerCase() == req.params.country 
        || painting.GalleryCountry.toUpperCase() == req.params.country || painting.GalleryCountry == req.params.country);
        
    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No galleries were found that contain inputted countries.` });
    }
});

// API returns the paintings that contain the text in it's title otherwise error message relaying non-match
api.get("/api/painting/title/:text", (req,resp) =>
{
    const results = paintings.filter(painting => painting.title.toUpperCase().includes(req.params.text)
        || painting.title.toLowerCase().includes(req.params.text) || painting.title.includes(req.params.text));
        
    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No painting was found containing inputted text.` });
    }
});

// API returns the paintings that contain the inputted colours in dominantColors. Otherwise error message relaying non-match
api.get("/api/painting/color/:name", (req,resp) =>
{
    const results = paintings.filter(painting => painting.details.annotation.dominantColors.some(painting => painting.name.toUpperCase() == req.params.name 
        || painting.name.toLowerCase() == req.params.name || painting.name == req.params.name));

    if (results.length > 0) {
        resp.json(results);
    } else {
        resp.json({ error: "Not Found", message: `No painting was found that match inputted dominant colours.` });
    }

});

