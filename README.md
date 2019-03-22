# demo-cli

Easily create demos of interacting with CLI-based things. See [https://demo-cli.dev](https://demo-cli.dev) for examples.

### Super quick example:

```javascript

<div id="cli"></div>

<script type="module">
  import DemoCLI from "./demo-cli.js"

  const cli = new DemoCLI("#cli")

  const h = (async () => {
    cli.printPrompt()
    await cli.type('echo "testing this"')
    cli.println("testing this")
    cli.printPrompt()
  })()
</script>
```

## Installation

`npm install demo-cli`

demo-cli has no JS dependencies.

You can use any CSS you like to emulate the terminal, or you can use `terminal.css` included in the `examples/` folder.

## Notes / caveats

Fair warning: `demo-cli` does no input sanitization whatsoever.

## Is it good?

Yes.  Yes it is.
