/*
  Warnings:

  - You are about to drop the column `experience_id` on the `Experience` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Experience" DROP CONSTRAINT "Experience_experience_id_fkey";

-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "experience_id",
ADD COLUMN     "contract_type_id" TEXT;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_contract_type_id_fkey" FOREIGN KEY ("contract_type_id") REFERENCES "contract_type"("id") ON DELETE SET NULL ON UPDATE CASCADE;
