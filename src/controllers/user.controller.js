import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

//create a user
export const createUser = async (req, res) => {
  try {
    const { login, id, avatar_url } = req.body;

    const newUser = await prisma.usuarios.create({
      data: { login, id, avatar_url },
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};

//get all user
export const getAllUser = async (req, res) => {
  try {
    const allUsers = await prisma.usuarios.findMany();
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: true });
  }
};
