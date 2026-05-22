import getDatabase from "../database/database.js"
import { DataTypes } from "sequelize"

const sequelize = getDatabase(); // exemplo de singleton 

const produto = sequelize.define('produtc',{
    id:{
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    preco:{
        type: DataTypes.DECIMAL,
        allowNull:false
    },
    quantidade:{
        type: DataTypes.DECIMAL,
        allowNull:false
    }
})

async function getAllProdutc() {
    return await produto.findAll();
}

async function getProdutcId(id) {
    return await produto.findByPk(id);
}

async function createProduto(nome,preco,quantidade) {
    return await produto.create(
        {nome,preco,quantidade}
    );
}

async function updateProduto(id,nome,preco,quantidade) {
    
    const produto = await getProdutcId(id);

    if(!produto){
        throw new Error("Produto não encontrado");
    }
    
    produto.nome = nome
}