-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_contacts" (
    "id" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "job_contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CandidatDataToJobContacts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CandidatDataToJobContacts_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_JobContactsTojobOffers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_JobContactsTojobOffers_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CandidatDataToJobContacts_B_index" ON "_CandidatDataToJobContacts"("B");

-- CreateIndex
CREATE INDEX "_JobContactsTojobOffers_B_index" ON "_JobContactsTojobOffers"("B");

-- AddForeignKey
ALTER TABLE "_CandidatDataToJobContacts" ADD CONSTRAINT "_CandidatDataToJobContacts_A_fkey" FOREIGN KEY ("A") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CandidatDataToJobContacts" ADD CONSTRAINT "_CandidatDataToJobContacts_B_fkey" FOREIGN KEY ("B") REFERENCES "job_contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobContactsTojobOffers" ADD CONSTRAINT "_JobContactsTojobOffers_A_fkey" FOREIGN KEY ("A") REFERENCES "job_contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobContactsTojobOffers" ADD CONSTRAINT "_JobContactsTojobOffers_B_fkey" FOREIGN KEY ("B") REFERENCES "job_offers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
