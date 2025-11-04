const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'valoriacraft.aternos.me',
    port: 25565,
    username: 'AFKBotu',
    version: '1.20.1'
  });

  bot.on('spawn', () => {
    console.log('✅ Bot sunucuya bağlandı!');
    bot.chat('/register benbot'); // veya /login benbot

    // AFK atılmayı engelle: bakış yönü değiştir
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      const pitch = (Math.random() - 0.5) * Math.PI / 6;
      bot.look(yaw, pitch, false);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('[BOT] Sunucudan atıldı! 10 saniye sonra yeniden bağlanılıyor...');
    setTimeout(() => createBot(), 10000);
  });

  bot.on('error', err => console.log(`[HATA] ${err}`));
}

createBot();
