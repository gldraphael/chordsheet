import { MarkdownIt, Options as MarkdownItOptions } from "markdown-it"
import * as md from "markdown-it"
import { defaultOptions } from "./defaults"
import { chordPattern } from "./mdit-plugins/chord-pattern";

const chordsheetMarkdown = md(defaultOptions).use(chordPattern)

export class Chordsheet {
  /**
   * Converts the markdown string to it's HTML representation
   *
   * @static
   * @param {string} chordMarkdownText Markdown text with chords in square brackets
   * @returns HTML representation of the markdown
   * @memberof Chordsheet
   */
  public static toHtml(chordMarkdownText: string) {
    if (chordMarkdownText === undefined) {
      throw new Error("Argument chordMarkdownText is required.")
    }
    return chordsheetMarkdown.render(chordMarkdownText)
  }
}
