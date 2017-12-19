import { Options as MarkdownItOptions } from "markdown-it"

export const defaultOptions = {
  html: false, // Enable HTML tags in source
  xhtmlOut: true, // Use '/' to close single tags (<br />).

  // This is only for full CommonMark compatibility.
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true, // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer: false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  quotes: "“”‘’",
} as MarkdownItOptions