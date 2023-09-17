import { Request, Response } from "express";

import { User } from "../types/users";
import { v4 as uuidv4 } from "uuid";

let users: User[] = [];

export const getUsers = (req: Request, res: Response): void => {
  console.log(users);
  res.send(users);
};

export const createUser = (req: Request, res: Response) => {
  console.log("POST ROUTE REACHED");
  console.log(req.body);
  const user = req.body;

  const userId = uuidv4();
  const userWithId = { ...user, id: userId };

  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database!`);
};

export const getUser = (req: Request, res: Response): void => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req: Request, res: Response): void => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`User with the id ${id} deleted from the database.`);
};

export const patchUser = (req: Request, res: Response): void => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (user) {
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;
    res.send(`User with the id ${id} has been updated.`);
  } else {
    res.status(404).send("User not found");
  }

  res.send(`User with the id ${id} has been updated.`);
};
