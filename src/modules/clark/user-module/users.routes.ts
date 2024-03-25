import { HTTPMethod } from "../../../shared/types/http-method.type";
import { ProxyRoute } from "../../../shared/types/proxy-route.type";

export const USERS_ROUTES: ProxyRoute[] = [
    {
        method: HTTPMethod.GET,
        path: "/users",
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:user",
    },
    {
        method: HTTPMethod.PATCH,
        path: "/users",
        auth: true,
    },
    {
        method: HTTPMethod.GET,
        path: "/users/:username/profile",
        auth: true,
    },
];
