window.onload = () =>{
    const song_img_el = document.getElementById('song-image');
    const song_title_el = document.getElementById('song-title');
    const song_next_el = document.getElementById('next-up');
    const audio_player = document.getElementById('music-player');
    
    const play_btn = document.getElementById('play-btn');
    const play_btn_icon = document.getElementById('play-icon');
    const prev_btn = document.getElementById('skip-prev');
    const next_btn = document.getElementById('skip-next');

    let songs = [
        {
            title: 'Hacking to the Gate',
            song_path: 'src/hacking to the gate.mp3',
            img_path: 'src/hacking to the gate.jpg',
        },
        {
            title: 'Gate of Steiner (Vocals)',
            song_path: 'src/gate of steiner (vocals).mp3',
            img_path: 'src/gate of steiner (vocals).jpg',
        },
        {
            title: 'Cosmic Looper',
            song_path: 'src/cosmic looper.mp3',
            img_path: 'src/cosmic looper.jpg',
        },
        {
            title: 'Gate of Steiner (Re-awake)',
            song_path: 'src/re-awake.mp3',
            img_path: 'src/re-awake.jpg',
        },
        {
            title: 'Gate of Steiner (Piano)',
            song_path: 'src/gate of steiner (piano).mp3',
            img_path: 'src/gate of steiner (piano).jpg',
        },
        {
            title: 'Hacking to the Gate (Eng)',
            song_path: 'src/hacking to the gate (eng).mp3',
            img_path: 'src/hacking to the gate (eng).jpg',
        },
        {
            title: 'Steins; Gate - Fatima',
            song_path: 'src/sg 0 opening.mp3',
            img_path: 'src/sg 0 opening.jpg',
        },
        {
            title: 'Gate of Steiner',
            song_path: 'src/gate of steiner.mp3',
            img_path: 'src/gate of steiner.png',
        },
        {
            title: 'Steins; Gate - Amadeus',
            song_path: 'src/amadeus.mp3',
            img_path: 'src/amadeus.jpg',
        },
        {
            title: 'Believe Me',
            song_path: 'src/believe me.mp3',
            img_path: 'src/believe me.jpg',
        },
        {
            title: 'Skyclad No Kansokusha',
            song_path: 'src/Skyclad.mp3',
            img_path: 'src/Skyclad.jpg',
        },
        {
            title: 'Sad Mayuri',
            song_path: 'src/sadness.mp3',
            img_path: 'src/sadness.jpg',
        },
        {
            title: 'Itsumo Kono Basho de',
            song_path: 'src/reunion.mp3',
            img_path: 'src/reunion.jpg',
        },
        {
            title: 'Steins; Gate - Fatima (Eng)',
            song_path: 'src/sg 0 opening (eng).mp3',
            img_path: 'src/sg 0 opening (eng).jpg',
        },
        {
            title: 'Last Game',
            song_path: 'src/sg 0 ending.mp3',
            img_path: 'src/sg 0 ending.jpg',
        },
        {
            title: 'Anata No Eranda Kono Toki Wo',
            song_path: 'src/movie opening.mp3',
            img_path: 'src/movie opening.png',
        },
        {
            title: 'Steins; Gate 0 (Asami Imai)',
            song_path: 'src/sg 0 ending 2.mp3',
            img_path: 'src/sg 0 ending 2.png',
        },
        {
            title: 'Toki Tsukasadoru Juuni no Meiyaku',
            song_path: 'src/sg ending.mp3',
            img_path: 'src/sg ending.jpg',
        },
        {
            title: 'Lyra (Zwei)',
            song_path: 'src/lyra.mp3',
            img_path: 'src/lyra.jpg',
        }
    ]

    let cur_song_ind;
    let next_song_ind;

    play_btn.addEventListener('click', toggle);
    next_btn.addEventListener('click', () => changeSong());
    prev_btn.addEventListener('click', () => changeSong(false));
    audio_player.addEventListener('ended', () => changeSong());

    InitPlayer();

    function InitPlayer(){
        cur_song_ind = 0;
        next_song_ind = cur_song_ind + 1;
        UpdatePlayer();
    }

    function UpdatePlayer(){
        let song = songs[cur_song_ind];
        song_img_el.src = song.img_path;
        song_title_el.innerText = song.title;
        song_next_el.innerText = songs[next_song_ind].title;

        audio_player.src = song.song_path;
    }

    function toggle()
    {
        if(audio_player.paused){
            audio_player.play();
            play_btn_icon.classList.remove('fa-play');
            play_btn_icon.classList.add('fa-pause');
        }
        else{
            audio_player.pause();
            play_btn_icon.classList.add('fa-play');
            play_btn_icon.classList.remove('fa-pause');
        }
    }

    function changeSong(next = true){
        if(next){
            cur_song_ind++;
            if(cur_song_ind > songs.length - 1){
                cur_song_ind = 0;
            }
            next_song_ind = cur_song_ind + 1;
            if(next_song_ind > songs.length - 1){
                next_song_ind = 0;
            }
        }
        else{
            cur_song_ind--;
            next_song_ind = cur_song_ind + 1;
            if(cur_song_ind < 0){
                cur_song_ind = songs.length - 1;
                next_song_ind = 0;
            }
        }
        UpdatePlayer();
        toggle();
    }   
} 