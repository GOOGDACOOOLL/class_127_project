song_1 = ""
song_2 = ""
function preload(){
    song_1 = loadSound("candyland.mp3")
    song_2 = loadSound("traveling time.mp3")
}
function setup(){
    canvas = createCanvas("600", "450")
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 0, 0, 350, 450)
}