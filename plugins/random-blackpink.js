import fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix, command }) => {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/blackpink.txt').then(res => res.text()).then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
await delay(5000)
conn.sendButton(m.chat, `_${command}_`, author, randomkpopx, [['π πΊππππππππ π', `/${command}`]], m)
})}
handler.help = ['blackpink']
handler.tags = ['internet']
handler.command = /^(blackpink)$/i
export default handler
const delay = time => new Promise(res => setTimeout(res, time))