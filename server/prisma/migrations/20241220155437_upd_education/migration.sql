/*
  Warnings:

  - You are about to drop the column `degree` on the `Education` table. All the data in the column will be lost.
  - You are about to drop the column `contract` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Education" DROP COLUMN "degree";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "contract";
