var app = new Vue({
  el: '#app',
  data: {
    voted: false,
    modal: false,
    modalCandidate: {},
    canidates: [{
      name: 'Leam Jenney',
      motto: 'Take a free drink',
      values: 'Eat food, sleep well, play, meh',
      image: './images/profile_placeholder.png'
    }, {
      name: 'James Iskander',
      motto: 'Repersenting you!',
      values: 'Belive in me!',
      image: './images/profile_placeholder.png'
    }, {
      name: 'Leo Fayad',
      motto: 'Dont be a fayo, vote for leo.',
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
      this.voted = true
      var stateObj = {
        foo: 'bar'
      }
      history.pushState(stateObj, 'Voted ', 'voted.html')
    }
  }
})
