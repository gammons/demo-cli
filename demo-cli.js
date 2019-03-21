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

  println(string) {
    const div = document.createElement("div")
    div.innerHTML = `<span>${string}</span>`
    this.container.appendChild(div)
  }

  color(color, string) {
    return `<span class="${color}">${string}</span>`
  }

  prompt() {
    this.print(this.color("base09", "➜ "))
  }
}

