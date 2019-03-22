export default class DemoCLI {

  /**
   * Creates a new DemoCLI object.
   * @constructor
   * @param {string} containerName - the name of the element to inject the CLI into, e.g. "#cli"
   * @param {Object} options - the options to use.
   * @param {string} [options.cursor = '▋'] - The cursor character to use.
   * @param {string} [options.prompt = '➜ '] - The prompt string to use.
   */
  constructor(containerName, options = {}) {
    this.container = document.querySelector(containerName)
    this.cursor = options.cursor || '▋'
    this.prompt = options.prompt || '➜ '

    this.reset()
  }

  /**
   * Resets the terminal.  Equivalent to `clear` or CTRL+L.
   * @returns {undefined}
   */
  reset() {
    this.container.innerHTML = ''
  }

  /**
   * Print a string to the terminal.  Prints the string inside of a <span> element.
   * @param {string} string - the string to print.
   * @param {Object} options - the options to use.
   * @param {string} className - the className to set for the <span> element. Can be used to control colors, fonts, etc.
   * @returns {undefined}
   */
  print(string, options = {}) {
    const span = document.createElement('span');
    if (options.className) span.className = options.className

    for (const prop in options) {
      span.setAttribute(prop, options[prop])
    }

    span.innerHTML = string
    this.container.appendChild(span)
  }

  /**
   * Print a string to the terminal and hit the enter key.  Prints the string inside of a <span> element.
   * @param {string} string - the string to print.
   * @param {Object} options - the options to use.
   * @param {string} className - the className to set for the <span> element. Can be used to control colors, fonts, etc.
   * @returns {undefined}
   */
  println(string, options = {}) {
    this.print(string, options)
    this.enterKey()
  }

  /**
   * Print the prompt to the terminal.
   * @param {Object} options - the options to use.
   * @param {string} className - the className to set for the <span> element. Can be used to control colors, fonts, etc.
   * @returns {undefined}
   */
  printPrompt(options = {}) {
    this.print(this.prompt, options)
    this.printCursor()
  }

  /**
   * Print a carraige retun and start a new line.
   * @returns {undefined}
   */
  enterKey() {
    this.container.appendChild(document.createElement('br'))
  }

  /**
   * Explicitly print the cursor to the terminal.
   * @param {Object} options - the options to use.
   * @param {string} className - the className to set for the <span> element. Can be used to control colors, fonts, etc.
   * @returns {undefined}
   */
  printCursor(options = {}) {
    this.removeCursor()

    options['data-cli-cursor'] = this.cursor
    this.print('', options)
  }

  /**
   * Remove the cursor from the terminal
   * @returns {undefined}
   */
  removeCursor() {
    const cursors = this.container.querySelectorAll('[data-cli-cursor]')

    for (const el of cursors) {
      el.removeAttribute('data-cli-cursor')
    }
  }

  /**
   * Wait a specified time
   * @param {Integer} time - the time to wait in ms.
   * @returns {Promise} a promise that resolves in the time specified
   */
  wait(time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  /**
   * Simulate typing characters to the screen
   * @param {string} string - the string to type.
   * @param {Object} options - the options to use.
   * @param {Integer} [options.delay=60] - the delay in ms between typed characters.
   * @param {Boolean} [options.random=false] - Delay a random amount of time between characters
   * @param {Float} [options.delayVariability=0.3] - If using `random`, this is the % increase or decrease to delay by.
   * @returns {undefined}
   */
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
