// import { update } from "@/util/actions";
import { update } from "@/util/actions";
import { analyze } from "@/util/ai";
import { getUserByClerkID } from "@/util/auth";
import { prisma } from "@/util/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "write about your day",
    },
  });

  const analysis = await analyze(entry.content);
  await prisma.analysis.create({
    data: {
      userId: user.id,
      entryId: entry.id,
      ...analysis,
    },
  });

  try {
    // Call revalidatePath, assuming it's a synchronous operation
    revalidatePath("/", "layout");
    console.log(`Successfully revalidated path: /app/(dashboard)/journal`);
  } catch (error) {
    // Catch any errors thrown by revalidatePath
    console.error(`Failed to revalidate path: /app/(dashboard)/journal`, error);
  }

  return NextResponse.json({ data: entry });
};
