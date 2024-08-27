export class Player {
    constructor(name) {
        this.name = name;
        // Their score is defaulted to start at 0
        this.score = 0;
    }

    get title() {
        const title = `${this.name}`
        return title
    }

    get playerHTMLTemplate() {
        return `
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <p class="card-title text-center fs-1">${this.title}</p>
            <div class="text-center fs-3">
              <button onclick="app.playersController.decreaseScorePoint('${this.name}')">-</button>
              <span>${this.score}</span>
              <button onclick="app.playersController.increaseScorePoint('${this.name}')">+</button>
            </div>
          </div>
        </div>
      </div>`
    }
}
