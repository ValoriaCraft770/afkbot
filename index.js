const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'valoriacraft.aternos.me', // <-- Kendi Aternos adresini yaz
    port: 25565,
    username: 'AFKBot',               // Cracked sunucular için yeterli
    version: '1.20.1'
  });

  bot.on('spawn', () => {
    console.log('✅ Bot sunucuya bağlandı!');

    // Sunucuya girişte sadece /register komutu
    bot.chat('/register benbot');

    // Sohbeti kirletmeden AFK atılmayı engelle
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, false);
    }, 60000); // 1 dakikada bir bakış yönünü değiştir
  });

  // Bağlantı koparsa 10 saniye sonra yeniden başlat
  bot.on('end', () => {
    console.log('[BOT] Bağlantı koptu, 10 saniye sonra yeniden başlatılıyor...');
    setTimeout(() => process.exit(0), 10000);
  });

  bot.on('error', err => console.log(`[Hata] ${err}`));

  // Node.js’in kapanmasını engelle
  process.stdin.resume();
}

// Botu başlat
createBot();

// 6 saat sonra botu kapat (GitHub Actions veya VPS tarafından yeniden başlatılacak)
setTimeout(() => {
  console.log('[BOT] 6 saat doldu, bot restart ediliyor...');
  process.exit(0);
}, 21600000); // 6 saat = 21.600.000 ms
