// 𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝞢𝞒

// • # Made by @PikaBotz [ GitHub.com/PikaBotz ]
// • # The script is Encrypted because users are not allowed to commit any changes without permission!
// • # To buy non enc version of Anya-pika-MD-v2 please contact wa.me/918811074852 [ $5 - $8 ]

// • T H A N K S - TO
// @NexusAt12
// @xeon
// @teamolduser

const fs = require('fs')
const chalk = require('chalk')
require('./lib/config')

global.zApiKey = {// if this API key get expired then please go to https://www.fxacb-api.my.id and get a new api key.
       one: "zenzkey_998568986d"
}
global.lApiKey = {// if this API key get expired then please go to https://api.lannn.me and get a new api key.
      one: 'uMSPCuLU',
      two: 'IOGaHu5S'
}


global.botname = "SHAWARMA-BOT" 
global.author = "𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝞢𝞒"  
global.packname = "+92"  
global.myweb = "Enter Your Any Website Profile Link Here"
global.footer = "©\t" + "Enter Your Watermark Here"
global.prefa = ['-'] // single prefix
global.themeemoji = "🎐"
global.autoBio = "$mode : $time ⌚ || $date 🗓️ || $botname" // Leave it as it is if you didn't understood!
global.socialText = `*⪧⪢ Please join this group for by bot's announcement.*`
global.socialLink = `*⪧⪢ https://chat.whatsapp.com/HshHS6kHF9NHnA9lfMwwSM 💝*`


global.ownername = "𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝞢𝞒"    
global.ownernumber = ["31687886969"]
global.ytname = "YT: Enter Your Channel Name Here"
global.continent = "Asia" // your continent name 
global.region = "Enter Your Country Name Here"
global.state = "Enter Your State Name Here" // your state name
global.timezone = "Europe/Amsterdam" // search on google if you don't know the timezone of your country //
global.instagramId = "ccommanderss"
global.email = "Enter Your Email ID Here"


// Greeting messages
global.greet1 = "Good morning ☀️" // after 3 AM
global.greet2 = "Good afternoon 🏜️" // after 12 PM
global.greet3 = "Good evening 🌆" // after 4 PM
global.greet4 = "Good night 😴" // after 8:30 PM


//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.nullImage = fs.readFileSync('./https://www.linkpicture.com/view.php?img=LPic64b6e75be5cbd1000847570')
global.Menuimage = fs.readFileSync("./https://www.linkpicture.com/q/WhatsApp-Image-2023-07-18-at-12.22.32.jpeg") // Thumbnail for Dashboard
global.thumnnaiIs = fs.readFileSync("./https://www.linkpicture.com/q/WhatsApp-Image-2023-07-18-at-12.22.31_4.jpeg")
global.allmenuImg = fs.readFileSync('./https://www.linkpicture.com/q/WhatsApp-Image-2023-07-18-at-12.29.26.jpeg') // Thumbnail for Allmenu command 

global.mess = {
    success: 'Done ✅',
    admin: 'You must be an admin to use this command.',
    botAdmin: 'The bot needs to be an admin to process this command.',
    owner: 'You are not the owner of this bot so you cannot use this command.',
    group: 'This command is only made for group chats.',
    private: 'This command is only for private chats.',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」Loading...```',
    link: 'I need a link to process this command.',
    error: '```404 Error```',
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
}


/*𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹 DANGER ZONE ⚠️👇 𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹𝗹*/
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
