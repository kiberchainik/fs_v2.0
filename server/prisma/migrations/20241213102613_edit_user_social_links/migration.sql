/*
  Warnings:

  - You are about to drop the column `availability_transport` on the `user_social_links` table. All the data in the column will be lost.
  - You are about to drop the column `marital_status` on the `user_social_links` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user_social_links" DROP COLUMN "availability_transport",
DROP COLUMN "marital_status";
