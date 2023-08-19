import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email already exists"],
    },
    username: {
        type: String,
        required: [true, "Username is required"],
        match: [/^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 6-20 alphanumeric letters and be unique!"],
    },
    API_key: {
        type: String,
    },
    image: {
        type: String,
    },
});


const User = models.User || model("User", userSchema);

export default User;