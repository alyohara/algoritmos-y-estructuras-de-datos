program cuatro;

function buscar(s: string; x: string): integer;
var
   i,cant,dnd: integer;
begin
     cant:= 0;
     i:= 1;
     while (i < ord(s[0])) do // ord(s[0]) == length(s)
      begin
         dnd := pos(x,s);
         if (  dnd <> 0) then
         begin
            cant:= cant + 1;
            delete(s, 1, dnd);
            i:= i + 1;
         end
         else
             i:= i + 1;
      end;
     buscar:= cant;
end;

var
  frase: string;
  palabra: string;
begin
     writeln('Ingrese una frase: ');
     readln(frase);
     writeln('Ingrese una palabra a buscar: ');
     readln(palabra);
     writeln('La cantidad total de ocurrencias es: ', buscar(frase, palabra));
readln();
end.
