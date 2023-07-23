-- CreateTable
CREATE TABLE `usuarios` (
    `idusuarios` INTEGER NOT NULL AUTO_INCREMENT,
    `login` VARCHAR(150) NULL,
    `id` INTEGER NULL,
    `avatar_url` VARCHAR(255) NULL,

    PRIMARY KEY (`idusuarios`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
