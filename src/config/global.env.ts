// ========================================================
//                      Required ENVS
// ========================================================
/**
 * Environment in which the service is running
 * Options: development, production, staging, test
 */
export const NODE_ENV = "NODE_ENV";

// =====================
//    Service URIs
// =====================
/**
 * URI target for the clark-service
 */
export const CLARK_SERVICE_URI = "CLARK_SERVICE_URI";

/**
 * URI target for the hierarchy-service
 */
export const HIERARCHY_SERVICE_URI = "HIERARCHY_SERVICE_URI";

/**
 * URI target for the learning-object-service
 */
export const LEARNING_OBJECT_SERVICE_URI = "LEARNING_OBJECT_SERVICE_URI";

/**
 * URI target for the notifications-service
 */
export const NOTIFICATIONS_SERVICE_URI = "NOTIFICATIONS_SERVICE_URI";

/**
 * URI target for the reporting-service
 */
export const CLARK_REPORTS_URI = "CLARK_REPORTS_URI";

/**
 * URI target for the standard-guidelines-service
 */
export const STANDARD_GUIDELINES_SERVICE_URI =
    "STANDARD_GUIDELINES_SERVICE_URI";

/**
 * URI target for the downtime-service
 */
export const SECURED_DOWNTIME_SERVICE_URI = "SECURED_DOWNTIME_SERVICE_URI";

// ========================================================
//                        Optional ENVS
// ========================================================
/**
 * Port on which the service will run
 * Default: 3000
 */
export const PORT = "PORT";

/**
 * Secret used to sign user JWTs
 * Default: "secret" in development & "test" in test
 * Required for production & staging
 */
export const AWS_JWT_SECRET = "AWS_JWT_SECRET";

/**
 * Issuer of the JWT
 * Default: "issuer" in development & test
 * Required for production & staging
 */
export const ISSUER = "ISSUER";

/**
 * Coralogix Private Key for logging
 * Required for production & staging
 */
export const CORALOGIX_PRIVATE_KEY = "CORALOGIX_PRIVATE_KEY";
