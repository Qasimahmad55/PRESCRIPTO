import mongoose, { Schema } from "mongoose";

const doctorSchema = new Schema(
    {
        name: {
            type: String,
            requied: true
        },
        email: {
            type: String,
            requied: true,
            unique: true,
        },
        password: {
            type: String,
            requied: true
        },
        image: {
            type: String,
            requied: true
        },
        speciality: {
            type: String,
            requied: true
        },
        degree: {
            type: String,
            requied: true
        },
        experience: {
            type: String,
            requied: true
        },
        about: {
            type: String,
            requied: true
        },
        available: {
            type: Boolean,
            requied: true
        },
        fees: {
            type: Number,
            requied: true
        },
        address: {
            type: Object,
            requied: true
        },
        date: {
            type: Number,
            requied: true
        },
        slots_booked: {
            type: Object,
            default: {}
        },
    },
    { minimize: false }
)
export default doctorModel = mongoose.models.doctor || mongoose.model('doctor', doctorSchema)
