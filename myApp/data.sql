
use burgerfly_db;

insert into usuarios (username, imagen_perfil, email, password, birthdate, created_at, update_at) 
values ('kundo','','kundo@gmail.com', 'hola123','1999-03-06','2022-04-04','2022-05-05'),
('marian','','marian@gmail.com','hola123','2003-03-25','2022-04-04','2022-05-05'),
('mauro', '','mauro@gmail.com','hola123', '2003-04-19','2022-04-04','2022-04-04'),
('franco', '', 'franco@gmail.com', 'hola123', '2002-09-09','2022-04-04','2022-04-04'),
('roman','','roman@gmail.com', 'hola123', '1975-06-24','2022-05-05','2022-06-06'),
('Brian','', 'brian@gmail.com', 'hola123', '1992-01-01','2022-05-05','2022-06-06'),
('Luis','', 'luis@gmail.com', 'hola123', '1985-10-10','2022-05-05','2022-06-06');

insert into productos ( titulo_producto, imagen_producto, descripcion_producto, fecha_creacion, update_at)
values ('Big Mac', '', 'El clásico de siempre, esta vez modernizado','2022-06-15','2022-06-15'),
('Cuarto de Libra', '', 'Historicamente nuestra mejor hamburguesa','2022-06-15','2022-06-15'),
('Triple Bacon', '', 'La panceta hace mejor a las hamburguesas','2022-06-15','2022-06-15'),
('McFiesta', '', 'Fiessta en tu bocaaa','2022-06-15','2022-06-15'),
('Grand Tasty Turbo Bacon', '', 'la mejor hamburguesa de la era moderna','2022-06-15','2022-06-15'),
('McVeggie', '', 'Vegeteraiana para todos los gustos','2022-06-15','2022-06-15'),
('McPollo', '', 'Y si sos del pollo es por acá..','2022-06-15','2022-06-15'),
('DobleCheese', '', 'Q','2022-06-15','2022-06-15'),
('Tripe Monster', '', 'te la bancas?','2022-06-15','2022-06-15'),
('Original Meet', '', 'Carne vacuna ','2022-06-15','2022-06-15'),
('Chimi Burger', '', 'Un poquito del asado en una hamburgesa','2022-06-15','2022-06-15'),
('Pork Burger', '', 'Hamburgeusa hecha a base de cerdo','2022-06-15','2022-06-15'),
('ChoriBurger', '', 'el embutido por excelencia','2022-06-15','2022-06-15'),
('CasaMoma', '', 'La mejor hamburguesa que vas a probar en tu vida','2022-06-15','2022-06-15'),
('Mostaza', '', 'Buena alternativa','2022-06-15','2022-06-15'),
('Triple Queso', '', 'No Falla.','2022-06-15','2022-06-15'),
('TFTS', '', 'Hamburguesa texana','2022-06-15','2022-06-15'),
('Buenos Aires', '', 'Bien porteña','2022-06-15','2022-06-15'),
('Chaco', '', 'La chaconeta señores...','2022-06-15','2022-06-15'),
('Uruguay', '', 'Hamburguesa de nuestros hermanos uruguayos','2022-06-15','2022-06-15'),
('TEXAS', '', 'Grilled master piece','2022-06-15','2022-06-15');

INSERT INTO comentarios (texto_comentario, productos_id, usuarios_id, created_at)
VALUES
('caravana!!',4, 14, '2022-06-15'),
('que locura!!',5,8, '2022-06-15'),
('la quiero!',6,9, '2022-06-15'),
('dondeeee',7,10, '2022-06-15'),
('wow',8,11,'2022-06-15'),
('sin palabras',9,12, '2022-06-15'),
('es una locura esto',10,13, '2022-06-15'),
('jajajaj',11,14 ,'2022-06-15'),
('jjujuj', 12,8,'2022-06-15'),
('es la mejor hamburguesa que probé en mi vida',13,9, '2022-06-15'),
('quiero comerla ya',14,10, '2022-06-15'),
('receta?',15,11, '2022-06-15'),
('en donde la comieron?',16,12, '2022-06-15'),
('cuanto cuesta?',17,13 ,'2022-06-15'),
('quien la hizo',18,14 ,'2022-06-15'),
('que locura esa hamburguesa',19,8 ,'2022-06-15'),
('uruguay no falla',20,9, '2022-06-15'),
('quiero hacerla',21,10 ,'2022-06-15'),
('con que pan está hecha?',1,11, '2022-06-15'),
('nunca falla ese lugar',2,12, '2022-06-15'),
('macdonalds',3,13 ,'2022-06-15'),
('mac no fallaaaaaa',4,14, '2022-06-15'),
('masterpiece',5,8, '2022-06-15'),
('nunca vi algo igual',6,9,'2022-06-15'),
('tengo hambre',7,10 ,'2022-06-15'),
('que masa esa burrrggga',8,11, '2022-06-15'),
('mira lo que es eso papaaaaaa',9,12, '2022-06-15'),
('que paso aca?',10,11, '2022-06-15'),
('muy muy muy muy muy buena',11,12, '2022-06-15'),
('OMG',12,13, '2022-06-15'),
('beautiful burgerrrr!!',13,14, '2022-06-15'),
('esto es un delirio hermano',14,8, '2022-06-15')

insert into seguidores (usuarios_seguidos_id, usuarios_seguidores_id)
values (8,14),
(9,13),
(10,12),
(11,12),
(12,11),
(13,10),
(14,8),
(9,13),
(11,9)



CREATE TABLE usuarios (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(150) NOT NULL,
imagen_perfil VARCHAR(500) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
password VARCHAR(20) NOT NULL,
birthdate DATE NOT NULL,
created_at DATE,
update_at Datetime,
);

CREATE TABLE productos (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
titulo_producto VARCHAR(150) NOT NULL,
imagen_producto VARCHAR(500) NOT NULL,
descripcion_producto VARCHAR (300) NOT NULL,
created_at DATETIME,
update_at Datetime,
usuarios_id int unsigned,
foreign key (usuarios_id) references usuarios (id),
comentarios_id int unsigned,
foreign key (comentarios_id) references comentarios (id)

);
ALTER TABLE `burgerfly_db`.`productos` 
ADD INDEX `usuarios_id_idx` (`usuarios_id` ASC);
;
ALTER TABLE `burgerfly_db`.`productos` 
ADD CONSTRAINT `usuarios_id`
  FOREIGN KEY (`usuarios_id`)
  REFERENCES `burgerfly_db`.`usuarios` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;




CREATE TABLE comentarios(
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
texto_comentario VARCHAR(500),
productos_id INT UNSIGNED,
usuarios_id INT UNSIGNED,
created_at Datetime,
FOREIGN KEY (productos_id) REFERENCES productos(id),
FOREIGN KEY (usuarios_id) REFERENCES usuarios(id)
);

CREATE TABLE seguidores (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
usuarios_seguidos_id INT UNSIGNED,
usuarios_seguidores_id INT UNSIGNED,
FOREIGN KEY (usuarios_seguidos_id) REFERENCES usuarios(id),
FOREIGN KEY (usuarios_seguidores_id) REFERENCES usuarios(id)
);
