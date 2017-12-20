export const nbspPlugin = {
  name: 'nbsp',
  regex: /([ ]{2, })/,
  replace: (match: RegExpMatchArray) => {
    console.log('This should be printed')
    return `&nbsp;&nbsp;` // Hardcoding the value for now
  }
}