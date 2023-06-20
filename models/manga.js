import mongoose from "mongoose";

const mangaSchema = mongoose.Schema({
  myanimelist_url: String,
  title: String,
  picture_url: String,
  score: Number,
  synopsis: String,
});

const Manga = mongoose.model("Manga", mangaSchema);

export default Manga;
