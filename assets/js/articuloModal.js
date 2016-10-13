/* Modal multibotón*/

$('#articuloModal').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) 
	var recipient = button.data('whatever') 

	var modal = $(this)
	modal.find('.modal-title').text('Articulo: ' + recipient)
	modal.find('.modal-body input').val(recipient)
	switch(recipient) {
		case 'art1':

		case 'art2':
			
		case 'art3':

	}
})