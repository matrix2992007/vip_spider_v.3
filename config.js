global.ownernomer = "201104394429"
global.dev = ["201104394429","201011806242"]
global.ownername = "؍ٌ̣؍ .DevNexusX🇵🇸⤹ۦ:᚛ٴ۬.⸰ֶָֺ֢ ҈"
global.ytname = "YT: JOALHAK3M"
global.socialm = "JOALHAKEM"
global.location = "EGYPT CAIRO"

global.ownernumber = '201104394429'  //creator number
global.ownername = '؍ٌ̣؍ .DevNexusX🇵🇸⤹ۦ:᚛ٴ۬.⸰ֶָֺ֢ ҈' //owner name
global.botname = '𝙃𝙓_𝙏𝙀𝘼𝙈'//name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'JOALHAKEM🤠\n\nContact: +201104394429'

//console view/theme
global.themeemoji = '🪀'
global.wm = "HX_TEAMV7"

//theme link
global.link = 'https://whatsapp.com/channel/0029Vb2QAwr17EmtV7jvyh1q'
global.idch = '120363386423395618@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'تم✓',
    admin: `\`[ # ]\` هذا الأمر يمكن استخدامه فقط من قبل مشرفي المجموعة!`,
    botAdmin: `\`[ # ]\` هذا الأمر يمكن استخدامه فقط عندما يصبح البوت مشرف في المجموعة!`,
    OnlyOwner: `\`[ # ]\` هذا الأمر يمكن استخدامه فقط من قبل المستخدم المميز!\n\nهل تريد أن تصبح مميز؟ تواصل مع المطور.\nيوتيوب: @ヅJOALHAKEM\nتليجرام: @F_1kE\nواتساب: +201104394429`,
    OnlyGrup: `\`[ # ]\` هذا الأمر يمكن استخدامه فقط في محادثات المجموعات!`,
    private: `\`[ # ]\` هذا الأمر يمكن استخدامه فقط في المحادثة الخاصة!`,
    wait: `\`[ # ]\` انتظر لحظة من فضلك`,
    notregist: `\`[ # ]\` أنت غير مسجل في قاعدة بيانات البوت. يرجى التسجيل أولاً.`,
    premium: `\`[ # ]\` هذا الأمر يمكن استخدامه فقط من قبل المستخدم المميز!\n\nهل تريد أن تصبح مميز؟ تواصل مع المطور.\nيوتيوب: @ヅJOALHAKEM\nتليجرام: @F_1kE\nواتساب: +201104394429`,
}

global.banner = ["201104394429@s.whatsapp.net"]

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})