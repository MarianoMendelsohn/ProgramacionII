CREATE TABLE usuario {

id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT 
nombre VARCHAR(50) NOT NULL
apellido VARCHAR(50) NOT NULL
email  VARCHAR(50) NOT NULL
usuario VARCHAR(50) NOT NULL
contrasenia VARCHAR(50) NOT NULL
fecha-nacimiento DATE NOT NULL
numero-documento INT NOT NULL
foto VARCHAR(300)
};
use burgerfly_db

CREATE TABLE productos (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
titulo_producto VARCHAR(150) NOT NULL,
imagen_producto VARCHAR(500) NOT NULL,
descripcion_producto VARCHAR (300) NOT NULL,
fecha_creacion DATETIME NOT NULL
);

CREATE TABLE usuarios (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(150) NOT NULL,
imagen_perfil VARCHAR(500) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
password VARCHAR(20) NOT NULL,
birthdate DATE NOT NULL
);

CREATE TABLE comentarios(
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
texto_comentario VARCHAR(500),
id_product INT UNSIGNED,
id_usuarios INT UNSIGNED,
FOREIGN KEY (id_product) REFERENCES productos(id),
FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
);

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

