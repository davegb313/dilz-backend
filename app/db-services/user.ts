import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

module.exports = {
  getUsers: async function () {
    return await prisma.user.findMany();
  },

  getUser: async function (id: string) {
    return await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  },
};
