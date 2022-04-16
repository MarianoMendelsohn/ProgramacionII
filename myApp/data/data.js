const data = {
    usuario : {
        nombre : "kundo",
        apellido : "tabanera",
        mail : "kundo@gmail.com",
        imagenDelPerfil: '/images/usuarios/KundoPerfil.JPG',
      
    },
    productos : [{
        imagen:"/images/prodctos/americanburger.jpeg",
        nombreDelProducto:"American Burger",
        descripcion:"Que nunca falten los clásicos 👉🏻 American Burger 🤩⁣ Doble medallón 120gr⁣, cheddar x4⁣, tomate⁣, lechuga⁣, pickles de pepino⁣, cebolla⁣, aderezo Thousand Island⁣. 🛵 Los esperamos en todos nuestros locales hasta las 00hs.⁣",
        fechaDeCarga:"06/03/21"//number
    },
    
    {
        imagen:"/images/prodctos/alabamavoraz.jpeg",//url file
        nombreDelProducto:"Alabama Burger",
        descripcion:"GREENBOW “ALABAMA”!! El nombre es por la mítica escena de Forrest Gump? no te lo diremos. Sisisiii tenemos nueva Burger y esta increíbleeeee. Doble carne, cheddar x4, pepinos, cebolla crispy y nueva salsa Bama que te va a hacer viajar fuerte❤️. Por el momento será exclusiva en nuestras sucursales y no estará disponible por delivery (@marce_vrz quiere que la pruebes recién salida). Venite hoy Jueves a partir de las 19:30hs y obviamente contanos tu experiencia. Gracias y esperamos que la disfruten mucho🍔❤️.",
        fechaDeCarga:"15/09/20"//number
    },
    
    {
        imagen:"/images/prodctos/atari.jpeg",//url file
        nombreDelProducto:"Atari Burger",
        descripcion:"𝐀𝐓𝐀𝐑𝐈 🕹️⁣ 🅰️ Esta consola revolucionó todo y esta Burger también:⁣ 200 gr. de carne⁣, cheddar x 4⁣, doble panceta⁣, lechuga⁣,tomate⁣, salsa 𝘵𝘰𝘱 𝘴𝘦𝘤𝘳𝘦𝘵⁣",
        fechaDeCarga:"23/05/21"//number
    },
    
    {
        imagen:"/images/prodctos/bigmac.jpeg",//url file
        nombreDelProducto:"Big Mac",
        descripcion:"Quizás sean las dos hamburguesas de carne 100% vacuna con esa salsa especial y queso derretido, el toque de cebolla y la frescura de la lechuga o el crocante del pepino, lo que la hace la hamburguesa más famosa del mundo. Un sabor único.",
        fechaDeCarga:"22/07/21"//number
    },
    
    {
        imagen:"/images/prodctos/burgerroyalbigpons.jpeg",//url file
        nombreDelProducto:"Burger Royal",
        descripcion:"Si te gustan los pickles, tenés que probar nuestra burger Royal con urgencia.⁣ No digas que no te avisamos 😉⁣. 🛵 Tenemos takeaway en todos nuestros locales hasta las 00hs.⁣",
        fechaDeCarga:"14/01/19"//number
    },
    
    {
        imagen:"/images/prodctos/grilledonionbigpons.jpeg",//url file
        nombreDelProducto:"Grilled Onion",
        descripcion:"Si sos amante de la cebolla, nuestra Grilled Onion es para vos 🔥⁣ medallón 120 gr x2⁣, queso Cheddar x4⁣, cebolla grilled⁣. Te está esperando. 😏⁣",
        fechaDeCarga:"12/01/21"//number
    },
    
    {
        imagen:"/images/prodctos/montanaburgervoraz.jpeg",//url file
        nombreDelProducto:"Montana Burger",
        descripcion:"Montana burger: Doble carne, provolone x2, cebolla caramelizada, chimichurri, manteca",
        fechaDeCarga:"12/01/21"//number
    },
    
    {
        imagen:"/images/prodctos/nesoldfashioned.jpeg",//url file
        nombreDelProducto:"NES",
        descripcion:"𝐍𝐞𝐬 🎮⁣ ¿Probaste esta 💣?⁣ 200 gr de carne⁣, doble cheddar⁣, deep 𝘧𝘳𝘪𝘦𝘥 muzzarela⁣, panceta⁣, salsa marinara⁣. I𝘮𝘱𝘰𝘴𝘪𝘣𝘭𝘦 𝘳𝘦𝘴𝘪𝘴𝘵𝘪𝘳𝘴𝘦 🐷🧀",
        fechaDeCarga:"23/05/21"//number
    },
    
    {
        imagen:"/images/prodctos/quilombolabirra.jpeg",//url file
        nombreDelProducto:"Quilombo",
        descripcion:"",
        fechaDeCarga:"06/03/21"//number
    },
    
    {
        imagen:"/images/prodctos/spicychickenvoraz.jpeg",
        nombreDelProducto:"Spicy Chicken",
        descripcion:"Spicy Crispy Chicken 🌶 Queríamos algo para los amantes del 🌶, ya que en las cocinas de Voraz lo somos y mucho. Simpleza, y el equilibrio que nos caracteriza, junto al toque de frescura de nuestros pepinos. Un sándwich que cierra una ecuación, de las que más disfrutamos trabajando. Queremos que lo prueben y como siempre nos cuenten. Enjoy!",
        fechaDeCarga:"12/01/21"//number
    },
    
    {
        imagen:"/images/prodctos/sweetonionbigpons.jpeg",//url file
        nombreDelProducto:"Sweet Onion",
        descripcion:"Te aseguramos que nuestra Sweet Onion Burger 🤤 te cambia el lunes.⁣ 🛵 Tenemos Takeaway en todos nuestros locales y Delivery por @pedidosya hasta las 00hs.⁣",
        fechaDeCarga:"12/01/21"//number
    },
    
    {
        imagen:"/images/prodctos/triplecuartomc.jpeg",//url file
        nombreDelProducto:"Triple Cuarto",
        descripcion:"¡NUEVO PAN! Triple carne, inigualable queso cheddar, cebolla, kétchup y mostaza, y el increíble ingrediente que lo hace único: bacon premium",
        fechaDeCarga:"12/01/21"//number
    },
    
    {
        imagen:"/images/prodctos/triplequesomc.jpeg",//url file
        nombreDelProducto:"Triple Queso",
        descripcion:"Tres medallones de carne 100% vacuna, queso derretido, mostaza, kétchup y cebolla triturada, es algo que nunca puede fallar.",
        fechaDeCarga:"12/01/21"//number
    },
    
    {
        imagen:"/images/prodctos/wisconsinlabirra.jpeg",//url file
        nombreDelProducto:"Wisconsin",
        descripcion:"",
        fechaDeCarga:"12/01/21"//number
    },
    
    ],

    comentarios :  [{
        nombreDeUsuario:"McDonalds",
        textoDelComentario:"La big mac ta mas piola",
        imagenDelPerfil:"/images/prodctos/mcLogo.jpeg",
    },
    
    {
        nombreDeUsuario:"BigPons",
        textoDelComentario:"aguante big pons pa",
        imagenDelPerfil:"/images/prodctos/bigponslogo.jpeg",
    },
    
    {
        nombreDeUsuario:"VorazBurger",
        textoDelComentario:"ni parecidas a las de voraz",
        imagenDelPerfil:"/images/prodctos/vorazlogo.jpeg",
    },
    
    {
        nombreDeUsuario:"OldFashioned",
        textoDelComentario:"proximamente sucursal en baires",
        imagenDelPerfil:"/images/prodctos/oldfashionedlogo.jpeg",
    },
    
    {
        nombreDeUsuario:"LaBirraBar",
        textoDelComentario:"silencio que llego el rey",
        imagenDelPerfil:"/images/prodctos/labirralogo.jpeg",
    },
    
    ]
}

module.exports = data