//Creditos https://github.com/BrunoSobrino
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ā ļø ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar*'
if (!args[0]) throw `ššŖš ššŖšØšš? ššØšš§ šŖš£ šš£š”ššš šš š­š£š­š­\nšššš¢š„š”š¤\n*${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await delay(6000)
await conn.reply(m.chat, 'ā³ļø ššØš„šš§š š„š¤š§ ššš«š¤š§  š š¦šŖšĢ šØš šš£š«šĢš šš” š«šĢššš¤, š£š¤ šØšš šš„šŖš§ššš¤, ššØš„šš§š š¦šŖš ššØš©š¤š® š”šš£š©š¤š¢', m)
let res = await fetch(`https://zenzapis.xyz/downloader/xnxx?apikey=${keysxxx}&url=`+args[0])
let json = await res.json()
conn.sendMessage(m.chat, { document: { url: json.result.files.high }, mimetype: 'video/mp4', fileName: json.result.title }, { quoted: m })
} catch (e) {
m.reply('ššš, šØš ššš®š¤Ģ šš” šØšš§š«ššš¤ š¼, ššŖšš”š«š šš” šš£š©šš£š©šš§ š¢šĢšØ š©šš§šš')
}}
handler.command = /^(xnxxdl)$/i
export default handler
handler.level = 16
handler.money = 1500
handler.register = true
const delay = time => new Promise(res => setTimeout(res, time))