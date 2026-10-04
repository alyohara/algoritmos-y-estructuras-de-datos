program ocho;
const
    _LONG= 10;
type
    tipo_dato = integer;
    matriz= array [1.._LONG, 1.._LONG] of tipo_dato;

procedure mostrarMatriz(m: matriz); FORWARD;

procedure cargarMatriz(var m: matriz);
var
   i,j: integer;
begin
    for i:= 1 to _LONG do
       for j := 1 to _LONG do
           m[i,j] := j;
end;

function multiplicarMatriz(m: matriz; x: tipo_dato): matriz;
var
   i,j: integer;
begin
   for i:= 1 to _LONG do
       for j := 1 to _LONG do
           m[i,j]:= m[i,j] * x;
   multiplicarMatriz:= m;
end;

procedure mostrarMatriz(m: matriz);
var
   i,j: integer;
begin
    for i := 1 to _LONG do
     begin
       for j:= 1 to _LONG do
           write(m[i,j]);
       writeln('');
    end;
end;

var
  m: matriz;
  esc: tipo_dato;
begin

   cargarMatriz(m);

   writeln('Ingrese un nro: ');
   readln(esc);

   writeln('Matriz resultante: ');
   mostrarMatriz(multiplicarMatriz(m, esc));

   readln;
end.


