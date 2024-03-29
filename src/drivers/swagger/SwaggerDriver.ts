import { Response } from "express";
import * as fs from "fs";
import * as swaggerJsdoc from "swagger-jsdoc";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const version =
  process.env.NODE_ENV !== "production"
    ? require("../../../package.json").version
    : "";

export class SwaggerDriver {
  /**
   * Builds the swagger doc to use in the docs file
   *
   * @param app the express app created
   */
  static buildDocs(app: any) {
    // Options used to generate swagger docs
    const options = {
      swaggerDefinition: {
        openapi: "3.0.0",
        info: {
          title: "CLARK Gateway",
          version,
          description: "The API gateway for all of the CLARK microservices",
          license: {
            name: "ISC",
            url: "https://www.isc.org/licenses/",
          },
          contact: {
            name: "SecurEd Inc.",
            url: "https://secured.team/",
            email: "info@secured.team",
          },
          "x-logo": {
            url: "https://clark.center/assets/images/logo.png",
            altText: "CLARK Logo",
          },
          "x-tagGroups": [
            {
              name: "Library Service",
              tags: ["Library Service"],
            },
            {
              name: "Notification Service",
              tags: ["Notification Service"],
            },
            {
              name: "Feature Service",
              tags: ["Feature Service"],
            },
            {
              name: "Rating Service",
              tags: ["Rating Service"],
            },
            {
              name: "Outcome Service",
              tags: ["Outcome Service"],
            },
            {
              name: "Learning Object Service",
              tags: ["Learning Object Service"],
            },
            {
              name: "User Service",
              tags: ["User Service"],
            },
            {
              name: "Utility Service",
              tags: ["Utility Service"],
            },
            {
              name: "Standard Guideline Service",
              tags: ["Standard Guideline Service"],
            },
          ],
        },
        servers: [
          {
            url: "http://localhost:3001",
            description: "Development",
          },
          {
            url: "https://api-gateway.clark.center",
            description: "Production",
          },
        ],
      },
      apis: [
        "./src/modules/**/*.ts",
        "./src/modules/learning-object-service/**/*.ts",
      ],
    };

    if (process.env.NODE_ENV !== "production") {
      const specs = swaggerJsdoc(options);

      // Write specs object out as a swagger.json file
      fs.writeFile("docs/swagger.json", JSON.stringify(specs), (err: any) => {
        if (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      });
    }

    SwaggerDriver.buildDocRoutes(app);
  }

  /**
   * Creates the docs routes using the express app object
   *
   * @param app the express app
   */
  private static buildDocRoutes(app: any) {
    app.get("/docs", (req: Request, res: Response) => {
      res.sendFile(process.cwd() + "/docs/index.html");
    });
    app.get("/docs/swagger.json", (req: Request, res: Response) => {
      res.sendFile(process.cwd() + "/docs/swagger.json");
    });
  }
}
