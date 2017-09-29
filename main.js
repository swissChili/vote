var app = new Vue({
  el: '#app',
  data: {
    modal: false,
    modalCandidate: {},
    canidates: [{
      name: 'Leam Jenney',
      moto: 'Take a free drink',
      values: 'Eat food, sleep well, play, meh',
      image: './images/profile_placeholder.png'
    }, {
      name: 'James Iskander',
      moto: 'Repersenting you!',
      values: 'Belive in me!',
      image: './images/profile_placeholder.png'
    }]
  },
  methods: {
    openModal: function (canidate) {
      this.modalCandidate = canidate
      this.modal = true
    },
    closeModal: function () {
      this.modal = false
    },
    voteFor: function (canidate) {
      console.log('voted for', canidate.name)
      this.modal = false
    }
  }
})
