const mongoose = require("mongoose");

const fakultetSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Univerzitet",
    },
    imeFak: String,
    adresaFak: String,
    univerzitet: String,
})

const Fakultet = mongoose.model("Fakultet", fakultetSchema, "fakultet");

const create = async (data) => {
    const newFakultet = new Fakultet(data);
    return await newFakultet.save();
    };
    const update = async (id, data) => {
    return await Fakultet.updateOne({_id: id }, {data});
    };
    
    const getById = async (id) => {
        console.log("I'm inside");
    // return await Fakultet.findOne({ _id: id });
    return await Fakultet.findById(id);
    };

    const getAllEmailSorted = async () => {
    // return await Fakultet.find({}).select({"ime:"}).sort({ email: 1});
    return await Fakultet.find({}).sort({ email: 1});
    };
    
    const remove = async (id) => {
    // return await Student.deleteOne({_id: id});
    return await Fakultet.findByIdAndDelete(id);
    };

    module.exports = {
    create,
    update,
    getById,
    getAllEmailSorted,
    remove,
    };