<script setup>
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
            <p>Tap winner the ultimate all-in-one gaming platform. Our online web game is exclusively available for mobile browsers. You can browse games online free to play and look for fun games to download.</p>
            <h3>Why Play Free Casino Games at TAPWINNER?</h3>
            <p>Experience the excitement of casino apps that pay real money by playing popular skill-based games for free at Tap winner. You can also enjoy the best and cool games mobile games of 2023 and join the ranks of skilled players. see what our users are saying about real cash games in Tap winner!</p>
            <h5>PEOPLE SAID</h5>
        </div>

    </div>
</template>

<style scoped>
.firstTextLayout {
    position: absolute;
    top: 28%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.firstTextLayout h3 {
    text-align: center;
    color: #711EA1 ;
    font-size: 30px;
    font-weight: 400;
}

.firstTextLayout p {
    font-size: 22px;
    font-family: Noto Sans S Chinese;
    font-weight: 400;
    color: #595757;
    width: 400px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
}
.topFirst {
    width: 1920px;
    height: 1383px;
    position: relative;
    background: url('../assets/image/bg_top.png');
}
.topSecond {
    width: 1920px;
    height: 6800px;
    position: relative;
    top: -207px;
    background: url('../assets/image/bg_second.png');
}

.moneyIcon {
    position:absolute;
    top: 0;
    left: 50%;
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
