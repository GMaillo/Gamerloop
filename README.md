# GamerLoop


## Proyecto final Keepcoding VII edición

Con la llegada de las plataformas de streaming, la vida del videojuego físico poco a poco

llegará a su fin... Mientras tanto, podemos hacer que dure lo máximo posible

sin parar de jugar gracias a Garmerloop. 

## Instalación API

Pinchando en el siguiente enlace accedemos al repositio donde hemos creado la api de gamerloop.

[Gamerloop-API](https://github.com/GMaillo/gamerloop-api.git).

Después descargamos, instalamos y arrancamos siguiendo las instrucciones este repositorio.


## Instalación APP

Una vez descargada e instalada la aplicación, la ejecutamos con `npm start`


A través de la IP `http://18.219.131.98:3001/` podemos acceder a la API y visualizar su contenido.

Se utiliza node como servidor y PM2 para mantener la aplicación siempre en ejecución.


Se utiliza nginx como proxy inverso para recibir las peticiones HTTP y derivárselas a node.


Los archivos estáticos que contienen imágenes y css son servidos por nginx. Se añade la cabecera X-Owner GMaillo para poder comprobarlo.
