# Chordsheet &middot; [![Build Status](https://travis-ci.org/gldraphael/chordsheet.svg?branch=master)](https://travis-ci.org/gldraphael/chordsheet)

An NPM module to help create chord sheets out of markdown files.

If you're looking for the CLI that converts markdown files to PDFs/HTML you might be looking for [this](https://github.com/gldraphael/chordsheet-cli).

## Styling the chords

You may use the following CSS to style the chords:

```css
.chord {
  position: absolute;
}
.chord .inner {
  position: relative;
  top: -1em;
}
```

Remember to set the `line-height` property on the container.