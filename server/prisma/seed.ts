import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Delete all `Post` records
  await prisma.post.deleteMany({});

  // (Re-)Create dummy `Post` records
  await prisma.post.create({
    data: {
      title: "Post 1",
      content: "This is the content for post 1",
    },
  });
  await prisma.post.create({
    data: {
      title: "Post 2",
      content: "This is the content for post 2",
    },
  });
}

main().then(() => {
  console.log("Posts seeded...");
});