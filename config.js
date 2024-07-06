const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://fluffyjourney001:eEZlMzNMPdjDM1Ct@fundraiser.jz2gntv.mongodb.net/"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "+254110540596" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254701141026";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_35_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDQzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkxLFxuICAgICAgICA2NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDg0LFxuICAgICAgICA0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDg2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDM3LFxuICAgICAgICAzNCxcbiAgICAgICAgOCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ2LFxuICAgICAgICAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAzMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUzLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMixcbiAgICAgICAgNjksXG4gICAgICAgIDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNyxcbiAgICAgICAgODAsXG4gICAgICAgIDkwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODksXG4gICAgICAgIDQ1LFxuICAgICAgICAxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA1MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA3NixcbiAgICAgICAgMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMixcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODIsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICAzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY0LFxuICAgICAgICA0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZZNVBPTzlESkRzTE8zVUVFSWNVc3J3SDJLY0RDeWc2TVpSeHNNWHVqSzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzAxMTQxMDI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1NDE0QjBBRDg0OUZBRDI5RTEzQUE2MkZCNzJGNzE1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAyODAxNTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTGJBZmJPSmRUQzZKYVY4ZG1ZRFd6UVwiLFxuICBcInBob25lSWRcIjogXCI2NjY4ZjkyOC1hNzJkLTRjMGQtYmFkMC1jZDI4YWZmYmEwMjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAxMSxcbiAgICAgIDIzMCxcbiAgICAgIDIwNixcbiAgICAgIDIxNyxcbiAgICAgIDc3LFxuICAgICAgMjAyLFxuICAgICAgMTU2LFxuICAgICAgMzIsXG4gICAgICA2NyxcbiAgICAgIDE0MyxcbiAgICAgIDE5MyxcbiAgICAgIDQ3LFxuICAgICAgMjQ3LFxuICAgICAgMTU2LFxuICAgICAgOSxcbiAgICAgIDIwOCxcbiAgICAgIDIxOCxcbiAgICAgIDUsXG4gICAgICAxNjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU3LFxuICAgICAgMzMsXG4gICAgICAxNTYsXG4gICAgICA1OSxcbiAgICAgIDI1MixcbiAgICAgIDIwMSxcbiAgICAgIDEwNyxcbiAgICAgIDEwNyxcbiAgICAgIDE1MSxcbiAgICAgIDIwOCxcbiAgICAgIDgyLFxuICAgICAgMTUsXG4gICAgICAxNTgsXG4gICAgICAxMjksXG4gICAgICAxNjcsXG4gICAgICAyMDYsXG4gICAgICAxMjcsXG4gICAgICAxOTAsXG4gICAgICA2NSxcbiAgICAgIDcxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFaUzVLVERaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MDExNDEwMjY6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTQ2MzUxMzEyNjYyNTMyOjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTXpSaTJVUTBzaWx0QVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIxS2VUVStFL21JUjlwVE55YkMwK2htcGJqVkdRVjcvTE0wOVBFeGxFNXlVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlpYbkY5Z3lUM1gwV1N3cWQ2SEVoL3JsMXJUUTlaS1JERlkvOXltUWNZWHNiRGlVTC9PQSs2WXR2bHZjUUczZzgxRE9kdjRKbG9QK2pGcE1yN1J4VUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjFmMWpxdHlnN0RrOEkxTHVtbFJBL1dwQXB3MWE2TjY0L2xUeWFVZURQUkdkMVJUQ3lITXFWRkw0aHZNRkU2TjJPeGRQMGYzTDhoZDZseVB6UTBNRERnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMTE0MTAyNjo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjgwMTQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0xnXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPTGcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJlcTZkN2Y5R2ozZjE5V2ZySnRJY3ErNlhKSGxJVnJ1U2pWWHVpSWNraENFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxMjAwMzAxOCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE2NDQ1NDExNzI2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Thugger",
  ownername:process.env.OWNER_NAME|| "Zenith",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
