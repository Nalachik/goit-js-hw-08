import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const TimeStorege_key = "videoplayer-current-time";

const saveCurrentTime = ({ seconds }) => localStorage.setItem(TimeStorege_key, `${seconds}`);
const throttledCurrentTime = throttle(saveCurrentTime, 1000);

player.on('timeupdate', throttledCurrentTime);

    const currentTime = localStorage.getItem(TimeStorege_key);


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