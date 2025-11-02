const mineflayer = require('mineflayer');

// Sunucu bilgilerini BURAYA yaz
const bot = mineflayer.createBot({
  host: 'ValoriaCraft.aternos.me', // örnek: valoriacraft.aternos.me
  port: 29946, // değişmediyse bu kalsın
  username: 'ValoriaCraft', // Premium hesapsa e-posta / Cracked sunucuysa sadece isim
  version: true // Sunucu sürümünü otomatik bulur
});

// Konsol logları
bot.on('login', () => console.log(`[BOT] Giriş yaptı: ${bot.username}`));
bot.on('spawn', () => console.log('[BOT] Sunucuda spawn oldu.'));
bot.on('end', () => console.log('[BOT] Bağlantı koptu, yeniden bağlanacak...'));

// Bağlantı koparsa 10 saniye sonra yeniden bağlan
bot.on('end', () => setTimeout(() => process.exit(0), 10000));
bot.on('error', err => console.log(`[Hata] ${err}`));

// Küçük hareket (AFK tespiti engeller)
setInterval(() => {
  const yaw = Math.random() * Math.PI * 2;
  bot.look(yaw, 0, false);
}, 60000);
