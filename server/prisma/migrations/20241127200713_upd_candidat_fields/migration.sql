/*
  Warnings:

  - The `avatar` column on the `candidat_data` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "candidat_data" ALTER COLUMN "phone" DROP NOT NULL,
ALTER COLUMN "resident" DROP NOT NULL,
ALTER COLUMN "about_my" DROP NOT NULL,
DROP COLUMN "avatar",
ADD COLUMN     "avatar" TEXT[];
