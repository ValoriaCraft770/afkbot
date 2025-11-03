const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'valoriacraft.aternos.me',
    port: 25565,
    username: 'AFKBot',
    version: '1.20.1'
  });

  bot.on('spawn', () => {
    console.log('✅ Bot sunucuya bağlandı!');
    bot.chat('/register benbot');
    setInterval(() => bot.chat('ben buradayım 👋'), 60000);
  });

  bot.on('end', () => setTimeout(() => process.exit(0), 10000));
  bot.on('error', err => console.log(`[Hata] ${err}`));
  process.stdin.resume();
}

createBot();

// 6 saat sonra botu kapat
setTimeout(() => {
  console.log('[BOT] 6 saat doldu, bot restart ediliyor...');
  process.exit(0); // Eğer otomatik restart yoksa sadece kapanır
}, 21600000);
