-- CreateTable
CREATE TABLE "last_processed_index" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "process_type" TEXT NOT NULL,
    "index" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "last_processed_index_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "last_processed_index_user_id_key" ON "last_processed_index"("user_id");
