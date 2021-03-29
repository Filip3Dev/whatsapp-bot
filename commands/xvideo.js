const xvideos = require('xvideos-lib');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.run = async (bot, message) => {
    let url = message.body.replace(/!xvideo/, "");
    url = url.replace(/(\r\n|\n|\r)/gm, "");
    console.log('url: ', url);

    // if (postid != null && postid[1]) {
    //     console.log("instagram post id = ", postid[1]);
    // } else {
    //     bot.sendText(message.chat.id, `Foi mal, não tô conseguindo baixar..`);
    // }

    // try {
    //     let returns = await InstagramApi.get(postid[1]);
    //     console.log('returns: ', returns);
    //     if (returns.children.length) {
    //         bot.sendFile(message.chat.id, returns.url, 'image', returns.caption);
    //         for await (const iterator of returns.children) {
    //             bot.sendFile(message.chat.id, iterator.url, 'image', iterator.is_video ? 'Video do instagram' : 'Imagem do instagram')
    //             await sleep(1000);
    //         }
    //     } else {
    //         bot.sendFile(message.chat.id, returns.url, 'image', returns.caption || 'Imagem do instagram')
    //     }
    // } catch (error) {
    //     console.log('Error: ', error);
    //     bot.sendText(message.chat.id, `Foi mal, não tô conseguindo baixar.`);
    // }
};

exports.help = {
    name: "Xvideos",
    description: "Baixa o conteudo do xvideo",
    usage: "xvideo",
    cooldown: 5
};
