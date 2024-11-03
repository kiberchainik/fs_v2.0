-- CreateEnum
CREATE TYPE "TokenType" AS ENUM ('VERIFICATION', 'TWO_FACTOR', 'PASSWORD_RESET');

-- CreateEnum
CREATE TYPE "AuthMethod" AS ENUM ('CREDENTIALS', 'GOOGLE', 'FACEBOOK', 'TWITTER', 'TELEGRAMM', 'INSTAGRAM', 'DISCORD');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('USER', 'ADMIN', 'MODERATOR', 'CANDIDAT', 'AGENCY');

-- CreateEnum
CREATE TYPE "SkillsLevel" AS ENUM ('NONE', 'BEGINNER', 'EXPERIENCED', 'EXPERT');

-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('PARTTIME', 'SELFEMPLOYED', 'FREELANCE', 'CONTRACT', 'INTERNSHIP', 'APPRENTICESHIP');

-- CreateEnum
CREATE TYPE "LanguageLevel" AS ENUM ('NATIVESPEAKER', 'FLUENT', 'VERYGOOD', 'BASIC');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'CANDIDAT',
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_two_factor_enabled" BOOLEAN NOT NULL DEFAULT false,
    "method" "AuthMethod" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidat_data" (
    "id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "resident" TEXT NOT NULL,
    "about_my" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "candidat_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "grade" TEXT,
    "startdate" DATE NOT NULL,
    "enddate" DATE NOT NULL,
    "description" TEXT,
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" TEXT NOT NULL,
    "skill" TEXT NOT NULL,
    "level" "SkillsLevel" NOT NULL DEFAULT 'NONE',
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Experience" (
    "id" TEXT NOT NULL,
    "company" TEXT NOT NULL,
    "contract" "ContractType" NOT NULL,
    "location" TEXT,
    "currently" BOOLEAN NOT NULL DEFAULT false,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "Experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "level" "LanguageLevel" NOT NULL DEFAULT 'BASIC',
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "grade" TEXT NOT NULL,
    "startdate" TIMESTAMP(3) NOT NULL,
    "enddate" TIMESTAMP(3) NOT NULL,
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hobbies" (
    "id" TEXT NOT NULL,
    "hobbie" TEXT NOT NULL,
    "candidate_id" TEXT NOT NULL,

    CONSTRAINT "Hobbies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agency_data" (
    "id" TEXT NOT NULL,
    "agency_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "p_iva_c_f" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,
    "about" TEXT NOT NULL,
    "logo" TEXT[],

    CONSTRAINT "agency_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "branches" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "fax" TEXT,
    "location" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "logo" TEXT,
    "agency_id" TEXT NOT NULL,

    CONSTRAINT "branches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_offers" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "really_up_to" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "isValidate" BOOLEAN NOT NULL DEFAULT false,
    "views" INTEGER NOT NULL DEFAULT 0,
    "agency_id" TEXT NOT NULL,
    "branch_id" TEXT,

    CONSTRAINT "job_offers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job_tags" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "job_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" INTEGER,
    "parentId" TEXT,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sectors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "Sectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "auth_account" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provide" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT,

    CONSTRAINT "auth_account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tokens" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "type" "TokenType" NOT NULL,
    "expires_in" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tokens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_jobOffersTojobTags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryTojobOffers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_SectorsTojobOffers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "candidat_data_user_id_key" ON "candidat_data"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "agency_data_slug_key" ON "agency_data"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "agency_data_user_id_key" ON "agency_data"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "job_offers_slug_key" ON "job_offers"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "categories_slug_key" ON "categories"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Sectors_name_key" ON "Sectors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Sectors_slug_key" ON "Sectors"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "tokens_token_key" ON "tokens"("token");

-- CreateIndex
CREATE UNIQUE INDEX "_jobOffersTojobTags_AB_unique" ON "_jobOffersTojobTags"("A", "B");

-- CreateIndex
CREATE INDEX "_jobOffersTojobTags_B_index" ON "_jobOffersTojobTags"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryTojobOffers_AB_unique" ON "_CategoryTojobOffers"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryTojobOffers_B_index" ON "_CategoryTojobOffers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_SectorsTojobOffers_AB_unique" ON "_SectorsTojobOffers"("A", "B");

-- CreateIndex
CREATE INDEX "_SectorsTojobOffers_B_index" ON "_SectorsTojobOffers"("B");

-- AddForeignKey
ALTER TABLE "candidat_data" ADD CONSTRAINT "candidat_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Skills" ADD CONSTRAINT "Skills_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Experience" ADD CONSTRAINT "Experience_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Languages" ADD CONSTRAINT "Languages_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hobbies" ADD CONSTRAINT "Hobbies_candidate_id_fkey" FOREIGN KEY ("candidate_id") REFERENCES "candidat_data"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agency_data" ADD CONSTRAINT "agency_data_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "branches" ADD CONSTRAINT "branches_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agency_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_agency_id_fkey" FOREIGN KEY ("agency_id") REFERENCES "agency_data"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_offers" ADD CONSTRAINT "job_offers_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "branches"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sectors" ADD CONSTRAINT "Sectors_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "auth_account" ADD CONSTRAINT "auth_account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_jobOffersTojobTags" ADD CONSTRAINT "_jobOffersTojobTags_A_fkey" FOREIGN KEY ("A") REFERENCES "job_offers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_jobOffersTojobTags" ADD CONSTRAINT "_jobOffersTojobTags_B_fkey" FOREIGN KEY ("B") REFERENCES "job_tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryTojobOffers" ADD CONSTRAINT "_CategoryTojobOffers_A_fkey" FOREIGN KEY ("A") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryTojobOffers" ADD CONSTRAINT "_CategoryTojobOffers_B_fkey" FOREIGN KEY ("B") REFERENCES "job_offers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SectorsTojobOffers" ADD CONSTRAINT "_SectorsTojobOffers_A_fkey" FOREIGN KEY ("A") REFERENCES "Sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SectorsTojobOffers" ADD CONSTRAINT "_SectorsTojobOffers_B_fkey" FOREIGN KEY ("B") REFERENCES "job_offers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
