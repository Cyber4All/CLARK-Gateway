import {
    ServiceError,
    ServiceErrorReason,
} from "../../shared/types/error.type";
import {
    AWS_JWT_SECRET,
    CLARK_REPORTS_URI,
    CLARK_SERVICE_URI,
    CORALOGIX_PRIVATE_KEY,
    HIERARCHY_SERVICE_URI,
    ISSUER,
    LEARNING_OBJECT_SERVICE_URI,
    NODE_ENV,
    NOTIFICATIONS_SERVICE_URI,
    PORT,
    SECURED_DOWNTIME_SERVICE_URI,
    STANDARD_GUIDELINES_SERVICE_URI,
} from "../global.env";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * Environment Variable Configuration File.
 * When Environment variables are needed throughout the codebase, the object created can be used
 * to retrieve the value of the environment variable
 */
class EnvConfig {
    constructor(private env: { [k: string]: string | undefined }) {}

    /**
     * Gets the value of a environment variable
     * @param key The key for the value
     * @param throwOnMissing True if the function should throw and error if key is missing
     * @returns the value of the key
     */
    public getValue(key: string, throwOnMissing = true): string {
        if (this.env[NODE_ENV] === "test") {
            return "test";
        }
        if (throwOnMissing && !this.env[key]) {
            throw new ServiceError(
                `config error - missing env.${key}`,
                ServiceErrorReason.INTERNAL,
            );
        }
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.env[key]!;
    }

    /**
     * Ensures that all values in keys is available
     * @param keys The keys to check for
     * @returns This instance of EnvConfig
     */
    public ensureValues(keys: string[]) {
        keys.forEach((k) => this.getValue(k, true));
        return this;
    }

    /**
     * Checks to see if NODE_ENV is set to production
     * @returns True if NODE_ENV equals production, false otherwise
     */
    public isProduction() {
        return this.getValue(NODE_ENV) === "production";
    }

    /**
     * Returns whether the current environment is staging
     * @returns True if NODE_ENV === development, false otherwise
     */
    public isStaging() {
        return this.getValue(NODE_ENV) === "staging";
    }

    /**
     * Returns whether the current environment is in test
     * @returns True if NODE_ENV === test false otherwise
     */
    public isTest() {
        return this.getValue(NODE_ENV) === "test";
    }

    /**
     * Returns whether the current environment is in development
     * @returns True if NODE_ENV === development, false otherwise
     */
    public isDevelopment() {
        return this.getValue(NODE_ENV) === "development";
    }

    /**
     * Gets the NODE_ENV value
     * @returns NODE_ENV value
     */
    public getNodeEnv() {
        return this.getValue(NODE_ENV);
    }

    /**
     * Get the PORT Env Value
     * @returns PORT ENV Value
     */
    public getPort() {
        return this.getValue(PORT, false);
    }

    /**
     * Gets the URI for the service
     * @param service the service to get the URI for
     * @returns the URI for the service
     */
    public getUri(service: string) {
        if (
            ![
                CLARK_SERVICE_URI,
                HIERARCHY_SERVICE_URI,
                LEARNING_OBJECT_SERVICE_URI,
                NOTIFICATIONS_SERVICE_URI,
                CLARK_REPORTS_URI,
                STANDARD_GUIDELINES_SERVICE_URI,
                SECURED_DOWNTIME_SERVICE_URI,
            ].includes(service)
        ) {
            throw new ServiceError(
                `config error - missing env.${service}`,
                ServiceErrorReason.INTERNAL,
            );
        }

        return this.getValue(service);
    }
}

const envConfig = new EnvConfig(process.env).ensureValues([
    NODE_ENV,

    // =====================
    //    Service URIs
    // =====================
    CLARK_SERVICE_URI,
    HIERARCHY_SERVICE_URI,
    LEARNING_OBJECT_SERVICE_URI,
    NOTIFICATIONS_SERVICE_URI,
    CLARK_REPORTS_URI,
    STANDARD_GUIDELINES_SERVICE_URI,
    SECURED_DOWNTIME_SERVICE_URI,
]);

if (envConfig.isProduction() || envConfig.isStaging()) {
    envConfig.ensureValues([
        CORALOGIX_PRIVATE_KEY,
        ISSUER,
        AWS_JWT_SECRET,
        PORT,
    ]);
}

export { envConfig };
