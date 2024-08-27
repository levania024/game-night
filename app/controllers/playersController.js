import { AppState } from "../AppState.js";
import { playersService } from "../services/playersService.js";

export class PlayersController {
    constructor() {
        console.log('player display');
        this.drawPlayers()
    }

    // PlayersController.js
    increaseScorePoint(playerName) {
        console.log('clicked!', playerName)
        playersService.increaseScorePoint(playerName)

        this.drawPlayers()
    }

    decreaseScorePoint(playerName) {
        playersService.decreaseScorePoint(playerName)

        this.drawPlayers()
    }

    drawPlayers() {
        const players = AppState.players
        let playerHTML = ''
        players.forEach(player => playerHTML += player.playerHTMLTemplate)
        const playerElm = document.getElementById('player-card')
        playerElm.innerHTML = playerHTML
    }

}

