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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+254110540596";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_36_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MixcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICA3NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxLFxuICAgICAgICA5NixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICA2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MixcbiAgICAgICAgMTMyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA4NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDksXG4gICAgICAgIDgyLFxuICAgICAgICA4NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDM2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICAwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDUxLFxuICAgICAgICA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzIsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjksXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDExLFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDk0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgOSxcbiAgICAgICAgODIsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY2LFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAxODUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA2MixcbiAgICAgICAgMTA2LFxuICAgICAgICA0NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMzksXG4gICAgICAgIDMxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE3OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0aVU2YkE5cVNVcFJaYXdjT3RVY3VGR3c4cHRYSzJSSHdHUVVhTHFrN2hFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwaGc3aG9WaFNKeXI3LUNGTDlPa0lRXCIsXG4gIFwicGhvbmVJZFwiOiBcImRiYTE5YzEzLWZmMjMtNGJlNy04ODIxLTQzYmViYTFjNTFiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjUsXG4gICAgICAxNjgsXG4gICAgICA1OSxcbiAgICAgIDE3MyxcbiAgICAgIDE5MixcbiAgICAgIDE0MyxcbiAgICAgIDE3NSxcbiAgICAgIDIzMSxcbiAgICAgIDE4OSxcbiAgICAgIDI2LFxuICAgICAgMTMxLFxuICAgICAgMTg5LFxuICAgICAgMTg1LFxuICAgICAgMTc3LFxuICAgICAgMjM5LFxuICAgICAgMjE5LFxuICAgICAgNyxcbiAgICAgIDIzLFxuICAgICAgNjQsXG4gICAgICAxMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAxNzAsXG4gICAgICAxODksXG4gICAgICAxNDEsXG4gICAgICAxNCxcbiAgICAgIDE4MyxcbiAgICAgIDIwLFxuICAgICAgMTQyLFxuICAgICAgMTMwLFxuICAgICAgNDksXG4gICAgICAxMTQsXG4gICAgICAyMTksXG4gICAgICA2LFxuICAgICAgNjEsXG4gICAgICA2OCxcbiAgICAgIDEzLFxuICAgICAgMjksXG4gICAgICAyMixcbiAgICAgIDIzLFxuICAgICAgMTc2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlRLSzNUTUJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQxMTA1NDA1OTY6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzE5MTA2ODI2MzgyOjI2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lETTdMNEdFTmF2bzdRR0dCSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRURxWlYvS25wY2kzd28vWFhBS0xpL2ZjKytsSjlNcTZmL3Jmb25DYldXWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzTkNQM1JMMm9WekNhQ1lDTkxvcVhwZUY3VVZvQWlGS0VBNDNBejlISi9vV09DeFRvVEppQkc0dDNxc3FpeUtWaGJBVVFlZ01JcEphUERWZ1Z5VHFCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsQnp3cG41UytZZXVFaDdzWE56dnI0cjljOW5TcEdrTmRlSE0vNnVSbE9pMXhaVFlDSGZDZHZReFJid04vSGhWTERLdVMrSnlWRDBhUDhUdnp6VUJpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQxMTA1NDA1OTY6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMjQ0MTg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRFNzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEU3MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJBMVYwMDRsYnpFdW1jRXdqM0RpcXFQUExrNndNanA4ay9KR3BmOEFsbnpjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3NDI0MTUzNjAsXCJjdXJyZW50SW5kZXhcIjoxMyxcImRldmljZUluZGV4ZXNcIjpbMCwxMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
