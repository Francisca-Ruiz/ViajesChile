$(document).ready(function () {
    console.log("entra aquí");
    // TOOLTIPS aparece etiqueda de mensaje
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    // Enviar correo alerta
    $( ".enviarMensaje" ).click(function() {
    alert( "El mensaje fue enviado correctamente" );

    });



            //Toggle aparece y desaparece
    $( ".card-title" ).click(function() {
      $( ".card-text" ).toggle( "slow", function() {
      });
    });

});    
    
    
    
    $(document).ready(function(){

        // Scroll
		$(window).on("scroll",function(){
		    var changeColor = $(window).scrollTop();
			    if(changeColor > 0){
			    	$(".navbar").css("background","rgba(0,0,0)");

			    }
			    else{
			    	$(".navbar").css("background","rgba(250,250,250,0)");
                   
			    }
			  });
            });
            
