/**
 * todo 1: render de person in contact
 * todo 2: render de navigatie items in elke template 
 * stap1: importeer 
 * stap2 : voeg toe aan het renderobject 
 * stap3 : voeg een navigatiebalk toe aan alle templates
 */

import { person, navItems } from "../data/data.js";

export const home = (req, res) => {
    res.render("pages/home", {
        title:"Dinosaur around the world",
        message:"Welcome to the world of dinosaurs",
        navItems: [
            "url",
            "label"
        ]
    });
};
export const about = (req, res) => {
    res.render("pages/default", {
        title:"About us",
        message:"We are a group of dinosaur enthusiasts",
        team: [
            "T-rex", 
            "Velicoraptor", 
            "Stegosaurus", 
            "<strong>Premium</strong> Diplodocus",
        ],
        navItems,
    });
};
export const contact = (req, res) => {
    res.render("pages/contact", {
        title:"Contact",
        message:"Contact us at 09 233 40 89",
        person,
        navItems,
    });
};
export const privacy = (req, res) => {
    res.render("pages/default", {
        title:"Privacy Policy",
        message:"Dinosaurs are protective of their privacy",
        team: false,
        navItems,
    });
};

