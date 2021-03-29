const { evaluate } = require("mathjs");

exports.run = async (bot, message, args) => {
    try {
        const expressions = args.join(" ");
        console.log(expressions);
        const answer = evaluate(expressions);
        console.log(answer);
        bot.sendText(message.from, answer.toString());
    } catch (error) {
        console.log('Error: ', error);
    }
};

exports.help = {
    name: "Math",
    description: "Calculate something",
    usage: "math <expression>",
    cooldown: 5
};
