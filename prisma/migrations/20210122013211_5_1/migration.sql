/*
  Warnings:

  - Made the column `isHR` on table `User` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `isHR` BOOLEAN NOT NULL;
