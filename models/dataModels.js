const mongoose = require('mongoose')  

const dataShema = mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, "Please enter your firstname"]
        },
        lastname: {
            type: String,
            required: [true, "Please enter your lastname"]
        },
        email: {
            type: String,
            required: [true, "Please enter your email"]
        },
        idnumber: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)
const Data = mongoose.model('Data', dataShema);

module.exports = Data;