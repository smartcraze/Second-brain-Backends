import { Router } from "express";
import { z } from "zod";
import auth from "../middleware/auth";
import Content from "../Models/contents";
import Tag from "../Models/tags";

export const contentsRouter = Router();

const ContentValidationSchema = z.object({
  link: z.string().url(),
  type: z.enum(["Youtube", "Twitter", "Text", "Video"]),
  title: z.string().min(1),
  tags: z.array(z.string()).optional(),
});

// post
contentsRouter.post("/", auth, async (req, res) => {
  try {
    const {
      link,
      type,
      title,
      tags = [],
    } = ContentValidationSchema.parse(req.body);

    const tagIds = await Promise.all(
      tags.map(async (tagTitle) => {
        let tag = await Tag.findOne({ title: tagTitle });
        if (!tag) {
          tag = await Tag.create({ title: tagTitle });
        }
        return tag._id;
      })
    );

    const addedcontents = await Content.create({
      link,
      type,
      title,
      tags: tagIds,
      userId: req.userId,
    });
    res.status(200).json({
      Message: "Created successFully",
      Content: addedcontents,
    });
  } catch (error) {
    console.log(error);
    res.json(400).json({
      Message: "Error creating contents",
    });
  }
});
// get
contentsRouter.get("/", auth, async (req, res) => {
  try {
    const AllContent = await Content.find({ userId: req.userId }).populate(
      "tags",
      "title"
    );
    res.status(200).json({
      Message: "Fetched successfully",
      Content: AllContent,
    });
  } catch (error: any) {
    res.status(400).json({
      Message: "Error fetching contents",
      error: error,
    });
  }
});

//  delete
contentsRouter.delete("/", auth, async (req, res) => {
  try {
    const { contentId } = req.body;
    const deletedContents = await Content.deleteMany({ _id: contentId });
    if (deletedContents.deletedCount === 0) {
      res.status(404).json({
        Message: "Content(s) not found",
      });
    }
    res.json({
      Message: "Deleted",
    });
  } catch (error: any) {
    res.json({
      Message: "Error deleting",
      Error: error,
    });
  }
});
