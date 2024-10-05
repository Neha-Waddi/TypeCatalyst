const input = ['John played guitar at the lively concert', 'entertaining the enthusiastic audience', 'Underneath the shady tree', 'the children joyfully played their favorite games', 'A colorful parrot chattered', 'perched on the old', 'weathered wooden fence nearby', 'The adventurous explorer discovered ancient artifacts while trekking through the mysterious jungle', 'In the serene meadow', 'butterflies gracefully danced around vibrant wildflowers', 'With utmost precision', 'the artisan crafted delicate', 'intricate patterns on fine porcelain', 'Every morning', 'the diligent farmer tended to his bountiful fields of crops', 'During the tranquil sunset', 'waves gently caressed the sandy', 'deserted beach', 'The curious astronomer observed distant galaxies through a powerful telescope', 'Beside the babbling brook', 'a quaint cottage stood surrounded by lush greenery', 'In the bustling marketplace', 'vendors enthusiastically displayed their colorful wares for sale', 'As the day unfolded', 'the diligent student absorbed knowledge from diverse subjects', 'Beneath the moonlit sky', 'nocturnal creatures emerged', 'creating a mysterious ambiance', 'Amidst the urban chaos', 'a hidden garden bloomed with fragrant blossoms', 'With a graceful leap', 'the nimble cat effortlessly cleared the tall fence', 'As the seasons changed', 'trees transformed', 'shedding leaves in vibrant autumn hues', 'Within the cozy bookstore', 'readers immersed themselves in captivating tales and adventures', 'Upon the mountain summit', 'an ancient monastery offered breathtaking views of the landscape', 'The meditative yogi practiced mindfulness', "finding inner peace amidst life's challenges", 'Captivated by the enchanting melody', 'the audience swayed to the rhythmic tunes', 'As dawn approached', 'the diligent baker prepared fresh', 'aromatic loaves of bread', 'Deep in the enchanted forest', 'magical creatures frolicked in the moonlight', 'With a triumphant smile', 'the persistent hiker reached the challenging peak', 'Amidst the lively chatter', 'friends gathered for a delightful evening of camaraderie', 'In the bustling city', 'commuters hurriedly navigated crowded streets', 'eager to reach destinations', 'As twilight descended', 'the cityscape transformed into a twinkling panorama of lights', 'At the annual fair', 'children gleefully indulged in sugary treats and carnival games', 'Underneath the starry sky', 'a crackling bonfire illuminated the campground', 'casting shadows', 'Between the ancient ruins', 'archaeologists unearthed artifacts that revealed a rich history', 'The diligent scientist conducted experiments', 'unraveling mysteries of the natural world', 'Beneath the cherry blossom tree', 'a couple shared a romantic picnic', 'Within the cozy cabin', 'a crackling fireplace provided warmth on chilly nights', 'As the storm raged', 'resilient flowers bowed but stood tall after', 'Guided by constellations', 'ancient sailors navigated vast oceans with skill', 'In the vibrant marketplace', 'artisans proudly displayed handcrafted treasures', 'Atop the rocky cliffs', 'a lone eagle soared', 'surveying the expansive landscape', 'During the golden hour', 'photographers captured breathtaking scenes of the sunset', 'In the lush meadow', 'a rainbow arched gracefully', 'adding magic to nature', 'The diligent bee buzzed', 'collecting nectar from flowers in the sunlit garden', 'Near the babbling brook', 'a charming cottage nestled', "surrounded by nature's serenity", 'With every brushstroke', 'the artist expressed emotions on the blank canvas', 'Within the serene monastery', 'monks practiced meditation', 'seeking enlightenment', 'Beneath the ancient oak', 'a storyteller captivated the audience with mythical tales', 'In the coastal village', 'fishermen shared tales of the sea around crackling bonfires', 'Atop the mountain peak', 'a solitary pine tree stood against the vast sky', 'With rhythmic precision', 'dancers moved gracefully', "interpreting the music's emotions", 'In the bustling bazaar', 'merchants enthusiastically bartered over exotic spices and textiles', 'During the harvest season', 'farmers reaped the rewards of their hard work', 'Beside the tranquil pond', 'a weeping willow tree cast a calming reflection', 'At the rustic farmhouse', 'a family gathered for a festive', 'home-cooked meal', 'Within the hidden garden', 'fragrant herbs thrived', 'filling the air with aromatic scents', 'As daylight waned', 'fireflies emerged', 'creating a mesmerizing display in the twilight', 'In the cozy attic', 'forgotten treasures revealed tales of generations past', 'Along the winding river', 'a rowboat glided', "leaving ripples on the water's surface", 'As night fell', 'the city skyline sparkled with a myriad of lights', 'At the heart of the forest', 'an ancient tree served as a natural landmark', 'With unwavering determination', 'the marathon runner crossed the finish line triumphantly', 'In the bustling metropolis', 'skyscrapers reached for the sky', 'defining the urban landscape', 'Within the vibrant ecosystem', 'a delicate butterfly fluttered', 'pollinating colorful flowers', 'Beside the roaring waterfall', 'a hidden cave concealed ancient cave paintings', 'Amidst the vast desert', 'nomads traversed the dunes', 'guided by the North Star', 'In the quaint village', 'laughter echoed through cobblestone streets during the festival', 'Along the sunlit path', 'a stream meandered', 'creating a soothing melody', 'Atop the hill', 'a lone tree silhouetted against the twilight sky', 'Beneath the clear night sky', 'astronomers marveled at distant constellations', 'With a gentle breeze', 'cherry blossoms danced', 'creating a picturesque scene', 'As winter approached', 'a blanket of snow transformed the landscape into a serene canvas', 'In the meandering labyrinth', 'explorers discovered hidden chambers filled with ancient artifacts', 'Upon the stage', 'actors portrayed characters', 'bringing stories to life with passion', 'In the vibrant meadow', 'a kaleidoscope of butterflies fluttered', 'enhancing the scenery', 'As the river flowed', 'a wooden bridge connected two picturesque', 'riverside villages', 'Underneath the ancient archway', 'a cobblestone path led to a secret garden', 'Within the buzzing hive', 'bees diligently worked', 'creating honey from flower nectar', 'As the storm subsided', 'a rainbow emerged', 'painting the sky with vibrant colors', 'In the peaceful orchard', 'fruit trees bore the promise of a bountiful harvest', 'Amidst the ocean waves', 'surfers rode exhilarating swells', 'mastering the art', 'With each brushstroke', 'the mural artist transformed a blank wall into a masterpiece', 'At the mountaintop observatory', 'astronomers peered into the cosmos', 'unraveling celestial mysteries', 'In the bustling kitchen', 'chefs orchestrated a symphony of flavors', 'creating culinary delights', 'Among the ancient ruins', 'archaeologists deciphered hieroglyphics', 'revealing stories of an ancient civilization', 'With a graceful leap', 'the ballet dancer twirled', 'enchanting the audience with fluid movements', 'Beside the tranquil pond', 'koi fish glided through the water', 'creating ripples', 'Within the historical library', 'scholars delved into ancient manuscripts', 'uncovering forgotten knowledge', 'As dawn broke', 'the city awoke to the sounds of bustling streets and chirping birds', 'Atop the medieval tower', 'a flag fluttered in the breeze', 'symbolizing victory', 'In the vibrant carnival', 'carousel music played as children gleefully rode colorful horses', 'As the sun set', 'silhouettes of palm trees adorned the tropical horizon', 'Along the cobblestone streets', 'street vendors sold aromatic spices and local delicacies', 'With determination', 'the young athlete sprinted towards the finish line', 'breaking records', 'As autumn leaves fell', 'the forest floor became a mosaic of vibrant hues', 'In the bustling port'];
function calculate() {
    if (document.getElementById("inputbox").value == document.getElementById("typebox").value) {
        val = document.getElementById("inputbox").value;
        document.getElementById("score").value = ((val.split(' ').length - 1) / (parseInt(document.getElementById("timer").value.substring(3, document.getElementById("timer").value.length - 1)))) * 60;
    }
    else {
        document.getElementById("score").value = 'wrong';
    }
}

let lastKeyPressed = null;
function handleKeyPress(event) {
    const currentKeyPressed = event.key;
    if (lastKeyPressed == null) {
        lastKeyPressed = currentKeyPressed;
    }
    if (event.key == 'Enter') {
        if (lastKeyPressed != 'Tab') {
            calculate();
        }
    }
    lastKeyPressed = currentKeyPressed;
}


function getele() {
    const rand = Math.floor(Math.random() * input.length);
    document.getElementById('inputbox').value = input[rand];
}

function setnull() {
    moveCursor();
    getele();
    start();
    document.getElementById("score").value = '';
    document.getElementById('typebox').value = '';
}

function moveCursor() {
    document.getElementById('typebox').focus();
}

var timer;
var duration = 60;

function start() {
    if (document.getElementById("typebox").value == '') {

        moveCursor()
        clearInterval(timer);

        duration = 60;

        timer = setInterval(function () {

            var min = Math.floor(duration / 60);
            var sec = duration % 60;

            if (min < 10) {
                min = "0" + min;
            }
            if (sec < 10) {
                sec = "0" + sec;
            }

            document.getElementById("timer").value = min + ":" + sec;

            if (--duration < 0) {
                clearInterval(timer);
                document.getElementById("timer").value = "00:00";
                duration = 60;

            }
        }, 1000);
    }
}

window.onload = getele();
window.onload = moveCursor();
window.onload = document.getElementById('typebox').onkeyup = handleKeyPress;
window.onload = document.getElementById('typebox').onkeydown = handleKeyPress;


