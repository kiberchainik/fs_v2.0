-- CreateTable
CREATE TABLE "user_social_links" (
    "id" TEXT NOT NULL,
    "availability_transport" BOOLEAN NOT NULL DEFAULT false,
    "marital_status" "MaritalStatus" NOT NULL DEFAULT 'NONE',
    "user_id" TEXT NOT NULL,
    "social_link" JSONB,

    CONSTRAINT "user_social_links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_social_links_user_id_key" ON "user_social_links"("user_id");

-- AddForeignKey
ALTER TABLE "user_social_links" ADD CONSTRAINT "user_social_links_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
