/*
  Warnings:

  - You are about to drop the column `password` on the `managers` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `patients` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `managers` DROP COLUMN `password`;

-- AlterTable
ALTER TABLE `patients` DROP COLUMN `password`;
