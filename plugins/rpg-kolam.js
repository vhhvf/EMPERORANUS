import fetch from 'node-fetch'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn }) => {
let grupos = [nna, nn, nnn, nnnt]
let gata = [img5, img6, img7, img8, img9]
let enlace = { contextInfo: { externalAdReply: {title: wm + ' π', body: 'support group' , sourceUrl: grupos.getRandom(), thumbnail: await(await fetch(gata.getRandom())).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: 'The LoliBot-MD', thumbnailUrl: await(await fetch(img)).buffer(), sourceUrl: yt }}}
let dos = [enlace, enlace2]  

let name = global.db.data.users[m.sender].name
let level = global.db.data.users[m.sender].level
let exp = global.db.data.users[m.sender].exp
let paus = global.db.data.users[m.sender].paus
let kepiting = global.db.data.users[m.sender].kepiting
let gurita = global.db.data.users[m.sender].gurita
let cumi = global.db.data.users[m.sender].cumi
let buntal = global.db.data.users[m.sender].buntal
let dory = global.db.data.users[m.sender].dory
let lumba = global.db.data.users[m.sender].lumba
let lobster = global.db.data.users[m.sender].lobster
let hiu = global.db.data.users[m.sender].hiu
let udang = global.db.data.users[m.sender].udang
let ikan = global.db.data.users[m.sender].ikan
let orca = global.db.data.users[m.sender].orca
//let wm = global.wm 

let peces = `ππ π£ππ¦πππ‘π ππ π£ππππ¦ ππ
π€Β» *${name}*

β­ββββββββββ¬£ 
β *π£ππ¦πππ‘π ππ π£ππππ¦*
β *βΈβΈβΈβΈβΈβΈβΈβΈβΈβΈβΈβΈβΈβΈ*
β π¦ *TiburΓ³n : Shark Β» ${hiu}*
β π *Pez : Fish Β» ${ikan}*
β π  *Dory : Surgeonfish Β» ${dory}*
β π *Orca : Killer whale Β» ${orca}*
β π³ *Ballena : Whale Β» ${paus}*
β π¦ *Calamar : Squid Β» ${cumi}*
β π *Pulpo : Octopus Β» ${gurita}*
β π‘ *Pez Globo : Blowfish Β» ${buntal}*
β π¦ *CamarΓ³n : Shrimp Β» ${udang}*
β π¬ *DelfΓ­n : Dolphin Β» ${lumba}*
β π¦ *Langosta : Lobster Β» ${lobster}*
β π¦ *Cangrejo : Crab Β» ${kepiting}*
β°ββββββββββ¬£
π *Total: ${paus + kepiting + gurita + cumi + buntal + dory + lumba + lobster + hiu + udang + ikan + orca}*`.trim()
await conn.sendButton(m.chat, wm, peces, img5, [['ππ€π‘π«ππ§ ππ‘ πππ£πͺ βοΈ', '/menu']], m, dos.getRandom())
//conn.sendButton(m.chat, peces, `${wm}`, [['Pasar', '#pasar']], m)
await delay(5 * 5000)
}
handler.help = ['kotakikan', 'kolam', 'kolamikan']
handler.tags = ['rpg']
handler.command = /^(picina|piscina|peces|kotak(ikan)?|kolam(ikan)?)$/i
export default handler 
handler.register = true
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
