import express from "express";
import { Book } from "../models/bookmodel.js";
const router = express.Router();
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publicyear) {
      return res
        .status(400)
        .send("Please fill all the fields: Author, Title, publicyear");
    }
    const newbook = {
      title: req.body.title,
      author: req.body.author,
      publicyear: req.body.publicyear,
    };
    const book = await Book.create(newbook);
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});
// route get book from databse
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    return res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// route get book from databse by id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findById(id);

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});
//update book by id
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publicyear) {
      return res
        .status(400)
        .send("Please fill all the fields: Author, Title, publicyear");
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send("Book not found");
    }
    return res.status(200).send("Book updated successfully");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
// dELETE book by id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send("Book not found");
    }
    return res.status(200).send("Book deleted successfully");
  } catch (error) {
    res.status(500).send("Server Error");
  }
});
export default router;
