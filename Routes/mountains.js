const router = require("express").Router();
const Mountain = require("../Models/Mountain.js");

//add mountain

router.post("/", async (req, res) => {
  const newMountain = new Mountain(req.body);
  try {
    const savedMountain = await newMountain.save();
    res.status(201).json(savedMountain);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get all books

router.get("/", async (req, res) => {
  try {
    const mountains = await Mountain.find();
    res.status(200).json(mountains);
  } catch (error) {
    res.status(500).json(error);
  }
});

//get individual mountain

router.get("/:id", async (req, res) => {
  try {
    const mountain = await Mountain.findById(req.params.id);
    res.status(200).json(mountain);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedMountain = await Mountain.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMountain);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
