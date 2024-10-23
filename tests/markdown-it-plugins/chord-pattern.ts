import * as tape from 'tape'
import { chordPattern } from '../../src/markdown-it-plugins/chord-pattern';
import { defaultChordsheetOptions } from '../../src/defaults';
import * as md from 'markdown-it'

tape('chord-pattern plugin test against valid input', function (test) {
  const chord = 'C'
  const input = `[${chord}]`
  const expectedOutput = `<span class="chord"><span class="inner">${chord}</span></span>`

  const markdownIt = md(defaultChordsheetOptions.markdownItOptions as md.Options)
    .use(chordPattern)

  test.plan(1)

  const output = markdownIt.render(input)
  const isFound = output.indexOf(expectedOutput) != -1
  test.true(isFound)
})