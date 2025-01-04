/*
  Warnings:

  - The `logo` column on the `agency_data` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "agency_data" DROP COLUMN "logo",
ADD COLUMN     "logo" TEXT[],
ALTER COLUMN "url" DROP NOT NULL,
ALTER COLUMN "url" SET DATA TYPE TEXT;
