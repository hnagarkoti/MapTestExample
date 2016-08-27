// Sets the MongoDB Database options

module.exports = {

    mongolab:
    {
        name: "map",
        url: "mongodb://localhost/MeanMapAppTest",
        port: 27017
    },

    local:
    {
        name: "map",
        url: "mongodb://localhost/MeanMapApp",
        port: 27017
    },

    localtest:
    {
        name: "scotch-user-map-local",
        url: "mongodb://localhost/MeanMapAppTest",
        port: 27017
    }

};
