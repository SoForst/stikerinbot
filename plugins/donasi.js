let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, fla + 'donasi', `
┌「 *Donasi • Emoney* 」
├ https://saweria.co/zenn
├ https://trakteer.id/zenn/tip
└────
`.trim(), '© stikerin', 'Donasi', '.donasi', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
