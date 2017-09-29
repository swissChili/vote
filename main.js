var app = new Vue({
  el: '#app',
  data: {
    modal: false,
    modalCandidate: {},
    canidates: [{
<<<<<<< HEAD
      name: 'Leam Jenney',
      motto: 'Take a free drink',
=======
      name: 'Liam Jenney',
      moto: 'Take a free drink',
>>>>>>> 725f0fdb934a1b9906e6356fe702cc043838e9c6
      values: 'Eat food, sleep well, play, meh',
      image: './images/profile_placeholder.png'
    }, {
      name: 'James Iskander',
      motto: 'Repersenting you!',
      values: 'Belive in me!',
      image: './images/profile_placeholder.png'
    }, {
      name: 'Leo Fayad',
      moto: 'A face you can trust.',
      values: 'None, Fame, Lazars!',
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
