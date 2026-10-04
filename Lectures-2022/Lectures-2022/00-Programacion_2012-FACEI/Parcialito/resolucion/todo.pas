program Ejercicio1;

{$APPTYPE CONSOLE}

{Dados dos arreglos de numeros enteros previamente ordenado de longitud N (constante), cree un
nuevo arreglo con los datos de los dos arreglos mezclados de manera que queden igualmente orde-
nados. Luego imprima por pantalla el arreglo resultante.}

uses
  SysUtils;

const
  N = 4;
type
  datos = array [1..N] of integer;
  resultados = array [1..2*N] of integer;

var
  A, B: datos;
  R: resultados;

  i, ai, bi: integer;
begin
  //Carga de datos, esto lo pueden suponer cargado y ordenado en formar ascedentes
  for i:=1 to N do
  begin
    readln(A[i]);
    readln(B[i]);
  end;

  //Corazón del ejercicio
  ai := 1;
  bi := 1;
  for i:=1 to 2*N do
  begin

    if ((A[ai] > B[bi]) and (bi <= N)) or (ai > N) then
    begin
      R[i] := B[bi];
      bi := bi + 1;
    end
    else //El elemento de A es mas pequeño
    begin
      R[i] := A[ai];
      ai := ai + 1;
    end;
  end;

  //Impresion del vector resultante
  for i:=1 to 2*N do
    writeln(R[i]);

  readln(A[1]);





  { TODO -oUser -cConsole Main : Insert code here }
end.

program Ejercicio2a;

{$APPTYPE CONSOLE}

{Dadas dos matrices A y B de N x N elementos:
     a- Calcular la suma de A y B. }

uses
  SysUtils;

const
  N = 2;
type
  matriz = array [1..N, 1..N] of integer;
var
  A, B, Resultado: matriz;

  i,j: integer;
begin
  //Carga de datos, esto lo pueden suponer cargado
  for i:=1 to N do
    for j:=1 to N do
    begin
      readln(A[i,j]);
      readln(B[i,j]);
    end;

  //Corazón del ejercicio
  for i:=1 to N do
    for j:=1 to N do
    begin
      Resultado[i,j] := A[i,j] + B[i,j];
    end;

  //Impresion del resultado
  writeln;
  writeln('Impresion del resultado:');
  for i:=1 to N do
  begin
    for j:=1 to N do
    begin
      write(Resultado[i,j]);
      write(' - ');
    end;
    writeln;
  end;


  readln;
end.

program Ejercicio2b;

{$APPTYPE CONSOLE}

{Dadas dos matrices A y B de N x N elementos:
     b- Calcular el producto de A por B. }

uses
  SysUtils;

const
  N = 2;
type
  matriz = array [1..N, 1..N] of integer;
var
  A, B, Resultado: matriz;

  i,j,h,suma: integer;
begin
  //Carga de datos, esto lo pueden suponer cargado
  for i:=1 to N do
    for j:=1 to N do
    begin
      readln(A[i,j]);
      readln(B[i,j]);
    end;

  //Corazón del ejercicio
  for i:=1 to N do
    for j:=1 to N do
    begin
      suma := 0;
      for h:=1 to N do
        suma := suma + (A[i,h] * B[h,j]);
      Resultado[i,j] := suma;
    end;

  //Impresion del resultado
  writeln;
  writeln('Impresion del resultado:');
  for i:=1 to N do
  begin
    for j:=1 to N do
    begin
      write(Resultado[i,j]);
      write(' - ');
    end;
    writeln;
  end;


  readln;
end.

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
 
 program ejercicio4;

{$APPTYPE CONSOLE}

{Crear un tipo de dato conjunto extendido que permita permita guardar (de algun modo) mas de
un elemento del mismo tipo y escribir un programa que permita la carga de datos y los muestre.}

uses
  SysUtils;

const
  N = 100;
type
  conjuntoExtendido = record
                        datos: array[1..N] of integer;
                        cantidad: integer;
                      end;
var
  conjunto: conjuntoExtendido;
  valor: string;
  i: integer;
begin
  writeln('Ingrese ls valores enteros (para finalizar la carga ingrese el valor 00)');
  //carga de datos
  conjunto.cantidad := 0;
  readln(valor);
  while (valor <> '00') do
  begin
    conjunto.cantidad := conjunto.cantidad + 1;
    conjunto.datos[conjunto.cantidad] := strToInt(valor);
    readln(valor);
  end;

  //Impresion datos
  for i:=1 to conjunto.cantidad do
    writeln(conjunto.datos[i]);

  readln;
end.

program Ejercicio5;

{$APPTYPE CONSOLE}
{Desarrollar un programa que convierta una cantidad entera de das al formato a~no, mes y da.}
uses
  SysUtils;

var
  dias: integer;

begin
  //Lectura por teclado de la cantidad de dias
  readln(dias);
  write('Años: ');
  writeln(dias div 365);

  write('Meses: ');
  writeln((dias mod 365) div 30);

  write('Dias: ');
  writeln((dias mod 365) mod 30);

  readln;
end.
