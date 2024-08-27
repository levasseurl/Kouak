# Kouak

## Docker
`docker compose up -d`

### Créer les conteneurs Docker
`docker compose up -d`

## API

### Se positionner dans le répertoire de l'API
`cd ./api/`

### Générer les modèles des tables de la base de données
`npx sequelize-cli model:generate --name User --attributes email:string,name:string,password:string`

`npx sequelize-cli model:generate --name Message --attributes content:string,publish_date:date`

### Lancer les migrations
`npx sequelize-cli db:migrate`