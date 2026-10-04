program siete;
const
    _LONG= 255;
type
    conjunto= set of 1.._LONG;

function intersecion (a,b: conjunto): conjunto;
var
   i: integer;
   inter: conjunto;
begin
   inter:= [];
   for i:= 1 to _LONG  do
       if (i in a) and (i in b) then
          inter:=  inter + [i];
   intersecion:= inter;
end;

procedure mostrarConjunto(c: conjunto);
var
  i: integer;
begin
  for i:= 1 to _LONG do
      if (i in c) then
         writeln(i);
end;

var
  a,b,res: conjunto;
begin
   a:= [1,2,3,4,5,6,7,8,9,0];
   b:= [2,3,4,6,8];

   res:= intersecion(a,b);

   mostrarConjunto(res);

   readln;
end.


