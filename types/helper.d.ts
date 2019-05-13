export declare function base64UrlEncodeJSON(json: Object): string;
export declare function base64UrlDecodeToJSON(str: string): any;
export declare function payloadWithExpirationTime(payload: Object, minutesFromNow: number): {
    exp: number;
    constructor: Function;
    toString(): string;
    toLocaleString(): string;
    valueOf(): Object;
    hasOwnProperty(v: string | number | symbol): boolean;
    isPrototypeOf(v: Object): boolean;
    propertyIsEnumerable(v: string | number | symbol): boolean;
};
