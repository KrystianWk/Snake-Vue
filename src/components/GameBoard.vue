<template>
  <div id="board" tabindex="0" @keydown="handleKeyDown">
    <div class="board-row" v-for="row in rows" :key="row">
      <div v-for="col in cols" :key="col" class="board-col">
        <div v-if="isSnake(col, row)" class="snake-segment"></div>
        <div v-else-if="isFood(col, row)" class="food"></div>
        <!--  inne elementy planszy  -->
      </div>
    </div>

    <button v-if="gameOver" @click="resetGame">New Game</button>
    <form @submit.prevent="saveScore" v-if="gameOver">
      <label for="username">Nick:</label>
      <input type="text" id="username" v-model="username" required />
      <button type="submit">Zapisz wynik</button>
    </form>

    <button @click="fetchScores" v-show="gameOver && !showScores">
      Pokaż wyniki
    </button>
    <table v-if="showScores && scores.length">
      <thead>
        <tr>
          <th>Użytkownik</th>
          <th>Wynik</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in scores" :key="index">
          <td>{{ item.username }}</td>
          <td>{{ item.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GameBoard',
  data() {
    return {
      cols: 20,
      rows: 20,
      snakeSegments: [{ x: 5, y: 5 }],
      foodPosition: { x: 10, y: 10 },
      direction: 'RIGHT',
      gameOver: false,
      username: '',
      scores: [],
      showScores: false,
    };
  },
  methods: {
    handleKeyDown(event) {
      if (this.gameOver) return; // Zablokuj ruch, jeśli gra już się skończyła

      switch (event.key) {
        case 'ArrowUp':
          if (this.direction !== 'DOWN') {
            this.direction = 'UP';
          }
          break;
        case 'ArrowDown':
          if (this.direction !== 'UP') {
            this.direction = 'DOWN';
          }
          break;
        case 'ArrowLeft':
          if (this.direction !== 'RIGHT') {
            this.direction = 'LEFT';
          }
          break;
        case 'ArrowRight':
          if (this.direction !== 'LEFT') {
            this.direction = 'RIGHT';
          }
          break;
      }
    },
    moveSnake() {
      if (this.gameOver) return; // Zablokuj ruch, jeśli gra już się skończyła

      let newHead = { x: this.snakeSegments[0].x, y: this.snakeSegments[0].y };

      switch (this.direction) {
        case 'UP':
          newHead.y--;
          break;
        case 'DOWN':
          newHead.y++;
          break;
        case 'LEFT':
          newHead.x--;
          break;
        case 'RIGHT':
          newHead.x++;
          break;
      }

      // Sprawdzenie kolizji ze ścianami planszy
      if (
        newHead.x < 0 ||
        newHead.x >= this.cols ||
        newHead.y < 0 ||
        newHead.y >= this.rows
      ) {
        this.gameOver = true;
        return;
      }

      // Sprawdzenie kolizji z samym sobą
      if (
        this.snakeSegments
          .slice(1)
          .some((segment) => segment.x === newHead.x && segment.y === newHead.y)
      ) {
        this.gameOver = true;
        return;
      }

      this.snakeSegments.unshift(newHead); // Dodanie nowej głowy węża

      // Sprawdzenie czy zjedzono jedzenie
      if (this.isFood(newHead.x, newHead.y)) {
        this.generateFood(); // Wygeneruj nowe jedzenie
      } else {
        this.snakeSegments.pop(); // Usuń ogon węża, jeśli nie zjedzono jedzenia
      }
    },
    isSnake(col, row) {
      return this.snakeSegments.some(
        (segment) => segment.x === col && segment.y === row
      );
    },
    isFood(col, row) {
      return this.foodPosition.x === col && this.foodPosition.y === row;
    },
    generateFood() {
      this.foodPosition = {
        x: Math.floor(Math.random() * this.cols),
        y: Math.floor(Math.random() * this.rows),
      };
    },
    resetGame() {
      // Odśwież stronę
      window.location.reload();
    },
    fetchScores() {
      //  pobranie wyników
      axios
        .get('http://localhost:3000/scores')
        .then((response) => {
          console.log('Pobrane dane:', response.data); // Dodany log
          // Zapisz wyniki w danych komponentu Vue
          this.scores = response.data;
          this.showScores = true;
        })
        .catch((error) => {
          console.error('Błąd pobierania wyników:', error);
        });
    },

    saveScore() {
      const username = this.username;
      const score = this.snakeSegments.length;

      axios
        .post('http://localhost:3000/save-score', { username, score })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(
            'Błąd podczas zapisywania wyniku:',
            username,
            score,
            error
          );
        });
    },
  },

  mounted() {
    // Rozpoczęcie cyklu gry
    setInterval(() => {
      this.moveSnake();
    }, 250); // Ustawienie interwału na 0.5 sekundy
  },
};
</script>
<style scoped>
#board {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
}

.board-row {
  display: flex;
}

.board-col {
  width: 20px;
  height: 20px;
  border: 1px solid transparent;
}

.snake-segment {
  width: 100%;
  height: 100%;
  background-color: green;
}

.food {
  width: 100%;
  height: 100%;
  background-color: red;
}

.game-over {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}
</style>
