export function code(content: string, attributes: string): string {
  let code = content.trim().split('\n')

  attributes.split(/\s+/g).forEach((attribute) => {
    const parts = attribute.split(/:/g)

    switch (parts[0]) {
      case 'numbers': {
        code = parts[1] ? addLineNumbers(code, Number(parts[1])) : addLineNumbers(code)
        break
      }
      case 'added': {
        code = highlight(code, parts[1], true)
        break
      }
      case 'removed': {
        code = highlight(code, parts[1], false)
        break
      }
    }
  })

  return code.join('\n')
}

function addLineNumbers(code: string[], start: number = 1): string[] {
  return code.map((line, index) => {
    return `<span class="inline-block w-10 pr-4 text-slate-400 select-none text-right">${
      index + start
    }</span>${line}`
  })
}

function highlight(code: string[], paramters: string, added: boolean): string[] {
  const lines = paramters
    .split(/,/g)
    .map((line) => {
      if (line.includes('-')) {
        const parts = line.split(/-/g)
        const { start, end } = { start: Number(parts[0]), end: Number(parts[1]) }

        // Create an arary of numbers in the given range
        return Array.from({ length: end + 1 - start }, (_, i) => i + start)
      }

      return Number(line)
    })
    .flatMap((number) => number)

  return code.map((line, index) => {
    const isHighligted = lines.includes(index + 1)
    const color = added ? 'bg-green-900"' : 'bg-red-900"'

    return isHighligted ? `<div class="inline-block w-full ${color}">${line}</div>` : line
  })
}

export function anchor(md: any) {
  md.core.ruler.push('anchor', (state: any) => {
    for (let id = 0; id < state.tokens.length; id++) {
      // Check if the type of the element is a H2 heading
      if (state.tokens[id].tag == 'h2' && state.tokens[id].type == 'heading_open') {
        // Get the content from the next item because the heading_open token does not
        // contain the title. We also remove any characters that are not alphanumeric.
        const title = state.tokens[id + 1].content.replace(/[^\w\s]/gi, '')
        const slug = encodeURIComponent(String(title).trim().toLowerCase().replace(/\s+/g, '-'))

        state.tokens[id].attrSet('id', slug)
      }
    }
  })
}
