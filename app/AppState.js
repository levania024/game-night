import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Player } from './models/PlayerModel.js'

class ObservableAppState extends EventEmitter {
  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  players = [
    new Player('Sophia'),
    new Player('Elijah'),
    new Player('Ava'),
    new Player('Mason'),
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())



