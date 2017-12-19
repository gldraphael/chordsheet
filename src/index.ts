import { MarkdownIt, Options as MarkdownItOptions } from "markdown-it"
import * as md from "markdown-it"
import { defaultChordsheetOptions } from "./defaults"
import { chordPattern } from "./mdit-plugins/chord-pattern";
import { ChordsheetOptions } from "./chordsheet-options";

export class Chordsheet {
  /**
   * Converts the markdown string to it's HTML representation
   *
   * @static
   * @param {string} chordMarkdownText Markdown text with chords in square brackets
   * @returns HTML representation of the markdown
   * @memberof Chordsheet
   */
  public static toHtml(chordMarkdownText: string, options?: ChordsheetOptions) {
    if(options == null) {
      options = defaultChordsheetOptions
    }
    else if(options.markdownItOptions == null) {
      options.markdownItOptions = defaultChordsheetOptions.markdownItOptions
    }

    const chordsheetMarkdown = md(options.markdownItOptions as MarkdownItOptions)
      .use(chordPattern)
    return chordsheetMarkdown.render(chordMarkdownText)
  }
}
