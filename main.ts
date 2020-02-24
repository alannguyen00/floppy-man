sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.slash)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    Goku.vy = -35
})
function human () {
    // Makes the character who ges through this game.
    Goku = sprites.create(img`
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
    Goku.ay = 300
}
let projectile: Sprite = null
let bottomImage: Image = null
let topImage: Image = null
let gap = 0
let Goku: Sprite = null
game.splash("Help Boku through the forest to get to his prize! ")
human()
scene.setBackgroundColor(6)
game.onUpdateInterval(1500, function () {
    gap = Math.randomRange(0, 3)
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
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . d d d d d d d d d d d d d d d d d d . . . 
. . d d d d d d d d d d d d d d d d d d d d . . 
. . d d d d d d d d d d d d d d d d d d d d . . 
. . d d d d d d d d d d d d d d d d d d d d . . 
. . . . . d d d d d d d d d d d d d d d d . . . 
. . . . . d d d d d d d d d d d d d d d d . . . 
. . . . . d d d d d d d d d d d d d d d . . . . 
. . . . . d d d d d d d d d d d d d d . . . . . 
. . . . . d d d d d d d d d d d d d d . . . . . 
. . . . . d d d d d d d d d d d d d d . . . . . 
. . . . . d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. . . . d d d d d d d d d d d d d d d . . . . . 
. b d d d d d d d d d d d d d d d d d d d d . . 
. b d d d d d d d d d d d d d d d d d d d d . . 
. b d d d d d d d d d d d d d d d d d d d d . . 
. b d d d d d d d d d d d d d d d d d d d . . . 
. . b d d d d d d d d d d d d d d d d d . . . . 
. . b d d d d d d d d d d d d d d d d . . . . . 
. . b d d d d d d d d d d d d d d d . . . . . . 
. . b d d d d d d d d d d d d d d d . . . . . . 
. . b d d d d d d d d d d d d d d d . . . . . . 
. . b d d d d d d d d d d d d d d d d . . . . . 
. . b d d d d d d d d d d d d d d d d . . . . . 
. . b d d d d d d d d d d d d d d d d . . . . . 
. . b d d d d d d d d d d d d d d d d d . . . . 
. b b d d d d d d d d d d d d d d d d d . . . . 
b d d d d d d d d d d d d d d d d d d d d d . . 
b d d d d d d d d d d d d d d d d d d d d d . . 
b d d d d d d d d d d d d d d d d d d d d d . . 
. b b b d d d d d d d d d d d d d d . . . . . . 
. . . . b d d d d d d d d d d d d d . . . . . . 
. . . . . b d d d d d d d d d d d d . . . . . . 
. . . . . b d d d d d d d d d d d d . . . . . . 
. . . . . b d d d d d d d d d d d d . . . . . . 
. . . . . b d d d d d d d d d d d d . . . . . . 
. . . . . b d d d d d d d d d d d d . . . . . . 
. . . . . b d d d d d d d d d d d d . . . . . . 
. . . . . b d d d d d d d d d d d d . . . . . . 
. . . . . . b d d d d d d d d d d . . . . . . . 
. . . . . . b b d d d d d d d d . . . . . . . . 
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
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . 1 f b d d b b b b d d b c 1 . . . . . 
. . . . . 1 1 f f b d d d d b c c 1 1 . . . . . 
. . . . . 1 1 1 1 f f c c c c 1 1 1 . . . . . . 
. . . . . c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . f 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . c c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . 6 f c 1 1 1 1 1 1 1 1 1 1 6 . . . . . 
. . . . 6 9 9 6 1 1 1 1 1 1 1 1 1 6 9 6 . . . . 
. . . 6 9 9 9 6 6 6 1 1 1 1 6 6 6 6 9 9 6 . . . 
. . 6 9 9 6 8 1 6 9 9 6 6 9 9 9 6 6 9 9 9 6 . . 
. . . 6 6 8 1 1 9 9 6 8 8 6 9 9 8 8 6 6 6 . . . 
. . . . . . 1 1 9 9 1 1 1 1 9 9 1 c 1 1 . . . . 
. . . . . . 1 1 6 1 1 1 1 1 1 6 1 1 f . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 c f . . . . . 
. . . . . . c 1 1 1 1 1 1 1 1 1 1 c f . . . . . 
. . . . . . c 1 1 1 1 1 1 1 1 1 1 f f . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 1 f 1 . . . . . 
. . . . . 6 f 1 1 1 1 1 1 1 1 1 1 f 6 . . . . . 
. . . . 6 9 9 6 1 1 1 1 1 1 1 1 1 6 9 6 . . . . 
. . . 6 9 9 9 6 6 6 1 1 1 1 6 6 6 9 9 9 6 . . . 
. . 6 9 9 6 1 1 6 9 9 9 9 9 9 9 6 6 9 9 9 6 . . 
. . . 6 6 8 1 1 9 9 6 8 8 6 9 9 8 8 6 6 6 . . . 
. . . . . . 1 1 9 9 1 1 1 1 6 9 1 1 . . . . . . 
. . . . . . 1 1 6 1 1 1 1 1 1 6 c 1 . . . . . . 
`
    } else {
        topImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . 1 f b d d b b b b d d b c 1 . . . . . 
. . . . . 1 1 f f b d d d d b c c 1 1 . . . . . 
. . . . . 1 1 1 1 f f c c c c 1 1 1 . . . . . . 
. . . . . c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . f 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . c c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . 6 f c 1 1 1 1 1 1 1 1 1 1 6 . . . . . 
. . . . 6 9 9 6 1 1 1 1 1 1 1 1 1 6 9 6 . . . . 
. . . 6 9 9 9 6 6 6 1 1 1 1 6 6 6 6 9 9 6 . . . 
. . 6 9 9 6 8 1 6 9 9 6 6 9 9 9 6 6 9 9 9 6 . . 
. . . 6 6 8 1 1 9 9 6 8 8 6 9 9 8 8 6 6 6 . . . 
. . . . . . 1 1 9 9 1 1 1 1 9 9 1 c 1 1 . . . . 
. . . . . . 1 1 6 1 1 1 1 1 1 6 1 1 f . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 1 c f . . . . . 
. . . . . . c 1 1 1 1 1 1 1 1 1 1 c f . . . . . 
. . . . . . c 1 1 1 1 1 1 1 1 1 1 f f . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 1 f 1 . . . . . 
. . . . . 6 f 1 1 1 1 1 1 1 1 1 1 f 6 . . . . . 
. . . . 6 9 9 6 1 1 1 1 1 1 1 1 1 6 9 6 . . . . 
. . . 6 9 9 9 6 6 6 1 1 1 1 6 6 6 9 9 9 6 . . . 
. . 6 9 9 6 1 1 6 9 9 9 9 9 9 9 6 6 9 9 9 6 . . 
. . . 6 6 8 1 1 9 9 6 8 8 6 9 9 8 8 6 6 6 . . . 
. . . . . . 1 1 9 9 1 1 1 1 6 9 1 1 . . . . . . 
. . . . . . 1 1 6 1 1 1 1 1 1 6 c 1 . . . . . . 
. . . . . . 1 1 f 1 1 1 1 1 1 1 c 1 . . . . . . 
. . . . . . 1 1 c 1 1 1 1 1 1 1 c 1 . . . . . . 
. . . . . . 1 1 c 1 1 1 1 1 1 1 f 1 . . . . . . 
. . . . . . 1 1 c 1 1 1 1 1 1 1 f 1 . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 f 1 . . . . . . 
. . . . . . 1 1 1 1 1 1 1 1 1 1 c 1 . . . . . . 
. . . . . 6 1 1 1 1 1 1 1 1 1 1 c 1 6 . . . . . 
. . . . 6 9 9 6 1 1 1 1 1 1 1 1 1 6 9 6 . . . . 
. . . 6 9 9 6 6 6 6 1 1 1 1 6 9 6 6 9 9 6 . . . 
. . 6 9 9 6 1 1 9 9 9 9 9 9 9 9 6 6 9 9 9 6 . . 
. . . 6 6 8 c 1 9 9 6 8 8 6 9 9 8 8 6 6 6 . . . 
. . . . . . c 1 9 9 1 1 1 1 6 9 1 1 . . . . . . 
. . . . . . c 1 6 1 1 1 1 1 1 6 1 1 . . . . . . 
. . . . . . c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . f c c 1 1 1 1 1 1 c 1 1 . . . . . . 
. . . . . . f c c c 1 1 1 c 1 c c 1 . . . . . . 
. . . . . . f c c 1 1 1 c c 1 c c c . . . . . . 
. . . . . . f c c c 1 1 c c 1 c c c . . . . . . 
. . . . . . f c c c c c 1 c 1 1 c c . . . . . . 
. . . . . 6 f c c c c c c c c c c f 6 . . . . . 
. . . . 6 9 9 6 c c c c c c c c c 6 9 6 . . . . 
. . . 6 9 9 6 6 9 6 c c c c 6 9 6 6 9 9 6 . . . 
. . 6 9 9 6 c c 9 9 9 9 9 9 9 9 6 6 9 9 9 6 . . 
. . . 6 6 8 c c 9 9 6 8 8 6 9 9 8 8 6 6 6 . . . 
. . . . . . c c 9 9 c c c c 6 9 c f . . . . . . 
. . . . . . c c 6 c c c c c c 6 c f . . . . . . 
`
        bottomImage = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . 1 f b d d b b b b d d b c 1 . . . . . 
. . . . . 1 1 f f b d d d d b c c 1 1 . . . . . 
. . . . . 1 1 1 1 f f c c c c 1 1 1 . . . . . . 
. . . . . c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . c 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . f 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . c c 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
. . . . . 6 f c 1 1 1 1 1 1 1 1 1 1 6 . . . . . 
. . . . 6 9 9 6 1 1 1 1 1 1 1 1 1 6 9 6 . . . . 
. . . 6 9 9 9 6 6 6 1 1 1 1 6 6 6 6 9 9 6 . . . 
. . 6 9 9 6 8 1 6 9 9 6 6 9 9 9 6 6 9 9 9 6 . . 
. . . 6 6 8 1 1 9 9 6 8 8 6 9 9 8 8 6 6 6 . . . 
. . . . . . 1 1 9 9 1 1 1 1 9 9 1 c 1 1 . . . . 
. . . . . . 1 1 6 1 1 1 1 1 1 6 1 1 f . . . . . 
`
    }
    projectile = sprites.createProjectileFromSide(topImage, -45, 0)
    projectile.top = 0
    projectile = sprites.createProjectileFromSide(bottomImage, -45, 0)
    projectile.bottom = scene.screenHeight()
    info.changeScoreBy(1)
})
game.onUpdate(function () {
    if (Goku.bottom > 120 || Goku.top < 0) {
        game.over(false)
    }
})
