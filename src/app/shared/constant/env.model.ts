/**
 * Only valid JSON data types can be used for types
 *
 * Make sure the keys in `env.model.ts` exist in `env.json`
 * otherwise it'll throw message like this
 * Property '<missing-key>' is missing in type '{}'
 *
 */

export interface AppEnv {
    APP_URL?: string;
    API_PROTOCOL: string;
    API_DOMAIN: string;
    API_baseUrl: string;
    API_apiVersion: string;
    UPLOADS_URL: string;
    DEFAULT_PRODUCT_IMAGE: string;
}
