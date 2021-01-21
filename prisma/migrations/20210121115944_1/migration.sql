-- CreateTable
CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `position` VARCHAR(191) NOT NULL,
    `education` VARCHAR(191) NOT NULL,
    `former_employers` VARCHAR(191) NOT NULL,
    `experience_in_the_trade` VARCHAR(191) NOT NULL,
    `special_knowledge` VARCHAR(191) NOT NULL,
    `hobbies` VARCHAR(191) NOT NULL,
    `skills` VARCHAR(191) NOT NULL,
    `network_connections` VARCHAR(191) NOT NULL,
    `languages` VARCHAR(191) NOT NULL,
    `software_skills` VARCHAR(191) NOT NULL,
    `customers` VARCHAR(191) NOT NULL,
    `projects` VARCHAR(191) NOT NULL,
    `further_training` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
