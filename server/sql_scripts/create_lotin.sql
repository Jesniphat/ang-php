CREATE TABLE `lot_in` (
  `id` INT NOT NULL,
  `product_id` INT NULL,
  `product_code` VARCHAR(45) NULL,
  `lot_in` BIGINT NULL,
  `lot_total` BIGINT NULL,
  `created_at` DATETIME NULL,
  `created_by` INT NULL,
  `updated_at` DATETIME NULL,
  `updated_by` INT NULL,
  PRIMARY KEY (`id`));