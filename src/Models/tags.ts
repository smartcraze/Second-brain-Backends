import { model, Schema } from "mongoose";

const TagSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tag = model("Tag", TagSchema);
export default Tag;
