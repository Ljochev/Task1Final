const mongoose = require("mongoose");

const univerzitetSchema = new mongoose.Schema({
    imeUni: String,
    adresaUni: String,
    listFak: [String],
});

const Univerzitet = mongoose.model("Univerzitet", univerzitetSchema, "subjects");

const createUniverzitet = async (subjects) => {
    const newUniverzitet = new Univerzitet(Univerzitet);
    return await newUniverzitet.save();
    };
    
    const updateUniverzitet = async (id, data) => {
    return await Univerzitet.updateOne({_id: id}, data);
    };
    
    const removeUniverzitet = async (id) => {
    return await Univerzitet.deleteOne({_id: id});
    };
    
    const listSortetName = async (userId) => {
    return await Univerzitet.find({user_id: userId}).sort({ime: 1});
    };
    
    const getOneUniverzitetById = async (id) => {
        // console.log("I'm in getOneUniverzitetById");
    return await Univerzitet.findOne({ _id: id});
    };

module.exports = {
    createUniverzitet,
    updateUniverzitet,
    removeUniverzitet,
    listSortetName,
    getOneUniverzitetById,
};