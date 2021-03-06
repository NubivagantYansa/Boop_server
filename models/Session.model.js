const { Schema, model } = require("mongoose");
const ObjectId = Schema.Types.ObjectId;

const sessionSchema = new Schema({
  userId: { type: ObjectId, ref: "User" },
  createdAt: {
    type: Date,
    default: Date.now(),
    index: { expires: 60 * 60 * 24 },
  },
});

module.exports = model("Session", sessionSchema);
