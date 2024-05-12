import { builder } from "../builder";
import { prisma } from "../db";

builder.prismaObject("Post", {
    findUnique: (post) => ({ id: post.id }),
    fields: (t) => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
        content: t.exposeString("content"),
        completed: t.exposeBoolean("completed"),
        createdAt: t.expose("createdAt", { type: "Date" }),
        updatedAt: t.expose("updatedAt", { type: "Date" }),
    }),
});

interface CreatePostArgs {
  title: string;
  content: string;
  completed: boolean;
}

builder.queryField("posts", (t) =>
  t.prismaField({
    type: ["Post"],
    resolve: async (root, args, ctx, info) => {
      return prisma.post.findMany(); // Fetch all posts
    },
  })
);

/* // createPost mutation
builder.mutationField("createPost", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      title: t.arg.string(),
      content: t.arg.string(),
      completed: t.arg.boolean(),
    },
    resolve: async (root, args, ctx, info) => {
      return prisma.post.create({
        data: {
          title: args.title,
          content: args.content,
          completed: args.completed,
        },
      });
    },
  })
);

// updatePost mutation
builder.mutationField("updatePost", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      id: t.arg.int(),
      title: t.arg.string({ required: false }),
      content: t.arg.string({ required: false }),
      completed: t.arg.boolean({ required: false }),
    },
    resolve: async (root, args, ctx, info) => {
      return prisma.post.update({
        where: { id: args.id },
        data: {
          title: args.title,
          content: args.content,
          completed: args.completed,
        },
      });
    },
  })
);

// deletePost mutation
builder.mutationField("deletePost", (t) =>
  t.prismaField({
    type: "Post",
    args: {
      id: t.arg.int(),
    },
    resolve: async (root, args, ctx, info) => {
      return prisma.post.delete({
        where: { id: args.id },
      });
    },
  })
); */

