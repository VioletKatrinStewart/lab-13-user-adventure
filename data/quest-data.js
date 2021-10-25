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
        results: `You head over to the blue house. There are so many kids in line you burn a signifigant amount of the time you have before your curfew waiting. Eventually you get to the front only to find out they are handing out BOXES OF RAISENS!?!! You take a box and continue on with the weight of much dissapointment weighing on you`,
        hp: -2,
        candy: 0,
    }, {
        id: 'red',
        description: 'The red house',
        results: `You make your way to the red house. You are excited becasue there are no other kids competing for candy. You practically leap up the stairs and knock on the door. OH NO! The house seems to be full of TEENAGERS. They laugh at your costume and tell you firmly to hand over all your candy. You also burn some precious time composing yourself after parting with your candy stash. TRULY UNFAIR! RATS!`,
        hp: -2,
        candy: 0, //RESET TOTAL AMOUNT TO ZERO NOT AN INCRIMENT OF ZERO
    }, {
        id: 'brown',
        description: 'The brown house',
        results: `You cautiously approach the brown house. You feel your heartbeat getting faster as you make your way to the door. After you knock you think about booking it back down the street in the direction you came from but right before you can turn around the door slowly creaks open. An old woman's face peers around the door and with a big toothless grin she says "hello dearie...". You make a small squeaking noise but to your surpise she extends not one but THREE KING SIZED CANDY BARS. HOLY MOLY! Becase there were no other kids getting in your way you don't lose too much time either!`

    }]

};

const graveyard = {
    id: 'graveyard'
    
}