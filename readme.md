-ejecutar comandos

de manera: local para cargar evitar errores. 

npm install --save-dev @types/express

npm i --save-dev @types/node

en caso de que no quieras intalar de manera global: la local es esta: 

npm install --save-dev --prefix ./node_modules @types/node
s

para test : npm install --save-dev @types/jest

para iniciar el servidor en postman: 
acceder a la carpeta dist/index.ts/
y luego ejecutar el comande node index.js ahi se ejecutara en el puerto 3000

para probac en postman realizar los siguientes comandos :

en post : localhost:3000/tareas/  
//añadido de tarea

en put : localhost:3000/tareas/
tarea maracada

en delete : localhost:3000/tareas/ 
tarea eliminado correctamente



