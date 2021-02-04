## Running the project

You need an ElephantSQL database. Put those credentials in a .env file in the backend directory (see below for sample .env file). Then run ```npm i``` in both the backend and frontend directories to install all the required packages. Once all the packages are installed, simply run ```npm run dev``` in both the backend and frontend directories and you're good to go!


### Sample .env file
```
DB_HOST=qwerty.db.elephantsql.com
DB_DATABASE=qwertyui
DB_USER=qwertyui
DB_PASSWORD=qwertyuiopasdfghjklzxcvbnm
DB_PORT=5432
NODE_ENV=development
DB_MAX_CONNECTIONS=10
```