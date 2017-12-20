import { MarkdownIt, Options as MarkdownItOptions } from 'markdown-it'
import * as md from 'markdown-it'
import { ChordsheetOptions } from './chordsheet-options'
import { defaultChordsheetOptions } from './defaults'
import { chordPattern } from './markdown-it-plugins/chord-pattern'

export class Chordsheet {

  /**
   * Converts the markdown string to it's HTML representation
   * Prefer the instance method over this static method
   *
   * @static
   * @param {string} chordMarkdownText Markdown text with chords in square brackets
   * @returns HTML representation of the markdown
   * @memberof Chordsheet
   */
  public static toHtml(chordMarkdownText: string, options?: ChordsheetOptions) {
    return new Chordsheet(options).toHtml(chordMarkdownText)
  }

  private csMarkdownIt: MarkdownIt

  /**
   * Creates an instance of Chordsheet.
   * @param {ChordsheetOptions} [options] Options to customize output
   * @memberof Chordsheet
   */
  constructor(options?: ChordsheetOptions) {
    if (options == null) {
      options = defaultChordsheetOptions
    } else if (options.markdownItOptions == null) {
      options.markdownItOptions = defaultChordsheetOptions.markdownItOptions
    }

    this.csMarkdownIt = md(options.markdownItOptions as MarkdownItOptions)
      .use(chordPattern)
  }

  /**
   * Converts the markdown string to it's HTML representation
   *
   * @param {string} chordMarkdownText Markdown text with chords in square brackets
   * @returns HTML representation of the markdown
   * @memberof Chordsheet
   */
  public toHtml(chordMarkdownText: string) {
    return this.csMarkdownIt.render(chordMarkdownText)
  }
}
