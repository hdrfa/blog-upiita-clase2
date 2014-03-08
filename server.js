/*obtener una variable para acceder a todas las funcionalidades de express*/
var express =require("express");
/*Configurar mi servido*/
var app = express();/*configuracion servidor asi se llama el servidor*/
/*hacemos que la pagina sea dinamica*/
var consolidate = require("consolidate");//libreria que nos permite configurar vistas dinamicas
var dust = require("dustjs-linkedin");//motor para crear vistas dinamicas
//dust es el nombre de la variable y se puede cambiar
app.listen(8081);
/*imprime en la consola del servidor*/
console.log("servidor levantado");
/*despacha archivos estaticos*/
/*la primera / es una ruta diagonal y la segunda /vistas es la ruta de mis archivos ruta real*/
//app.use("/",express.static(__dirname + "/vistas")); 
app.use("/css",express.static(__dirname + "/css"));
app.use("/imagenes",express.static(__dirname + "/imagenes"));
app.use("/videos",express.static(__dirname + "/videos"));

/*configurar nuestro motor de vistas*/
app.set("view engine", "dust"); //nuestras vistas van a tener extension .dust
app.engine("dust", consolidate.dust);//indicando el engine que voy a usar
app.set("views", __dirname + "/vistas");// indicamos la carpeta que contiene las vistas
/*hacemos que el servidor pueda leer los datos que recibe del navegador*/
app.use(express.urlencoded());
/*hacemos que el servidor  responda a peticiones Get*/

app.get("/index", function(request, response) {
	/*aqui va la logica de como respondere a la peticion /*index */
	response.render("index");
});

/**responder a una peticion post**/
app.post("/suscribirse", function (request, response) {
  	console.log("Email: " + request.body.email);
  	response.render("respuesta",{
  		asunto: "yo soy el servidor",
  		email: request.body.email
  	});
  	
});

app.get("/contacto", function (pedir, entregar) {
	dar.render("contacto");
});

app.post("datos", function (pedir, entregar) {
	console.log("datos: " + pedir.body.datos);
	entregar.render("respuestacontac",{
		asunto: "datos agregados",
		datos: pedir.body.datos
	});
  
});
