program tres;
const
     _MAX = 100;
type
    vector = array [1.._MAX] of string;

procedure cargar(var v: vector; n: integer);
var
   i: integer;
begin
     for i := 1 to n do
     begin
          writeln('Ingrese una palabra: ');
          readln(v[i]);
     end;
end;

procedure mostrar(var v: vector; n: integer);
var
   i: integer;
begin
     for i := 1 to n do
          writeln(v[i]);
end;

var
  v: vector;
begin
     cargar(v,10);
     mostrar(v,10);
readln();
end.
