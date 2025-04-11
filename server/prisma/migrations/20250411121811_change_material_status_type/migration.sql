/*
  Warnings:

  - Changed the type of `marital_status` on the `candidat_life_state` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "candidat_life_state" DROP COLUMN "marital_status",
ADD COLUMN     "marital_status" TEXT NOT NULL;

-- DropEnum
DROP TYPE "MaritalStatus";
