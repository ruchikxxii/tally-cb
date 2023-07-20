import Image from 'next/image';
const classes = require('../styles/home_test.module.css')
const ninja_img1 = require('../assets/ninja.jpg')
const ninja_img2 = require('../assets/ninjas.jpg')

const Home =  () => {
    return (
        <div class={classes['homepage']}>
            <h1 class="text-white font-extrabold text-6xl ">Choose a mode</h1>
            <div class={classes['modes']}>
                <div class={classes['mode']}>
                    <Image src={ninja_img1} width="200" style={{borderRadius:100,margin:50}}/>
                    <button class="text-white font-extrabold text-6xl">Practice</button>
                </div>
                <div class={classes['mode']}>
                    <Image src={ninja_img2} width="200" style={{borderRadius:100,margin:50}}/>
                    <button class="text-white font-extrabold text-6xl">Multiplayer</button>
                </div>
            </div>
        </div>
    );
}

export default Home;