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
