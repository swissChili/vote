
  var app = new Vue({
    el: '#app',
    data: {
      loginMessage: 'Login',
      voted: false,
      modal: false,
      loginState: false,
      modalCandidate: {},
      canidates: []
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
