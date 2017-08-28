ALTER TABLE `product` 
CHANGE COLUMN `product_qty` `product_cost` BIGINT(20) NOT NULL DEFAULT 0 AFTER `status`,
CHANGE COLUMN `product_price` `product_price` BIGINT NOT NULL DEFAULT 0 ;
