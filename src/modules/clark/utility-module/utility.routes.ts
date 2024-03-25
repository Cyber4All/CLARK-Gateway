import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const UTILITY_ROUTES: ProxyRoute[] = [
    /**
     * Blog Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/blogs",
        auth: true,
    },
    {
        method: HTTPMethod.POST,
        path: "/blogs",
        auth: true,
    },

    /**
     * Client Version Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/clientversion",
    },
    
    /**
     * Downtime Routes
     */
    {
        method: HTTPMethod.GET,
        path: "/downtime",
    },
];
