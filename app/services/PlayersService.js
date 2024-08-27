import { AppState } from "../AppState.js";

class PlayersService {
    //PlayersService.js
    increaseScorePoint(playerName) {
        console.log(playerName)
        const foundPlayer = AppState.players.find(player => player.name == playerName)
        foundPlayer.score++
        console.log('found player', foundPlayer.score);
    }

    decreaseScorePoint(playerName) {
        console.log(playerName)
        const foundPlayer = AppState.players.find(player => player.name == playerName)
        foundPlayer.score--
        console.log('found player', foundPlayer.score);
    }
}

export const playersService = new PlayersService()