import {type MIMEType} from 'util'

/* eslint-disable @typescript-eslint/naming-convention */
export declare const unsafeWindow: Window

type GM_infoType = {
	uuid: string;
	scriptMetaStr: string;
	scriptWillUpdate: boolean;
	scriptHandler: string;
	version: string;
	isIncognito: boolean;
	platform: {
		arch: string;
		browserName: string;
		browserVersion: string;
		os: string;
	};
	script: {
		description: string;
		excludes: string[];
		includes: string[];
		matches: string[];
		name: string;
		namespace: string;
		resources: Array<{
			name: string;
			url: string;
		}>;
		runAt: string;
		version: string;
	};
	injectInto: string;
}
export declare const GM_info: GM_infoType
export declare function GM_getValue(key: string, defaultValue: any): any
export declare function GM_setValue(key: string, value: any): void
export declare function GM_deleteValue(key: string): void

type GM_listValuesResult = Array<{
	key: string;
	value: any;
}>
export declare function GM_listValues(): GM_listValuesResult

type GM_addValueChangeListenerCallback = (name: string, oldValue: any | undefined, newValue: any | undefined, remote: boolean) => void
export declare function GM_addValueChangeListener(name: string, callback: GM_addValueChangeListenerCallback): string
export declare function GM_removeValueChangeListener(listenerId: string): void
export declare function GM_getResourceURL(name: string): string
// eslint-disable-next-line @typescript-eslint/unified-signatures
export declare function GM_getResourceURL(name: string, isBlobUrl: boolean): string
// eslint-disable-next-line @typescript-eslint/ban-types
export declare function GM_addElement(tagName: HTMLElementTagNameMap, attributes?: Object): HTMLElement
// eslint-disable-next-line @typescript-eslint/ban-types
export declare function GM_addElement(parentNode: Node | Element | ShadowRoot, tagName: HTMLElementTagNameMap, attributes?: Object): HTMLElement
export declare function GM_addStyle(css: string): HTMLStyleElement

type tabControl = {
	onclose?: () => void;
	closed: boolean;
	close: () => void;
}
type GM_openInTabOptions = {
	active: boolean;
	container?: number;
	insert: boolean;
	pinned: boolean;
}
export declare function GM_openInTab(url: string, options: GM_openInTabOptions): tabControl
export declare function GM_openInTab(url: string, openInBackground: boolean): tabControl

type GM_registerMenuCommandOptions = {
	id?: string;
	title: string;
	autoClose?: boolean;
}
export declare function GM_registerMenuCommand(caption: string, onClick: (Event: MouseEvent | KeyboardEvent) => void, options?: GM_registerMenuCommandOptions): string
export declare function GM_unregisterMenuCommand(Id: string): void

type GM_notificationOptions = {
	text: string;
	title?: string;
	image: string;
	silent?: boolean;
	tag?: string;
	zombieTimeout?: number;
	onclick?: () => void;
	ondone?: () => void;
}
type GM_notificationObject = {
	remove?: () => Promise<void>;
}
export declare function GM_notification(options: GM_notificationOptions): GM_notificationObject
export declare function GM_notification(text: string, title?: string, image?: string, onclick?: () => void): GM_notificationObject
export declare function GM_setClipboard(data: string, type: string): void

type GM_xmlhttpRequestHeaders = {
	[key: string]: string | undefined;
	Cookie?: string;
	Host?: string;
	Origin?: string;
	Referer?: string;
	'User-Agent'?: string;
}
type GM_xmlhttpRequestAllowedResponseTypes = ArrayBuffer | Blob | JSON | string
type GM_xmlhttpRequestResponseObject<T extends GM_xmlhttpRequestAllowedResponseTypes> = {
	status: number;
	statusText: string;
	readyState: 0 | 1 | 2 | 3 | 4;
	responseHeaders: string;
	response?: T;
	responseText: string | undefined;
	responseXML?: Document;
	finalUrl: string;
	lengthComputable?: boolean;
	loaded?: number;
	total?: number;
	context?: unknown;
}
type GM_xmlhttpRequestDetails<T extends GM_xmlhttpRequestAllowedResponseTypes> = {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';
	user?: string;
	password?: string;
	overrideMimeType?: MIMEType;
	headers?: GM_xmlhttpRequestHeaders;
	responseType?: XMLHttpRequestResponseType;
	timeout?: number;
	data?: string | ArrayBuffer | Blob | DataView | FormData | ReadableStream | ArrayBufferView | URLSearchParams;
	binary?: boolean;
	context?: any;
	anonymous?: boolean;
	onabort?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
	onerror?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
	onload?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
	onloadend?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
	onloadstart?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
	onprogress?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
	onreadystatechange?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
	ontimeout?: (responseObject?: GM_xmlhttpRequestResponseObject<T>) => void;
}
type GM_xmlhttpRequestControl = {
	abort: () => void;
}
export declare function GM_xmlhttpRequest<T extends GM_xmlhttpRequestAllowedResponseTypes>(details: GM_xmlhttpRequestDetails<T>): GM_xmlhttpRequestControl

type GM_downloadOptions = {
	headers?: GM_xmlhttpRequestHeaders;
	timeout?: number;
	contenxt?: any;
	user?: string;
	password?: string;
	anonymous?: boolean;
	onabort?: () => void;
	onerror?: () => void;
	onload?: () => void;
	onloadend?: () => void;
	onloadstart?: () => void;
	onprogress?: () => void;
	onreadystatechange?: () => void;
	ontimeout?: () => void;
}
export declare function GM_download(GM_downloadOptions: GM_downloadOptions): GM_xmlhttpRequestControl
export declare function GM_download(url: string, name: string): GM_xmlhttpRequestControl
