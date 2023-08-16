# pt-danielcotes

Para correr el proyecto, ejecuta el siguiente comando: `npm run dev`. Esto creará la carpeta `dist`. Es posible que falle en el primer intento, ya que es probable que no encuentre el archivo `index`. Ejecuta nuevamente el comando para ejecutar la aplicación en el puerto 3000.

El archivo `.env` debe tener el siguiente formato:

DB_HOST=localhost
DB_PORT=5432
DB_NAME=username
DB_USER=postgres
DB_PASSWORD=pswd


Para ejecutar las queries sobre su base de datos debe dirigirse a la carpeta `database/creationQuery.sql`

Para generar datos de prueba en la carpeta `helpers`, ejecuta el comando: `npm run data`.
