const mineflayer = require('mineflayer');
const ping = require('minecraft-server-util');

function startBot() {
  const server = {
    host: 'ValoriaCraft.aternos.me', // Sunucu adresi
    port: 25565,
    version: '1.20.1'
  };

  ping.status(server.host, { port: server.port })
    .then(() => {
      console.log('[BOT] Sunucu aktif, bağlanıyor...');
      createBot(server);
    })
    .catch(() => {
      console.log('[BOT] Sunucu kapalı, 1 dakika sonra tekrar denenecek...');
      setTimeout(startBot, 60000);
    });
}

function createBot(server) {
  const bot = mineflayer.createBot({
    host: server.host,
    port: server.port,
    username: 'AFKBot',
    version: server.version
  });

  bot.once('spawn', () => {
    console.log('✅ Bot sunucuya bağlandı!');
    bot.chat('/register benbot');
    // Sadece arada bir küçük hareket
    setInterval(() => {
      const yaw = Math.random() * Math.PI * 2;
      bot.look(yaw, 0, false);
    }, 300000); // 5 dakikada bir küçük bakış
  });

  bot.on('kicked', (reason) => {
    console.log(`[BOT] Atıldı: ${reason}`);
  });

  bot.on('end', () => {
    console.log('[BOT] Sunucudan atıldı, 2 dakika sonra yeniden bağlanacak...');
    setTimeout(startBot, 120000); // 2 dakika bekle, sonra bağlan
  });

  bot.on('error', (err) => {
    console.log(`[HATA] ${err}`);
  });
}

startBot();
