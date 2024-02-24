import mongoose, { Schema } from "mongoose";

mongoose.connect(`${process.env.MONGODB_URI}/parkingshare`);
mongoose.Promise = global.Promise;
console.log("<----*** MONGODB user CONNECTION OK ***----->");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    fullname: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
