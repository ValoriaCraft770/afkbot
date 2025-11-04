const mineflayer = require('mineflayer')

function start() {
  const bot = mineflayer.createBot({
    host: 'ValoriaCraft.aternos.me', // sunucu adresi
    port: 25565,
    username: 'Güzelinsan',
    version: '1.20.1'
  })

  bot.once('spawn', () => {
    console.log('✅ Bot sunucuya bağlandı!')
    bot.chat('/register benbot')

    // Oyuncu verisi senkronunu minimuma indir
    bot.physicsEnabled = false
    bot._client.write('settings', {
      locale: 'en_US',
      viewDistance: 2, // 2 chunk ile sınırla
      chatFlags: 0,
      chatColors: false,
      skinParts: 0
    })
  })

  bot.on('move', () => {
    // Eğer chunk yükleniyorsa dondur
    bot.entity.velocity.x = 0
    bot.entity.velocity.y = 0
    bot.entity.velocity.z = 0
  })

  bot.on('end', () => {
    console.log('[BOT] Bağlantı koptu. 60 saniye sonra tekrar bağlanıyor...')
    setTimeout(start, 60000)
  })

  bot.on('kicked', (reason) => {
    console.log('[BOT] Sunucudan atıldı:', reason)
  })

  bot.on('error', (err) => {
    console.log('[HATA]', err)
  })
}

start()
