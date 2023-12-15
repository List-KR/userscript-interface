import {type Stream} from 'stream'
import {type MIMEType} from 'util'

/* eslint-disable @typescript-eslint/naming-convention */
export declare const unsafeWindow: Window
// eslint-disable-next-line @typescript-eslint/ban-types
export declare function GM_addElement(tagName: HTMLElementTagNameMap, attributes?: Object): HTMLElement
// eslint-disable-next-line @typescript-eslint/ban-types
export declare function GM_addElement(parentNode: Node | Element | ShadowRoot, tagName: HTMLElementTagNameMap, attributes?: Object): HTMLElement
export declare function GM_addStyle(css: string): HTMLStyleElement

type GM_xmlhttpRequestHeaders = {
	[key: string]: string | undefined;
	Cookie?: string;
	Host?: string;
	Origin?: string;
	Referer?: string;
	'User-Agent'?: string;
}
type GM_xmlhttpRequestControl = {
	abort: () => void;
}
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
export declare function GM_getResourceText(name: string): string
export declare function GM_getResourceURL(name: string): string

type GM_infoResource = {
	name: string;
	url: string;
	error?: string;
	content?: string;
	meta?: string;
}
type GM_infoWebRequestRule = {
	selector: {
		include?: string[] | string;
		match?: string[] | string;
		exclude?: string[] | string;
	} | string;
	action: {
		cancel?: boolean;
		redirect?: {
			url: string;
			from?: string;
			to?: string;
		} | string;
	};
}
type GM_infoOptions = {
	check_for_updates: boolean;
	comment?: string;
	compatopts_for_requires: boolean;
	compat_wrappedjsobject: boolean;
	compat_metadata: boolean;
	compat_foreach: boolean;
	compat_powerful_this?: boolean;
	sandbox?: string;
	noframes?: boolean;
	unwrap?: boolean;
	run_at?: string;
	tab_types?: string;
	override: {
		use_includes: string[];
		orig_includes: string[];
		merge_includes: boolean;
		use_matches: string[];
		orig_matches: string[];
		merge_matches: boolean;
		use_excludes: string[];
		orig_excludes: string[];
		merge_excludes: boolean;
		use_connects: string[];
		orig_connects: string[];
		merge_connects: boolean;
		use_blockers: string[];
		orig_run_at?: string;
		orig_noframes?: boolean;
	};
}
type GM_infoType = {
	downloadMode?: string;
	isFirstPartyIsolation?: boolean;
	isIncognito: boolean;
	SandboxMode: 'js' | 'raw' | 'dom';
	scriptHandler: string;
	scriptMetaStr?: string;
	scriptUpdateURL?: string;
	scriptWillUpdate: boolean;
	version?: string;
	script: {
		antifeatures: Record<string, Record<string, string>>;
		author?: string;
		blockers: string[];
		connects: string[];
		copyright?: string;
		deleted?: number;
		description_i18n?: Record<string, string>;
		description: string;
		downloadURL?: string;
		excludes: string[];
		fileURL?: string;
		grant?: string[];
		header?: string;
		homepage?: string;
		icon?: string;
		icon64?: string;
		includes?: string[];
		lastModified: number;
		matches: string[];
		name_i18n?: Record<string, string>;
		name: string;
		namespace?: string;
		position: number;
		resources: GM_infoResource[];
		supportURL?: string;
		system?: boolean;
		'run-at'?: string;
		unwrap?: boolean;
		updateURL?: string;
		version: string;
		webRequest?: GM_infoWebRequestRule;
		options?: GM_infoOptions;
	};
}
export declare const GM_info: GM_infoType
export declare function GM_log(): (message: any) => void

type GM_notificationDetails = {
	text: string;
	title: string;
	tag?: string;
	image?: string;
	highlight?: boolean;
	silent?: boolean;
	timeout?: number;
	url?: string;
	onclick: (event?: Event) => void;
}
export declare function GM_notification(GM_notificationDetails: GM_notificationDetails, ondone: () => void): () => void
export declare function GM_notification(text: string, title: string, image: string, onclick: () => void): () => void

type GM_openInTabOptions = {
	active?: boolean;
	insert?: boolean | number;
	setParent?: boolean;
	incognito?: boolean;
	loadInBackground?: boolean;
}
export declare function GM_openInTab(url: string, GM_openInTabOptions?: GM_openInTabOptions): () => void
export declare function GM_openInTab(url: string, loadInBackground?: boolean): () => void

type GM_registerMenuCommandOptions = {
	id?: number;
	accessKey?: string;
	autoClose?: boolean;
	title?: string;
}
export declare function GM_registerMenuCommand(name: string, callback: (event?: MouseEvent | KeyboardEvent) => void, options?: GM_registerMenuCommandOptions): () => number
export declare function GM_registerMenuCommand(name: string, callback: (event?: MouseEvent | KeyboardEvent) => void, accessKey?: string): () => number
export declare function GM_unregisterMenuCommand(menuCmdId: number): () => void
export declare function GM_setClipboard(data: string, info: 'text' | 'html'): () => void

type GM_getTabCallback = Record<string, string | undefined>
export declare function GM_getTab(callback: (tab: GM_getTabCallback) => void): void
export declare function GM_saveTab(tab: Record<string, string | undefined>): void
export declare function GM_getTabs(callback: (tabs: GM_getTabCallback[]) => void): void
// eslint-disable-next-line @typescript-eslint/ban-types
export declare function GM_setValue(key: string, value?: null | Record<string, unknown> | string | number | boolean): void
export declare function GM_getValue<T>(key: string, defaultValue: T): T | any
export declare function GM_deleteValue(key: string): void
export declare function GM_listValues(): Record<string, unknown>
export declare function GM_addValueChangeListener(key: string, callback: (key: string, oldValue: any, newValue: any, remote: boolean) => void): number
export declare function GM_removeValueChangeListener(listenerId: number): void

type GM_xmlhttpRequestResponse<T extends ArrayBuffer | Blob | JSON | Stream | string | XMLDocument> = {
	finalUrl: string;
	readyState: 0 | 1 | 2 | 3 | 4;
	status: number;
	statusText: string;
	responseHeaders: Record<string, string>;
	response?: T;
	responseXML?: XMLDocument;
	responseText?: string;
}
type GM_xmlhttpRequestDetails<T extends ArrayBuffer | Blob | JSON | Stream | string | XMLDocument> = {
	method: 'GET' | 'HEAD' | 'POST';
	url: string;
	headers?: Record<string, string>;
	data?: string;
	redirect?: 'follow' | 'error' | 'manual';
	cookie?: string;
	binary?: boolean;
	nocache?: boolean;
	revalidate?: boolean;
	timeout?: number;
	context?: any;
	responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
	overrideMimeType?: MIMEType;
	anonymous?: boolean;
	fetch?: boolean;
	user?: string;
	password?: string;
	onabort?: (GM_xmlhttpRequestResponse: GM_xmlhttpRequestResponse<T>) => void;
	onerror?: (GM_xmlhttpRequestResponse: GM_xmlhttpRequestResponse<T>) => void;
	onloadstart?: (GM_xmlhttpRequestResponse: GM_xmlhttpRequestResponse<T>) => void;
	onprogress?: (GM_xmlhttpRequestResponse: GM_xmlhttpRequestResponse<T>) => void;
	onreadystatechange?: (GM_xmlhttpRequestResponse: GM_xmlhttpRequestResponse<T>) => void;
	ontimeout?: (GM_xmlhttpRequestResponse: GM_xmlhttpRequestResponse<T>) => void;
	onload?: (GM_xmlhttpRequestResponse: GM_xmlhttpRequestResponse<T>) => void;
}
export declare function GM_xmlhttpRequest<T extends ArrayBuffer | Blob | JSON | Stream | string | XMLDocument>(GM_xmlhttpRequestDetails: GM_xmlhttpRequestDetails<T>): GM_xmlhttpRequestControl

type GM_webRequestRules = Array<{
	selector: {
		include?: string[] | string;
		match?: string[] | string;
		exclude?: string[] | string;
	} | string;
	action: {
		cancel?: boolean;
		redirect?: {
			url: string;
			from?: string;
			to?: string;
		} | string;
	} | string;
}>
type GM_webRequestListenerCallback = {
	info: 'cancel' | 'redirect';
	message: 'ok' | 'error';
	details: {
		rule: GM_webRequestRules;
		url: string;
		redirect_url?: string;
		description?: string;
	};
}
export declare function GM_webRequest(rules: GM_webRequestRules, listener: (callback: GM_webRequestListenerCallback) => void): void

type GM_cookieListDetails = {
	url?: string;
	domain?: string;
	name?: string;
	path?: string;
}
type GM_cookieListCallback = {
	cookies: {
		domain: string;
		firstPartyDomain?: string;
		hostOnly: boolean;
		httpOnly: boolean;
		name: string;
		path: string;
		sameSite: 'no_restriction' | 'lax' | 'strict';
		secure: boolean;
		session: boolean;
		value: string;
	};
	error?: string;
}
type GM_cookieSetDetails = {
	url?: string;
	name: string;
	value: string;
	domain?: string;
	firstPartyDomain?: string;
	path?: string;
	secure?: boolean;
	httpOnly?: boolean;
	expirationDate?: number;
}
type GM_cookieDeleteDetails = {
	url?: string;
	name: string;
	firstPartyDomain?: string;
}
export declare const GM_cookie: {
	list: (details: GM_cookieListDetails, callback?: (callback: GM_cookieListCallback) => void) => void;
	set: (details: GM_cookieSetDetails, callback?: (error?: string) => void) => void;
	delete: (details: GM_cookieDeleteDetails, callback: (error?: string) => void) => void;
}

export declare const GM: {
	setvalue: Promise<typeof GM_setValue>;
	getValue: Promise<typeof GM_getValue>;
	deleteValue: Promise<typeof GM_deleteValue>;
	listValues: Promise<typeof GM_listValues>;
	addValueChangeListener: Promise<typeof GM_addValueChangeListener>;
	removeValueChangeListener: Promise<typeof GM_removeValueChangeListener>;
}

