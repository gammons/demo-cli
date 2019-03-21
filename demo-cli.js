// cli = new CLIDemo("#container", {cursor: CLIDemo.Cursor.Blink})

// cli.type("this is a demo", {speed: 60, random: true})
// cli.enter()

// delay for a bit
// cli.delay(2500)
//
// show the prompt
// cli.prompt()

// clear the screen
// cli.clearScreen()

// print with a newline
// cli.println("here is an output line")
// cli.println(`here is some ${CLIDemo.Red("red text")}`)

// print without a newline
// cli.print(".")

class DemoCLI {
  constructor(containerName, options) {
    this.container = document.querySelector(containerName)
    this.container.innerHTML = ''
  }

  print(string) {
    const span = document.createElement("span")
    span.innerHTML = string
    this.container.appendChild(span)
  }

  async enterKey() {
    this.container.appendChild(document.createElement("br"))
  }

  println(string) {
    this.print(string)
    this.enterKey()
  }

  color(color, string) {
    return `<span class="${color}">${string}</span>`
  }

  prompt() {
    this.print(this.color("base09", "➜ "))
  }

  wait(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  async type(string, options = {}) {
    const delay = options.delay || 60
    const span = document.createElement("span")
    this.container.appendChild(span)

    for(let char of string) {
      await this.wait(delay)
      span.textContent += char
    }
  }
}

