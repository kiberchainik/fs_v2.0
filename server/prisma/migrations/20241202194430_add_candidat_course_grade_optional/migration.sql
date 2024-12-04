-- AlterTable
ALTER TABLE "Courses" ALTER COLUMN "grade" DROP NOT NULL;

-- AlterTable
ALTER TABLE "_SectorsTojobOffers" ADD CONSTRAINT "_SectorsTojobOffers_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_SectorsTojobOffers_AB_unique";

-- AlterTable
ALTER TABLE "_jobOffersTojobTags" ADD CONSTRAINT "_jobOffersTojobTags_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_jobOffersTojobTags_AB_unique";
