const url = "https://raw.githubusercontent.com/jeremyroussel4/Ephemeris/main/phrase.json"

let req = new Request(url)
req.headers = { "Cache-Control": "no-cache" }

let data = await req.loadJSON()

let phrases = Object.values(data)

let randomIndex = Math.floor(Math.random() * phrases.length)
let phrase = phrases[randomIndex]

let widget = new ListWidget()

let text = widget.addText(phrase)

text.font = Font.systemFont(14)
text.textColor = Color.white()
text.centerAlignText()

widget.backgroundColor = new Color("#111111")

widget.setPadding(14,14,14,14)

// refresh environ 15 min
widget.refreshAfterDate = new Date(Date.now() + 15 * 60 * 1000)

Script.setWidget(widget)
Script.complete()
