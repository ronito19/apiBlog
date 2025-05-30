## API Rest

- Debo usar los metodos tal y como estan especificados (GET: para obtener datos, POST: para crear nuevos datos).

- Todas mis respuestas van a ir en formato JSON.

- Debo responder SIEMPRE a la peticion.

- Debo mantener una unidad en las URLs.




## API Blog

## Obtener los datos de los autores

Method: GET
Url: /apiblog/autores
Headers: XXX
Body: XXX

Response: Un array con toda la informacion de los autores


## Obtener los datos de los posts

Method: GET
Url: /apiblog/posts
Headers: XXX
Body: XXX

Response: Un array con todos los posts


## Recuperar un autor a partir de su ID

Method: GET
Url: /apiblog/autores/<AUTORID>
Headers: XXX
Body: XXX

Response: Un objeto con los datos del autor
Error Response: 404 + Mensaje



## Recuperar un post a partir de su ID

Method: GET
Url: /apiblog/posts/<POSTID>
Headers: XXX
Body: XXX

Response: Un objeto con los datos del post
Error Response: 404 + Mensaje


## Crear un nuevo autor

Method: POST
Url: /apiblog/autores
Headers: XXX
Body: nombre, email, imagen

Response: El objeto que representa el nuevo autor creado


## Crear un nuevo post

Method: POST
Url: /apiblog/posts
Headers: XXX
Body: titulo, descripcion, fecha_creacion, categoria

Response: El objeto que representa el nuevo post creado
