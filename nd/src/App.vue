<script>
export default {
  data() {
    return {
      visibleTeam: false,
      noneVStartbtn: false,
      visibleStartbtn: true,
      clearStart: true,
    }
  },
  computed: {
    cityName() {
      return "«" + this.city + "»"

    },

    random() {
      const name = ['Анютка',
        'Вася',
        'Гриша',
        'Данил',
        'Матвей',
        'Илья',
        'Коля',
        'Влада',
      ];
      const ran = name.sort(() => Math.round(Math.random() * 100) - 50);
      return ran
    }
  },
  methods: {
    VisTeams() {
      this.visibleTeam = !this.visibleTeam;
    },
    VisStartbtn() {
      this.visibleStartbtn = !this.visibleStartbtn;
    },
    nvSb() {
      this.noneVStartbtn = !this.noneVStartbtn;
    },
    clSt() {
      this.clearStart = !this.clearStart;
    },
    scroll() {
      const el = document.getElementById('el');
      el.scrollIntoView({ block: "center", inline: "center", behavior: "smooth" });
    }
  }
}
</script>
<template>
  <div class="wrapper">
    <div class="start" v-if="clearStart">
      <h1>Конкурсы</h1>
      <p>Вас ждут 10 интересных конкурсов в командном режиме!</p>
      <p>У каждой команды на старте будет <span class="work">50$</span></p>
      <p> <span class="work">Зарабатывайте $</span> за правильные ответы</p>
      <p> <span class="buy">Тратьте</span> на замену игрока(<span class="buy">10$</span>) или подсказку(<span
          class="buy">5$</span>).</p>
      <button class="startb" @click="VisTeams(), VisStartbtn(), nvSb()" v-if="visibleStartbtn">Сформировать
        команды</button>
      <div class="team" v-if="visibleTeam">
        <div class="k1">
          <ul>
            <li>1. {{ random[0] }}</li>
            <li>2. {{ random[1] }}</li>
            <li>3. {{ random[2] }}</li>
            <li>4. {{ random[3] }}</li>
          </ul>
        </div>
        <div class="k2">
          <ul>
            <li>5. {{ random[4] }}</li>
            <li>6. {{ random[5] }}</li>
            <li>7. {{ random[6] }}</li>
            <li>8. {{ random[7] }}</li>
          </ul>
        </div>
      </div>
      <button class="startb" @click="scroll()" v-if="noneVStartbtn">Первый раунд 1 7</button>

    </div>

  </div>
</template>
<style scoped>
.lower {
  top: 1000px;
}

.wrapper {
  margin-top: 100px;
}

.team {
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 25px;
}

.team li+li {
  margin-top: 10px;
}

.k1 {
  background: rgba(95, 59, 255, 0.842);
  display: block;
  width: 250px;
  margin-right: 125px;
  font-size: 36px;
  border-radius: 25px;
}

.k2 {
  background: rgba(255, 59, 59, 0.842);
  display: block;
  width: 250px;
  font-size: 36px;
  border-radius: 25px;
}

.start {
  width: 900px;
  border-radius: 50px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.76);
  text-align: center;
  color: aliceblue;
}

.start h1 {
  font-size: 60px;
}

.start p {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 24px;
}

.buy {
  color: rgb(243, 65, 74);
}

.work {
  color: rgb(65, 243, 65);
}

.startb {
  background: #f8d77a;
  color: #fff;
  border-radius: 10px;
  border: 2px solid #b99935;
  padding: 10px 15px;
  cursor: pointer;
  transition: transform 500ms ease;
  margin-bottom: 25px;
  font-size: 20px;
  margin-top: 20px;
  color: black;
}

.wrapper button:hover {
  transform: scale(1) translateY(-3px);
}
</style>
