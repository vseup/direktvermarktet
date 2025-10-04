-- CreateTable
CREATE TABLE `locations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(191) NOT NULL,
    `house_number` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `google_maps_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farms` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `address_id` INTEGER NOT NULL,
    `preview_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farm_shops` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `address_id` INTEGER NOT NULL,
    `preview_id` INTEGER NOT NULL,
    `farm_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `path` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farm_image` (
    `farm_id` INTEGER NOT NULL,
    `image_id` INTEGER NOT NULL,

    PRIMARY KEY (`farm_id`, `image_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farm_shop_image` (
    `farm_id` INTEGER NOT NULL,
    `image_id` INTEGER NOT NULL,

    PRIMARY KEY (`farm_id`, `image_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `opening_hours` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dayOfWeek` INTEGER NOT NULL,
    `openTime` VARCHAR(191) NOT NULL,
    `closeTime` VARCHAR(191) NOT NULL,
    `locationId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farm_shop_sales_mode_opening_hour` (
    `farm_shop_sales_mode_id` INTEGER NOT NULL,
    `opening_hour_id` INTEGER NOT NULL,

    PRIMARY KEY (`farm_shop_sales_mode_id`, `opening_hour_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_modes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farm_shop_sales_mode` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `farm_shop_id` INTEGER NOT NULL,
    `sales_mode_id` INTEGER NOT NULL,
    `is_always_open` BOOLEAN NOT NULL,
    `fallback` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `farms` ADD CONSTRAINT `farms_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farms` ADD CONSTRAINT `farms_preview_id_fkey` FOREIGN KEY (`preview_id`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_address_id_fkey` FOREIGN KEY (`address_id`) REFERENCES `locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_preview_id_fkey` FOREIGN KEY (`preview_id`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_image` ADD CONSTRAINT `farm_image_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_image` ADD CONSTRAINT `farm_image_image_id_fkey` FOREIGN KEY (`image_id`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shop_image` ADD CONSTRAINT `farm_shop_image_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farm_shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shop_image` ADD CONSTRAINT `farm_shop_image_image_id_fkey` FOREIGN KEY (`image_id`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `opening_hours` ADD CONSTRAINT `opening_hours_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `locations`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shop_sales_mode_opening_hour` ADD CONSTRAINT `farm_shop_sales_mode_opening_hour_farm_shop_sales_mode_id_fkey` FOREIGN KEY (`farm_shop_sales_mode_id`) REFERENCES `farm_shop_sales_mode`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shop_sales_mode_opening_hour` ADD CONSTRAINT `farm_shop_sales_mode_opening_hour_opening_hour_id_fkey` FOREIGN KEY (`opening_hour_id`) REFERENCES `opening_hours`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shop_sales_mode` ADD CONSTRAINT `farm_shop_sales_mode_farm_shop_id_fkey` FOREIGN KEY (`farm_shop_id`) REFERENCES `farm_shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shop_sales_mode` ADD CONSTRAINT `farm_shop_sales_mode_sales_mode_id_fkey` FOREIGN KEY (`sales_mode_id`) REFERENCES `sales_modes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
