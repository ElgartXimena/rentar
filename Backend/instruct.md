# Database
## Connection on exec
- `mongosh --username root --password 1234`
- `use rentar`
- `show collections` *muestra colecciones*
- `show dbs` *muestra dbs*

# Development
## Auto-sync
> - Para modo desarrollo, simplemente ejecutar `docker-compose watch`, y **desactivar el autosave de VSCode para evitar el constante reinicio de archivos.**
> - Nodemon hace un "restart" de la app en cada cambio, lo cual a veces no es necesario. Para que esto se haga solo cuando queremos, debemos desactivar el autosave, y asi evitar la sincronizacion con docker y en consecuencia el reinicio.
> - Cuando querramos reiniciar, simplemente guardar el/los archivos