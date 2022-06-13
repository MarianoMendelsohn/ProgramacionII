
use burgerfly_db

CREATE TABLE productos (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
titulo_producto VARCHAR(150) NOT NULL,
imagen_producto VARCHAR(500) NOT NULL,
descripcion_producto VARCHAR (300) NOT NULL,
fecha_creacion DATETIME NOT NULL
);
ALTER TABLE `burgerfly_db`.`productos` 
ADD COLUMN `createdAt` DATE NOT NULL AFTER `createdAt`;

ALTER TABLE `burgerfly_db`.`productos` 
ADD COLUMN `updateAt` DATE NOT NULL AFTER `updateAt`;
DROP COLUMN 'fecha_creacion' DATETIME NOT NULL;

CREATE TABLE usuarios (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(150) NOT NULL,
imagen_perfil VARCHAR(500) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
password VARCHAR(20) NOT NULL,
birthdate DATE NOT NULL
);
ALTER TABLE `burgerfly_db`.`usuarios` 
ADD COLUMN `createdAt` DATE NOT NULL AFTER `createdAt`;

ALTER TABLE `burgerfly_db`.`usuarios` 
ADD COLUMN `updateAt` DATE NOT NULL AFTER `updateAt`;
INSERT INTO `usuarios` (`id`, `username`, `imagen_perfil`, `email`, `password`, `birthdate`, `createdAt`, `updateAt`) VALUES
(1, 'maurooso', '', 'mauro@gmail.com', 'hola123', '2003-09-12', NULL, NULL),
(2, 'marianom', '', 'marianom@gmail.com', 'hola123', '2004-10-09', NULL, NULL),
(3, 'franco', '', 'francoo@gmail.com', 'hola123', '0200-09-12', NULL, NULL);


CREATE TABLE comentarios(
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
texto_comentario VARCHAR(500),
id_product INT UNSIGNED,
id_usuarios INT UNSIGNED,
FOREIGN KEY (id_product) REFERENCES productos(id),
FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
);
ALTER TABLE `burgerfly_db`.`comentarios` 
ADD COLUMN `createdAt` DATE NOT NULL AFTER `createdAt`;


CREATE TABLE seguidores (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
id_usuarios_seguido INT UNSIGNED,
id_usuarios_seguidor INT UNSIGNED,
FOREIGN KEY (id_usuarios_seguido) REFERENCES usuarios(id),
FOREIGN KEY (id_usuarios_seguidor) REFERENCES usuarios(id)
);

INSERT INTO usuarios (username,imagen_perfil,email,password,birthdate)
values ('maurooso','','mauro@gmail.com','hola123','2003-09-12'),
('marianom','','marianom@gmail.com','hola123','2004-10-09'),
('franco','','francoo@gmail.com','hola123','200-09-12');

