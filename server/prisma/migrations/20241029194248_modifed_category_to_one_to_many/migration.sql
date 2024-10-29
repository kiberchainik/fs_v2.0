/*
  Warnings:

  - You are about to drop the `_CategoryTojobOffers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `job_offers` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryTojobOffers" DROP CONSTRAINT "_CategoryTojobOffers_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryTojobOffers" DROP CONSTRAINT "_CategoryTojobOffers_B_fkey";

-- AlterTable
ALTER TABLE "job_offers" ADD COLUMN     "category_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CategoryTojobOffers";

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
