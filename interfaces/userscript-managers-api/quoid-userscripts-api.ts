import {type MIMEType} from 'util'

/* eslint-disable @typescript-eslint/naming-convention */
type GM_Info = {
	scriptHandler: string;
	version: string;
	scriptMetaStr: string;
	script: {
		description: string;
		'exclude-match': string[];
		excludes: string[];
		grant: string[];
		includes: string[];
		'inject-into': string[];
		matches: string[];
		name: string;
		namespace: string;
		noframes: boolean;
		require: string[];
		resources: string[];
		'run-at': string;
		version: string;
	};
	injectInto: string;
}
export declare const GM_info: GM_Info

type GM_xmlhttpRequestResponse<T extends ArrayBuffer | Blob | Document | JSON | string> = {
	readyState: 0 | 1 | 2 | 3 | 4;
	response?: T;
	responseHeaders: string;
	responseType: XMLHttpRequestResponseType;
	responseURL: string;
	status: number;
	statusText: string;
	timeout: number;
	withCredentials: boolean;
	responseText?: string;
}
type GM_xmlHttpRequestDetails<T extends ArrayBuffer | Blob | Document | JSON | string> = {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
	user?: string;
	password?: string;
	headers?: Record<string, string>;
	overrideMimeType?: MIMEType;
	timeout?: number;
	binary?: boolean;
	data?: string;
	responseType?: XMLHttpRequestResponseType;
	onabort?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
	onerror?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
	onload?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
	onloadend?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
	onloadstart?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
	onprogress?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
	onreadystatechange?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
	ontimeout?: (responseObject?: GM_xmlhttpRequestResponse<T>) => void;
}
type GM_xmlhttpRequestControl = {
	abort: () => void;
}
export declare function GM_xmlhttpRequest<T extends ArrayBuffer | Blob | Document | JSON | string>(details: GM_xmlHttpRequestDetails<T>): GM_xmlhttpRequestControl

type saveTabObject = {
	tabObj: any;
}
export declare const GM: {
	Info: GM_Info;
	xmlHttpRequest: typeof GM_xmlhttpRequest;
	addStyle: (css: string) => Promise<void>;
	setVaule: (key: string, value: any) => Promise<void>;
	getVaule: (key?: string, defaultValue?: any) => Promise<void>;
	deleteValue: (key: string) => Promise<void>;
	listValues: () => Promise<Record<string, string>>;
	getTab: () => Promise<any>;
	saveTab: (tabObj: saveTabObject) => Promise<void>;
	openInTab: (url: string, openInBackground: boolean) => Promise<void>;
	closeTab: (tabId?: number) => Promise<void>;
	setClipboard: (data: string, type?: string) => Promise<boolean>;
}
