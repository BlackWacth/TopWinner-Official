<script setup>
import AboutUs from './AboutUs.vue'


</script>

<template>
    <div class="container">
        <div class="topFirst"></div>  
        <div class="topSecond"></div>
        <img class="moneyIcon" src="../assets/image/ic_money.png"/>
        <img class="topWinner" src="../assets/image/ic_top_winner.png"/>
        <img class="phone" src="../assets/image/ic_phone.png"/>
        <img class="game" src="../assets/image/ic_game.png"/>
        <img class="allGames" src="../assets/image/ic_all_games.png"/>

        <div class="firstTextLayout">
            <h3>Try Our Top Games for Non-Stop Fun</h3>
            <p>Tapwinner the ultimate all-in-one gaming platform. Our online web game is exclusively available for mobile browsers. You can browse games online free to play and look for fun games to download.</p>
            <h3>Why play free casual competitive games on TAPPINNER?</h3>
            <p>Play popular skill based games for free on TapWinner and experience the thrill of paying real money. You can also enjoy the best and coolest mobile games of 2023 and join the ranks of skilled players. Take a look at our users' experience reviews in TapWinner!</p>
            <h5>PEOPLE SAID</h5>
        </div>

        <div class="secondTextLayout">
            <div class="oneLineLayout">
                <img
                    class="imageOne"
                    referrerpolicy="no-referrer"
                    src="../assets/image/ic_man.png"/>

                <div class="oneTextLayout">
                    <h1 class="oneTitle">Always fresh, always interesting</h1>
                    <p class="oneContent">I have been playing TapWinner for a while and have always loved games and applications! About a month ago, the application underwent a huge and amazing update, and I love all the changes! There is now a ranking system that pays cash based on rankings, and a new ticket system that offers rewards in exchange for tickets.<br /><br />Stacy C joined 05/02/2019</p>
                </div>
            </div>
            <div class="oneLine"></div>
            <div class="twoLineLayout">
                <div class="twoTextLayout">
                    <h1 class="twoTitle">Easy navigation and unlimited excitement</h1>
                    <p class="twoContent">Completely addicted to this application! It is easy to navigate, and designers are always introducing new tasks and challenges. Also, for example, how many methods do I have to win money or play lottery. The new option of paying with tickets is a great addition.<br /><br />Bagelslinger joined on May 28, 2019</p>
                </div>
                <img
                    class="imageTwo"
                    referrerpolicy="no-referrer"
                    src="../assets/image/ic_woman.png"/>
            </div>
            <div class="twoLine"></div>
            <div class="threeLineLayout">
                <img
                    class="imageThree"
                    referrerpolicy="no-referrer"
                    src="../assets/image/ic_old_man.png"/>

                <div class="threeTextLayout">
                    <h1 class="threeTitle">Real rewards, easy to get started</h1>
                    <p class="threeContent">I would like to say that Tap Winner is one of the applications I use the most on my phone. There are Instagram, Facebook (especially Marketplace) and Tiktok. To be honest, it's like the game they play, except that I can win money! Speaking of tournaments, this may be my favorite and also a curse. You will receive all the bonuses from your fixed deposit, and occasionally you will also receive some good small prizes. Give it a try!<br /><br />Chaerithecatty joined on September 13, 2021</p>
                </div>
            </div>
        </div>

        <div class="thirdTextLayout">
            <h1>Want to play a game that pays real gold and silver?</h1>
            <p>Are you looking for money making games? Unlock your gaming potential and win real gold and silver with our selected best games!</p>
            <p>Don't waste time on unpaid games. With the rise of mobile technology, there are now many options to play casual competitive games directly from smartphones or tablets. But not all applications are fair. If you are interested in earning real money, it is important to choose a money making game application that provides legal and secure options to cash in on your bonuses.</p>
            ​<p>TapWinner is a popular option for casual competitive gaming applications that pay real money. Our application offers a series of games that are not only interesting and addictive, but also provide opportunities to win real gold and silver. From classic card games such as Blackjack and Poker, to exciting new games such as Marble Explosion and 8-ball Pool, and more.</p>
            <p>What are you waiting for? Start playing our legitimate money making game and get paid today!</p>
        </div>

        <div class="fourthTextLayout">
            <h1>Real Cash Game: A Leisure Competitive Game Application that Pays Real Gold and Silver</h1>
            <p>To start, simply download the application from the app store and create an account. You can start the competition immediately and even earn bonuses by registering.</p>
            <p>When you are ready to cash out your bonus, tapwinner can easily transfer funds to your PayPal account or other preferred payment method.</p>
            <p>But TapWinner is not the only casual competitive game application that pays real money. There are many other options in both the app store and browser, so it is important to study and choose the application that suits you.</p>
            <p>Please remember, when playing free games with real gold and silver, it is important to always play responsibly and never take risks beyond your ability.</p>
            <p>Discover leisure competitive game applications that match your interests and receive insider tips on how to win with us. You will be the next big winner! Explore and download free games now.</p>
        </div>

        <img class="cashBattle" src="../assets/image/ic_cash_battle.png"/>
    
        <div class="lastLine"></div>

        <div class="bottomLayout">
            <div class="bottomOneLayout">
                <div>
                    <router-link to="/about">About Us</router-link>
                </div>
                <div>
                    <router-link to="/privacyPolicy">Privacy Policy.</router-link>
                </div>
                <div>
                    <router-link to="/about">Terms of Service</router-link>
                </div>
            </div>

            <div class="bottomTwoLayout">
                <div>Contact Us</div>
                <div>Player FAQ</div>
            </div>

            <div class="bottomThreeLayout">
                <img src="../assets/image/ic_app_store.png"/>
                <img src="../assets/image/ic_google_play.png"/>
            </div>
        </div>

    </div>
</template>

<style scoped>
.bottomThreeLayout {
    display: flex;
    flex-flow: column;
}

.bottomThreeLayout img:nth-of-type(2) {
    margin-top: 30px;
}
.bottomTwoLayout div {
    font-size: 22px;
    font-weight: 400;
    color: #C9CACA;
}
.bottomTwoLayout div:nth-of-type(2) {
    margin-top: 30px;
}

.bottomOneLayout div {
    font-size: 22px;
    font-weight: 400;
    color: #C9CACA;
}
.bottomOneLayout div:nth-of-type(2) {
    margin-top: 30px;
}

.bottomOneLayout div:nth-of-type(3) {
    margin-top: 30px;
}

.bottomLayout {
    display: flex;
    width: 70%;
    flex-flow: row;
    justify-content: space-between;
    position: absolute;
    top: 94%;
}

.lastLine {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #FFFFFF;
    top: 92.5%;
}

.cashBattle {
    position: absolute;
    top: 84%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 946px;
    height: 1126px;
}

.fourthTextLayout {
    position: absolute;
    top: 71%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
}

.fourthTextLayout h1 {
    font-size: 31px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
}

.fourthTextLayout p {
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1.5;
    margin-top: 40px;
}

.thirdTextLayout {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
}

.thirdTextLayout h1 {
    font-size: 36px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: center;
}

.thirdTextLayout p {
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1.5;
    margin-top: 40px;
}

.twoLine {
    width: 100%;
    height: 2px;
    background-color: #C9CACA;
    margin-top: 75px;
}
.imageTwo {
    width: 298px;
    height: 264px;
}

.threeLineLayout {
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin-top: 75px;
}

.twoLineLayout {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    margin-top: 75px;
}

.imageTwo {
    width: 230px;
    height: 246px;
}

.secondTextLayout {
    position: absolute;
    top: 44%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
}

.secondTextLayout h1 {
    overflow-wrap: break-word;
    color: #595757;
    font-size: 30px;
    font-family: Arial-Black;
    font-weight: 700;
    text-align: justifyLeft;
    white-space: nowrap;
    line-height: 30px;
}
.secondTextLayout p {
    overflow-wrap: break-word;
    color: #595757;
    font-size: 22px;
    font-family: NotoSansHans-Regular;
    font-weight: 400;
    text-align: justifyLeft;
    line-height: 1.5;
    margin-top: 44px;
}

.oneLine {
    width: 100%;
    height: 2px;
    background-color: #C9CACA;
    margin-top: 75px;
}

.oneTextLayout {
    margin-left: 50px;
}


.oneLineLayout {
    display: flex;
    flex-flow: row;
    justify-content: center;
}

.imageOne {
    width: 252px;
    height: 258px;
}

.firstTextLayout {
    position: absolute;
    top: 29%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
}
.firstTextLayout h3 {
    text-align: center;
    color: #711EA1 ;
    font-size: 30px;
    font-weight: 600;
    margin-top: 32px;
}

.firstTextLayout h3:nth-of-type(2) {
    margin-top: 100px;
}

.firstTextLayout h5 {
    text-align: center;
    color: #711EA1 ;
    font-size: 30px;
    font-weight: 400;
    margin-top: 120px;
    width: 100%;
}

.firstTextLayout p {
    font-size: 22px;
    font-weight: 400;
    color: #595757;
    text-align: center;
    margin: 24px 0;
    width: 100%;
    line-height: 1.5;
}

.container {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.topFirst {
    width: 100%;
    height: 1383px;
    position: relative;
    background: url('../assets/image/bg_top.png');
    background-repeat: round;
}
.topSecond {
    width: 100%;
    height: 6800px;
    position: relative;
    margin-top: -207px;
    background: url('../assets/image/bg_second.png');
    background-repeat: round;
}

.moneyIcon {
    position:absolute;
    top: 0;
    left: 50%;
    width: 100%;
    transform: translate(-50%, 0);
}
.topWinner {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, 0);
}
.phone {
    position: absolute;
    top: 15.5%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.game {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.allGames {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
