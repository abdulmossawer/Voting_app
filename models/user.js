const mongoose = require('mongoose');
const { type } = require('os');
const bcrypt = require('bcrypt')


// Define the User scheemas
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        trim: true
    },

    mobile: {
        type: String,
        trim: true
    },

    address: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
      },

    aadharCardNumber: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },

    role: {
        type: String,
        required: true,
        enum: ['voter', 'admin'],
        default: 'voter'
    },

    isVoted: {
        type: Boolean,
        default: false
    }
});


userSchema.pre('save', async function(next){
    const person = this;

    // Hash the password only if it has been modified (or is new)
    if(!person.isModified('password')) return next();

    try{
        // hash password generation
        const salt = await bcrypt.genSalt(10);

        // hash password
        const hashedPassword = await bcrypt.hash(person.password, salt);
        
        // Override the plain password with the hashed one
        person.password = hashedPassword;
        next();
    }catch(err){
        return next(err);
    }
})

userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        // Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}


//Create a user model
const User = mongoose.model('User', userSchema);
module.exports = User;