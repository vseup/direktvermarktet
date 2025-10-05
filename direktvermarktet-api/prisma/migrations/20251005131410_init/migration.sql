-- CreateTable
CREATE TABLE `locations` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `house_number` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` ENUM('GERMANY') NOT NULL,
    `google_maps_url` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images` (
    `id` VARCHAR(191) NOT NULL,
    `path` VARCHAR(1024) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `opening_hours` (
    `id` VARCHAR(191) NOT NULL,
    `day_of_week` INTEGER NOT NULL,
    `open_time` VARCHAR(191) NOT NULL,
    `close_time` VARCHAR(191) NOT NULL,
    `sales_mode_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farms` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `description` VARCHAR(2000) NOT NULL,
    `url` VARCHAR(191) NULL,
    `location_id` VARCHAR(191) NOT NULL,
    `preview_image_id` VARCHAR(191) NULL,
    `avatar_image_id` VARCHAR(191) NULL,

    UNIQUE INDEX `farms_url_key`(`url`),
    UNIQUE INDEX `farms_location_id_key`(`location_id`),
    UNIQUE INDEX `farms_preview_image_id_key`(`preview_image_id`),
    UNIQUE INDEX `farms_avatar_image_id_key`(`avatar_image_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farm_shops` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `description` VARCHAR(2000) NOT NULL,
    `url` VARCHAR(191) NULL,
    `location_id` VARCHAR(191) NOT NULL,
    `preview_image_id` VARCHAR(191) NULL,
    `avatar_image_id` VARCHAR(191) NULL,
    `farm_id` VARCHAR(191) NOT NULL,
    `products` VARCHAR(1024) NOT NULL,

    UNIQUE INDEX `farm_shops_url_key`(`url`),
    UNIQUE INDEX `farm_shops_location_id_key`(`location_id`),
    UNIQUE INDEX `farm_shops_preview_image_id_key`(`preview_image_id`),
    UNIQUE INDEX `farm_shops_avatar_image_id_key`(`avatar_image_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_modes` (
    `id` VARCHAR(191) NOT NULL,
    `is_always_open` BOOLEAN NOT NULL,
    `fallback` VARCHAR(191) NULL,
    `farm_shop_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FarmToImage` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FarmToImage_AB_unique`(`A`, `B`),
    INDEX `_FarmToImage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FarmShopToImage` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_FarmShopToImage_AB_unique`(`A`, `B`),
    INDEX `_FarmShopToImage_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `opening_hours` ADD CONSTRAINT `opening_hours_sales_mode_id_fkey` FOREIGN KEY (`sales_mode_id`) REFERENCES `sales_modes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farms` ADD CONSTRAINT `farms_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farms` ADD CONSTRAINT `farms_preview_image_id_fkey` FOREIGN KEY (`preview_image_id`) REFERENCES `images`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farms` ADD CONSTRAINT `farms_avatar_image_id_fkey` FOREIGN KEY (`avatar_image_id`) REFERENCES `images`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_preview_image_id_fkey` FOREIGN KEY (`preview_image_id`) REFERENCES `images`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_avatar_image_id_fkey` FOREIGN KEY (`avatar_image_id`) REFERENCES `images`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sales_modes` ADD CONSTRAINT `sales_modes_farm_shop_id_fkey` FOREIGN KEY (`farm_shop_id`) REFERENCES `farm_shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FarmToImage` ADD CONSTRAINT `_FarmToImage_A_fkey` FOREIGN KEY (`A`) REFERENCES `farms`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FarmToImage` ADD CONSTRAINT `_FarmToImage_B_fkey` FOREIGN KEY (`B`) REFERENCES `images`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FarmShopToImage` ADD CONSTRAINT `_FarmShopToImage_A_fkey` FOREIGN KEY (`A`) REFERENCES `farm_shops`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FarmShopToImage` ADD CONSTRAINT `_FarmShopToImage_B_fkey` FOREIGN KEY (`B`) REFERENCES `images`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
