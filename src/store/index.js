import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards:[
      {title:"Java",level:"intermediário",alreadyWorked:"Trabalho atualmente", image:"https://www.ativasoft.com.br/blog/wp-content/uploads/2018/01/java_icon.png"},
      {title:"HTML",level:"intermediário",alreadyWorked:"Já trabalhei",image:"https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"},
      {title:"CSS",level:"intermediário",alreadyWorked:"Já trabalhei",image:"https://upload.wikimedia.org//wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png"},
      {title:"React.js",level:"Básico",alreadyWorked:"Comecei a ver no trabalho",image:"https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com015.jpg"},
      {title:"Vue.js",level:"Básico",alreadyWorked:"Gostaria de trabalhar",image:"https://vuejs.org/images/logo.svg"},
      {title:"Python",level:"Básico",alreadyWorked:"Gostaria de trabalhar",image:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"},
      {title:"Git",level:"Intermediário",alreadyWorked:"Trabalho atualmente",image:"https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg"},
      {title:"JIRA",level:"Intermediário",alreadyWorked:"Já trabalhei",image:"https://cdn.worldvectorlogo.com/logos/jira-1.svg"},
      {title:"C#",level:"Básico",alreadyWorked:"Nunca trabalhei",image:"https://cdn.icon-icons.com/icons2/2415/PNG/512/csharp_original_logo_icon_146578.png"}
    ],
    title: "Tecnologias"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    },
    getImgUrl(state){
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + state.cards.image + ".png")
    }
  }
})
