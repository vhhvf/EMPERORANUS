import  fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix }) => {
if (args.length == 0) return conn.reply(m.chat, `πΌπππ ππ ππππ ππππππ πππππππ\n  ${usedPrefix}kpop\n ππππ’π₯π‘π€: ${usedPrefix}kpop bts\n\nBusquedas disponibles:\nblackpink, exo, bts`, m)
if (args[0] == 'blackpink' || args[0] == 'exo' || args[0] == 'bts') {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/' + args[0] + '.txt')
.then(res => res.text())
.then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendFile(m.chat, randomkpopx, '', 'Dasar Kpopers', m)
})
.catch(() => {
conn.reply(m.chat, 'πΌππ, πππππππΜ ππ πππππ,  ππππππ ππ ππππππππ', m)
})
} else {
conn.reply(m.chat, `π³π ππΜππππππ ππ ππππΜ ππππππππππ, πππππππ ππππ ${usedPrefix}kpop  πππ ππ πππππ ππΜππππππ ππππππππππ`, m)
}
await delay(9000)
}
handler.help = ['kpop'].map(v => v + ' <query>')
handler.tags = ['image']
handler.command = /^(kpop)$/i
handler.register = true
export default handler 
const delay = time => new Promise(res => setTimeout(res, time))