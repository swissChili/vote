
  var app = new Vue({
    el: '#app',
    data: {
      loginMessage: 'Login',
      voted: false,
      modal: false,
      loginState: false,
      modalCandidate: {},
      canidates: [
        {
          candidate.name: 'twenty',
          candidate.slogan: 'yee'
        }
      ]
    },
    methods: {
      openModal: function (canidate) {
        this.modalCandidate = canidate
        this.modal = true
      },
      closeModal: function () {
        this.modal = false
      },
    }
  })
