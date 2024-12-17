-- CreateTable
CREATE TABLE "saved_jobs" (
    "id" TEXT NOT NULL,
    "candidate_id" TEXT NOT NULL,
    "job_offer_id" TEXT NOT NULL,
    "saved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "saved_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "saved_jobs_candidate_id_job_offer_id_key" ON "saved_jobs"("candidate_id", "job_offer_id");

-- AddForeignKey
ALTER TABLE "saved_jobs" ADD CONSTRAINT "saved_jobs_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "saved_jobs" ADD CONSTRAINT "saved_jobs_job_offer_id_fkey" FOREIGN KEY ("job_offer_id") REFERENCES "job_offers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
