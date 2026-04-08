const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8723939182:AAHxRuyiFUAY59Gj0D9bxNsIL-E1hy_9YvU" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "HX_DevNexusX" //your bot name
global.OWNER_NAME = "@F_1kE" //your name with sign @
global.OWNER = ["https://t.me/hshsjijjh", "https://youtube.com/@dgxeon?si=Ogk_T5DMcDjTQjNF"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7014047748"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://files.catbox.moe/l95ssx.jpg' //your bot pp


//approval
global.GROUP_ID = -1002290474633; // Replace with your group ID
global.CHANNEL_ID = -1002835668192; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/HX_Q10"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/flashaudio"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029Vb2QAwr17EmtV7jvyh1q"; // Replace with your group link
global.YOUTUBE_LINK ="https://www.youtube.com/@%E3%83%85JOALHAKEM"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://www.instagram.com/f_1ek1"; // Replace with your ig link

global.owner = global.owner = ['201104394429'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})