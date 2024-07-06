const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
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
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_23_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI4LFxuICAgICAgICA1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjE2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMSxcbiAgICAgICAgOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTczLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDcwLFxuICAgICAgICA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3OCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDksXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDcwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjUsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk2LFxuICAgICAgICA4MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICA2MixcbiAgICAgICAgMTgwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjcsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkZrRDFyOURSVHBFMHhrRnUvOFdzUlVyOEIzOUtZVGQ4dFQ5eHo4SUlSalk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImdGTF9CVHhaVE9HVHNqN3hSV2dQT2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmY3ZjQzMGItNTcxMi00YjA0LTlkYmQtMDgxMDBlYmY1MWVkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5NyxcbiAgICAgIDIzLFxuICAgICAgMjM1LFxuICAgICAgMTY4LFxuICAgICAgMjAzLFxuICAgICAgMjExLFxuICAgICAgNjEsXG4gICAgICAxMDMsXG4gICAgICAxNTYsXG4gICAgICAxMjksXG4gICAgICA0NCxcbiAgICAgIDE0MixcbiAgICAgIDEwLFxuICAgICAgODQsXG4gICAgICA1OSxcbiAgICAgIDQ3LFxuICAgICAgOSxcbiAgICAgIDEzMCxcbiAgICAgIDEsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgOTYsXG4gICAgICAxNjQsXG4gICAgICAxNTgsXG4gICAgICAxNSxcbiAgICAgIDE5NCxcbiAgICAgIDIwMyxcbiAgICAgIDIyMSxcbiAgICAgIDIzLFxuICAgICAgMjI0LFxuICAgICAgMixcbiAgICAgIDcsXG4gICAgICA4NSxcbiAgICAgIDIwMixcbiAgICAgIDE4MCxcbiAgICAgIDE5LFxuICAgICAgMTcsXG4gICAgICAyMTUsXG4gICAgICAxMjcsXG4gICAgICA5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXMjFZTFlBUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAxMTQxMDI2OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NjM1MTMxMjY2MjUzMjozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ012UmkyVVEwZTZrdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMUtlVFUrRS9tSVI5cFROeWJDMCtobXBialZHUVY3L0xNMDlQRXhsRTV5VT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJZQ2FtOVFkY2tFRWlMQnRQbFlBNHJxSXhkbUlTZDJVWE9UK1pjWHFYcDM1YXNENkFUK1ZWK1ZVeWF0RlJxb3VERjdiaTc5YlhCTUVWV2NNbEF5TzVBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIxMmNtOW1WMnZBTERxdkxTWkhXcURpOEpkMFp5OGl6OFN2MmFiNTlWajlFMVBxb3ZoVEsxQTlxWXFWTmhmYTVZSk8zZElaeXF1amtnN3FYamNwRGFqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDExNDEwMjY6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDI2ODYyOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9MZ1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT0xnLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZXE2ZDdmOUdqM2YxOVdmckp0SWNxKzZYSkhsSVZydVNqVlh1aUlja2hDRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMTIwMDMwMTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjQ0NTQxMTcyNlwifSIKfQ"  // PUT your SESSION_ID 


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
