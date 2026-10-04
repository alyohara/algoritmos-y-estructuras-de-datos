program uno;

function esDivisible(a,i: integer): boolean;
begin
     result := (a mod i) = 0;
end;

var
  i,a:integer;
begin
   write('escriba un numero: ');
   readln(a);
   write('escriab el divisor: ');
   readln(i);
   if (esDivisible(a,i)) then
      writeln(a,' es divisible por ',i)
   else
      writeln(a,' no es divisible por ',i);

readln();
end.

