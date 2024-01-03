import { Router } from "express";
import { buildProxyRouter } from "../../../shared/functions/build-proxy-router";
import { REPORTS_ROUTES } from "./reports.routes";

export class ReportsRouteHandler {
    public static build(): Router {
        return buildProxyRouter(REPORTS_ROUTES);
    }
}