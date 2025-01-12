const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA5VVXZOqOBT8L9lHvSuIoFg1VQsoyKiIoghu3YcAASKfQwKKU/73LcaZmnnYe3f2LRWSPp3uPodXkBeYoCVqwfQVlBVuIEXdkrYlAlMg12GIKtAHAaQQTAHRTsQMr1ZdFoZq5KYY8EfjVCaj1WgWS3T+THJP8wcDKYuewL0PytpLsf8bwEHkhZKz8b0sKLlQY4jZ3gbp8DTL2AtkZnadhMVBjhP3XDyBe4cIcYXzaF7GKEMVTJeoNSGuvkc/0XG4rhJm7eXVsiWOR5tKCeSFNn6p6axnCMoqttWhWmbu9+gHoh4o4kUY385shi7CLpSod7CMnd5cY9eoDciiSLcPB2n7oE9wlKNAD1BOMW2/r/vCPrdjV0kTaHHzfTC4tnF4Y6qzoS/nMDmyoiUcB1f/emC+RzyNefs6D5ZWNMCOLiI7ZlSrcmJNKy1Drfg8iAvBnr3c5sxX4mb1kZXk/+i+nN/swzgRNS8d4shrZH+35ou6qCdNzzIjhRWGkL+E0YD9ZmyEY2mGdC/x8ooGRl3pB2OSVEmvhuebqWE5Uc8Y86vFcfdFd0jr6ncsT4MbobtbY69UPgl4bRkM5JUtoQuypa098KR6BT1nO3d8IUq46+x01crb80myvLZQeRnuDL03Khdnr1Qm+2PNnna7oyw9vb0oQa0egCl774MKRZjQClJc5N3ehOsDGDQW8itE39QFOl8OrQXBE7HKLy7n2LSNyp3gnnkd7oyZmOUW4yaneu+RJ9AHZVX4iBAULDChRdWuESEwQgRM//7ZBzm60odvXTWO7YMQV4Qe8rpMCxh8mPrxEfp+UefUanNf6RaoAlPmcxtRivOIdDLWOaz8GDdIiSElYBrClKB7HwSowT7q8IDlXMsmVJ+3Rbsg9ZljhTxeXjrKcZE/joxEMQyFcfiDEUP+x0gY+z9Ejud/DCcjNhCgP0YTDvQBfm+Z7s4vHSzbszmgbeTNTJMKM39jJRt976fhS/LmwkN6VKEATGlVoz7woJ/U5b5IUP4b3GMupwtOujD2jEugYakbGi3ksGYHly+4D0vB9PVzTClF0OEpnDsznec96IPsLYG4e/mQH7HMSBBEnhlN2b/In5dOR1iWf+aIgj7IYXcY/CFLxkzfd3XeTegQAkQhTkkHbjbnW7reThDSGsl1JUuSlpLUBePDtI/wP9IVnka+njRksBG0Xm9jLl3RGsb04ka1cOVP0gFvd6cX27g4xb+BgCnQ5u36qLHJi5KxXuxqZmW1G1qvs/OaqQ9MuVs1K04iJOkxuJ0daOo76jN0STaY7y6hkor23HkuZBpTjRtvzBktirkUPXXVHuH5WsyJwuzqr2x3pwr+PDEMIQhCCb7srWPTG0FW09dDD9sNoZG6kvJrI24MqLaJwpPhy/yiY8dTtYI15X1YuTK6bpezTLk82vJtLKTv4xi/dczre9RCjN6m27sL/2XWZ+iZe/8LxPu4/EWwZGeIFsrzamze6rhpzuc2Mw+08HxNX9UEHbeqnsyPMN37qgDu9599UKaQhkWVdT+FzIOgD1JIqPTZtHucIUJhVoIpO+YEnudGY/b+Dw/sgffpBwAA",
    CAPTION: process.env.CAPTION || "*ᴘᴏᴡᴅᴇʀᴇᴅ ʙʏ ᴛᴀʟᴋᴅʀᴏᴠᴇ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.imgur.com/UfzyhWN.jpeg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M BYTE-LITE WHATSAPP BOT 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "ʙʏᴛᴇ-ʟɪᴛᴇ",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`𝒚𝒐𝒖𝒓 𝒔𝒕𝒂𝒕𝒖𝒔 𝒔𝒆𝒆𝒏 𝒋𝒖𝒔𝒕 𝒏𝒐𝒘 𝒃𝒚 𝒃𝒚𝒕𝒆-𝒍𝒊𝒕𝒆`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
