import {Injectable} from '@angular/core';
import {Headers} from '@angular/http';
import {SessionService} from './SessionService';
import {SettingsService} from './SettingsService';

@Injectable()
export class HttpSettingsService {

    private protocol;
    private domain;
    private baseUrl;

    constructor(private _sessionService: SessionService, private _settings: SettingsService) {
        this.protocol = _settings.getProtocol();
        this.domain = _settings.getDomain();
        this.baseUrl = _settings.getBaseUrl();
    }

    public getHeaders(): Headers {
        let headersObj = {
            'Content-Type': 'application/json',
            'Authorization': ''
        };
        let token = this._sessionService.getToken();
        if (token != null) {
            headersObj.Authorization = 'Token ' + token;
        }

        return new Headers(headersObj);
    }

    public getUnauthorizedHeaders(): Headers {
        let headersObj = {
            'Content-Type': 'application/json'
        };
        return new Headers(headersObj);
    }

    public getBaseUrl() {
        return this.protocol + '://' + this.domain + this.baseUrl;
    }

}
