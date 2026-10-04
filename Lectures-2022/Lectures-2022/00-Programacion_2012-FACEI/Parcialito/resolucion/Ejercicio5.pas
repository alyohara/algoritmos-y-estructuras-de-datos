program Ejercicio5;

{$APPTYPE CONSOLE}
{Desarrollar un programa que convierta una cantidad entera de das al formato a~no, mes y da.}
uses
  SysUtils;

var
  dias: integer;

begin
  //Lectura por teclado de la cantidad de dias
  readln(dias);
  write('Años: ');
  writeln(dias div 365);

  write('Meses: ');
  writeln((dias mod 365) div 30);

  write('Dias: ');
  writeln((dias mod 365) mod 30);

  readln;
end.
