export class Rgx {
  declare regex: string
  static or: (el: Rgx) => Rgx
  constructor(initialValue?: string) {
    this.regex = initialValue ?? ''
  }
  capture(content: Rgx) {
    if (typeof content === 'string') this.regex += `(${content})`
    else this.regex += `(${content.getRegex()})`
    return this
  }
  oneOrMoreOf(content = '.') {
    if (typeof content === 'string') this.regex += `${content}+`
    else this.regex += `${content.getRegex()}+`
    return this
  }
  zeroOrMoreOf(content = '.') {
    if (typeof content === 'string') this.regex += `${content}*`
    else this.regex += `${content.getRegex()}*`
    return this
  }
  noneOf(content = '.') {
    if (typeof content === 'string') this.regex += `[$^${content}]`
    else this.regex += `[$^${content.getRegex()}]`
    return this
  }
  or(content: string | Rgx) {
    if (typeof content === 'string') {
      this.regex += `|${content}`
    } else {
      this.regex += `|${content?.getRegex()}`
    }
    return this
  }
  getRegex() {
    return this.regex
  }
  and(content: string | Rgx) {
    if (typeof content === 'string') {
      this.regex += `${content}`
    } else {
      this.regex += `${content?.getRegex()}`
    }
    return this
  }
  zeroOrOne(content: string | Rgx) {}
}
export default function Word(pattern?: string) {
  return new Rgx(pattern)
}
Word.number = () => new Rgx('\\d')
Word.char = (el: string) => new Rgx(el)
Word.noneOf = (el: string) => new Rgx(`[^${el}]`)
Word.capture = (el: string) => new Rgx(`(${el})`)
Word.anyOf = (el: string) => new Rgx(`[${el}]`)
Word.anyExcept = (el: string) => new Rgx(`[^${el}]`)
// function noneOf(el){
//   return new Rgx(`[${el}]`)
// }

const rgx = new Rgx()
  .capture(Word.number().or(Word.char('asd')))
  .and('@')
  .capture(Word.noneOf('abc'))

console.log(rgx.getRegex())
