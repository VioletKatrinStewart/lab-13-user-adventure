const houses = {
    id: 'houses',
    title: 'Trick-or-treat?',
    map: {
        top:'50%',
        left: '30%'
    },
    image: 'houses.jpg',
    description: `You walk down the street and see three houses in front of you. The blue house is decorated with pumpkin lights and has a long line of trick-or-treaters of various ages in various costumes. The red house has no decorations but you can hear music and voices of people inside. The brown house is dark and covered in cobwebs and not the fake spirit halloween costume cobwebs-they seem to be the real deal. There is no music or sign of life coming from the brown house. Which door will you knock on?`,
    choices:[{
        id: 'blue',
        description:'The blue house',
        results: `You head over to the blue house. There are so many kids in line you burn a signifigant amount of the time you have before your curfew waiting. Eventually you get to the front only to find out they are handing out BOXES OF RAISENS!?!! You take a box and continue on with the weight of much dissapointment weighing on you. You lose two HP and you gain zero candy.`,
        hp: -2,
        candy: 0,
    }, {
        id: 'red',
        description: 'The red house',
        results: `You make your way to the red house. You are excited becasue there are no other kids competing for candy. You practically leap up the stairs and knock on the door. OH NO! The house seems to be full of TEENAGERS. They laugh at your costume and tell you firmly to hand over all your candy. You also burn some precious time composing yourself after parting with your candy stash. TRULY UNFAIR! RATS! Minus one HP and you lose any candy you have gained so far.`,
        hp: -1,
        candy: 0, //RESET TOTAL AMOUNT TO ZERO NOT AN INCRIMENT OF ZERO
    }, {
        id: 'brown',
        description: 'The brown house',
        results: `You cautiously approach the brown house. You feel your heartbeat getting faster as you make your way to the door. After you knock you think about booking it back down the street in the direction you came from but right before you can turn around the door slowly creaks open. An old woman's face peers around the door and with a big toothless grin she says "hello dearie...". You make a small squeaking noise but to your surpise she extends not one but THREE KING SIZED CANDY BARS. HOLY MOLY! Becase there were no other kids getting in your way you don't lose too much time either! Minus zero HP and plus three candy bars.`,
        hp: -1,
        candy: 3

    }]

};

const graveyard = {
    id: 'graveyard',
    title: 'Graveyard bet',
    map: {
        top: '70%',
        left: '50%'
    },
    image: 'graveyard.jpg',
    description: `You are walking down the street scheming up ways to get more candy fast when your friend Randy runs up to you calling your name. He can barely talk becasue he is so excited. A block a way a bunch of kids are BETTING PILES OF THEIR CANDY that no one in the neighborhood will be brave enough to go through the graveyard alone tonight. Several of the kids are convinced that they saw a few shadowy figures hovering over the graves. You are admittadly very scared but also very motivated by the potential payout of heaps of candy. What do you do?`,
    choices: [{
        id: 'run',
        description: 'Run at full speed through the graveyard to save time and make it less scary.',
        result: `You BOLT into the graveyard with a gaggle of kids cheering you on from the fence. You feel the addrenaline propelling your body through. However it is a little to dark for you to see the gnarled tree roots extrending into the walkway. You trip! ALL OF YOUR CANDY FALLS ON THE GROUND! You are too afraid to register if you just tripped over roots or if those are actually zombie hands popping out of the ground. You run back to the fance leaving YOUR WHOLE CANDY STASH all behind. Minus one HP and you lose any candy you have gained so far.`,
        hp: -1,
        candy: 0,  //RESET TO ZERO 
    }, {
        id: 'buddy system',
        description: 'Go with Randy and split the candy.',
        result: `You convince the kids who started the bet to let you bring Randy with you and if you both explore the whole graveyard and make it back alive you get to split all the candy. You and Randy enter through the front gate and both give eachother a knowing look confirming you are both very scared and not entirely sure if this is worth it. Weirdly enough, everytime I shadow or noise startles one of you it makes the other erupt into a fit of nervous laughter. After this happens a few times you both are genuinely laughing. The graveyard stops being scary and you both have a great time trying to scare the other on to get a laugh. When you get back to the gate the other kids CAN NOT believe it. You get to walk away with a pile of their candy and a great story. Minus one HP and plus TEN candy bars.`,
        hp: -1,
        candy: 10,
    }, { 
        id: 'just be brave',
        description: 'Time to put on a brave face! Walk in confidently by yourself.',
        result: `You decide that the promise of at least 20 candy bars is too good to pass up. You tell the group you will be going in alone. They are all shocked at how brave you are. You strut into the graveyard and see long shadows, darting grows, and spooky looking trees everywhere. To distract yourself from how SCARY this is, you start whistling to yourself. HOWEVER the noise attracts SOMETHING and now they are heading RIGHT TOWARDS YOU. You scream!!!! And you start to run away. You feel a hand grab the back of your shoulder when you are in sight of the gate. All the kids who had bet their candy run away faster than you can say "trick-or-treat!'. You turn around ready to accept your fate. But theres no ghost! Just the groundskeeper who gives you a FIRM warning not to be caught tresspassing again. He talks your ear off for so long you end up Losing a lot of precious time you could be out getting candy. Minus two HP and plus ZERO candy.`

    }]

};

const party = {
    id: 'party',
    title: 'Halloween Party',
    map: {
        top: '30%',
        left: '90%'
    },
    image: 'party.jpg',
    description: `You run into your friend Stephanie and she lets you know that just a few houses over her family is hosting a Halloween party! She says a lot of your friends will be there and EVERYONE will get the as much candy as they want. You decide to follow her to the door and go in with her. When you walk in there are three directions you can go. Where do you decide to go first?`,
    choices: [{ id: 'left',
        description: 'You decide to head to the left',
        result: `You head to the left and inside everyone is lined up in a row while the adults walk around and fawn over the children. You realize there is a costume contest going on. You get in line and hope for the best. Once you are in line you catch the eye of the moms. They LOVE your costume and think you are cute as pie. You get a prize which is a bucket of 20 candy bars!!!!! Wow oh wow! Minus one HP plus twenty candy!`,
        hp: -1,
        candy: 20,
    }, { 
        id: 'right',
        description: 'You decide to head to the right',
        result: `You head to the right, and see a long line. Thinking that waiting in this line MUST be for something good you decide to hop in. After a really long wait you get to the front and see the line wasn't for candy, it was for pizza. You take a slice but now are out of time and have to leave. You see a bowl of candy at the front door and try to grab a handful but are scolded by an adult who says you can only take ONE piece. Rats! Minus two HP plus one candy.`,
        hp: -2,
        candy: 1,

    }, {
        id: 'straight',
        description: 'You decide to go down the middle',
        result: `You go down the middle hallway. You decide to look for the bag that has all the candy they bought for the night and make off with it. You see a cubbord that looks suspiciously like it would have candy in it, but you can not quite reach the top. You start stacking furnature at the base of the cubbord to try and give you something to stand on to reach the top. But, IT ALL TOPPLES OVER UNDER YOUR WEIGHT! There is a loud CRASH and all the adults come out to see you. You are yelled at and banned from coming over again. You must leave without any candy. Minus one HP and plus zero candy.`

    }]
};

const quests = [
    houses,
    graveyard,
    party, 
];

export default quests;






