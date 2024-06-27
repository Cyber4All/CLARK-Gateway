import { CLARK_SERVICE_URI } from "../../../config/global.env";
import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";
import { envConfig } from "../../../config/env/env.driver";

export const LEARNING_OBJECTS_ROUTES: ProxyRoute[] = [
    /**
     * The following routes have not been declared by
     * clark-service yet and will have a different target
     * than clark-service
     *
     * The target for the following routes shoud be learning object service
     */

    /**
     * Changelog routes
     */
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/changelog",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid/changelogs",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },

    /**
     * Collection routes
     */
    {
        method: HTTPMethod.GET,
        path: "/collections/metrics",
    },
    {
        method: HTTPMethod.GET,
        path: "/collections/:name/meta",
    },
    {
        method: HTTPMethod.GET,
        path: "/collections",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/collections",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:cuid/collection",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },

    /**
     * File Manager routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/bundle",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/bundle",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/materials/files/:fileId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId/materials/files/:fileId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/pdf",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:id/files/:fileId/download",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:id/materials",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/materials/files",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/files/bundle",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },

    /**
     * Stats routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/stats",
    },

    /**
     * Objects routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:cuid",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:id",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:id/children",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/:id/parents",
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/children",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:username/hierarchy-object",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/children",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/learning-objects/profile",
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:names/multiple",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId",
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:id/children/summary",
    },
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/admin/learning-objects",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/admin/learning-objects/:learningObjectId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/admin/users/:username/learning-objects/:learningObjectName",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/admin/learning-objects/:learningObjectNames/multiple",
        auth: true,
    },
    /**
     * Submissions routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/submissions",
        target: envConfig.getUri(CLARK_SERVICE_URI),
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/submissions",
        target: envConfig.getUri(CLARK_SERVICE_URI),
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/users/:userId/learning-objects/:learningObjectId/submissions",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/users/:userId/learning-objects/:learningObjectId/change-author",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/status",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    /**
     * Outcomes routes
     */
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/learning-outcomes",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:learningObjectId/learning-outcomes/:outcomeId",
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-outcomes/:outcomeId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:id/outcomes",
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:username/:learningObjectName",
        auth: true,
    },

    /**
     * Relevancy routes
     */
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/relevancy-check",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.GET,
        path: "/topics",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/learning-outcomes/:outcomeId/guidelines",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/:id/topics",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId/topics/:topicId",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users/:username/learning-objects/:cuid/evaluation",
        auth: true,
    },
    {
        method: HTTPMethod.PATCH,
        path: "/learning-objects/evaluators",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/evaluations",
    },

    /**
     * Revisions routes
     */
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:cuid/version",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:cuid/versions/:version",
        auth: true,
        target: envConfig.getUri(CLARK_SERVICE_URI),
    },

    /**
     * Submissions routes
     */
    {
        method: HTTPMethod.GET,
        path: "/learning-objects/:learningObjectId/submissions",
        target: envConfig.getUri(CLARK_SERVICE_URI),
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/learning-objects/:learningObjectId/submissions",
        target: envConfig.getUri(CLARK_SERVICE_URI),
        auth: true,
    },
    {
        method: HTTPMethod.DELETE,
        path: "/learning-objects/:learningObjectId/submissions",
        target: envConfig.getUri(CLARK_SERVICE_URI),
        auth: true,
    },
];
