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

  readln;
end.
