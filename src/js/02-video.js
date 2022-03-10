import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const Time_key = "videoplayer-current-time";

const saveCurrentTime = ({ seconds }) => localStorage.setItem(Time_key, `${seconds}`);
const throttledCurrentTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttledCurrentTime);

    const currentTime = localStorage.getItem(Time_key);


player.setCurrentTime(currentTime).then(function(seconds) {
	
     seconds = currentTime;

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});