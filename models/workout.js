const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  }
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for transaction"
      },
      type: {
        type: Strings,
        required: "Enter an amount"
      },
      sets: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      duration: {
        type: Number,
        required: "Enter an amount"
      },
      distance: {
        type: Number,
      }
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
