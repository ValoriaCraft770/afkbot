const mineflayer = require('mineflayer');

function startBot() {
  const bot = mineflayer.createBot({
    host: 'ValoriaCraft.aternos.me', // Sunucu IP
    port: 29946,                     // Port
    username: 'Güzelinsan',              // Bot ismi
    version: '1.20.1'                // Sürüm
  });

  bot.once('spawn', () => {
    console.log('✅ Bot sunucuya bağlandı!');
    bot.chat('/login benbot'); // veya /register benbot

    // Her 40 saniyede bir kafasını hafifçe çevirir
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2; // Sağ sol
      const pitch = (Math.random() - 0.5) * Math.PI / 8; // Yukarı aşağı
      bot.look(yaw, pitch, false);
    }, 40000);

    // 5 saat sonra otomatik çıkar
    setTimeout(() => {
      console.log('🕐 5 saat doldu, bot çıkıyor...');
      bot.quit();
    }, 5 * 60 * 60 * 1000);
  });

  bot.on('end', () => {
    console.log('🔌 Bot sunucudan çıktı.');
  });

  bot.on('error', err => console.log('[HATA]:', err));
}

startBot();
