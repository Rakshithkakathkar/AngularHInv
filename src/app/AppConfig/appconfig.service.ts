import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "src/environments/environment";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');


// DI using value providers, here we are injecting values into other components
export const APP_CONFIG : AppConfig = {
    apiEndPoint: environment.apiEndPoint
}