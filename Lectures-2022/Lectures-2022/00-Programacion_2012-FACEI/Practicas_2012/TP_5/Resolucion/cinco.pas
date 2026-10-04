program cinco;
const
     _LONG = 8;
type
    passwd = array [1.._LONG] of char;

function codificar(x: string): passwd;
var
   i: integer;
begin
     for i:= 1 to ord(x[0]) do // ord(x[0]) == length(x)
      case x[i] of
           'A': x[i]:= '1';
           'E': x[i]:= '2';
           'I': x[i]:= '3';
           'O': x[i]:= '4';
           'U': x[i]:= '5';
           else
                x[i]:= x[i];
      end;
      codificar:= x;
end;

function decodificar(x: string): passwd;
var
   i: integer;
begin
     for i:= 1 to ord(x[0]) do // ord(x[0]) == length(x)
      case x[i] of
           '1': x[i]:= 'A';
           '2': x[i]:= 'E';
           '3': x[i]:= 'I';
           '4': x[i]:= 'O';
           '5': x[i]:= 'U';
           else
                x[i]:= x[i];
      end;
      decodificar:= x;
end;

function toupper(x: string): passwd;
var
   i: integer;
begin
     for i:= 1 to length(x) do
      begin
         toupper[i]:= upcase(x[i]);
      end;
end;

var
  codigo: passwd;
  op: char;
  rc: string;
begin
  while (op <> '0') do
   begin
    writeln('Para finalizar ingrese: 00000000');
    writeln('Codificar o Decodificar (C/D): ');
    readln(op);
    op:= upcase(op);
    if (op = 'C') then
     begin
       writeln('Ingrese la contrase\~na: ');
       readln(rc);
       writeln('Contrase\~na codificada: ', codificar(toupper(rc)));
    end;
    if (op = 'D') then
     begin
       writeln('Ingrese la contrase\~na: ');
       readln(rc);
       writeln('Contrase\~na decodificada: ', decodificar(toupper(rc)));
    end;
  end;

readln();
end.
