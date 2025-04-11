-- CreateTable
CREATE TABLE "candidat_settings" (
    "id" TEXT NOT NULL,
    "is_public_cv" BOOLEAN NOT NULL DEFAULT true,
    "is_open_for_agency" BOOLEAN NOT NULL DEFAULT true,
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "candidat_settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "candidat_settings_candidate_id_key" ON "candidat_settings"("candidate_id");

-- AddForeignKey
ALTER TABLE "candidat_settings" ADD CONSTRAINT "candidat_settings_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;
