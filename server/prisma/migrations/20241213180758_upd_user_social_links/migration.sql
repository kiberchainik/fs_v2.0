/*
  Warnings:

  - Made the column `social_link` on table `user_social_links` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user_social_links" ALTER COLUMN "social_link" SET NOT NULL,
ALTER COLUMN "social_link" SET DATA TYPE TEXT;
