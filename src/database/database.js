import { Sequelize } from "sequelize";

let sequelizeInstance = null

function getDatabase(){ // criando um metedo para acessar o banco de dados
    if(!sequelizeInstance){
        sequelizeInstance = new Sequelize({
            dialect:'sqlite',
            storage:'./database.sqlite',
            logging:false        
        });
        console.log('Conexão SQLite criada')
    }
    return sequelizeInstance;
}


export default getDatabase();