// This will ask the user a question as they start to
// fly the plane
function question () {
    a_question = game.askForString("What's your name pilot?")
    game.splash("Land this plane to safety " + a_question)
}
// This function will make the sprite annimate into a
// burning plane and will shake the camera
function score () {
    animation.runImageAnimation(
    Plane,
    [img`
. . . . . . . . 5 . . . . . . . 
. . . . . . . . 5 5 5 . . . . . 
. . . . 5 1 1 1 5 4 4 5 5 . . . 
. 5 . 5 5 5 1 1 1 4 4 5 5 . . . 
. 5 1 5 4 4 5 1 1 1 4 4 5 . . . 
. 5 1 1 4 4 4 5 1 1 1 5 5 . . . 
. 5 1 1 1 4 4 5 5 1 1 1 1 1 . . 
. . 1 1 1 1 1 4 4 5 1 1 1 1 . . 
. . 1 1 1 1 1 1 1 1 1 1 1 f 1 . 
. . . 5 1 4 1 1 1 1 1 1 1 1 1 . 
. . . . . . . . . 1 1 1 1 1 1 . 
. . . . . . . . 1 1 1 1 1 . . . 
. . . . . . 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 1 1 1 1 . . . . . 
. . . . 1 1 1 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    scene.cameraShake(14, 5000)
    Plane.say("AAAHHHHHHHHH")
}
function begininng_ () {
    // This will shw the dialouge to the user
    game.splash("Warning: To avoid vision loss, wash your eyes to moisturize it.")
    game.splash("Seriously. please")
    game.splash("Help guide the plane through the city!")
}
function background () {
    scene.setBackgroundColor(0)
    // Thi sets the scenery tto  a blizzard
    effects.blizzard.startScreenEffect()
}
function win () {
    // This will end the game with dialogue at the end
    game.splash("You've done it " + a_question)
}
function obstacles () {
    // This will create the images/walls
    gap = Math.randomRange(0, 3)
    // When it comes across the buildings, this will
    // decide what size of the building that it will
    // appear
    if (0 == gap) {
        topImage = img`
. . . . b b b b b b b b b b b b b b b b b . . . 
. . . . b d d d d d 1 1 1 1 1 1 1 d d d b . . . 
. . . . . b d d d d d d d d d d d d d d d b . . 
. . . . . . b d d 1 1 1 1 d d 1 1 d d d d b . . 
. . . . . b b d 1 d d d 1 1 1 d 1 1 d d d b . . 
. . . . . b d 1 1 d 1 1 1 1 d d d d d b b b . . 
. . . . . b d 1 d 1 1 d d 1 1 1 d d b . . . . . 
. . . . . b d d d d d d d d d d d d b . . . . . 
. . . . . . b d 1 1 1 1 1 d d d 1 d b . . . . . 
. . . . . b d 1 1 d d d d 1 d 1 1 1 b . . . . . 
. . . . . b d 1 d d d d d 1 1 1 d b . . . . . . 
. . . . . b d d d d d d d d d d d b . . . . . . 
. . . . . b b d d d d d d d d d d b . . . . . . 
. . . . . . b b d 9 b b b b b 9 b b . . . . . . 
. . . . . . . . b b b . 9 . . . . 9 . . . . . . 
. . . . . . 9 . . . . . . 9 . . 9 . . . . . . . 
`
        bottomImage = img`
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 1 1 1 8 8 8 8 8 8 1 1 1 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e e f e e e e 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e e f e e e e 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e e f e e e e 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e e f e e e e 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e 5 f e e e 5 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e e f e e e e 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e e f e e e e 8 8 8 8 . . . 
. . . . 8 8 8 8 e e e e f e e e e 8 8 8 8 . . . 
`
    } else if (1 == gap) {
        topImage = img`
. . . . . b b b b b b b b b b b b b b b b . . . 
. . . . b b d d 1 d d d d d d 1 d d d d b b . . 
. . . . b d d 1 d d d d d d 1 d d d b b b . . . 
. . . . b d d 1 d d d d d d 1 d d d b . . . . . 
. . . . b b d 1 d d d d d d 1 d d d b . . . . . 
. . . . . b d 1 d d d d d d 1 d d d b . . . . . 
. . . . . b d 1 d d d d d d 1 d d d b b . . . . 
. . . . . b d 1 d d d d d d 1 d d d d b . . . . 
. . . . . b d 1 d d d d d d 1 d d d d b . . . . 
. . . . . b d 1 1 d d d d d 1 d d d d b . . . . 
. . . . . b d d 1 d d d d d 1 d d d d b b . . . 
. . . . . b d d 1 1 d d d d 1 d d d d d d b . . 
. . . . . b d d d 1 d d d d 1 d d d d d d b . . 
. . . . . b d d d 1 d d d d 1 d d d d d d b . . 
. . . . . b d d d 1 d d d d 1 d d d d d d b . . 
. . . . . b d d d d 1 d d d 1 d d d d d d b . . 
. . . . . b d d d d 1 d d d 1 d d d d b b . . . 
. . . . . b d d d d 1 d d d 1 d d d d b . . . . 
. . . . . b d d d d 1 d d d 1 d d d d b . . . . 
. . . . . b d d d d 1 d d d 1 d d d b b . . . . 
. . . . . b d d d d 1 d d d 1 d d d b . . . . . 
. . . . . b d d d d 1 d d d 1 1 d d b . . . . . 
. . . . . b d d d d 1 d d d d 1 d d b . . . . . 
. . . . . b d d d d 1 d d d d 1 d d b . . . . . 
. . . . . b d d d 1 1 d d d d 1 d d b . . . . . 
. . . . . b d d d 1 1 d d d d 1 d d b . . . . . 
. . . . . . b d d d 1 d d d d 1 d b . . . . . . 
. . . . . . . b d d 1 d d d d 1 b . . . . . . . 
. . . . . . . . b d 1 d d d d b . . . . . . . . 
. . . . . . . . . b b b b b b . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 . . . 
. . . . 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 . . . 
. . . . 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 . . . 
. . . . 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 . . . 
. . . . 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 . . . 
. . . . 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 . . . 
. . . . 7 7 1 1 1 7 7 7 7 7 7 1 1 1 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 1 1 1 1 1 1 1 1 1 7 7 7 7 . . . 
. . . . 7 7 7 7 1 1 f f f f f 1 1 7 7 7 7 . . . 
. . . . 7 7 7 7 1 1 f 1 f 1 f 1 1 7 7 7 7 . . . 
. . . . 7 7 7 7 1 1 f f 1 f f 1 1 7 7 7 7 . . . 
. . . . 7 7 7 7 1 1 1 f f f 1 1 1 7 7 7 7 . . . 
. . . . 7 7 7 7 1 1 1 1 f 1 1 1 1 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e e f e e e e 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e e f e e e e 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e e f e e e e 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e e f e e e e 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e 5 f e e e 5 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e e f e e e e 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e e f e e e e 7 7 7 7 . . . 
. . . . 7 7 7 7 e e e e f e e e e 7 7 7 7 . . . 
`
    } else if (2 == gap) {
        topImage = img`
. . . b b b b b b b b b b b b b b b b b . . . . 
. . b d d d d 1 d d d d d 1 1 d d d d d b . . . 
. b d d d d 1 d d d d d d 1 d d d d d d d b . . 
. b d d d d 1 d d d d d d 1 d d d d d d d b . . 
. b d d d d 1 d d d d d d 1 d d d d d d d b . . 
. . b b b d d 1 d d d d d 1 d d d d d d b . . . 
. . . . b d d 1 1 d d d d 1 d d d d d d b . . . 
. . . . b d d d 1 d d d d d 1 d d d d b . . . . 
. . . . b d d d 1 d d d d d 1 1 d d b . . . . . 
. . . . b d d d 1 d d d d d d 1 d d b . . . . . 
. . . . b d d d 1 d d d d d d 1 d d b . . . . . 
. . . . b d d d 1 d d d d d d 1 d d b . . . . . 
. . . b d d d d 1 d d d d d d 1 d d b . . . . . 
. . b b d d d d 1 d d d d d 1 d d d b . . . . . 
. b d d d d d d 1 d d d d d d 1 d d d b b b . . 
. b d d d d d d 1 d d d d d d 1 d d d d d b . . 
. b d d d d d d d 1 d d d d d 1 d d d d d b . . 
. b d d d d d d d d 1 d d d d 1 d d d d b . . . 
. . b d d d d d d d 1 d d d d 1 d d d b . . . . 
. . b d d d d d d d 1 d d d d 1 d d b . . . . . 
. . b d d d d d d d 1 d d d d 1 d b . . . . . . 
. . b d d d d d d d 1 d d d d 1 d b . . . . . . 
. . b d d d d d d d 1 d d d 1 1 d b . . . . . . 
. . b d d d d d d d 1 d d d 1 d d d b . . . . . 
. . b d d d d d d d 1 d d d 1 d d d b . . . . . 
. . b d d d d d d d 1 d d d 1 d d d b . . . . . 
. . b d d d d d d 1 1 d d d 1 d d d d b . . . . 
. b b d d d d d d 1 d d d d 1 d d d d b . . . . 
b d d d d d d d d 1 d d d d 1 d d d d d b b . . 
b d d d d d d d d 1 d d d d 1 d d d d d d b . . 
b d d d d d d d d 1 d d d d 1 d d d b b b b . . 
. b b b d d d d d 1 d d d d 1 d d b . . . . . . 
. . . . b d d d d 1 d d d d 1 d d b . . . . . . 
. . . . . b d d d 1 d d d d 1 d d b . . . . . . 
. . . . . b d d d 1 d d d d 1 d d b . . . . . . 
. . . . . b d d d 1 d d d d 1 d d b . . . . . . 
. . . . . b d d d 1 d d d d 1 d d b . . . . . . 
. . . . . b d d d 1 d d d d 1 d d b . . . . . . 
. . . . . b d d d 1 d d d d 1 d d b . . . . . . 
. . . . . b d d d 1 d d d d 1 d d b . . . . . . 
. . . . . . b d d 1 d d d d 1 d b . . . . . . . 
. . . . . . b b b b b b b b b b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 1 1 1 4 4 4 4 1 1 1 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 1 1 1 1 d d d 1 1 1 1 1 4 . . . . . 
. . . . . 4 1 1 1 1 1 1 1 1 1 1 1 1 4 . . . . . 
. . . . . 4 1 1 1 1 1 1 1 1 1 1 1 1 4 . . . . . 
. . . . . 4 1 7 1 1 1 1 1 1 1 1 1 1 4 . . . . . 
. . . . . 4 1 e 1 1 1 1 1 1 1 1 1 1 4 . . . . . 
. . . . . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . . . . . 
. . . . . 4 4 4 4 e e e f e e e 4 4 4 . . . . . 
. . . . . 4 4 4 4 e e e f e e e 4 4 4 . . . . . 
. . . . . 4 4 4 4 e e e f e e e 4 4 4 . . . . . 
. . . . . 4 4 4 4 e e e f e e e 4 4 4 . . . . . 
. . . . . 4 4 4 4 e e 5 f e e 5 4 4 4 . . . . . 
. . . . . 4 4 4 4 e e e f e e e 4 4 4 . . . . . 
. . . . . 4 4 4 4 e e e f e e e 4 4 4 . . . . . 
`
    } else {
        topImage = img`
. . . . . . . . . . d d d d d d 1 d d d d . . . 
. . . . . . . . 1 1 1 d d d d d 1 d d d d . . . 
. . . . . . . . 1 d d d d d d d 1 d d d d . . . 
. . . . . . d d 1 d d d d d d d 1 d d d d . . . 
. . . . . d d d 1 d d d d d d d 1 d d d d . . . 
. . . . . d d d 1 d d d d d d d 1 d d d d . . . 
. . . . . d d d 1 1 d d d d d d 1 1 d d d . . . 
. . . . d d d d d 1 d d d d d d d 1 d d d . . . 
. . . . d d d d d 1 d d d d d d d 1 d d d . . . 
. . . . d d d d d 1 d d d d d d d d 1 d d . . . 
. . . . d d d d d 1 d d d d d d d d 1 d d . . . 
. . . . d d d d d 1 d d d d d d d d 1 d d . . . 
. . . . d d d d 1 d d d d d d d d d 1 d d d . . 
. . . . d d d 1 d d d d d d d d d d 1 d d d . . 
. . . . d d d 1 d d d d d d d d d d 1 d d d d . 
. . . . d d d 1 d d d d d d d d d d 1 d d d d . 
. . . d d d 1 d d d d d d d d d d d 1 d d d d d 
. . . d d d 1 d d d d d d d d d d d 1 d d d d d 
. . . d d 1 d d d d d d d d d d d d 1 d d d d d 
. . . d d 1 d d d d d d d d d d d d 1 d d d d d 
. . d d d d 1 d d d d d d d d d d d 1 d d d d d 
. . d d d d d 1 d d d d d d d d d 1 1 d d d d d 
. . d d d d d 1 1 d d d d d d 1 1 1 d d d d d d 
. . d d d d d d 1 d d d d d 1 1 d d d d d d d . 
. . d d d d d d 1 d d d d 1 1 d d d d d d d d . 
. . . d d d d d 1 d d d d 1 d d d d d d d d d . 
. . . d d d d d 1 d d d d 1 d d d d d d d . . . 
. . . d d d d d 1 d d d d 1 d d d d d d . . . . 
. . . . d d d d 1 d d d d 1 d d d d d . . . . . 
. . . . d d d d 1 d d d d 1 d d d d d d . . . . 
. . . . d d d d 1 d d d d d 1 d d d d d . . . . 
. . d d d d d d 1 d d d d d 1 d d d d d . . . . 
. . d d d d d d 1 d d d d d 1 1 d d d d d d . . 
. . d d d d d d 1 d d d d d d 1 d d d d d d . . 
. . d d d d d d 1 d d d d d d 1 d d d d d d . . 
. . d d d d d d 1 d d d d d d 1 d d d d d d . . 
. . . . d d d d 1 d d d d d d 1 d d d d d d . . 
. . . . d d d d 1 d d d d d d 1 d d d d . . . . 
. . . . d d d d 1 d d d d d d 1 d d d d . . . . 
. . . . d d d d d 1 d d d d d 1 d d d d . . . . 
. . . . d d d d d 1 d d d d d 1 d d d d . . . . 
. . . . d d d d d 1 d d d d d 1 d d d d . . . . 
. . . . d d d d d 1 d d d d d 1 d d d d . . . . 
. . . . d d d d d 1 d d d d d 1 d d d d . . . . 
. . . d d d d d d 1 d d d d d 1 d d d d d d d . 
. . d d d d d d d 1 d d d d d 1 d d d d d d d . 
. . d d d d d d d 1 d d d d d 1 d d d d d d d . 
. . d d d d d d d 1 d d d d d 1 d d d d d d d . 
. . d d d d d d d d 1 d d d d 1 d d d d d d d . 
. . d d d d d d d d 1 d d d d 1 d d d d d . . . 
. . d d d d d d d 1 d d d d d 1 d d d d d . . . 
. . d d d d d d d 1 d d d d d 1 1 d d d d . . . 
. . . d d d d d d 1 d d d d d d 1 d d d . . . . 
. . . d d d d d d 1 d d d d d d d 1 d d d . . . 
. . . d d d d d d 1 d d d d d d d 1 d d d . . . 
. . . d d d d d 1 1 d d d d d d d 1 d d d d . . 
. . . d d d d d 1 d d d d d d d d 1 d d d d . . 
. . . d d d d d 1 d d d d d d d d 1 d d d d . . 
. . d d d d d d 1 d d d d d d d d 1 d d d d . . 
. . d d d d d d 1 d d d d d d d d 1 d d d d . . 
. . d d d d d d 1 d d d d d d d 1 d d d d d . . 
. . . d d d d d 1 d d d d d . . . . . . . . . . 
. . . . d d d d 1 d d d . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a 1 1 1 a a a a a a 1 1 1 a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a a a a a a a a a a a a a a a . . . . 
. . . . a a a a a e e e e e e a a a a a . . . . 
. . . . a a a a a e e e e e e a a a a a . . . . 
. . . . a a a a a e e 5 e e 5 a a a a a . . . . 
. . . . a a a a a e e e e e e a a a a a . . . . 
`
    }
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
    info.changeScoreBy(1)
    if (info.score() >= 10) {
        score()
    }
    if (info.score() == 24) {
        win()
        game.over(true, effects.confetti)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    // Game will be over when the user its the building or
    // cloud
    game.over(false, effects.slash)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    // This will mve the plane
    Plane.vy = -50
})
// this will make our plane and sprite
function human2 () {
    // Makes the character who ges through this game.
    Plane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . b b b b b . . . . . . . 
b b b b 1 1 1 1 1 b . . . . . . 
5 5 1 b b 1 1 1 1 1 b . . . . . 
5 4 1 1 b b 1 1 1 1 1 b . . . . 
4 2 1 1 1 1 1 1 1 1 1 1 b . . . 
5 4 1 1 1 1 1 1 1 1 f 1 1 b . . 
5 5 1 1 1 1 1 1 1 1 1 1 b . . . 
b b b b b 1 1 1 1 1 b b . . . . 
. . . b 1 1 1 1 1 b . . . . . . 
. . . b 1 1 1 1 b . . . . . . . 
. . . . b b b b . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Plane.ay = 300
    Plane.say("Wow, thats a big cloud")
}
let projectile: Sprite = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let Plane: Sprite = null
let a_question = ""
begininng_()
question()
// These will call the blocks on the inside of the
// function
human2()
background()
game.onUpdateInterval(1500, function () {
    obstacles()
})
game.onUpdate(function () {
    // This will end the game in a loss for the user.
    if (Plane.bottom > 120 || Plane.top < 0) {
        game.over(false)
    }
})
