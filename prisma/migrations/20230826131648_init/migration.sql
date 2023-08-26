-- AlterTable
ALTER TABLE `User` MODIFY `address` VARCHAR(191) NULL,
    MODIFY `phone_number` VARCHAR(191) NULL,
    MODIFY `date_of_birth` VARCHAR(191) NULL,
    MODIFY `is_notify_enabled` BOOLEAN NULL;
