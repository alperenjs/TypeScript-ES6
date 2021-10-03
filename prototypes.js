var Track = function (params) {
    this.name = params.name;
    this.url = params.url;;

    // this.playTrack = function() {
    //     console.log(`We started playing ${this.name}`);
    // }
}

Track.prototype.playTrack = function() {
    console.log(`We started playing ${this.name}`);
}

var track01 = new Track({
    name: "track01",
    url: "track01.mp3"
})

track01.playTrack();