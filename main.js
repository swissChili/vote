
  var socket = io('localhost:8000')
  var app = new Vue({
    el: '#app',
    data: {
      loginMessage: 'Login',
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
    mounted: function () {
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          app.loginMessage = 'Logout'
        } else {
          app.loginMessage = 'Login'
        }
      })
    },
    methods: {
      login: function () {
        console.log('loging in')
        var user = firebase.auth().currentUser
        if (user) {
          firebase.auth().signOut().then(function () {
            app.loginMessage = 'Login'
          }).catch(function (error) {
          // An error happened.
          })
        } else {
          firebase.auth().signInWithRedirect(provider)
        }
      },
      openModal: function (canidate) {
        this.modalCandidate = canidate
        this.modal = true
      },
      closeModal: function () {
        this.modal = false
      },
      voteFor: function (canidate) {
        console.log('voted for', canidate.name)
        socket.emit('vote', canidate.name)
        this.modal = false
        this.voted = true
        var stateObj = {
          foo: 'bar'
        }
        history.pushState(stateObj, 'Voted ', 'voted.html')
      }
    }
  })
