-- MySQL Workbench Synchronization
-- Generated: 2024-02-16 12:14
-- Model: New Model
-- Version: 1.0
-- Project: Name of the project
-- Author: Angela

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

ALTER TABLE `freedb_cookieproject`.`project` 
ADD COLUMN `author_id` INT(11) NOT NULL AFTER `demoUrl`,
ADD INDEX `fk_project_author_idx` (`author_id` ASC) VISIBLE;
;

ALTER TABLE `freedb_cookieproject`.`project` 
ADD CONSTRAINT `fk_project_author`
  FOREIGN KEY (`author_id`)
  REFERENCES `freedb_cookieproject`.`author` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
