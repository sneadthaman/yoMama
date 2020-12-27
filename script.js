const jokes = ['Yo mama\'s so fat, when she skips a meal, the stock market drops.',
'Yo mama\'s so fat, when she goes camping, the bears hide their food.',
'Yo mama\'s so fat, if she buys a fur coat, a whole species will become extinct.',
'Yo mama\'s so fat, when she wears high heels, she strikes oil.',
'Yo mama\'s so fat, her car has stretch marks.',
'Yo mama\'s so stupid, when they said, "Order in the court," she asked for fries and a shake.',
'Yo mama\'s so stupid, she thought a quarterback was a refund.',
'Yo mama\'s so stupid, when I said, "Drinks on the house," she got a ladder.',
'Yo mama\'s so stupid, it takes her two hours to watch 60 Minutes.',
'Yo mama\'s so stupid, she put airbags on her computer in case it crashed.',
'Yo mama\'s so ugly, she threw a boomerang and it refused to come back.',
'Yo mama\'s so ugly, she made a blind kid cry.',
'Yo mama\'s so ugly, her portraits hang themselves.',
'Yo mama\'s so ugly, when she was little, she had to trick-or-treat by phone.',
'Yo mama\'s so ugly, her birth certificate is an apology letter.'];

const run  = () => {
    let random = Math.floor(Math.random()*(jokes.length-1));
    return console.log(jokes[random]);
}

run(); 
