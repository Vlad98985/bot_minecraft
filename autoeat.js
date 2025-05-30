const mf = require('mineflayer');

const bot = mf.createBot({
    host: 'Vlad_98985-x7t9.aternos.me',
    port: '31679',
    version: '1.20.1',
    username: 'jsbot'
});


//         npm install mineflayer-auto-eat




const autoeat = require('mineflayer-auto-eat').default


bot.loadPlugin(autoeat);

bot.once('spawn', () => {
    bot.autoEat.options.priority = 'saturation'
    bot.autoEat.options.startAt = '15'

    bot.autoEat.options.bannedFood.push('golden_apple', 'enchant_golden_apple')
})
