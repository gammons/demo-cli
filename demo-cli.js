// cli = new CLIDemo("#container", {cursor: CLIDemo.Cursor.Blink})

// cli.type("this is a demo", {speed: 60, random: true})

// delay for a bit
// cli.delay(2500)

// clear the screen
// cli.clearScreen()

// print with a newline
// cli.println("here is an output line")
// cli.println(`here is some ${CLIDemo.Red("red text")}`)

// print without a newline
// cli.print(".")

class DemoCLI {
  constructor(containerName, options) {
    console.log("containerName = ", containerName)
    this.container = document.querySelector(containerName)
    console.log("container = ", this.container)
    this.container.innerHTML = ''
  }

  println(string) {
    console.log("println container = ", this.container)
    const div = document.createElement("div")
    div.innerHTML = `<span>${string}</span>`
    this.container.appendChild(div)
  }
}

