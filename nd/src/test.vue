<script>
export default {
    data() {
        return {
            status: true,
            count_blue: 50,
            count_red: 50,
            vis1: true,
            vis2: false,
            vis3: false,
            vis4: false,
            vis5: false,
            vis6: false,
            vis7: false,
            vis8: false,
            vis9: false,
            vis10: false,
            vis11: false,
            vis12: false,
            vis13: false,
            vis14: false,
            vis15: false,
            vis16: false,
            vis17: false,
            vis18: false,
            vis19: false,
            vis20: false,
            vis21: false,
            vis22: false,
            vis23: false,
            vis30: false,
            vis31: false,
            vis32: false,
            vis33: false,
            vis34: false,
            vis35: false,
            vis36: false,
            vis37: false,
            vis38: false,
            vis39: false,
            vis40: false,
            vis41: false,
            vis42: false,
            vis43: false,
            vis44: false,
            vis45: false,
            vis46: false,
            vis47: false,
            vis48: false,
            vis49: false,
            vis50: false,
            vis51: false,
            vis52: false,
            vis53: false,
            vis54: false,
            vis55: false,
            vis56: false,
            vis57: false,
            vis58: false,
            vis59: false,
            vis60: false,

        }
    },
    computed: {
        q1: function () {
            if (this.status == true) {
                return 'variant'
            } else {
                return 'variant-v'
            }
        }
    },
    methods: {
        Visible2() {
            this.vis2 = !this.vis2;
        },
        Visible1() {
            this.vis1 = !this.vis1;
        },
        Visible3() {
            this.vis3 = !this.vis3;
        },
        Visible4() {
            this.vis4 = !this.vis4;
        },
        Visible5() {
            this.vis5 = !this.vis5;
        },
        Visible6() {
            this.vis6 = !this.vis6;
        },
        Visible7() {
            this.vis7 = !this.vis7;
        },
        Visible8() {
            this.vis8 = !this.vis8;
        },
        Visible9() {
            this.vis9 = !this.vis9;
        },
        Visible10() {
            this.vis10 = !this.vis10;
        },
        Visible11() {
            this.vis11 = !this.vis11;
        },
        Visible12() {
            this.vis12 = !this.vis12;
        },
        Visible13() {
            this.vis13 = !this.vis13;
        },
        Visible14() {
            this.vis14 = !this.vis14;
        },
        Visible15() {
            this.vis15 = !this.vis15;
        },
        Visible16() {
            this.vis16 = !this.vis16;
        },
        Visible17() {
            this.vis17 = !this.vis17;
        },
        Visible18() {
            this.vis18 = !this.vis18;
        },
        Visible19() {
            this.vis19 = !this.vis19;
        },
        Visible20() {
            this.vis20 = !this.vis20;
        },
        Visible21() {
            this.vis21 = !this.vis21;
        },
        Visible22() {
            this.vis22 = !this.vis22;
        },
        Visible23() {
            this.vis23 = !this.vis23;
        },
        Visible30() {
            this.vis30 = !this.vis30;
        },
        Visible31() {
            this.vis31 = !this.vis31;
        },
        Visible32() {
            this.vis32 = !this.vis32;
        },
        Visible33() {
            this.vis33 = !this.vis33;
        },
        Visible34() {
            this.vis34 = !this.vis34;
        },
        Visible35() {
            this.vis35 = !this.vis35;
        },
        Visible36() {
            this.vis36 = !this.vis36;
        },
        Visible37() {
            this.vis37 = !this.vis37;
        },
        Visible38() {
            this.vis38 = !this.vis38;
        },
        Visible39() {
            this.vis39 = !this.vis39;
        },
        Visible40() {
            this.vis40 = !this.vis40;
        },
        Visible41() {
            this.vis41 = !this.vis41;
        },
        Visible42() {
            this.vis42 = !this.vis42;
        },
        Visible43() {
            this.vis43 = !this.vis43;
        },
        Visible44() {
            this.vis44 = !this.vis44;
        },
        Visible45() {
            this.vis45 = !this.vis45;
        },
        Visible46() {
            this.vis46 = !this.vis46;
        },
        Visible47() {
            this.vis47 = !this.vis47;
        },
        Visible48() {
            this.vis48 = !this.vis48;
        },
        Visible49() {
            this.vis49 = !this.vis49;
        },
        Visible50() {
            this.vis50 = !this.vis50;
        },
        Visible51() {
            this.vis51 = !this.vis51;
        },
        Visible52() {
            this.vis52 = !this.vis52;
        },
        Visible53() {
            this.vis53 = !this.vis53;
        },
        Visible54() {
            this.vis54 = !this.vis54;
        },
        Visible55() {
            this.vis55 = !this.vis55;
        },
        Visible56() {
            this.vis56 = !this.vis56;
        },
        Visible57() {
            this.vis57 = !this.vis57;
        },
        Visible58() {
            this.vis58 = !this.vis58;
        },
        Visible59() {
            this.vis59 = !this.vis59;
        },
        Visible60() {
            this.vis60 = !this.vis60;
        },
    },
}

</script>

<template>
    <div class="round1" id="el">
        <div class="count_container">
            <div class="count_red">
                <div class="count_red_plus" @click="count_red -= 5"></div>
                <div class="count_red_p">{{ count_red }}</div>
                <div class="count_red_minus" @click="count_red += 5"></div>
            </div>
            <div class="count_blue">
                <div class="count_blue_plus" @click="count_blue -= 5"></div>
                <div class="count_blu_p">{{ count_blue }}</div>
                <div class="count_blue_plus" @click="count_blue += 5"></div>
            </div>
        </div>
        <!-- Фильмы -->

        <div class="round1-v1" id="element" v-if="vis1">
            <img src="../public/1/1.jpg" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 1/10</p>
                <li class="variant">1. Поймай меня,если сможешь<input accesskey="a" class="red" type="checkbox"><input
                        class="blue" type="checkbox"></li>
                <li :class="q1">2. Начало <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. Великий гэтсби <input class="red" type="checkbox"><input class="blue"
                        type="checkbox"></li>
                <li class="variant">4. Волк с уолл стрит<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible1(), Visible2()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis2">
            <img src="../public/1/2.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 2/10</p>
                <li class="variant">1. Терминал <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">2. Крепкий орешек <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">3. Мертвец <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">4. Рэд<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible2(), Visible3()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis3">
            <img src="../public/1/3.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 3/10</p>
                <li class="variant">1. В поискахх Немо <input class="red" type="checkbox"><input class="blue"
                        type="checkbox"></li>
                <li :class="q1">2. Шрек 2<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. Шрек <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. Шрек 3<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible3(), Visible4()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis4">
            <img src="../public/1/4.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 4/10</p>
                <li :class="q1">1. Кролик Джоджо <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">2. Лицо со шрамом <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">3. Невидимая сторона <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">4. Гарри Поттер и Кубок огня<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible4(), Visible5()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis5">
            <img src="../public/1/5.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 5/10</p>
                <li :class="q1">1. Железный Человек<input class="red" type="checkbox"><input class="blue"
                        type="checkbox"></li>
                <li class="variant">2. Звонок<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. Человек дождя <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">4. Исходный код<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible5(), Visible6()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis6">
            <img src="../public/1/6.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 6/10</p>
                <li class="variant">1. Сопрано <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">2. Форсаж <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">3. Во все тяжкие <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. Игра в кальмара<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible6(), Visible7()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis7">
            <img src="../public/1/7.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 7/10</p>
                <li class="variant">1. Терминал <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">2.Сыны анархии <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li :class="q1">3. Игра в кальмара <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">4. Матрица <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible7(), Visible8()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis8">
            <img src="../public/1/8.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 8/10</p>
                <li class="variant">1. Человек паук<input class="red" type="checkbox"><input class="blue"
                        type="checkbox"></li>
                <li class="variant">2. Паразиты <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. Джон Уик <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">4. 1408 <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible8(), Visible9()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis9">
            <img src="../public/1/9.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 9/10</p>
                <li :class="q1">1. Волк с Уолл-стрит<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">2. Лестница <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. Бронсон <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. Миллионер из трущоб<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible9(), Visible10()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v1" v-if="vis10">
            <img src="../public/1/10.webp" alt="">
            <ul class="round1-list">
                <p>Угадай фильм по кадру: 10/10</p>
                <li class="variant">1. Всегда говори "да" <input class="red" type="checkbox"><input class="blue"
                        type="checkbox"></li>
                <li class="variant">2. Пролетая над гнездом кукушки <input class="red" type="checkbox"><input
                        class="blue" type="checkbox">
                </li>
                <li class="variant">3. Форрест Гамп <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li :class="q1">4. Брюс Всемогущий<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible10(), Visible11()">Следующий раунд26</li>
            </ul>
        </div>

        <!-- Песни -->
        <div class="round1-v2" v-if="vis11">
            <p>Продолжи песню: 1/10</p>
            <audio controls>
                <source src="../public/2/1.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/1.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>А мы с тобой теперь никто А помнишь, раньше был ток? А может, <br> это был Tik-Tok? А может, это был
                    …?
                </p>
                <li class="variant">1. сон <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">2. кот <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. блок <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">4. бог<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible11(), Visible12()">Следующий вопрос
                    </li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis12">
            <p>Продолжи песню: 2/10</p>
            <audio controls>
                <source src="../public/2/2.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/2.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>Ты меня понял не так. Я не ищу отношений. Да, ты красивый, но знай: Мне не нужны ….</p>

                <li class="variant">1. утешения <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">2. украшения <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. отношения <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. обнажения <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible12(), Visible13()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis13">
            <p>Продолжи песню: 3/10</p>
            <audio controls>
                <source src="../public/2/3.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/3.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>Она выглядит как mommy среди всех в этом клабе <br>
                    Её вид всегда шикарен, на ней сидит всё ...</p>

                <li class="variant">1. нормально <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">2. идеально <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. классно <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. как надо <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible13(), Visible14()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis14">
            <p>Продолжи песню: 4/10</p>
            <audio controls>
                <source src="../public/2/4.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/4.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>Я больше не жду, не плачу, не ревную <br>
                    Не запиваю память ...</p>

                <li class="variant">1. полиролью <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">2. алкоголем <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. николью <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">4. аперолем <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible14(), Visible15()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis15">
            <p>Продолжи песню: 5/10</p>
            <audio controls>
                <source src="../public/2/5.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/5.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>А единственная перспектива у продвинутого парня в этой стране – ...</p>

                <li class="variant">1. заниматься продажами <input class="red" type="checkbox"><input class="blue"
                        type="checkbox"></li>
                <li class="variant">2. поехать на войну <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">3. работать на заводе. <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li :class="q1">4. работать клоуном у пид**асов. <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible15(), Visible16()">Следующий вопрос</li>
                </div>
            </ul>

        </div>
        <div class="round1-v2" v-if="vis16">
            <p>Продолжи песню: 6/10</p>
            <audio controls>
                <source src="../public/2/6.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/6.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>На скамье я сижу один <br>
                    Дым вплетается в ...</p>

                <li class="variant">1. витька <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">2. облака <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. дурака <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. холостяка <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible16(), Visible17()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis17">
            <p>Продолжи песню: 7/10</p>
            <audio controls>
                <source src="../public/2/7.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/7.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>"Гори, но не выгорай внутри", — кричат они <br>
                    Всё, что мы делаем — для любви, весна в ...</p>

                <li :class="q1">1. крови <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li class="variant">2. церкви <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. щебни <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. простыни <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible17(), Visible18()">Следующий вопрос</li>
                </div>
            </ul>


        </div>
        <div class="round1-v2" v-if="vis18">
            <p>Продолжи песню: 8/10</p>
            <audio controls>
                <source src="../public/2/8.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/8.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>Мой язык как спица, я плету рифмы <br>
                    Тут воняет шишкой, это не ...</p>

                <li class="variant">1. шутиха <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">2. винта <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. от таксиста <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li :class="q1">4. пихта <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible18(), Visible19()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis19">
            <p>Продолжи песню: 9/10</p>
            <audio controls>
                <source src="../public/2/9.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/9.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>Все мои подруги за собой не замечают <br>
                    Они видят мои шмотки и тупо ...</p>

                <li class="variant">1. намекают <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">2. повторяют <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. помогают <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. погибают <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible19(), Visible20()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis20">
            <p>Продолжи песню: 10/10</p>
            <audio controls>
                <source src="../public/2/10.mp3" type="audio/mp3">
            </audio>
            <audio controls>
                <source src="../public/2/10.1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <p>Смотри: никому нет дела <br>
                    До того, что тебе сегодня ...</p>
                <li :class="q1">1. грустно <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li class="variant">2. вкусно <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. скучно <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. искусно <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="Visible20(), Visible21()">Следующий раунд 45 38
                    </li>
                </div>
            </ul>
        </div>

        <!-- Угадай слово -->

        <div class="round1-v2" v-if="vis21">
            <p>Собери слово 1/?</p>
            <img class="maxpng" src="../public/3/1.png" alt="">
            <li class="variant sled-2" @click="Visible21(), Visible22()">Следующий вопрос</li>
        </div>
        <div class="round1-v2" v-if="vis22">
            <p>Собери слово 1/?</p>
            <img class="maxpng" src="../public/3/2.png" alt="">
            <li class="variant sled-2" @click="Visible22(), Visible23()">Следующий вопрос</li>
        </div>
        <div class="round1-v3" v-if="vis23">
            <p>Собери слово 1/?</p>
            <img class="maxpng" src="../public/3/3.png" alt="">
            <li class="variant sled-2" @click="Visible23(), Visible30()">Следующий раунд 15</li>
        </div>

        <!-- Факты -->
        <div class="round1-v2" v-if="vis30">
            <p>Правда или ложь: 1/10</p>
            <p>Правда, что крокодил может притвориться бревном, чтоб спастись от врага?</p>
            <ul class="round1-list">
                <li class="variant"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li :class="q1"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible30(), Visible31()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis31">
            <p>Правда или ложь: 2/10</p>
            <p>Правда, что для того, чтобы произвести стекло, нужно использовать глину?</p>
            <ul class="round1-list">
                <li class="variant"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li :class="q1"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible31(), Visible32()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis32">
            <p>Правда или ложь: 3/10</p>
            <p>Большая часть бытового мусора на планете — это пластик</p>
            <ul class="round1-list">
                <li class="variant"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li :class="q1"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible32(), Visible33()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis33">
            <p>Правда или ложь: 4/10</p>
            <p>У рыб отсутствует долгосрочная память</p>
            <ul class="round1-list">
                <li class="variant"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li :class="q1"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible33(), Visible34()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis34">
            <p>Правда или ложь: 5/10</p>
            <p>Акулы существовали на Земле еще до деревьев</p>
            <ul class="round1-list">
                <li :class="q1"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li class="variant"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible34(), Visible35()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis35">
            <p>Правда или ложь: 6/10</p>
            <p>Бумажный пакет — экологичнее, чем пластиковый</p>
            <ul class="round1-list">
                <li class="variant"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li :class="q1"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible35(), Visible36()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis36">
            <p>Правда или ложь: 7/10</p>
            <p>Дельфинов тренируют для выполнения боевых задач</p>
            <ul class="round1-list">
                <li :class="q1"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li class="variant"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible36(), Visible37()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis37">
            <p>Правда или ложь: 8/10</p>
            <p>На одном из спутников Сатурна есть вода</p>
            <ul class="round1-list">
                <li :class="q1"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li class="variant"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible37(), Visible38()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis38">
            <p>Правда или ложь: 9/10</p>
            <p>Правда, что если смешать красный и зеленый, то получится коричневый?</p>
            <ul class="round1-list">
                <li :class="q1"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li class="variant"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible38(), Visible39()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis39">
            <p>Правда или ложь: 10/10</p>
            <p>Верно ли утверждение, что русский алфавит имеет десять гласных звуков?</p>
            <ul class="round1-list">
                <li class="variant"> Правда <input class="red" type="checkbox"><input class="blue" type="checkbox"></li>
                <li :class="q1"> Ложь <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <div class="but">
                    <li @click="status = !status" class="variant rez-2">Результат</li>
                    <li class="variant sled-2" @click="status = !status, Visible39(), Visible40()">Следующий Вопрос</li>
                </div>
            </ul>
        </div>

        <!-- Каверы -->
        <div class="round1-v2" v-if="vis40">
            <p>Угадай песню наоборот: 1/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/1.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible40(), Visible41()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis41">
            <p>Угадай песню наоборот: 2/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/2.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible41(), Visible42()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis42">
            <p>Угадай песню наоборот: 3/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/3.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible42(), Visible43()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis43">
            <p>Угадай песню наоборот: 4/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/4.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible43(), Visible44()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis44">
            <p>Угадай песню наоборот: 5/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/5.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible44(), Visible45()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis45">
            <p>Угадай песню наоборот: 6/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/6.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible45(), Visible46()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis46">
            <p>Угадай песню наоборот: 7/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/7.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible46(), Visible47()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis47">
            <p>Угадай песню наоборот: 8/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/8.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible47(), Visible48()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis48">
            <p>Угадай песню наоборот: 9/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/9.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible48(), Visible49()">Следующий вопрос</li>
                </div>
            </ul>
        </div>
        <div class="round1-v2" v-if="vis49">
            <p>Угадай песню наоборот: 10/10</p>
            <audio controls style="margin:40px;">
                <source src="../public/5/10.mp3" type="audio/mp3">
            </audio>
            <ul class="round1-list">
                <div class="but">
                    <li class="variant sled-2" @click="Visible49(), Visible50()">Следующий вопрос</li>
                </div>
            </ul>
        </div>

        <!-- ПДД -->
        <div class="round1-v6" v-if="vis50">
            <p>ПДД: 1/5</p>
            <p>Вы имеете право выполнить разворот:</p>
            <img src="../public/6/1.jpg" alt="">

            <ul class="round1-list">
                <li class="variant">1. Только по траектории А.<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li class="variant">2. Только по траектории Б. <input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li :class="q1">3. По любой траектории из указанных.<input class="red" type="checkbox"><input
                        class="blue" type="checkbox">
                </li>

                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible50(), Visible51()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v6" v-if="vis51">
            <p>ПДД: 2/5</p>
            <p>Водителям мопедов разрешено двигаться:</p>

            <ul class="round1-list">
                <li class="variant">1. Только по полосе для велосипедистов.<input class="red" type="checkbox"><input
                        class="blue" type="checkbox">
                </li>
                <li class="variant">2. Только по обочине, если не создаются помехи пешеходам.
                    <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. Только по правому краю проезжей части в один ряд.<input class="red"
                        type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">4. Во всех перечисленных случаях.<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible51(), Visible52()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v6" v-if="vis52">
            <p>ПДД: 3/5</p>
            <p>Обязаны ли Вы уступить дорогу легковому автомобилю при повороте направо?</p>
            <img src="../public/6/3.jpg" alt="">

            <ul class="round1-list">
                <li class="variant">1. Обязаны.<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">2. Не обязаны. <input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. Обязаны, если легковой автомобиль поворачивает налево.<input class="red"
                        type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible52(), Visible53()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v6" v-if="vis53">
            <p>ПДД: 4/5</p>
            <p>Какие из указанных знаков обязывают водителя грузового автомобиля с разрешенной максимальной массой не
                более 3,5 т
                повернуть направо?</p>
            <img src="../public/6/4.jpg" alt="">

            <ul class="round1-list">
                <li class="variant">1. Только А.<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li :class="q1">2. Только Б.<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">3. А и Б.<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li class="variant">4. Б и В.<input class="red" type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible53(), Visible54()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v6" v-if="vis54">
            <p>ПДД: 5/5</p>
            <p>В каких направлениях Вам можно продолжить движение по второй полосе?</p>
            <img src="../public/6/5.jpg" alt="">

            <ul class="round1-list">
                <li class="variant">1. Только налево.<input class="red" type="checkbox"><input class="blue"
                        type="checkbox">
                </li>
                <li :class="q1">2. Налево и в обратном направлении. <input class="red" type="checkbox"><input
                        class="blue" type="checkbox">
                </li>
                <li class="variant">3. Направо, налево и в обратном направлении.<input class="red"
                        type="checkbox"><input class="blue" type="checkbox">
                </li>
                <li @click="status = !status" class="variant rez">Результат</li>
                <li class="variant sled" @click="status = !status, Visible54(), Visible55()">Следующий вопрос</li>
            </ul>
        </div>

        <!-- Ответы на вопросы -->
        <div class="round1-v7" v-if="vis55">
            <p>Вопрос 1/5</p>
            <p>Что вошло в женскую моду после вскрытия гробницы Тутанхамона?</p>
            <img src="../public/7/1.jpg" class="v71">
            <ul class="round1-list">
                <li class="variant sled" @click="Visible55(), Visible56()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v7" v-if="vis56">
            <p>Вопрос 2/5</p>
            <p>Как помогал гаджет для улучшения экологии планеты, который анонсировала компания Pornhub?</p>
            <img src="../public/7/2.png" class="v72">
            <ul class="round1-list">
                <li class="variant sled" @click="Visible56(), Visible57()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v7" v-if="vis57">
            <p>Вопрос 3/5</p>
            <p>Первая ЖД в России появилась в 1836 году, но люди боялись пользоваться поездами. Какое решение приняли,
                чтобы люди чаще катались на поездах?</p>
            <img src="../public/7/3.jpg" class="v71">
            <ul class="round1-list">
                <li class="variant sled" @click="Visible57(), Visible58()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v7" v-if="vis58">
            <p>Вопрос 4/5</p>
            <p>Криминалисты утверждают, что пропавших мужей проще искать, чем жён. Почему?</p>
            <img src="../public/7/4.jpg" class="v71">
            <ul class="round1-list">
                <li class="variant sled" @click="Visible58(), Visible59()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v7" v-if="vis59">
            <p>Вопрос 5/5</p>
            <p>В Канаде есть специальные театры для собак, что там показывают?</p>
            <img src="../public/7/5.webp" class="v71">
            <ul class="round1-list">
                <li class="variant sled" @click="Visible59(), Visible60()">Следующий вопрос</li>
            </ul>
        </div>
        <div class="round1-v7" v-if="vis60">
            <p>Спасибо за Игру!</p>
        </div>
    </div>
</template>


<style>
.v71 {
    height: 800px;
    width: 568px;
    margin-bottom: 20px;
}

.v71 {
    height: 600px;
    width: 800px;
    margin-bottom: 20px;
}

.round1-v6 img {
    width: 1250px;
    height: 420px;
    margin-bottom: 20px;
}

.round1-v6 {
    width: 1600px;
    border-radius: 25px;
    padding: 20px;
    text-align: center;
    color: aliceblue;
}

.maxpng {
    width: 1560px;
    height: 810px;
}

.but {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.reds {
    background-color: aliceblue;
}

.greens {
    background-color: rgb(0, 136, 255);
}

.red {
    margin-left: 10px;
    box-shadow: 0 0 0 0.2rem rgba(255, 59, 59, 0.842);
}

.blue {
    box-shadow: 0 0 0 0.2rem rgba(95, 59, 255, 0.842);
    margin-left: 20px;
}

.count_red_plus,
.count_red_minus,
.count_blue_plus,
.count_blue_minus {
    width: 380px;
}

.count_red {
    display: flex;
    width: 800px;
    height: 50px;
    background: rgba(255, 59, 59, 0.842);
    font-size: 25px;
    border-radius: 10px 0 0 10px;
}

.count_blue {
    display: flex;
    height: 50px;
    background: rgba(95, 59, 255, 0.842);
    font-size: 25px;
    border-radius: 0 10px 10px 0;
}

.count_container {
    display: flex;
    position: absolute;
    top: -60px;
}

.round1-v3 {
    width: 1600px;
    border-radius: 25px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.76);
    color: aliceblue;
}

.round1-v2 {
    width: 1600px;
    border-radius: 25px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.76);
    text-align: center;
    color: aliceblue;
}

.round1 {
    margin-top: 500px;
    width: 1634px;
    border-radius: 25px;
    padding: 20px;
    background: rgba(0, 0, 0, 0.76);
    text-align: center;
    color: aliceblue;
    margin-bottom: 100px;
}

.round1-v1 {
    display: flex;
}

.round1-list {
    display: block;
    justify-content: space-between;
    margin-left: 25px;
}

.variant-v {
    background: #7af885;
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 30px;
    color: black;
    margin-bottom: 20px;
}

.variant {
    background: #f8d77a;
    border-radius: 10px;
    padding: 10px 15px;
    font-size: 30px;
    color: black;
    margin-bottom: 20px;
}

img {
    width: 1050px;
    height: 700px;
    border-radius: 15px;
}

.round1 p {
    margin-bottom: 20px;
    font-size: 34px;
}

.rez-2 {
    width: 400px;
    margin-top: 25px;
    background: #93f87a;
}

.rez {
    margin-top: 75px;
    background: #93f87a;
}

.sled-2 {
    width: 400px;
    background: #765eff;
}

.sled {
    background: #765eff;
}
</style>