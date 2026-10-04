program seis;
const
    _LONG= 10;
type
    matriz= array [1.._LONG, 1.._LONG] of integer;
    vector= array [1.._LONG] of integer;

procedure mostrarVector(v: vector; cant: integer); FORWARD;

procedure cargarVector(var v: vector);
var
   i: integer;
begin
   for i := 1 to _LONG do
       v[i]:= i;
end;
procedure cargarMatriz(var m: matriz);
var
   i,j: integer;
begin
    for i:= 1 to _LONG do
       for j := 1 to _LONG do
           m[i,j] := j;
end;

function contarVector(v: vector; x: integer): integer;
var
   i,cant: integer;
begin
   cant:=0;
   for i := 1 to _LONG do
       if (v[i]= x) then
          cant:= cant + 1;
   contarVector:= cant;
end;

function contarMatriz(m: matriz; x: integer): integer;
var
   i,j,cant: integer;
begin
   cant:=0;
   for i:= 1 to _LONG do
       for j := 1 to _LONG do
           if (m[i,j]= x) then
              cant:= cant + 1;
   contarMatriz:= cant;
end;

function contarVectorMatriz(m: matriz; v: vector): integer;
var
  i,j,cant,total: integer;
begin
   cant:=0; total:= 0;
   for i:= 1 to _LONG do
   begin
       for j := 1 to _LONG do
           if (m[i,j]= v[j]) then
              cant:= cant + 1;
       if (cant = _LONG) then
       begin
           total:= total +1;
           cant:=0
       end;
   end;
   contarVectorMatriz:= total;
end;

function suprimirVector(v: vector; x: integer): vector;
var
  i,j: integer;
begin
   for j := 1 to _LONG do
       if (v[j]= x) then
             for i:= j to _LONG do
                 v[i] := v[i+1];
   suprimirVector:= v;
end;

procedure mostrarVector(v: vector; cant: integer);
var
   i: integer;
begin
    for i := 1 to cant do
       write(v[i]);
end;

var
  a: vector;
  b: matriz;
  elem: integer;
begin

   cargarVector(a);
   cargarMatriz(b);

   writeln('Ingrese un nro: ');
   readln(elem);

   writeln('Cantidad de ocurrencias en el vector: ', contarVector(a, elem));

   writeln('Cantidad de ocurrencias en la matriz: ', contarMatriz(b, elem));

   writeln('Cantidad del vector ocurrencias en la matriz: ', contarVectorMatriz(b, a));

   writeln('Nuevo vector: ');
   mostrarVector(suprimirVector(a, elem), _LONG - contarVector(a, elem));

   readln;
end.
