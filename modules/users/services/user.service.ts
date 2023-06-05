import mongoose from "mongoose";

import { errorObject } from "../../../utils/errors.utils";
import { UserBody, UserModel } from "./../models/user.model";
import config from "../../../config";

// create user
export const createUser = async (userData: UserBody) => {
  // validate request
  const { name, email } = userData;
  if (!(email && name)) {
    throw errorObject(400, "All input is required");
  }

  // check if user already exist
  const oldUser = await UserModel.findOne({ email });
  if (oldUser) {
    throw errorObject(409, "User already exist. Please login");
  }

  // create user in db
  const user = await UserModel.create({
    name,
    email: email.toLowerCase(),
  });

  //return new user
  user.save();
  return user;
};
