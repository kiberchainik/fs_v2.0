/*
  Warnings:

  - Changed the type of `level` on the `Languages` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `level` on the `Skills` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Languages" DROP COLUMN "level",
ADD COLUMN     "level" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Skills" DROP COLUMN "level",
ADD COLUMN     "level" TEXT NOT NULL;

-- DropEnum
DROP TYPE "LanguageLevel";

-- DropEnum
DROP TYPE "SkillsLevel";
