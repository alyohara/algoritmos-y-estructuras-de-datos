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
