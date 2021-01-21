/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[email]` on the table `User`. If there are existing duplicate values, the migration will fail.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `education` VARCHAR(191),
    MODIFY `former_employers` VARCHAR(191),
    MODIFY `experience_in_the_trade` VARCHAR(191),
    MODIFY `special_knowledge` VARCHAR(191),
    MODIFY `hobbies` VARCHAR(191),
    MODIFY `skills` VARCHAR(191),
    MODIFY `network_connections` VARCHAR(191),
    MODIFY `languages` VARCHAR(191),
    MODIFY `software_skills` VARCHAR(191),
    MODIFY `customers` VARCHAR(191),
    MODIFY `projects` VARCHAR(191),
    MODIFY `further_training` VARCHAR(191);

-- CreateIndex
CREATE UNIQUE INDEX `User.email_unique` ON `User`(`email`);
