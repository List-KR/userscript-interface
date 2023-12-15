import * as Violentmonkey from './userscript-managers-api/violentmonkey-api.js'
import * as Tampermonkey from './userscript-managers-api/tampermonkey-api.js'
import * as AdGuard from './userscript-managers-api/adguard-api.js'
import * as Quoid from './userscript-managers-api/quoid-userscripts-api.js'

type UserscriptPlatformsType = 'Violentmonkey' | 'Tampermonkey' | 'AdGuard' | 'Quoid'
export class UserscriptPlatform {
	public Interface: typeof Violentmonkey | typeof Tampermonkey | typeof AdGuard | typeof Quoid

	private readonly Violentmonkey = Violentmonkey
	private readonly Tampermonkey = Tampermonkey
	private readonly AdGuard = AdGuard
	private readonly Quoid = Quoid

	constructor(public Platform: UserscriptPlatformsType) {
		this.Interface = this[Platform]
	}
}

var Co = new UserscriptPlatform('Violentmonkey').Interface
