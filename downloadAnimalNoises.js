/*
** Script for download all animal noises from google.
**
** 1) Go to google.com and search: 'animal noises'.
** 2) Open console, copy and paste this code.
** 3) Run it!
*/
var CLASS_CONTAINER = 'ZfSAad';
var CLASS_ITEM = 'm6cn6';
var CLASS_NAME = 'b3CYFf';
var TIME_STEP = 1000;

var downloadAudio = ({ url, name }) => {
    var link = document.createElement("a");
    link.download = 'a_' + name;
    link.href = url;
    link.click();
}

var getData = (item) => {
    const name = item.getElementsByClassName(CLASS_NAME)[0].innerHTML;
    const url = item.querySelector('audio').getAttribute('src');
    return {
        url,
        name,
    }
}

var downloadAll = (array = []) => {
    var time = 0;
    array.forEach(function(item){
        let insideTime = time;
        setTimeout(() => {
            downloadAudio(item);
        }, insideTime);
        time += TIME_STEP;
    });
}

var images = Array.from(document.getElementsByClassName(CLASS_CONTAINER)[0].getElementsByClassName(CLASS_ITEM)).map(getData);

downloadAll(images);
