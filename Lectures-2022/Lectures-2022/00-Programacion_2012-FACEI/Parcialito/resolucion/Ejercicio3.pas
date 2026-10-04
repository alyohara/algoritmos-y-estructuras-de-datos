program Ejercicio3;

{$APPTYPE CONSOLE}
{Hacer un programa que lea de teclado dos fechas (representar el tipo de dato Fecha como un
registro (da, mes, a~no)) e imprima por pantalla la distancia entre dos fechas (en das, en meses, y
en fechas).}
uses
  SysUtils;

type
  fecha = record
            dia: integer;
            mes: integer;
            anio: integer;
          end;
var
  fecha1, fecha2, resultado: fecha;
  diasFecha1, diasFecha2, diasDiferencia: integer;

begin
  //Lectura por teclado de las dos fechas
  readln(fecha1.dia);
  readln(fecha1.mes);
  readln(fecha1.anio);
  readln(fecha2.dia);
  readln(fecha2.mes);
  readln(fecha2.anio);

  diasFecha1 := fecha1.dia + fecha1.mes * 30 + fecha1.anio * 365;
  diasFecha2 := fecha2.dia + fecha2.mes * 30 + fecha2.anio * 365;

  diasDiferencia := abs(diasFecha1 - diasFecha2);

  //Convierto a formato fecha la cantidad de dias de diferencia
  resultado.anio := diasDiferencia div 365;
  resultado.mes := (diasDiferencia mod 365) div 30;
  resultado.dia := (diasDiferencia mod 365) mod 30;

  write('La diferencia entre las dos fechas son: ');
  write(resultado.anio);
  write(' años, ');
  write(resultado.mes);
  write(' meses y ');
  write(resultado.dia);
  write(' dias');

  readln;

end.
 