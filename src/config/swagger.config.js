const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Modulo 3 con Swagger",
        version: "1.0.0",
        description:
          "La aplicacion realiza un CRUD de los usuarios del sistema y se documenta con Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Sergio Omar Sandy Cordova",
          url: "github.com",
          email: "sergiosandy.desarrollo.30@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:4002",
        },
      ],
    },
    apis: ["../main.js"],
  };

module.exports = options;