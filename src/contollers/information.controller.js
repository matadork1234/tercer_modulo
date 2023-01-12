const dataPackage = require('../../package.json');


const informationApi = (req, res) => {
    const { name, author, email, version } = dataPackage;

    return res.send({
        nameSystem: name,
        version,
        developer: author,
        email
    })
}

module.exports = {
    informationApi
}