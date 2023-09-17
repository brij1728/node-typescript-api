import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  patchUser,
} from "../controllers/users";

import express from "express";
import { get } from "http";
const router = express.Router();

// all routes in here are starting with /users
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", patchUser);

export default router;
