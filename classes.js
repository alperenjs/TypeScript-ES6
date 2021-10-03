class Track {
    constructor(params) {
        this.name = params.name;
        this.url = params.url;
    }

    playTrack() {
        console.log(`We started playing ${this.name}`);
    }
};


class YoutubeTrack extends Track {
    constructor(params){
        super(params);
        this.image = params.image; // additional property to YoutubeTrack class
    }
    runYoutubeImage() {
        console.log(`youtube img is: ${this.image}`);
    }
}; //inheritance from Track

const track01 = new Track({
    name: "track01",
    url: "track01.mp3"
})

const youtubeTrack01 = new YoutubeTrack({
    name: "youtubetrack01",
    url: "youtubetracker01.mp3",
    image: "youtubecover.png"
})

track01.playTrack();
youtubeTrack01.runYoutubeImage();



