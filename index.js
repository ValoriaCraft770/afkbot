const mineflayer = require('mineflayer');

// 🟢 Botu oluştur
const bot = mineflayer.createBot({
  host: 'ValoriaCraft.aternos.me', // Buraya kendi Aternos adresini yaz
  port: 29946, // genelde değişmez
  username: 'AFKBot', // Bot ismi
  version: '1.20.1' // Sunucunun Minecraft sürümü
});

// 🟢 Sunucuya bağlanınca çalışacak olay
bot.on('spawn', () => {
  console.log('✅ Bot sunucuya bağlandı!');
  
  // 1 dakikada bir sohbet mesajı atar (AFK kalmasın diye)
  setInterval(() => {
    bot.chat('ben buradayım 👋');
  }, 60000);
});
