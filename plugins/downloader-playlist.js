import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `ššŖš ššØš©š ššŖšØšššš¤?\nšš£šš§ššØš šš” šš¤š¢šš£šš¤  š¢ššØ šš” š£š¤š¢šš§š ššš” š”ššØ ššš£ššš¤š£\nšššš¢š„š”š¤*\n*${usedPrefix + command} ozuna`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video š„', `${usedPrefix}ytmp4 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Videodoc š„', `${usedPrefix}ytmp4doc ${v.url}`, `descargar: ${v.title} (${v.url})`],    
['Audio š§', `${usedPrefix}ytmp3 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Audiodoc š§', `${usedPrefix}ytmp3doc ${v.url}`, `descargar: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, 'ā­āć *ššššš¾š¼ šššš¼š¾šššš¼šæš¼* ćāā±-\nā~~ā¢ā¢~~ā¢ā¢~~ā¢ā¢~~ā¢ā¢~~~~', `āšš®š¬š¢šš š«šš„ššš¢šØš§ššš ššØš§: ${args.join(" ")}\nā°āāāāāāāāāāāāāāāā`, 'šš„š¢š£š š®š§š šØš©šš¢šØš§ š² š©š«ššš¢šØš§š šš§šÆš¢šš«', '[ā¦ ššššššš¼šæšš ā¦]', listSections, m)
} catch {
try {     
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `šš®š¬š¢šš š«šš„ššš¢šØš§ššš ššØš§: ${args.join(" ")}`
const sections = [{ title: `ā¢ ā¢ ā¢ć šš¤ššš ćā¢ ā¢ ā¢`, rows: listSerch }, { title: `ā¢ ā¢ ā¢ć š„šššš ćā¢ ā¢ ā¢`, rows: listSerch2 }, { title: `ā¢ ā¢ ā¢ć šššš¤šššš£šš¢ ššāø ćā¢ ā¢ ā¢`, rows: listSerch3 }, { title: `|ā¢ ā¢ ā¢ć šššš¤šššš£šš¢ ššā¹ ćā¢ ā¢ ā¢`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc https://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc https://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: 'šš„š¢š£š š®š§š šØš©šš¢šØš§ š² š©š«ššš¢šØš§š šš§šÆš¢šš«', title: " ć ššššš¾š¼ šššš¼š¾šššš¼šæš¼ ć", buttonText: "[ā¦ ššššššš¼šæšš ā¦]", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
} catch {    
await m.reply('*Error, por favor vuelva a intentarlo con otro nombre de una canciĆ³n*')
}}}
handler.command = /^playlist|playlist2$/i
handler.money = 40
handler.register = true
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}





