import * as tape from 'tape'
import mdRegex from 'markdown-it-regex'
import { defaultChordsheetOptions } from '../../dist/defaults';
import * as md from 'markdown-it'
import { nbspPlugin } from '../../src/markdown-it-plugins/nbsp-plugin'

tape('nbsp plugin against 2 spaces', function (test) {
  const input = `  `
  const expectedOutput = `&nbsp;&nbsp`

  const markdownIt = md(defaultChordsheetOptions.markdownItOptions as md.Options)
    .use(mdRegex, nbspPlugin)

  test.plan(1)

  const output = markdownIt.render(`Hey${input}There`)
  const isFound = output.indexOf(expectedOutput) != -1
  test.comment(output)
  test.true(isFound)
})
