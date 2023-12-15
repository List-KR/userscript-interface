import type * as Types from '../type/clitypes.js'

export function IsDebug(Args: Types.ProgramOptionsType | Types.ProgramOptionsRawType) {
	return typeof Args.debug === 'string' ? Args.debug === 'true' : Args.debug
}

export function ExportArgs(Args: Types.ProgramOptionsType | Types.ProgramOptionsRawType) {
	console.debug(`ProgramOptions: ${JSON.stringify(Args).replace(/(?<=,"ghToken":")[^"]+/, '***')}`)
}
