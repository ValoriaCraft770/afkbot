const mineflayer = require('mineflayer');

// 🟢 Botu oluştur
const bot = mineflayer.createBot({
  host: 'valoriacraft.aternos.me', // <-- Buraya kendi Aternos adresini yaz
  port: 25565,                      // Genelde değişmez
  username: 'AFKBot',               // Bot ismi (cracked sunucularda yeterli)
  version: '1.20.1'                 // Sunucunun Minecraft sürümü
});

// 🟢 Sunucuya bağlanınca çalışacak olay
bot.on('spawn', () => {
  console.log('✅ Bot sunucuya bağlandı!');

  // 1️⃣ /register benbot komutunu yaz
  bot.chat('/register benbot');

  // 2️⃣ 1 dakikada bir chat mesajı atarak AFK atılmayı engeller
  setInterval(() => {
    bot.chat('ben buradayım 👋');
  }, 60000);
});

// 🟢 Hata yakalama ve yeniden bağlanma
bot.on('end', () => {
  console.log('[BOT] Bağlantı koptu, 10 saniye sonra yeniden bağlanacak...');
  setTimeout(() => process.exit(0), 10000); // GitHub Actions yeniden başlatır
});

bot.on('error', err => {
  console.log(`[Hata] ${err}`);
});

// 🟢 Node.js’in kapanmasını engelle
process.stdin.resume();
