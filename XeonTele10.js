process.on('uncaughtException', console.error)
require("./settings")
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const {toFirstCase,
        isNumber,
        formatp,
        parseMention, 
        resize, 
        getRandom,
        generateProfilePicture, 
        getCase, 
        runtime, 
        FileSize, 
        h2k, 
        makeid, 
        kyun, 
        randomNomor, 
        jsonformat, 
        isUrl,
        fetchJson, 
        sleep,
        getBuffer
        } = require("./lib/myfunc2");
        const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const util = require('util')
const yts = require('yt-search')
const axios = require('axios');
const path = require('path')
const cooldowns = new Map(); // Create a map to track cooldowns
const {
    simple
} = require('./lib/myfunc')
const adminfile = 'lib/premium.json';
// Read the adminfile and parse it as JSON
    const adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));

module.exports = XeonBotInc = async (XeonBotInc, bot) => {
    //console.log(XeonBotInc)
    try {
        const body = XeonBotInc.message.text || XeonBotInc.message.caption || ''
        const budy = (typeof XeonBotInc.message.text == 'string' ? XeonBotInc.message.text : '')
        const {
            isUrl
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)        
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(XeonBotInc.message.from)
        const pushname = user.full_name;
        const user_id = XeonBotInc.message.from.id + " "
        const userId = XeonBotInc.message.from.id.toString(); // Extract user ID as a string
        const username = XeonBotInc.message.from.username ? XeonBotInc.message.from.username : "DGXeon13";
        const isCreator = OWNER[0].replace("https://t.me/", '') == XeonBotInc.update.message.from.username
        const from = XeonBotInc.message.chat.id
const prefix = isCmd ? body[0] : ''
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const isGroup = XeonBotInc.chat.type.includes('group')
        const groupName = isGroup ? XeonBotInc.chat.title : ''

        const isImage = XeonBotInc.message.hasOwnProperty('photo')
        const isVideo = XeonBotInc.message.hasOwnProperty('video')
        const isAudio = XeonBotInc.message.hasOwnProperty('audio')
        const isSticker = XeonBotInc.message.hasOwnProperty('sticker')
        const isContact = XeonBotInc.message.hasOwnProperty('contact')
        const isLocation = XeonBotInc.message.hasOwnProperty('location')
        const isDocument = XeonBotInc.message.hasOwnProperty('document')
        const isAnimation = XeonBotInc.message.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const quotedMessage = XeonBotInc.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isQuoted = XeonBotInc.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await XeonBotInc.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }

        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'

        //push message to console
        if (XeonBotInc.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', XeonBotInc.message.chat.id))
        }
        
 const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}       
switch (command) {

    case 'listpair': {
    const isOwner = global.DEVELOPER.includes(XeonBotInc.message.from.id.toString());
    if (!isOwner) {
        return XeonBotInc.reply(`This command is only for owner.`);
    }

    const pairingPath = './lib2/pairing';

    try {
        // Check if the directory exists
        if (!fs.existsSync(pairingPath)) {
            return XeonBotInc.reply('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name.replace('@s.whatsapp.net', '')); // Extract only numbers

        // Handle if no paired devices are found
        if (pairedDevices.length === 0) {
            return XeonBotInc.reply('No paired devices found.');
        }

        // Count total paired devices
        const totalUsers = pairedDevices.length;

        // Format the list of paired devices for the response
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        XeonBotInc.reply(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return XeonBotInc.reply('Failed to load paired devices data.');
    }
}
break;

case 'deletepaired': {

        const isOwner = global.DEVELOPER.includes(XeonBotInc.message.from.id.toString());
    

        if (!text) return XeonBotInc.reply(`Example:\n ${prefix + command} 20xxx`)
 target = text.split("|")[0]
const Xreturn = XeonBotInc.message.reply_to_message ? XeonBotInc.message.reply_to_message.from.id 
        : target.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
var contactInfo1 =  Xreturn;
  if (contactInfo1.length == 0) {
    return reply("The number is not registered on WhatsApp");
  }

        const targetID = Xreturn.trim();
        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${targetID}`;

        try {
            // Check if the target directory exists
            if (!fs.existsSync(targetPath)) {
                return XeonBotInc.reply(`Paired device with ID "${targetID}" does not exist.`);
            }

            // Delete the target directory and its contents
            fs.rmSync(targetPath, { recursive: true, force: true });

            XeonBotInc.reply(`Paired device with ID "${targetID}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return XeonBotInc.reply('An error occurred while attempting to delete the paired device.');
        }
    }
break;
    
    case 'connect': {
    const libphonenumber = require('libphonenumber-js');
    let adminIDs;

    try {
        adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
    } catch (err) {
        console.error('Error reading adminID.json:', err);
        return XeonBotInc.reply('Failed to load admin data.');
    }

    const userID = XeonBotInc.message.from.id.toString();

    // Escape all special characters for MarkdownV2
    const escapeMarkdownV2 = (text) => {
        return text.replace(/[_*[\]()~>#\+\-=|{}.!]/g, '\\$&'); 
    };

    const escapedUserID = escapeMarkdownV2(userID);

    /*if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
        return XeonBotInc.telegram.sendMessage(
            XeonBotInc.chat.id, 
            `*🛑❌لا يوجد حق لاستخدام هذا بوت هذا بوت أصبح بشتراك هذا ايدي الخاص بك*` +
            `\` ${escapedUserID} \`\n\n` +  // Monospace formatted User ID
            `يمكنك تواصل مع مطور بوت: @F_1kE*`,
            {
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "📢 Telegram Channel", url: "https://t.me/flashaudio" }],
                        [{ text: "▶️ YouTube Channel", url: "https://www.youtube.com/@%E3%83%85JOALHAKEM" }],
                        [{ text: "📱 WhatsApp Channel", url: "https://whatsapp.com/channel/0029Vb2QAwr17EmtV7jvyh1q" }]
                    ]
                },
                parse_mode: "MarkdownV2"
            }
        );
    }*/
    
    /*if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
    return XeonBotInc.telegram.sendMessage(
        XeonBotInc.chat.id, 
        `🚫 *لا يوجد حق لاستخدام هذابوت هذا بوت أصبح بشتراك\\.*\n\n` +
        `📩 *يمكنك تواصل مع مطور بوت:* @F\\_1kE\n\n` +
        `💰 *اسعار الاشتراكات:*\n` +
        `✅ *سعر يوم هو:* 80ج\n` +
        `✅ *سعر الاسبوع هو:* 100ج\n` +
        `✅ *سعر شهر كامل هو:* 300ج`,
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: " Telegram Group", url: "https://t.me/flashaudio" }],
                    [{ text: "YouTube Channel", url: "https://youtube.com/@tobi_e.xe9?si=egpoLLXdOdbMTejw" }],
                    [{ text: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029Vb2QAwr17EmtV7jvyh1q" }]
                ]
            },
            parse_mode: "MarkdownV2"
        }
    );
}*/


    // Check system storage and RAM
    /*const freeStorage = os.freemem() / (1024 * 1024); // Free memory in MB
    const totalStorage = os.totalmem() / (1024 * 1024); // Total memory in MB
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024); // Free disk space in MB

    if (freeStorage < 300 || freeDiskSpace < 300) {
        return XeonBotInc.reply('Slot is full, please try again later.');
    }*/

    if (!DEVELOPER.includes(userID)) {
        // Cooldown check for non-developer users
        if (cooldowns.has(userID)) {
            const lastUsed = cooldowns.get(userID);
            const now = Date.now();
            const timeLeft = 30000 - (now - lastUsed);

            if (timeLeft > 0) {
                return XeonBotInc.reply(`Please wait ${Math.ceil(timeLeft / 1000)} seconds before using the command again.`);
            }
        }
    }

    if (!text) {
        return XeonBotInc.reply('يرجى تقديم رقم لطلب رمز الاقتران. الاستخدام: /connect 20..');
    }

    const sanitizedNumber = text.replace(/\D/g, ''); // Remove non-numeric characters

    // WhatsApp number validation using libphonenumber-js
    function isValidWhatsAppNumber(phone) {
        try {
            const number = libphonenumber.parsePhoneNumber('+' + phone);

            if (!number || !number.isValid()) {
                return false;
            }

            // WhatsApp supports numbers with 6-15 digits excluding the country code
            const localNumberLength = number.nationalNumber.length;
            return localNumberLength >= 6 && localNumberLength <= 15;
        } catch (error) {
            return false; // Reject invalid numbers
        }
    }

    if (!isValidWhatsAppNumber(sanitizedNumber)) {
        return XeonBotInc.reply('Invalid WhatsApp number. Please enter a valid phone number.');
    }

    // Proceed with pairing
    const Xreturn = XeonBotInc.message.reply_to_message ? XeonBotInc.message.reply_to_message.from.id 
        : sanitizedNumber + "@s.whatsapp.net";
    
    var contactInfo = Xreturn;

    if (contactInfo.length == 0) {
        return XeonBotInc.reply("The number is not registered on WhatsApp.");
    }

    // Proceed with pairing logic
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);

    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);

    XeonBotInc.reply(`${cuObj.code}`);

    // Set cooldown for non-developer users
    if (!DEVELOPER.includes(userID)) {
        cooldowns.set(userID, Date.now());
        setTimeout(() => cooldowns.delete(userID), 30000);
    }
}
break;


    
case 'runtime':{
    XeonBotInc.deleteMessage().catch(() => {});
      reply(`DevNexusX Bot is Online ${runtime(process.uptime())}`)
    }
  break
case 'menu': case 'back!':
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const formattedUsedMem = formatSize(usedMem);
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const formattedTotalMem = formatSize(totalMem);
let xeontext = 
`Hi 👋 ${pushname}
𝘩𝘰𝘱𝘦 𝘺𝘰𝘶 𝘦𝘯𝘫𝘰𝘺 𝘣𝘶𝘨𝘨𝘪𝘯𝘨

┏━━「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」━━╼
┃ Bot Name: ${BOT_NAME}
┃ Owner Name: ${OWNER_NAME}
┃ RAM : ${formattedUsedMem} / ${formattedTotalMem}
┃ Date : ${new Date().toLocaleString()}
┗━━━━━━━━━━━━━━━╼

╔══「 CONNECT WA 」══▢
║ /connect 
║ /deletepaired
╚══════▢`
XeonBotInc.replyWithPhoto(
        global.pp, {
            caption: xeontext
        }
    );
break

            default:
        }
    } catch (e) {
        XeonBotInc.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})