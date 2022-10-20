module.exports = (sequelize, dataTypes) => {
    let alias = 'movies';

    let cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        created_at : {
            type: dataTypes.DATE
        }

    }

    let config = {
        timestamps : falase,
        tableName : "movies"
    };

    const Movie = sequelize.define(alias, cols, config);

    return Movie;
}