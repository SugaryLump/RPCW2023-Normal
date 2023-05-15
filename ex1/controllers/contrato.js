var Contrato = require("../models/contratos")
var ObjectId = require('mongoose').Types.ObjectId; 

module.exports.list = (year, inst) => {
    var queryObj = {}
    if (year) {
        // Contrato iniciado no ano especificado
        queryObj["DataInicioContrato"] = {$regex: ".*?/.*?/" + year}
    }
    if (inst) {
        queryObj["NIPCInstituicao"] = inst
    }

    return Contrato.contratoModel.find(queryObj)
    .then(data => {
        return data
    })
    .catch(err => {
        console.log("Error: " + String(err))
    })
}

module.exports.get = (id) => {
    return Contrato.contratoModel.findOne({_id: id})
    .then(data => {
        console.log("Found "  + " with id " + id)
        return data
    })
    .catch(err => {
        console.log("Error: " + String(err))
    })
}

module.exports.courses = () => {
    return Contrato.contratoModel.distinct("Curso")
    .then(data => {
        return data
    })
    .catch(err => {
        console.log("Error: " + String(err))
    })
}

module.exports.institutions = () => {
    return Contrato.contratoModel.distinct("NomeInstituicao")
    .then(data => {
        return data
    })
    .catch(err => {
        console.log("Error: " + String(err))
    })
}

module.exports.addContract = (contract) => {
    return Contrato.contratoModel.create(contract)
    .then(data => {
        return data
    })
    .catch(err => {
        console.log("Error: " + String(err))
    })
}

module.exports.removeContract = (id) => {
    return Contrato.contratoModel.deleteOne({_id: id})
    .then(data => {
        return data
    })
    .catch(err => {
        console.log("Error: " + String(err))
    })
}