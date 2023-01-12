
# EXAMEN FINAL DEL TERCER MODULO

Repositorio del sistema del examen fina.

Pasos para ejecutar el api realizado en node js.




## Pasos para ejecutar el programa
Antes de realizar todos los pasos debera tener instalado nodejs, el cual lo puede descargar del
siguiente enlace https://nodejs.org/en/

### Paso 1
ejecutar el siguiente comando
``` bash
npm install
```
### Paso 2
ejecutar el script sql el cual esta desarrollado en postgres, (si no cuenta con la base de datos en postgres descarguelo del siguiente
enlace https://www.postgresql.org/download/). El script se encuentra en la siguiente ruta del proyecto 
`/src/scripts/scripts.sql`

### Paso 3
Para realizar la ejecución en modo desarrollo el proyecto tendra que ejecutar el siguiente comando, siempre situandose en la raiz del proyecto
```bash
  npm run start:dev
```
Para realizar la ejecución en modo producción del proyecto tendra que ejecutar el siguiente comando

```bash
  npm run start:prod
```
### Paso 4

Para que el proyecto se ejecute de manera exito debera revisar las variables de entorno, que se encuentran en el archivo `.env` y 
que el mismo se describe a continuación
## Variables de Entorno

Para ejecutar este proyecto, deberá añadir las siguientes variables de entorno a su archivo `.env`

`PORT` = Puerto de la api

`PGUSER` = usuario de la base de datos

`PGHOST` = host de la base de datos

`PGPASSWORD` = password de la base de datos

`PGDATABASE` = nombre de la base de datos 

`PGPORT` = puerto de la base de datos
## Demo

Para realizar la prueba del programa lo realizaremos tanto de manera local como en produccion utilizando un dominio al cual se subio dicho proyecto.

### Manera local
Para este medio utilizaremos el programa postman, en caso de no contar con el, descargue del siguiente enlace https://www.postman.com/downloads/
(Como ejemplo utilizaremos el puerto `4002` que se encuentra en nuestras variables de entorno en caso de cambiar de puerto solo tendra que cambiar el `4002` por el numero de puerto asignado)

#### Get Users
``` 
(METHOD GET)
localhost:4002/user/    
```
or ejecute el curl
``` bash
curl --location --request GET 'localhost:4002/user/'
```

#### Get User by Id
``` 
(METHOD GET)
localhost:4002/user/1    
```
or ejecute el curl
``` bash
curl --location --request GET 'localhost:4002/user/1'
```

#### Register User
``` 
(METHOD POST)
localhost:4002/user/register    
```
or ejecute el curl
``` bash
curl --location --request POST 'localhost:4002/user/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fullname": "Pedrito Perez 2",
    "age": 75
}'
```

#### Update User
``` 
(METHOD PUT)
localhost:4002/user/update/1  
```
or ejecute el curl
``` bash
curl --location --request PUT 'localhost:4002/user/update/1' \
--header 'Content-Type: application/json' \
--data-raw '{
    "fullname": "Luis Herrera Lopez",
    "age": 45
}'
```

#### Delete User
``` 
(METHOD DELETE)
localhost:4002/user/delete/1  
```
or ejecute el curl
``` bash
curl --location --request DELETE 'localhost:4002/user/delete/1'
```

#### Average age
``` 
(METHOD GET)
localhost:4002/user/promedio-edad 
```
or ejecute el curl
``` bash
curl --location --request GET 'localhost:4002/user/promedio-edad'
```

#### Information Page
``` 
(METHOD GET)
localhost:4002/information/ 

```
or ejecute el curl
``` bash
curl --location --request GET 'localhost:4002/information/'
```

### Manera Externa
Para ejecutar se debera seguir los anteriores pasos pero en vez de colocar `localhost:4002` se debera colocar 
el dominio http://tercer-modulo.developersosit.com/ seguido de los metodos con los nombres mencionados en el anterior punto, 
para registrar, actualizar y eliminar debera utilizar `POSTMAN`
