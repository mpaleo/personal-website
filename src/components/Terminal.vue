<template>
  <div class="terminal">
    
    <!-- Init -->
    <pre class="green asciiart">
____________________________________________________________________

                         __         ____         __ __   ____  __ __
   ____ ___  ____  _____/ /_  ___  / / /  _   __/ // /  / __ \/ // /
  / __ `__ \/ __ \/ ___/ __ \/ _ \/ / /  | | / / // /_ / / / / // /_
 / / / / / / /_/ (__  ) / / /  __/ / /   | |/ /__  __// /_/ /__  __/
/_/ /_/ /_/ .___/____/_/ /_/\___/_/_/    |___/  /_/ (_)____(_)/_/   
         /_/                                                        
____________________________________________________________________</pre>
    <div class="text white">Type <span class="blue">'help'</span> command to view some functionalities</div>

    <!-- History -->
    <div class="terminal-history text white">
      <div v-for="content in output" class="content-wrapper">
        <pre v-html="content"></pre>
      </div>
    </div>

    <!-- Input -->
    <div class="content-wrapper">
      <div class="terminal-prompt text white">{{ prompt }}</div>
      <input ref="input" v-model="input" @keyup.enter="sendCommand()" @keydown.down='nextBuffer()' @keydown.up='prevBuffer()' class="terminal-input text white" spellcheck="false" autofocus/>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Terminal',
    data()
    {
        return {
            output: [],
            files: [
                {
                    name: 'readme.md',
                    content: '# You can:<br>* Execute binary files like `./hello-world.bin`<br>* Run code like `run(1+1)` or `run(alert("I\'m the boss"))`<br>## Cool functions<br>* atob(b64String)<br>* binaryToString(bin)',
                    protected: false
                },
                {
                    name: 'not-a-rootkit.bin',
                    content: '01010100 01101000 01101001 01110011 00100000 01101001 01110011 00100000 01101010 01110101 01110011 01110100 00100000 01100001 00100000 01100111 01100001 01101101 01100101 00101100 00100000 01111001 01101111 01110101 00100000 01101011 01101110 01101111 01110111 00100000 00101110 00101110 00101110',
                    protected: false
                },
                {
                    name: 'contact.dat',
                    content: 'WW91IGFyZSB0aGUgYm9zcy4gTXkgZW1haWwgaXMgbWVAbWljaGFlbHBhbGVvLmNvbQ==',
                    protected: true
                },
                {
                    name: 'not-so-shiny.dat',
                    content: 'SSBkb24ndCBsaWtlIHJ1YnkgOig=',
                    protected: false
                }
            ],
            input: '',
            prompt: 'visitor >> ',
            su: false,
            buffer: {
                size: 5,
                index: 0,
                commands: []
            }
        }
    },
    methods:
    {
        sendCommand()
        {
            // Process buffer
            this.buffer.index = 0
            if (this.buffer.commands.length < this.buffer.size)
            {
                this.buffer.commands.push(this.input)
            }
            else
            {
                this.buffer.commands.shift()
                this.buffer.commands.push(this.input)
            }

            // Store last command
            this.output.push(this.prompt + this.input)

            // Process command
            this.processCommand(this.input).forEach((out) =>
            {
                this.output.push(out)
            })

            // Clear input
            this.input = ''
        },
        prevBuffer()
        {
            if (this.buffer.index + 1 <= this.buffer.commands.length)
            {
                this.buffer.index++
                this.input = this.buffer.commands[this.buffer.commands.length - this.buffer.index]
            }
        },
        nextBuffer()
        {
            if (this.buffer.index - 1 > 0)
            {
                this.buffer.index--
                this.input = this.buffer.commands[this.buffer.commands.length - this.buffer.index]
            }
        },
        processCommand(command)
        {
            const output = []

            if (command.startsWith('run(') && command.endsWith(')'))
            {
                output.push('<span style="color:#FFE377">Running ...</span>')

                try
                {
                    const execResult = eval(command.substring(4, command.length - 1))

                    if (typeof execResult !== 'undefined')
                    {
                        output.push(execResult)
                    }
                }
                catch (error)
                {
                    output.push(`<span style="color:#C75646">You screwed up :( [${error}]</span>`)
                }
            }
            else if (command.startsWith('cat'))
            {
                const fileToView = command.substring(4)
                let fileContent = ''

                for (let i = 0; i < this.files.length; i++)
                {
                    if (this.files[i].name === fileToView)
                    {
                        fileContent = this.files[i].content
                        break
                    }
                }

                if (fileContent === '')
                {
                    output.push(`<span style="color:#FFE377">Cannot access '${fileToView}': No such file or directory</span>`)
                }
                else
                {
                    output.push(`<div style="color:#FFE377">${fileContent}</div>`)
                }
            }
            else if (command.startsWith('./'))
            {
                if (command === './not-a-rootkit.bin')
                {
                    this.su = true
                    this.prompt = 'root >> '

                    output.push('<div style="color:#FFE377">Now you are the boss</div>')
                }
                else
                {
                    output.push('<div style="color:#FFE377">Nothing happens ...</div>')
                }
            }
            else
            {
                switch (command)
                {
                    case 'help':
                        output.push('whoami         Print effective info about me')
                        output.push('ls             List directory contents')
                        output.push('cat [FILE]     Concatenate files and print on the standard output')
                        output.push('run([CODE])    Execute JS code/expressions')
                        output.push('clear          Clear the terminal screen')
                        output.push('github         Go to my GitHub')
                        output.push('packagist      Go to my Packagist')
                        output.push('linkedin       Go to my LinkedIn')
                        output.push('twitter        Go to my Twitter')

                        break
                    case 'whoami':
                        output.push('<span style="color:#FFE377">Hi! My name is Michael Paleo.</span>')
                        output.push('<span style="color:#FFE377">I am nerd software developer warlock living in Montevideo, Uruguay.</span>')
                        output.push('<span style="color:#FFE377">==========================</span>')
                        output.push('<span style="color:#FFE377">Some things that I love:</span>')
                        output.push('<span style="color:#FFE377">==========================</span>')
                        output.push('<span style="color:#FFE377"> * Solve problems</span>')
                        output.push('<span style="color:#FFE377"> * Learn</span>')
                        output.push('<span style="color:#FFE377"> * Share knowledge</span>')
                        output.push('<span style="color:#FFE377"> * Write code</span>')
                        output.push('<span style="color:#FFE377"> * Music</span>')
                        output.push('<span style="color:#FFE377"> * Cars</span>')
                        output.push('<span style="color:#FFE377">==========================</span>')
                        output.push('<span style="color:#FFE377">Skills:</span>')
                        output.push('<span style="color:#FFE377">==========================</span>')
                        output.push('<span style="color:#FFE377"> * PHP</span>')
                        output.push('<span style="color:#FFE377">   * Laravel</span>')
                        output.push('<span style="color:#FFE377"> * Javascript</span>')
                        output.push('<span style="color:#FFE377">   * Typescript</span>')
                        output.push('<span style="color:#FFE377">   * Electron</span>')
                        output.push('<span style="color:#FFE377">   * Vue</span>')
                        output.push('<span style="color:#FFE377">   * React</span>')
                        output.push('<span style="color:#FFE377">   * React Native</span>')
                        output.push('<span style="color:#FFE377">   * Ionic</span>')
                        output.push('<span style="color:#FFE377">   * Angular</span>')
                        output.push('<span style="color:#FFE377"> * C#</span>')
                        output.push('<span style="color:#FFE377">   * .NET</span>')
                        output.push('<span style="color:#FFE377">   * Unity</span>')
                        output.push('<span style="color:#FFE377"> * Java</span>')
                        output.push('<span style="color:#FFE377">   * Android</span>')
                        output.push('<span style="color:#FFE377"> * C++</span>')
                        output.push('<span style="color:#FFE377">   * Arduino</span>')
                        output.push('<span style="color:#FFE377"> * HTML</span>')
                        output.push('<span style="color:#FFE377"> * CSS</span>')
                        output.push('<span style="color:#FFE377"> * SQL</span>')
                        output.push('<span style="color:#FFE377"> * Git</span>')
                        output.push('<span style="color:#FFE377"> * Linux</span>')
                        output.push('<span style="color:#FFE377"> * Vagrant</span>')
                        output.push('<span style="color:#FFE377"> * Docker</span>')
                        output.push('<span style="color:#FFE377"> * Ansible</span>')
                        output.push('<span style="color:#FFE377"> * Nginx</span>')
                        output.push('<span style="color:#FFE377"> * Cloud computing</span>')
                        output.push('<span style="color:#FFE377">   * AWS</span>')
                        output.push('<span style="color:#FFE377">   * Azure</span>')

                        break
                    case 'github':
                        output.push('<span style="color:#FFE377">Opening GitHub ...</span>')
                        window.open('https://github.com/mpaleo', '_blank')

                        break
                    case 'packagist':
                        output.push('<span style="color:#FFE377">Opening Packagist ...</span>')
                        window.open('https://packagist.org/users/mpaleo', '_blank')

                        break
                    case 'linkedin':
                        output.push('<span style="color:#FFE377">Opening LinkedIn ...</span>')
                        window.open('https://www.linkedin.com/in/mpaleo', '_blank')

                        break
                    case 'twitter':
                        output.push('<span style="color:#FFE377">Opening Twitter ...</span>')
                        window.open('https://twitter.com/PaleoMichael', '_blank')

                        break
                    case 'clear':
                        this.output = []

                        break
                    case 'ls':
                        this.files.forEach((file) =>
                        {
                            if (file.protected)
                            {
                                if (this.su) output.push(`<div style="color:#FFE377">${file.name}</div>`)
                            }
                            else
                            {
                                output.push(`<div style="color:#FFE377">${file.name}</div>`)
                            }
                        })

                        break
                    default:
                        output.push('Command not found (Want some easter eggs? Check the source code :D)')

                        break
                }
            }

            return output
        }
    }
}
</script>

<style scoped>
.terminal {
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
}

.green {
  color: #cdee69;
}

.blue {
  color: #9CD9F0;
}

.yellow {
  color: #FFE377;
}

.white {
  color: #F7F7F7;
}

.text {
  font-size: 14px;
}

.asciiart {
  font-size: 10px;
}

.terminal-input {
  background: transparent;
  width: 80%;
  border: none;
  display: inline-block;
  height: 22px;
  line-height: normal;
}

.terminal-history > div {
  min-height: 26px;
  line-height: 24px;
}

.terminal-history > div > pre {
  margin: 0;
  font-family: 'Roboto Mono', monospace;
  white-space: pre-wrap;
  word-break: keep-all;
}

.terminal-input {
  height: 21px;
}

.terminal-prompt {
  display: inline;
}

.content-wrapper {
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  min-height: 21px;
  line-height: 21px;
}
</style>
