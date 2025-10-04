-- CreateTable
CREATE TABLE `locations` (
    `id` VARCHAR(191) NOT NULL,
    `street` VARCHAR(191) NOT NULL,
    `house_number` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `google_maps_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images` (
    `id` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `farm_id` VARCHAR(191) NULL,
    `farm_shop_id` VARCHAR(191) NULL,

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
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `location_id` VARCHAR(191) NOT NULL,
    `preview_image_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `farms_url_key`(`url`),
    UNIQUE INDEX `farms_location_id_key`(`location_id`),
    UNIQUE INDEX `farms_preview_image_id_key`(`preview_image_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `farm_shops` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `slogan` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `location_id` VARCHAR(191) NOT NULL,
    `preview_image_id` VARCHAR(191) NOT NULL,
    `farm_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `farm_shops_url_key`(`url`),
    UNIQUE INDEX `farm_shops_location_id_key`(`location_id`),
    UNIQUE INDEX `farm_shops_preview_image_id_key`(`preview_image_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sales_mode` (
    `id` VARCHAR(191) NOT NULL,
    `is_always_open` BOOLEAN NOT NULL,
    `fallback` VARCHAR(191) NULL,
    `farm_shop_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images` ADD CONSTRAINT `images_farm_shop_id_fkey` FOREIGN KEY (`farm_shop_id`) REFERENCES `farm_shops`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `opening_hours` ADD CONSTRAINT `opening_hours_sales_mode_id_fkey` FOREIGN KEY (`sales_mode_id`) REFERENCES `sales_mode`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farms` ADD CONSTRAINT `farms_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farms` ADD CONSTRAINT `farms_preview_image_id_fkey` FOREIGN KEY (`preview_image_id`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_location_id_fkey` FOREIGN KEY (`location_id`) REFERENCES `locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_preview_image_id_fkey` FOREIGN KEY (`preview_image_id`) REFERENCES `images`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `farm_shops` ADD CONSTRAINT `farm_shops_farm_id_fkey` FOREIGN KEY (`farm_id`) REFERENCES `farms`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `sales_mode` ADD CONSTRAINT `sales_mode_farm_shop_id_fkey` FOREIGN KEY (`farm_shop_id`) REFERENCES `farm_shops`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
