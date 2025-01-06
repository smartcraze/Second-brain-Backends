import { Router } from "express";
import LinkModel from "../Models/link";
import ContentModel from "../Models/contents";
import UserModel from "../Models/usermodel";
import auth from "../middleware/auth";
import { random } from "../utils/hash";

export const LinksRouter = Router();

LinksRouter.post("/share", auth, async (req, res) => {
  const share = req.body.share;
  // share === boolean
  if (share) {
    const existingLink = await LinkModel.findOne({
      userId: req.userId,
    });

    if (existingLink) {
      res.json({
        hash: existingLink.hash,
      });
      return;
    }
    const hash = random(10);
    await LinkModel.create({
      userId: req.userId,
      hash: hash,
    });

    res.json({
      hash,
    });
  } else {
    await LinkModel.deleteOne({
      userId: req.userId,
    });

    res.json({
      message: "Removed link",
    });
  }
});

LinksRouter.get("/:shareLink", async (req, res) => {
  const hash = req.params.shareLink;

  const link = await LinkModel.findOne({ hash });

  if (!link) {
    res.status(411).json({
      message: "Invalid share link or link not found.",
    });
    return;
  }

  // userId
  const [user, content] = await Promise.all([
    UserModel.findById(link.userId),
    ContentModel.find({ userId: link.userId }),
  ]);

  if (!user) {
    res.status(411).json({
      message: "user not found",
    });
    return;
  }

  res.json({
    username: user.username,
    content: content,
  });
});
