class DemoCLI {
  constructor(containerName, options = {}) {
    this.container = document.querySelector(containerName)
    this.cursor = options.cursor || '▋'
    this.prompt = options.prompt || '➜ '

    this.reset()
  }

  reset() {
    this.container.innerHTML = ''
  }

  print(string, options = {}) {
    const span = document.createElement('span');
    if (options.className) span.className = options.className

    for (const prop in options) {
      span.setAttribute(prop, options[prop])
    }

    span.innerHTML = string
    this.container.appendChild(span)
  }

  println(string, options = {}) {
    this.print(string, options)
    this.enterKey()
  }

  printPrompt(options = {}) {
    this.print(this.prompt, options)
    this.printCursor()
  }

  enterKey() {
    this.container.appendChild(document.createElement('br'))
  }

  printCursor(options = {}) {
    this.removeCursor()

    options['data-cli-cursor'] = this.cursor
    this.print('', options)
  }

  removeCursor() {
    const cursors = this.container.querySelectorAll('[data-cli-cursor]')

    for (const el of cursors) {
      el.removeAttribute('data-cli-cursor')
    }
  }

  wait(time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  async type(string, options = {}) {
    this.removeCursor()

    let delayMin = options.delay || 60
    let delayMax = options.delay || 60
    const delayVariability = options.delayVariability || 0.3

    if (options.random) {
      delayMin = options.delay - (options.delay * delayVariability)
      delayMax = options.delay + (options.delay * delayVariability)
    }

    const span = document.createElement('span')
    span.setAttribute('data-cli-cursor', this.cursor)

    this.container.appendChild(span)

    for (const char of string) {
      const delay = Math.floor(Math.random() * (delayMax - delayMin + 1)) + delayMin
      await this.wait(delay)
      span.textContent += char
    }
    span.removeAttribute('data-cli-cursor')
  }
}
