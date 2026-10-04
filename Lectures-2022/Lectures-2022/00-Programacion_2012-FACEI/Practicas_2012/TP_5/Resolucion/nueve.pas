program nueve;
const
    _LONG= 10;
type
    vector= array [1.._LONG] of integer;

procedure cargarVector(var v: vector);
var
   i: integer;
begin
   for i := 1 to _LONG do
       v[i]:= i;
end;

function promediarVector(v: vector): real;
var
   i,cant: integer;
begin
   cant:=0;
   for i := 1 to _LONG do
       cant:= cant + v[i];

   promediarVector:= cant/_LONG;
end;

var
  a: vector;
begin

   cargarVector(a);

   writeln('Promedio del vector: ', promediarVector(a):4:4);

   readln;
end.
