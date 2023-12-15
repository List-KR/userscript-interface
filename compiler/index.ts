import * as Commander from 'commander'
import type * as CliTypes from './type/clitypes.js'
import * as Debug from './utility/debug.js'
import * as CliOptions from './utility/clioptions.js'

const Program = new Commander.Command()

// Set options.
Program.option('--debug', 'Output extra debugging', false)
	.option('--minify', 'Minify the compiled userscript file.', false)

// Initialize Input of the options and export them.
Program.parse()

const ProgramRawOptions: CliTypes.ProgramOptionsRawType = Program.opts()
if (Debug.IsDebug(ProgramRawOptions)) {
	Debug.ExportArgs(ProgramRawOptions)
}

// Redefine with boolean.
const ProgramOptions = CliOptions.ReplaceStringWithBooleanInObject(ProgramRawOptions) as CliTypes.ProgramOptionsType

