program dos;

function sign(a: integer): integer;
begin
     if (a > 0) then
        sign := 1
     else
         sign := -1;
end;

function esPar(a: integer): integer;
begin
     result := (a mod 2) + 1 * sign(a);
end;

var
  a:integer;
begin
   write('escriba un numero: ');
   readln(a);
   case esPar(a) of
        2:   writeln('Es impar y positivo.');
        1:   writeln('Es par y positivo.');
       -1:   writeln('Es par y negativo.');
       -2:   writeln('Es impar y negativo.');
   end;
readln();
end.
