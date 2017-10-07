

//------------------------ funciones JS SuperSurV2 -----------------------------------------

function reloj() {
    var semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    var meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    var fecha = new Date();
    var dia = fecha.getDay();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var tiempo = "AM.";

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    if (minutos < 10) {
        minutos = "0" + minutos;
    }
    if (horas < 10 && horas != 00) {
        horas = "0" + horas;
    }
    if (horas > 12) {
        tiempo = "PM.";
        switch (horas) {
            case 13:
                horas = "01";

                break;
            case 14:
                horas = "02";

                break;
            case 15:
                horas = "03";

                break;
            case 16:
                horas = "04";

                break;
            case 17:
                horas = "05";

                break;
            case 18:
                horas = "06";

                break;
            case 19:
                horas = "07";

                break;
            case 20:
                horas = "08";

                break;
            case 21:
                horas = "09";

                break;
            case 22:
                horas = "10";

                break;
            case 23:
                horas = "11";

                break;

        }
    }

    var today = (semana[dia] + " " + fecha.getDate() + " de " + meses[fecha.getMonth()] + " de " + fecha.getFullYear());
    $('#lbl_time').html(today + ' | ' + horas + ':' + minutos + ':' + segundos + " " + tiempo);
}

setInterval("reloj()", 1000);
var pantalla = 0;

$(document).ready(function () {

    //alert("Mensaje: Hola HARES! \n\nFALTAN:\n  - Validar Campos.\n  - REPORTES y factura\n - Detalles de GUI.");

    consultar_bd('');
    consultarArticulos('');
    consultarArticuloCompra('');
    consultarClientes('');
    consultarArticulosReporte('');
    consultarClientesReporte('');
    $("#txt_fecha").datepicker();
    $("#txt_fechaInicial").datepicker();
    $("#txt_fechaFinal").datepicker();
    $("#lbl_time").datepicker();


    $("#cmb_secciones").change(function () {
        var option = document.getElementById("cmb_secciones").value;
        switch (option) {
            case "1":
                mostrarImpuestoEdit();
                break;
            case "2":
                mostrarBuscarUsuarios();
                break;
            case "3":
                mostrarRegistroUsuarios();
                break;

        }
    });


    $("#cmb_secciones2").change(function () {
        var option = document.getElementById("cmb_secciones2").value;
        switch (option) {
            case "1":
                mostrarArticulosRegistrar();
                break;
            case "2":
                mostrarArticulosBuscar();
                break;
        }

    });

    $("#cmb_secciones3").change(function () {
        var option = document.getElementById("cmb_secciones3").value;
        switch (option) {
            case "1":
                mostrarReportesInventario();
                break;
            case "2":
                mostrarReportesVentas();
                break;

        }


    });

});

//---------------------- metodos interaccion pantalla ---------------------------------

function mostrarEscritorio() {
    pantalla = 0;
    $('#Reportes').css("display", "none");
    $('#Reportes').fadeOut(100);
    $('#Usuarios').css("display", "none");
    $('#Usuarios').fadeOut(100);
    $('#Articulos').css("display", "none");
    $('#Articulos').fadeOut(100);
    $('#Ventas').css("display", "none");
    $('#Ventas').fadeOut(100);
    $('#fondo').fadeIn(300);

}

function mostrarVentas() {
    pantalla = 1;
    $('#Reportes').css("display", "none");
    $('#Reportes').fadeOut(100);
    $('#fondo').css("display", "none");
    $('#fondo').fadeOut(100);
    $('#Articulos').css("display", "none");
    $('#Articulos').fadeOut(100);
    $('#Usuarios').css("display", "none");
    $('#Usuarios').fadeOut(100);
    $('#VentasFactura').css("display", "none");
    $('#VentasFactura').fadeOut(100);
    $('#cliente').css("display", "none");
    $('#cliente').fadeOut(100);
    $('#buscarCompras').fadeIn(100);
    $('#Ventas').fadeIn(100);
}

function mostrarVentasFactura() {
    pantalla = 2;
    $('#cliente').css("display", "none");
    $('#cliente').fadeOut(100);
    $('#buscarCompras').css("display", "none");
    $('#buscarCompras').fadeOut(100);
    $('#VentasFactura').fadeIn(100);
}

function mostrarArticulos() {
    pantalla = 3;
    $('#Reportes').css("display", "none");
    $('#Reportes').fadeOut(100);
    $('#fondo').css("display", "none");
    $('#fondo').fadeOut(100);
    $('#Usuarios').css("display", "none");
    $('#Usuarios').fadeOut(100);
    $('#Ventas').css("display", "none");
    $('#Ventas').fadeOut(100);
    $('#Articulos').fadeIn(300);

}

function mostrarArticulosBuscar() {

    $("#registrarArticulo").css("display", "none");
    $('#registrarArticulo').fadeOut(100);
    $('#buscarArticulo').fadeIn(100);
}

function mostrarArticulosRegistrar() {

    $("#buscarArticulo").css("display", "none");
    $('#buscarArticulo').fadeOut(100);
    $('#registrarArticulo').fadeIn(100);
}

function mostrarReportes() {
    pantalla = 4;
    $('#fondo').css("display", "none");
    $('#fondo').fadeOut(100);
    $('#Usuarios').css("display", "none");
    $('#Usuarios').fadeOut(100);
    $('#Ventas').css("display", "none");
    $('#Ventas').fadeOut(100);
    $('#Articulos').css("display", "none");
    $('#Articulos').fadeOut(100);
    $('#Reportes').fadeIn(100);

}

function mostrarReportesInventario() {
    $("#reportesVentas").css("display", "none");
    $('#reportesVentas').fadeOut(100);
    $('#reportesInventarios').fadeIn(100);
}

function mostrarReportesVentas() {
    $("#reportesInventarios").css("display", "none");
    $('#reportesInventarios').fadeOut(100);
    $('#reportesVentas').fadeIn(100);
}

function mostrarUsuarios() {
    pantalla = 5;
    $('#Reportes').css("display", "none");
    $('#Reportes').fadeOut(100);
    $("#registrar").css("display", "none");
    $('#registrar').fadeOut(100);
    $('#fondo').css("display", "none");
    $('#fondo').fadeOut(100);
    $('#Articulos').css("display", "none");
    $('#Articulos').fadeOut(100);
    $('#Ventas').css("display", "none");
    $('#Ventas').fadeOut(100);
    $("#buscar").css("display", "none");
    $('#buscar').fadeOut(100);
    $('#impuesto').fadeIn(100);
    $('#Usuarios').fadeIn(300);

}

function mostrarImpuestoEdit() {
    $("#registrar").css("display", "none");
    $('#registrar').fadeOut(100);
    $("#buscar").css("display", "none");
    $('#buscar').fadeOut(100);
    $('#impuesto').fadeIn(100);
}

function mostrarBuscarUsuarios() {
    $("#impuesto").css("display", "none");
    $('#impuesto').fadeOut(100);
    $("#registrar").css("display", "none");
    $('#registrar').fadeOut(100);
    $('#buscar').fadeIn(100);
}

function mostrarRegistroUsuarios() {
    $("#impuesto").css("display", "none");
    $('#impuesto').fadeOut(100);
    $("#buscar").css("display", "none");
    $('#buscar').fadeOut(100);
    $('#registrar').fadeIn(100);
}

function mostrarCliente() {
    pantalla = 2;
    $('#VentasFactura').css("display", "none");
    $('#VentasFactura').fadeOut(100);
    $('#cliente').fadeIn(100);
}


//----------------------------- carga dinamica de imagenes desde fileUpload----------------------

function visualizar() {


    var preview = document.getElementById('pic');
    var file = document.getElementById('flu_foto').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }


    if (file) {
        reader.readAsDataURL(file);

    } else {
        preview.src = "";
    }



}

function visualizarArticulo() {


    var preview = document.getElementById('picArticulo');
    var file = document.getElementById('file_articulo').files[0];
    var reader = new FileReader();

    reader.onloadend = function () {
        preview.src = reader.result;
    }


    if (file) {
        reader.readAsDataURL(file);

    } else {
        preview.src = "";
    }



}

//----------------------------------- limpia registros -----------------------------------------

function limpieza() {
    document.getElementById("txt_buscarArticulo").value = "";
    document.getElementById("txt_buscar").value = "";
    document.getElementById("txt_buscarCompra").value = "";
    document.getElementById("txt_usuario").value = "";
    document.getElementById("txt_password").value = "";
    document.getElementById("txt_email").value = "";
    document.getElementById("txt_codigo").value = "";
    document.getElementById("txt_unidad").value = "";
    document.getElementById("txt_nombreArticulo").value = "";
    document.getElementById("txt_cantidad").value = "";
    document.getElementById("txt_precio").value = "";
    document.getElementById("picArticulo").src = "";
    document.getElementById("pic").src = "";



}

//--------------------------- metodos para detalles de venta y facturacion --------------------------------------

function capturar() {

    var fila = [""];
    var cont = 0;

    // Obtiene valores contenidos en los <td> de la fila
    // seleccionada
    $(".botonSelect").click(function () {

        var fila = [""];
        var cont = 0;

        // Obtiene los valores contenidos en los <td> de la fila
        // seleccionada
        $(this).parents("tr").find("td").each(function () {
            fila[cont] = $(this).html();
            cont = cont + 1;
        });

        limpieza();

        switch (pantalla) {

            case 0://escritorio

                break;
            case 1://venta 
                if (parseInt(fila[2]) < 20) {
                    $('#lbl_notifica').html("Productos en baja existencia!");
                    $('#lbl_notifica').css("text-align", "center");
                    $('#lbl_notifica').fadeOut(0).fadeIn(500).fadeOut(11000);
                }
                listarPedido(fila[0], fila[2], fila[3], fila[4]);//captura Pedidos
                consultarArticuloCompra('');
                break;
            case 2://factura
                document.getElementById("txt_cedula").value = fila[0];
                document.getElementById("txt_cliente").value = fila[1];
                document.getElementById("txt_telefono").value = fila[2];
                consultarClientes("");
                break;
            case 3://inventario

                document.getElementById("txt_codigo").value = fila[0];
                document.getElementById("txt_unidad").value = fila[1];
                document.getElementById("txt_nombreArticulo").value = fila[2];
                document.getElementById("txt_cantidad").value = fila[3];
                document.getElementById("txt_precio").value = fila[4];
                document.getElementById("picArticulo").src = "/rsc/fotos/" + fila[5];
                if (parseInt(fila[3]) < 20) {
                    $('#lbl_notifica').html("Productos en baja existencia!");
                    $('#lbl_notifica').css("text-align", "center");
                    $('#lbl_notifica').fadeOut(0).fadeIn(500).fadeOut(11000);
                }
                if (fila[6] == "0") {
                    document.getElementById("CheckBox_estadoArticulo").checked = false;
                }
                mostrarArticulosRegistrar();
                consultarArticulos('');
                break;
            case 4://reportes
                document.getElementById("txt_porCodigo").value = fila[0];
                document.getElementById("txt_porCedula").value = fila[0];
                break;
            case 5://configuracion-usuarios

                document.getElementById("txt_usuario").value = fila[0];
                document.getElementById("txt_email").value = fila[1];
                document.getElementById("pic").src = "/rsc/fotos/" + fila[2];
                mostrarRegistroUsuarios();
                consultar_bd('');
                break;

        }

    });
}

function viewFoto() {
    $(".fotoView").fadeIn(100);
    var fila = [""];
    var cont = 0;

    // Obtener todos los valores contenidos en los <td> de la fila
    // seleccionada
    $(".botonView").click(function () {

        var fila = [""];
        var cont = 0;

        // Obtener todos los valores contenidos en los <td> de la fila
        // seleccionada
        $(this).parents("tr").find("td").each(function () {
            fila[cont] = $(this).html();
            cont = cont + 1;
        });

        limpieza();

        switch (pantalla) {


            case 1://venta 
                document.getElementById("fotoArticulo").src = "/rsc/fotos/" + fila[5];
                document.getElementById("t_articulo").value = "Descrip: " + fila[2];

                break;

            case 2: // factura
                document.getElementById("txt_cedula").value = fila[0];
                document.getElementById("txt_cliente").value = fila[1];
                document.getElementById("txt_telefono").value = fila[2];
                consultarClientes("");
                break;
            case 3://inventario
                document.getElementById("fotoInventario").src = "/rsc/fotos/" + fila[5];
                document.getElementById("t_producto").value = "Descrip: " + fila[2];
                break;
            case 4://reportes
                document.getElementById("txt_porCodigo").value = fila[0];

                break;
            case 5://configuracion-usuarios-impuestoEdit

                document.getElementById("foto_user").src = "/rsc/fotos/" + fila[2];
                document.getElementById("t_user").value = "Usuario: " + fila[0];
                break;

        }

    });
}

function aumentarCantidad(codigo) {
    var aumentar = false;
    $("#tabladatos tbody tr").each(function (index) {
        var codigos;
        $(this).children("td").each(function (index2) {
            switch (index2) {
                case 1: codigos = $(this).text();
                    if (codigos == codigo) {
                        aumentar = true;
                    }
                    break;
                default:
                    break;
            }
        })
    })

    return aumentar;
}

function tablaNueva(codigoArticulo, cantiEnVenta, cantidadNew, precioArticulo, impuesto) {
    // alert("codigo: " + codigoArticulo + "\n cantidad: " + cantidadNew + "\n precio: " + precioArticulo + "\n impuesto: " + impuesto)
    var tabla = document.getElementById("cuerpotabla");
    var numPedidosV = [""]; var codigosV = [""]; var cantidadesV = [""]; var subtotalesV = [""]; var totalesV = [""];
    var mensaje = false;
    $("#tabladatos tbody tr").each(function (index) {

        var codigos; var cantidades; var subtotales; var totales;

        $(this).children("td").each(function (index2) {
            if ($(this).text() != "") {

                switch (index2) {
                    case 0:
                        numPedido = $(this).text();
                        numPedidosV[index] = numPedido;
                        break;
                    case 1:
                        codigos = $(this).text();
                        codigosV[index] = codigos;
                        break;
                    case 2:
                        cantidades = $(this).text();
                        if (codigoArticulo == codigos) {
                            cantidades = parseInt(cantidades) + parseInt(cantidadNew);
                            if (cantidades < cantiEnVenta) {
                                cantidadesV[index] = cantidades;
                            } else {
                                cantidadesV[index] = cantiEnVenta;
                                mensaje = true;
                            }

                        }
                        cantidadesV[index] = cantidades;
                        break;
                    case 3:
                        subtotales = $(this).text();
                        if (codigoArticulo == codigos) {
                            subtotales = cantidades * parseFloat(precioArticulo);
                        }
                        subtotalesV[index] = subtotales;
                        break;
                    case 4:
                        totales = $(this).text();
                        if (codigoArticulo == codigos) {
                            totales = (((subtotales / 100) * parseFloat(impuesto)) + subtotales);
                        }
                        totalesV[index] = totales;
                        break;
                    default:
                        break;
                }
            }
        })

    })
    if (mensaje == true) {
        alert("Mensaje! \n\n Esa cantidad supera el inventario.");
        $("#txt_cantidadCompra").css("background-color", "red");
        $("#txt_cantidadCompra").css("color", "white");
    } else {
        $("#txt_cantidadCompra").css("background-color", "white");
        $("#txt_cantidadCompra").css("color", "black");
        tabla.innerHTML = "";
        for (var i = 0; i < numPedidosV.length; i++) {
            if (numPedidosV[i] != "") {
                tabla.innerHTML += "<tr><td>" + numPedidosV[i] + "</td><td>" + codigosV[i] + "</td><td>" +
               cantidadesV[i] + "</td><td>" + subtotalesV[i] + "</td><td>" + totalesV[i] + "</td>" +
               "<td><input type='button' id='btn_descartarPedido' class='botonDescart' ondblclick='deslistarPedido()' /></td>" +
               "</tr>";
            }
        }
    }
}

function totales() {
    var subtotalAll = 0.0; var totalAll = 0.0;
    $("#tabladatos tbody tr").each(function (index) {

        var subtotales = 0.0; var totales = 0.0;

        $(this).children("td").each(function (index2) {

            switch (index2) {
                case 3:
                    subtotalAll += parseFloat($(this).text());
                    break;
                case 4:
                    totalAll += parseFloat($(this).text());
                    break;
                default:
                    break;
            }

        })

    })

    document.getElementById("t_impuesto").value = totalAll - subtotalAll;
    document.getElementById("t_subtotal").value = subtotalAll;
    document.getElementById("t_total").value = totalAll;
}

function listarPedido(codigoArticulo, cantiEnVenta, nombre, precio) {
    var cantidad = parseInt(document.getElementById("txt_cantidadCompra").value);
    cantidad = parseInt(cantidad);
    if (cantidad > 0) {
        elemento = document.getElementById("cuerpotabla");
        var numPedido; var subtotal = 0.0; var total = 0.0; var impuesto = parseInt(document.getElementById("t_impuestoPantalla").value);
        var fecha = new Date();
        var dia = fecha.getDay();
        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var milisegundos = fecha.getMilliseconds();
        numPedido = "PV-" + dia + horas + minutos + segundos + milisegundos;
        if (cantidad < cantiEnVenta) {
            $("#txt_cantidadCompra").css("background-color", "white");
            $("#txt_cantidadCompra").css("color", "black");
            if (aumentarCantidad(codigoArticulo) == false) {

                subtotal = (precio * cantidad);
                total = ((subtotal / 100) * impuesto) + subtotal;

                elemento.innerHTML += "<tr><td>" + numPedido + "</td><td>" + codigoArticulo + "</td><td>" +
                cantidad + "</td><td>" + subtotal + "</td><td>" + total + "</td>" +
                "<td><input type='button' id='btn_descartarPedido' class='botonDescart' ondblclick='deslistarPedido()' /></td>" +
                "</tr>";
            } else {
                tablaNueva(codigoArticulo, cantiEnVenta, cantidad, precio, impuesto);
            }
        } else {
            alert("Mensaje!\n\n No cuenta con esa cantidad de articulos");
            $("#txt_cantidadCompra").css("background-color", "red");
            $("#txt_cantidadCompra").css("color", "white");
        }

        totales();
        document.getElementById("txt_cantidadCompra").value = "";
    } else {
       // alert("Mensaje!\n\n No has indicado la cantidad para este articulo.\n Prueba con un numero mayor a 0.");
        $('#msg').html(" No has indicado la cantidad para este articulo.\n Prueba con un numero mayor a 0.");
        $('#msg').css("background", "#FF9900");
        $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
    }
}

function deslistarPedido() {

    var tabla = document.getElementById("cuerpotabla");
    var numPedidosV = [""]; var codigosV = [""]; var cantidadesV = [""]; var subtotalesV = [""]; var totalesV = [""];
    var fila = [""];
    var cont = 0;

    $(".botonDescart").click(function () {
        $(this).parents("tr").find("td").each(function () {
            fila[cont] = $(this).html();
            cont = cont + 1;
        });

        var quitar = fila[0]

        $("#tabladatos tbody tr").each(function (index) {

            var codigos; var cantidades; var subtotales; var totales;


            $(this).children("td").each(function (index2) {
                if ($(this).text() != "") {
                    switch (index2) {
                        case 0:
                            numPedido = $(this).text();
                            if (quitar != numPedido) {
                                numPedidosV[index] = numPedido;
                            }

                            break;
                        case 1:
                            codigos = $(this).text();
                            if (quitar != numPedido) {
                                codigosV[index] = codigos;
                            }
                            break;
                        case 2:
                            cantidades = $(this).text();
                            if (quitar != numPedido) {
                                cantidadesV[index] = cantidades;
                            }
                            break;
                        case 3:
                            subtotales = $(this).text();
                            if (quitar != numPedido) {
                                subtotalesV[index] = subtotales;
                            }
                            break;
                        case 4:
                            totales = $(this).text();
                            if (quitar != numPedido) {
                                totalesV[index] = totales;
                            }
                            break;
                        default:
                            break;
                    }
                }
            })

        })
        tabla.innerHTML = "";
        for (var i = 0; i < numPedidosV.length; i++) {
            if (numPedidosV[i] != "") {
                tabla.innerHTML += "<tr><td>" + numPedidosV[i] + "</td><td>" + codigosV[i] + "</td><td>" +
               cantidadesV[i] + "</td><td>" + subtotalesV[i] + "</td><td>" + totalesV[i] + "</td>" +
               "<td><input type='button' id='btn_descartarPedido' class='botonDescart' ondblclick='deslistarPedido()' /></td>" +
               "</tr>";
            }
        }

        totales();
    });


}

function gestionaPedido() {

    var tabla = document.getElementById("cuerpotabla");
    var numPedidosV = [""]; var codigosV = [""]; var cantidadesV = [""]; var subtotalesV = [""]; var totalesV = [""];

    $("#tabladatos tbody tr").each(function (index) {

        var numPedido; var codigos; var cantidades; var subtotales; var totales;

        $(this).children("td").each(function (index2) {
            if ($(this).text() != "") {

                switch (index2) {
                    case 0:
                        numPedido = $(this).text();
                        numPedidosV[index] = numPedido;
                        break;
                    case 1:
                        codigos = $(this).text();
                        codigosV[index] = codigos;
                        break;
                    case 2:
                        cantidades = $(this).text();
                        cantidadesV[index] = cantidades;
                        break;
                    case 3:
                        subtotales = $(this).text();
                        subtotalesV[index] = subtotales;
                        break;
                    case 4:
                        totales = $(this).text();
                        totalesV[index] = totales;

                        break;
                    default:
                        break;

                }



            }

        })

    })
    var tabla = document.getElementById("cuerpotabla");
    tabla.innerHTML = "";
    var factura;
    var fecha = new Date();
    var dia = fecha.getDay();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    var milisegundos = fecha.getMilliseconds();

    var factura = "SV" + dia + horas + minutos + segundos + milisegundos;

    guardaCliente(factura);

    for (var i = 0; i < numPedidosV.length; i++) {
        if (numPedidosV[i] != "") {
            guardarPedido(numPedidosV[i], cantidadesV[i], subtotalesV[i], totalesV[i], codigosV[i], factura);
        }
    }

    generaReportes(6, factura);
    document.getElementById("t_impuesto").value = "0.0";
    document.getElementById("t_subtotal").value = "0.0";
    document.getElementById("t_total").value = "0.0";

}

//------------------ metodos productos---------------------------------------
function productosDebaja() {

    $("#tabladatos tbody tr").each(function (index) {

        var subtotales = 0.0; var totales = 0.0;

        $(this).children("td").each(function (index2) {

            switch (index2) {
                case 3:
                    subtotalAll += parseFloat($(this).text());
                    break;
                case 4:
                    totalAll += parseFloat($(this).text());
                    break;
                default:
                    break;
            }

        })

    })
}

//---------------------metodos reportes ---------------------------------------------
function generaReportes(tipo, codFact) {
    switch (tipo) {
        case 1://producto por codigo
            var cod = document.getElementById("txt_porCodigo").value;

            if (cod != "") {
                window.open('frm_Reportes.aspx?reporte=ProCod&cod=' + cod + '');
            } else {
                $('#msg').html("Indique el codigo!");
                $('#msg').css("background", "#C00000");
                $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
            }

            break;
        case 2://productos ordenados por codigo
            window.open('frm_Reportes.aspx?reporte=allReport');
            break;
        case 3:
            window.open('frm_Reportes.aspx?reporte=downExists');
            break;
        case 4://por cliente
            var ced = document.getElementById("txt_porCedula").value;

            if (ced != "") {
                window.open('frm_Reportes.aspx?reporte=factClient&ced=' + ced + '');
            } else {
                $('#msg').html("Indique la cedula!");
                $('#msg').css("background", "#C00000");
                $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
            }



            break;
        case 5://factura entre fechas
            var fechaInicial = document.getElementById("txt_fechaInicial").value;
            var fechaFinal = document.getElementById("txt_fechaFinal").value;
            if (fechaInicial != "" && fechaFinal != "") {
                window.open('frm_Reportes.aspx?reporte=factDate&date1=' + fechaInicial + '&date2=' + fechaFinal + '');
            } else {
                $('#msg').html("Complete ambas fechas!");
                $('#msg').css("background", "#C00000");
                $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
            }
            break;
        case 6://factura
            window.open('frm_Reportes.aspx?reporte=fact&codFact=' + codFact + '');
            break;


    }


}

//------------------------ metodos AJAX SuperSurV2 -----------------------------------------

function consultar_bd(param) {
    $(document).ready(function () {
        $.ajax({
            url: 'frm_motorBusqueda.aspx?parametro=' + param + '&parametro2=0',
            cache: false,
            type: "GET",
            success: function (datos) {
                $("#listview").html(datos);
            }
        });
    });
}

function consultarArticulos(param) {
    $(document).ready(function () {
        $.ajax({
            url: 'frm_motorBusqueda.aspx?parametro=' + param + '&parametro2=1',
            cache: false,
            type: "GET",
            success: function (datos) {
                $("#listview1").html(datos);

            }
        });
    });
}

function consultarArticulosReporte(param) {
    $(document).ready(function () {
        $.ajax({
            url: 'frm_motorBusqueda.aspx?parametro=' + param + '&parametro2=4',
            cache: false,
            type: "GET",
            success: function (datos) {
                $("#listview5").html(datos);

            }
        });
    });
}

function consultarArticuloCompra(param) {
    $(document).ready(function () {
        $.ajax({
            url: 'frm_motorBusqueda.aspx?parametro=' + param + '&parametro2=2',
            cache: false,
            type: "GET",
            success: function (datos) {
                $("#listview2").html(datos);
            }
        });
    });
}

function consultarClientes(param) {
    $(document).ready(function () {
        $.ajax({
            url: 'frm_motorBusqueda.aspx?parametro=' + param + '&parametro2=3',
            cache: false,
            type: "GET",
            success: function (datos) {
                $("#listview4").html(datos); 
                
            }
        });
    });
}

function consultarClientesReporte(param) {
    $(document).ready(function () {
        $.ajax({
            url: 'frm_motorBusqueda.aspx?parametro=' + param + '&parametro2=5',
            cache: false,
            type: "GET",
            success: function (datos) {
                $("#listview7").html(datos);

            }
        });
    });
}

function gestionUsuario(comportamiento) {
    var user = document.getElementById("txt_usuario").value;
    var pass = document.getElementById("txt_password").value;
    var file = document.getElementById("flu_foto").value;
    var email = document.getElementById("txt_email").value;
    var fecha = document.getElementById("txt_fecha").value;
    var estado = document.getElementById("check_Activo").value;
    var foto = file.split("\\");
    // alert(foto[foto.length - 1]);

    if (estado == "on") {
        estado = "1";
    } else {
        estado = "0";
    }

    $(document).ready(function () {
        $.ajax({
            url: 'frm_SuperSur.aspx?user=' + user + '&pass=' + pass + '&foto=' + foto + '&email=' + email + '&fecha=' + fecha + '&estado=' + estado + '&comportamiento=' + comportamiento,
            cache: false,
            type: "GET",
            success: function (datos) {
                consultar_bd('');
                $("#listview").html(datos);
                $('#msg').html(" Realizado con exito!");
                $('#msg').css("background", "#29CC70");
                $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
                limpieza();

            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                consultar_bd('');
                $('#msg').append("Sin exito!");
                $('#msg').css("background", "#C00000");
                $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
            }
        });
    });
}

function guardarPedido(numPedido, cantidad, subtotal, total, codigoArticulo, codigo) {


    $.ajax({
        url: 'frm_SuperSur.aspx?numPedido=' + numPedido + '&cantidad=' + cantidad + '&subtotal=' + subtotal + '&total=' + total + '&codigoArticulo=' + codigoArticulo + '&factura=' + codigo,
        cache: false,
        type: "GET",
        success: function (datos) {
            $("#listview2").html(datos);

            document.getElementById("t_impuesto").value = "0.0";
            document.getElementById("t_subtotal").value = "0.0";
            document.getElementById("t_total").value = "0.0";


        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {

            $('#msg').html("Sin exito!");
            $('#msg').css("background", "#C00000");
            $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
        }
    });


}

function guardaCliente(codigo) {

    var id = document.getElementById("txt_cedula").value;
    var nombre = document.getElementById("txt_cliente").value;
    var telefono = document.getElementById("txt_telefono").value;
    if (id > 0) {


        $.ajax({
            url: 'frm_SuperSur.aspx?id=' + id + '&nombre=' + nombre + '&telefono=' + telefono + '&codigo=' + codigo,
            cache: false,
            type: "GET",
            success: function (datos) {
                consultarClientes('');
                $("#listview4").html(datos);
                $('#msg').html(" Realizado con exito!");
                $('#msg').css("background", "#29CC70");
                $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);


            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                consultarClientes('');
                $('#msg').html("Sin exito!");
                $('#msg').css("background", "#C00000");
                $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
            }
        });

    } else {
        $('#msg').html("Faltan los datos del cliente!");
        $('#msg').css("background", "#1F8DB1");
        $('#msg').fadeOut(0).fadeIn(500).fadeOut(11000);
    }
}