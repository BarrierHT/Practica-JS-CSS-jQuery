$(document).ready(()=>{

	//CAMBIAR TEMA

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

$('#reloj').click(()=>{
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
$('#pop_up button').click(()=>{
	pop_up.css("display","none");
});	
	 
});

let acordeon = (id)=>{

	$(id).slideDown('slow');
	if(id == "#texto1"){
		$('#texto2').slideUp('slow');
		$('#texto3').slideUp('slow');
	}
	else if(id == "#texto2"){
		$('#texto1').slideUp('slow');
		$('#texto3').slideUp('slow');
	}
	else {
		$('#texto1').slideUp('slow');
		$('#texto2').slideUp('slow');
	}

};