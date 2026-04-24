/*
  Warnings:

  - The `dataJson` column on the `Resume` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `createdAt` on table `Resume` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Resume" ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ALTER COLUMN "createdAt" SET NOT NULL,
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "dataJson",
ADD COLUMN     "dataJson" JSONB;

-- AddForeignKey
ALTER TABLE "Resume" ADD CONSTRAINT "Resume_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
