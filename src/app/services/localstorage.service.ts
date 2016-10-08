import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

enum StorageMethods {
    LOCALSTORAGE = 1,
    COOKIE = 2
}

@Injectable()
export class LocalStorageService {

    private storageMethod: number;

    constructor() {
        if ( typeof localStorage === 'undefined') {
            this.storageMethod = StorageMethods.COOKIE;
        } else {
            this.storageMethod = StorageMethods.LOCALSTORAGE;
        }
    }

    public store(field: string, data: any) {
        if (this.storageMethod === StorageMethods.LOCALSTORAGE) {
            this.storeLocalStorage(field, JSON.stringify(data));
        } else if (this.storageMethod === StorageMethods.COOKIE) {
            this.storeCookie(field, data);
        }

    }

    public storeLocalStorage(field: string, data: string) {
        localStorage.setItem(field, data);
    }

    // TODO: Cookie fallback storage needs to be implemented
    public storeCookie(field: string, data: string) {
        console.warn('Cookie fallback storage needs to be implemented');
    }

    public retrieve(field: string, defaultValue?: any) {
        let value;
        if (this.storageMethod === StorageMethods.LOCALSTORAGE) {
            value = this.retrieveLocalStorage(field);
        } else if (this.storageMethod === StorageMethods.COOKIE) {
            this.retrieveCookie(field);
        }

        if (value === null && typeof defaultValue !== 'undefined') {
            return defaultValue;
        }
        return JSON.parse(value);
    }
    public retrieveLocalStorage(field: string) {
        return localStorage.getItem(field);
    }

    // TODO: Cookie fallback storage needs to be implemented
    public retrieveCookie(field: string) {
        console.warn('Cookie fallback storage needs to be implemented');
    }
}
