import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}ππ¨ππ§πππ ππ‘ ππ£π‘πππ ππ πππ©ππͺπ\ππππ’π₯π‘π€\n*${usedPrefix + command} https://github.com/GataNina-Li/GataBot-MD*`
if (!regex.test(args[0])) throw `${fg}ππ£π‘πππ π£π€ ππ¨ π«ππ‘πππ€ πππππ§ π¨ππ§ πͺπ£ ππ£π‘πππ ππ πππ©ππͺπ`
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`${eg}ππ£π«ππππ€ ππ‘ ππ§ππππ«π€, πͺπ£ π’π€π’ππ£π©π€ π\nππ π£π€ π‘π π‘π‘πππ ππ‘ ππ§ππππ«π€ ππ¨ ππππππ€ π π¦πͺπ ππ‘ π§ππ₯π€π¨ππ©π€π§ππ€ ππ¨ π₯ππ¨πππ€.`)
conn.sendFile(m.chat, url, filename, null, m)
let info = `π π°ππππππππ πππππ πππ π΅ππππππππ π ππππππππ πππππ ππ ππππππ πππππππ..
  `.trim()
  let vn = './media/descarga.mp3'
  
await conn.sendHydrated(m.chat, info, wm, null, ig, '', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ βοΈ', '/menu']
], m,)  
conn.sendFile(m.chat, vn, 'descarga.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.exp = 59
handler.limit = 3
handler.register = true
handler.level = 2
export default handler
