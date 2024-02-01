const AUDIO = {
    cat: new Audio('./chaewon-caat.mp3'),
    eww: new Audio('./chaewon-library_eww.mp3'),
    fall: new Audio('./chaewon-library_fall.mp3'),
    fear: new Audio('./chaewon-library_fear.mp3'),
    hea: new Audio('./chaewon-library_heeeaa.mp3'),
    hein: new Audio('./chaewon-library_heeeein.mp3'),
    meh: new Audio('./chaewon-library_mehhhh.mp3'),
    papan: new Audio('./chaewon-library_papann.mp3'),
    itgirl: new Audio('./it-girl.mp3'),
    panty: new Audio('./lesserafimpanty.mp3'),
    dodok: new Audio('./dododok_dok.mp3')

    };

    function play(soundName) {
        if (AUDIO.hasOwnProperty(soundName)) {
            AUDIO[soundName].play();
        } else {
            console.error('Sound not found:', soundName);
        }
    }