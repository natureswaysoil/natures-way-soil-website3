// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();

export async function POST(request: Request) {
  // The Prisma code is commented out below.
  // Uncomment and fix your Prisma setup when ready to restore functionality.

  /*
  const data = await request.json();
  const savedContact = await prisma.contact.create({ data });
  return new Response(JSON.stringify(savedContact), { status: 201 });
  */

  // Placeholder response to avoid build failure
  return new Response(
    JSON.stringify({ message: "Contact API temporarily disabled. Prisma is not initialized." }),
    { status: 503 }
  );
}