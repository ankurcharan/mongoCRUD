const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChildSchema = new Schema({
  name: {
    type: String
  }
});

let child = mongoose.model('Child', ChildSchema);

const TaskSchema = new Schema({
  taskName: {
    type: String,
    required: true
  },
  children: [child.schema],
  createdOn: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
  task: mongoose.model("Tasks", TaskSchema),
  child: child
};