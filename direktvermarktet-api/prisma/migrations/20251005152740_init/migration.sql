-- CreateEnum
CREATE TYPE "Country" AS ENUM ('GERMANY');

-- CreateTable
CREATE TABLE "locations" (
    "id" TEXT NOT NULL,
    "street" TEXT NOT NULL,
    "house_number" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" "Country" NOT NULL,
    "google_maps_url" TEXT,

    CONSTRAINT "locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "path" VARCHAR(1024) NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "opening_hours" (
    "id" TEXT NOT NULL,
    "day_of_week" INTEGER NOT NULL,
    "open_time" TEXT NOT NULL,
    "close_time" TEXT NOT NULL,
    "sales_mode_id" TEXT NOT NULL,

    CONSTRAINT "opening_hours_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farms" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "url" TEXT,
    "location_id" TEXT NOT NULL,
    "preview_image_id" TEXT,
    "avatar_image_id" TEXT,

    CONSTRAINT "farms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farm_shops" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slogan" TEXT NOT NULL,
    "description" VARCHAR(2000) NOT NULL,
    "url" TEXT,
    "location_id" TEXT NOT NULL,
    "preview_image_id" TEXT,
    "avatar_image_id" TEXT,
    "farm_id" TEXT NOT NULL,
    "products" VARCHAR(1024) NOT NULL,

    CONSTRAINT "farm_shops_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales_modes" (
    "id" TEXT NOT NULL,
    "is_always_open" BOOLEAN NOT NULL,
    "fallback" TEXT,
    "farm_shop_id" TEXT NOT NULL,

    CONSTRAINT "sales_modes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_FarmToImage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_FarmToImage_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_FarmShopToImage" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_FarmShopToImage_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "farms_url_key" ON "farms"("url");

-- CreateIndex
CREATE UNIQUE INDEX "farms_location_id_key" ON "farms"("location_id");

-- CreateIndex
CREATE UNIQUE INDEX "farms_preview_image_id_key" ON "farms"("preview_image_id");

-- CreateIndex
CREATE UNIQUE INDEX "farms_avatar_image_id_key" ON "farms"("avatar_image_id");

-- CreateIndex
CREATE UNIQUE INDEX "farm_shops_url_key" ON "farm_shops"("url");

-- CreateIndex
CREATE UNIQUE INDEX "farm_shops_location_id_key" ON "farm_shops"("location_id");

-- CreateIndex
CREATE UNIQUE INDEX "farm_shops_preview_image_id_key" ON "farm_shops"("preview_image_id");

-- CreateIndex
CREATE UNIQUE INDEX "farm_shops_avatar_image_id_key" ON "farm_shops"("avatar_image_id");

-- CreateIndex
CREATE INDEX "_FarmToImage_B_index" ON "_FarmToImage"("B");

-- CreateIndex
CREATE INDEX "_FarmShopToImage_B_index" ON "_FarmShopToImage"("B");

-- AddForeignKey
ALTER TABLE "opening_hours" ADD CONSTRAINT "opening_hours_sales_mode_id_fkey" FOREIGN KEY ("sales_mode_id") REFERENCES "sales_modes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farms" ADD CONSTRAINT "farms_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farms" ADD CONSTRAINT "farms_preview_image_id_fkey" FOREIGN KEY ("preview_image_id") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farms" ADD CONSTRAINT "farms_avatar_image_id_fkey" FOREIGN KEY ("avatar_image_id") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farm_shops" ADD CONSTRAINT "farm_shops_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farm_shops" ADD CONSTRAINT "farm_shops_preview_image_id_fkey" FOREIGN KEY ("preview_image_id") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farm_shops" ADD CONSTRAINT "farm_shops_avatar_image_id_fkey" FOREIGN KEY ("avatar_image_id") REFERENCES "images"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farm_shops" ADD CONSTRAINT "farm_shops_farm_id_fkey" FOREIGN KEY ("farm_id") REFERENCES "farms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_modes" ADD CONSTRAINT "sales_modes_farm_shop_id_fkey" FOREIGN KEY ("farm_shop_id") REFERENCES "farm_shops"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FarmToImage" ADD CONSTRAINT "_FarmToImage_A_fkey" FOREIGN KEY ("A") REFERENCES "farms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FarmToImage" ADD CONSTRAINT "_FarmToImage_B_fkey" FOREIGN KEY ("B") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FarmShopToImage" ADD CONSTRAINT "_FarmShopToImage_A_fkey" FOREIGN KEY ("A") REFERENCES "farm_shops"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FarmShopToImage" ADD CONSTRAINT "_FarmShopToImage_B_fkey" FOREIGN KEY ("B") REFERENCES "images"("id") ON DELETE CASCADE ON UPDATE CASCADE;
