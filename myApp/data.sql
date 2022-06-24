drop schema if exists burgerfly_db;

CREATE SCHEMA burgerfly_db;

USE burgerfly_db;

CREATE TABLE usuarios (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(150) NOT NULL,
imagen_perfil VARCHAR(500) NOT NULL,
email VARCHAR(200) UNIQUE NOT NULL,
password VARCHAR(200) NOT NULL,
birthdate DATE NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE productos (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
titulo_producto VARCHAR(150) NOT NULL,
imagen_producto VARCHAR(500) NOT NULL,
descripcion_producto VARCHAR (300) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
usuarios_id int unsigned

);

CREATE TABLE comentarios(
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
texto_comentario VARCHAR(500),
productos_id INT UNSIGNED,
usuarios_id INT UNSIGNED,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

);

CREATE TABLE seguidores (
id INT UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT,
usuarios_seguidos_id INT UNSIGNED,
usuarios_seguidores_id INT UNSIGNED,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (usuarios_seguidos_id) REFERENCES usuarios(id),
FOREIGN KEY (usuarios_seguidores_id) REFERENCES usuarios(id)
);

ALTER TABLE `productos` 
ADD foreign key (usuarios_id) references usuarios (id);


ALTER TABLE `comentarios` 
ADD FOREIGN KEY (productos_id) REFERENCES productos(id),
ADD FOREIGN KEY (usuarios_id) REFERENCES usuarios(id);

-- ADD foreign key (comentarios_id) references comentarios (id); -- La clave foráenea va en la otra tabla.
insert into usuarios (username, imagen_perfil, email, password, birthdate, created_at, updated_at) 
values ('kundo','','kundo@gmail.com', 'hola123','1999-03-06','2022-04-04','2022-05-05'),
('marian','','marian@gmail.com','hola123','2003-03-25','2022-04-04','2022-05-05'),
('mauro', '','mauro@gmail.com','hola123', '2003-04-19','2022-04-04','2022-04-04'),
('franco', '', 'franco@gmail.com', 'hola123', '2002-09-09','2022-04-04','2022-04-04'),
('roman','','roman@gmail.com', 'hola123', '1975-06-24','2022-05-05','2022-06-06'),
('Brian','', 'brian@gmail.com', 'hola123', '1992-01-01','2022-05-05','2022-06-06'),
('Luis','', 'luis@gmail.com', 'hola123', '1985-10-10','2022-05-05','2022-06-06');

insert into productos ( titulo_producto, imagen_producto, descripcion_producto, created_at, updated_at, usuarios_id)
values ('Big Mac', 'bigmac.jpeg', 'El clásico de siempre, esta vez modernizado','2022-06-15','2022-06-15',1),
('Cuarto de Libra', 'almavoraz.jpeg', 'Historicamente nuestra mejor hamburguesa','2022-06-15','2022-06-15',1),
('Triple Bacon', 'burger 1.png', 'La panceta hace mejor a las hamburguesas','2022-06-15','2022-06-15',2),
('McFiesta', 'montanaburgervoraz.jpeg', 'Fiessta en tu bocaaa','2022-06-15','2022-06-15',3),
('Grand Tasty Turbo Bacon', 'quilombolabirra.jpeg', 'la mejor hamburguesa de la era moderna','2022-06-15','2022-06-15',3),
('McVeggie', 'wisconsinlabirra.jpeg', 'Vegeteraiana para todos los gustos','2022-06-15','2022-06-15',2),
('McPollo', 'grilledonionbigpons.jpeg', 'Y si sos del pollo es por acá..','2022-06-15','2022-06-15',4),
('DobleCheese', 'spicichickenvoraz.jpeg', 'Q','2022-06-15','2022-06-15',6),
('Tripe Monster', 'triplecuartomc.jpeg', 'te la bancas?','2022-06-15','2022-06-15',3),
('Original Meet', 'triplequeso,c.jpeg', 'Carne vacuna ','2022-06-15','2022-06-15',5),
('Chimi Burger', 'americanburger.jpeg', 'Un poquito del asado en una hamburgesa','2022-06-15','2022-06-15',2),
('Pork Burger', 'burgerroyalbigpons.jpeg', 'Hamburgeusa hecha a base de cerdo','2022-06-15','2022-06-15',7),
('ChoriBurger', 'quesoazul.jpeg', 'el embutido por excelencia','2022-06-15','2022-06-15',6),
('CasaMoma', 'completa.jpeg', 'La mejor hamburguesa que vas a probar en tu vida','2022-06-15','2022-06-15',5),
('Mostaza', 'open.jpeg', 'Buena alternativa','2022-06-15','2022-06-15',7),
('Triple Queso', 'chedar.jpeg', 'No Falla.','2022-06-15','2022-06-15',4),
('TFTS', 'huevo.jpeg', 'Hamburguesa texana','2022-06-15','2022-06-15',2),
('Buenos Aires', 'atari.jpeg', 'Bien porteña','2022-06-15','2022-06-15',2),
('Chaco', 'atomic.jpeg', 'La chaconeta señores...','2022-06-15','2022-06-15',1),
('Uruguay', 'texas.jpeg', 'Hamburguesa de nuestros hermanos uruguayos','2022-06-15','2022-06-15',4),
('TEXAS', '', 'Grilled master piece','2022-06-15','2022-06-15',6);

INSERT INTO comentarios (texto_comentario, productos_id, usuarios_id, created_at)
VALUES
('caravana!!',4, 1, '2022-06-15'),
('que locura!!',5,7, '2022-06-15'),
('la quiero!',6,5, '2022-06-15'),
('dondeeee',7,1, '2022-06-15'),
('wow',8,2,'2022-06-15'),
('sin palabras',9,2, '2022-06-15'),
('es una locura esto',10,3, '2022-06-15'),
('jajajaj',11,4 ,'2022-06-15'),
('jjujuj', 12,3,'2022-06-15'),
('es la mejor hamburguesa que probé en mi vida',13,4, '2022-06-15'),
('quiero comerla ya',14,1, '2022-06-15'),
('receta?',15,6, '2022-06-15'),
('en donde la comieron?',16,2, '2022-06-15'),
('cuanto cuesta?',17,3 ,'2022-06-15'),
('quien la hizo',18,4 ,'2022-06-15'),
('que locura esa hamburguesa',19,7,'2022-06-15'),
('uruguay no falla',20,6, '2022-06-15'),
('quiero hacerla',1,5,'2022-06-15'),
('con que pan está hecha?',1,3, '2022-06-15'),
('nunca falla ese lugar',2,2, '2022-06-15'),
('macdonalds',3,1 ,'2022-06-15'),
('mac no fallaaaaaa',4,1, '2022-06-15'),
('masterpiece',5,6, '2022-06-15'),
('nunca vi algo igual',6,6,'2022-06-15'),
('tengo hambre',7,1 ,'2022-06-15'),
('que masa esa burrrggga',8,1, '2022-06-15'),
('mira lo que es eso papaaaaaa',9,2, '2022-06-15'),
('que paso aca?',10,5, '2022-06-15'),
('muy muy muy muy muy buena',11,5, '2022-06-15'),
('OMG',12,7, '2022-06-15'),
('beautiful burgerrrr!!',13,4, '2022-06-15'),
('esto es un delirio hermano',14,2, '2022-06-15');

insert into seguidores (usuarios_seguidos_id, usuarios_seguidores_id)
values (1,2),
(1,3),
(1,4),
(1,5),
(2,1),
(2,5),
(3,7),
(4,1),
(4,2)

