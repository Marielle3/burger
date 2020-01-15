$(function () {
  $('.create-form').on('submit', function (event) {
    event.preventDefault()


  $('#devoured').on('click', function (event) {
    event.preventDefault()
    console.log('tracking this')

    var id = $(this).data('id')
    var devoured = {
      devoured: 1
    }

    $.ajax('/api/burgers/' + id, {
      type: 'PUT',
      data: devoured
    }).then(function () {
      location.reload()
    })
  })

  // Adds a new burger to eat.
  $('#burger-order').on('click', function (e) {
    e.preventDefault()

    if (
      $('#newBurger')
        .val()
        .trim() !== ''
    ) {
      var newBurger = {
        burger_name: $('#newBurger')
          .val()
          .trim(),
        devoured: false
      }

      // Sends the POST request.
      $.ajax('/api/burgers', {
        type: 'POST',
        data: newBurger
      }).then(() => {
        console.log('Ordered a new burger!')
        // Reload the page.
        location.reload()
      })
    }
  })

  $('#delete').on('click', function (event) {
    event.preventDefault()
    console.log('deleting this?')

    var id = $(this).data('id')

    $.ajax({
      type: 'DELETE',
      url: '/api/burgers/' + id
    }).then(location.reload())
  })
})
