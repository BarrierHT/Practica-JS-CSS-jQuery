$('document').ready(()=>{
'use strict';

// <!-- ==0 -->

//CAMBIAR Tema

let aurora = $('#tema_aurora');
let blanco = $('#tema_blanco');
let azul = $('#tema_azul');

aurora.click(()=>{									//Tema AURORA
 if(aurora.hasClass('actual') == false){			//No esta en modo Aurora
	if(blanco.hasClass('actual')) blanco.removeClass('actual');
 	else azul.removeClass('actual');
 	aurora.addClass('actual');
 	cambiarColor();
 	}
});

blanco.click(()=>{									//Tema Blanco
 if(blanco.hasClass('actual') == false){			//No esta en modo Blanco
	if(aurora.hasClass('actual')) aurora.removeClass('actual');
 	else azul.removeClass('actual');
 	blanco.addClass('actual');	
 	cambiarColor();
 	}
});

azul.click(()=>{									//Tema AZUL
 if(azul.hasClass('actual') == false){			//No esta en modo Azul
	if(blanco.hasClass('actual')) blanco.removeClass('actual');
 	else aurora.removeClass('actual');
 	azul.addClass('actual');
 	cambiarColor();
 	}
});

function cambiarColor() {		//Color a cambiar
	if(blanco.hasClass('actual')){							//TEMA BLANCO
	   $('body').css("background","url(../nieve.jpg)").css("background-repeat","no-repeat").css("background-size", "100% 100% ");
   $('section#main,.caja_comentarios').css("background","#000");
   $('#cabecera h1,footer,article,footer h2,#sidebar form,#sidebar blockquote,nav,li#sublista ul').css("background","#fff").css("color","#000");
  	   $('#sidebar span').css("color","lightgreen");
   	   $('nav ul li a,nav ul li span,li#sublista ul,li#sublista').css("color","#000");
   	   $('.icon-search,.caja_comentarios a').css("color","#fff");
   	   $('time').css("color","orange");
	   $('.leer').css("background","orange");
	}
else if(azul.hasClass('actual')){							//TEMA AZUL
   $('body').css("background","url(../gotas.jpg)").css("background-repeat","no-repeat").css("background-size", "100% 100% ");
   $('section#main').css("background","lightgreen");
   $('.caja_comentarios').css("background","#FEFE9B");
   $('#cabecera h1,footer,article,footer h2,#sidebar form,#sidebar blockquote,nav,li#sublista ul').css("background","#10C7DD");
   $('#sidebar span,nav ul li a,nav ul li span,#cabecera h1,footer h2,li#sublista ul,li#sublista').css("color","black");
   $('.icon-search,.caja_comentarios a,#sidebar form h2').css("color","red");
   $('.leer').css("background","pink");
   $('time').css("color","#fff");
}
else{		//TEMA AURORA
	$('body').css("background","url(../rayos.jpg)").css("background-repeat","no-repeat").css("background-size", "100% 100% ");
	$('section#main,article,#sidebar blockquote,#sidebar form').css("background","#fff");
	$('footer, footer h2').css("background","#000");
	$('#cabecera h1,nav,li#sublista ul').css("background-color","rgba(0,0,0,.8)");
	$('.caja_comentarios').css("background","lightgreen");
	$('#cabecera h1,nav ul li a,footer h2,nav ul li,li#sublista ul').css("color","#fff");
	$('nav ul li span').css("color","lightgreen");
	$('time').css("color","#ccc");
	$('.icon-search,.caja_comentarios a,#sidebar span,.leer').css("color","#000");	
	$('.leer').css("background","orange"); $('#sidebar form h2').css("color","orange");
  }
}
cambiarColor();

//SCROLL AUTOMATIZADO

$('#scroll').click(() => {
	$('html').animate({
		scrollTop: 0
	},850);
});

//RELOJ

let pop_up = $('#pop_up');	   	

$('#reloj').click(()=>{							//click al Boton "Reloj"
	pop_up.css("display","block");
	let reloj =  $('#pop_up div h2');
	let dia = $('#pop_up div h3');

	$(reloj).css("font-family","Verdana,Arial").css("font-weight","bold").css("font-size","30px");
	$(dia).css("font-family","Verdana,Arial").css("font-weight","bold").css("font-size","30px");	

		setInterval(()=>{
			let fecha = new Date();
			let horas = fecha.getHours(), minutos = fecha.getMinutes(), segundos = fecha.getSeconds(),dias = fecha.getDate(),
			mes = fecha.getMonth()+1,anio = fecha.getFullYear();
			reloj.html("Horario -> " + horas + " : "+ minutos +" : " + segundos);
			dia.html("Fecha -> " + dias + " / "+ mes +" / " + anio);
		},500);

});
$('#pop_up button').click(()=>{					//Cerrrar
	pop_up.css("display","none");
});
	
//CONTACTO Formulario con su validacion

let fecha = $('#nacimiento');

fecha.focus(()=>{
	fecha.datepicker();
});	

$('#cuerpo form').submit((e)=>{
	e.preventDefault();

	let nombre = $('#nombre'), apellidos = $('#apellidos'), email = $('#email'), edad = $('#edad'), sexo = $('form select'); 

	if(nombre.val().length < 3 || isNaN(nombre.val()) == false ){						//Nombre
		let parrafo = document.createElement('p');
		parrafo.innerHTML= "-Nombres no aceptables, mínimo 3 caracteres ";
		$('label[for="name"]').html("Nombre");
		$('label[for="name"]').append(parrafo);	
		$('label[for="name"]').addClass("error");
	}else{
	 $('label[for="name"]').html("Nombre");
	 $('label[for="name"]').removeClass("error");
	}

	if(apellidos.val().length <  3  || isNaN(apellidos.val()) == false ){						//Apellidos
		let parrafo = document.createElement('p');
		parrafo.innerHTML= "-Apellidos no aceptables, mínimo 3 caracteres";
		$('label[for="apellidos"]').html("Apellidos");
		$('label[for="apellidos"]').append(parrafo);	
		$('label[for="apellidos"]').addClass("error");
	}else{
		 $('label[for="apellidos"]').html("Apellidos");
		 $('label[for="apellidos"]').removeClass("error");
	} 

	if(edad.val() < 18 || isNaN(edad.val()) ){											//Edad
		let parrafo = document.createElement('p');
		parrafo.innerHTML= "-Edad no aceptada, mínimo  18 años";
		$('label[for="edad"]').html("Edad");
		$('label[for="edad"]').append(parrafo);
		$('label[for="edad"]').addClass("error");
	}else{
		$('label[for="edad"]').html("Edad");	
		$('label[for="edad"]').removeClass("error");
	} 


 	if(fecha.val().length!=10){															//Fecha de Nacimiento
 		let parrafo = document.createElement('p');
		parrafo.innerHTML= "-Fecha no aceptada, seleccione correctamente el campo";
		$('label[for="nacimiento"]').html("Nacimiento(mm/dd/yy)");
		$('label[for="nacimiento"]').append(parrafo);
		$('label[for="nacimiento"]').addClass("error");
 	}else{
 	 $('label[for="nacimiento"]').html("Nacimiento(mm/dd/yy)");
	 $('label[for="nacimiento"]').removeClass("error");
	}

 let sub = email.val().substr( (email.val().length-12) );								//ultimos 12 digitos

 	if( email.val().length<13 || (sub != "@outlook.com" && sub != "@hotmail.com") ||  email.val().match( /@/g ).length>1 ){ //Email
 		let parrafo = document.createElement('p');
		parrafo.innerHTML= "-Correo no aceptado, seleccione un correo valido ~ example@outlook.com ~ ";
		$('label[for="email"]').html("Email");
		$('label[for="email"]').append(parrafo);
		$('label[for="email"]').addClass("error");
 	}else{
 		$('label[for="email"]').html("Email");
 		$('label[for="name"]').removeClass("error");
 	} 

});


});
