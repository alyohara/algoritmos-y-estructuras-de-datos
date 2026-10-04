# -*- coding: utf-8 -*-
"""
Created on Mon Sep 30 17:44:35 2019

@author: xavier.parent
"""


## Raise exception
##

while false:
    number = int(input("The table of which number do you want? "))
    if 9<number:
        raise ValueError("The number is greater than 9. Please do it again.")
    if 0<number<10:
        for i in range(1, 11):
            print(number,' x ',i,' = ',number*i,sep='')

##
#Assert
####

a=12
#b=0
b=9
print('the division a/b is equal to',)
assert b!=0, 'the denominator is null'
print(a/b)

















# Examples of a function 


def square(x):
    return x*x

square(2)


def add_number(x,y):
    """addition"""
    sum=(x+y)
    print(sum)
    return sum

#add_number(1,2) # 1 and 2 are argument values 
help(add_number)


def find_max(a,b):
   if(a > b):
      print(a,"is greater than",b)
   elif(b > a):
      print(b,"is greater than",a)
     
#find_max(30, 45)  #Here we call the function and pass two numbers finding max between this two numbers
find_max(45, 30) 

###
# argument TYPE
###

def my_function(str1,str2): #string 
    print(str1)
    print(str2)

my_function("I'm string 1", "I'm string 2")

def my_function(L1,L2):  # lists 
    print(L1)
    print(L2)

L1=['a','b','c']
L2=[1,2,3]
my_function(L1,L2)

def my_function(S1,S2):  # sets
    print(S1)
    print(S2)

S1={1,2,3}
S2={1,2,3}
my_function(S1,S2)

def my_function(dico1,dico2): # dico
    print(dico1)
    print(dico2)
dico1={'Jean Paul':'jeanpaul@trucmuch.lu',\
             'Fanny':'fanny@trucmuch.lu',\
             'Robert':'robert@trucmuch.lu',\
       'Stephanie': (6812424239),\
       0:2} 
dico2={0:7,'x':'x@trucmuch.lu'}

my_function(dico1,dico2)


# default argument value

def my_function(country = "Norway"): # I am defining a default value for the argument
  print("I am from " + country)

#my_function("Sweden")
#my_function("India")
#my_function()
my_function("Brazil") 







# arbitrary number of arguments

# UNDEFINITE NUMBER OF ARGUMENTS 

def adder(*num):
    sum = 0
    for n in num:  ## for loop over the tuple elements
        sum = sum + n
    print("Sum:",sum)

#adder(3,5)
adder(4,5,6,7)
adder(1,2,3,5,6)

def my_function(*kids):
  print("The youngest child is " + kids[2])

my_function("Emil", "Tobias", "Linus") 



### Return

def hello():
  print("Hello World") 
  return("hello")

def hello_noreturn():
  print("Hello World")
  
#hello() * 2 # Multiply the output of `hello()` with 2 
hello_noreturn() * 2 
# (Try to) multiply the output of `hello_noreturn()` with 2 
# nothing is returned, hence the typrerror


# more than one value returned

def first2items(list1):
  return list1[0], list1[1]

a, b = first2items(["Hello", "world", "hi", "universe"])
print(a + " " + b)
print(b + " " + a)


# passing a function as argument to a function 


def sum(val1,val2):
    return val1+val2

def prod(val1,val2):
    return val1*val2

def do_something(foo,val1,val2):
    return foo(val1,val2)

do_something(prod,3,4)
#do_something(prod,3,4)
        

###
#Argument modification
###

# Nonmutable argument
def incrementation(x,k): ## x becomes y and 
    x+=k
    return  x
y=3
incrementation(y,10)# we try to change x into y
y=incrementation(y,10) #To make it work we need to return a value and the assignment is there to store the value somewhere
y         # we get 3 because of this


#Mutable

def incrementation(x,k):
    x+=k
L=[1,'truc',3]
incrementation(L,[2])#creates a variable x which is equal to L then x+=[2]
L

def change(dico,c):
    for key in dico.keys(): ## to loop trhough all the keys
        dico[key]=c         ## to change the value of the key to c
dico={'k1' : 'truc', 'k2' : 'truc2'} ## example of a dictionary
 
change(dico,'othervalue') ## application of the function

####
# RECURSIVE FUNCTIONS
###


### Nested functions

# Example 1

def outer():               #outer or parent function
    x=3
    def inner():            #inner or child  function
        print(x)
    inner()                 # inner function called
#inner()                    # inner function cannt be called from the outside
a=outer()
print(a)

# Example 2


def outer():               #outer or parent function
    x=3
    def inner():            #inner or child  function
        y=4
        print(x+y) 
    inner()
a=outer()
print(a)  

### RECURSIVE FUNCTIONS

# Example 1

def countdown(n):
   if n==0:                # base case
         print("completed") 
    else:                   # recursive case
        print(n)
        countdown(n-1)      # recursive call

countdown(3)




# Example 2

def factorial(n):
    if n==1: 
        return 1
    else: 
        return n*factorial(n-1)
        
factorial(8)
factorial(-8)

# without the base case

def factorial(n):
        return n*factorial(n-1)
        
factorial(8)


## Fibonacci sequence--recursive


def DynFiboList(n,dico):
    "F(n)=F(n-1)+F(n-2), F(1)=F(0)=1"
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        if n-1 <= len(dico):
              n1=dico[n-1] 
        else:
            n1=DynFiboList(n-1,dico)
           # dico.update([(n-1,n1)])
            dico.append(n1)
        if n-2 <= len(dico):
              n2=dico[n-2] 
        else:
            n2=DynFiboList(n-2,dico)
           # dico.update([(n-2,n2)])
            dico.append(n2)
        return n1 + n2
    
 #   Fibo(n-1)+Fibo(n-2) # Here is the recursive call
#dico=dict(()
dico=list()    
DynFiboList(500,dico)

def DynFibo(n,dico):
    "F(n)=F(n-1)+F(n-2), F(1)=F(0)=1"
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        if n-1 in dico:
            n1=dico[n-1] 
        else:
            n1=DynFibo(n-1,dico)
            dico.update([(n-1,n1)])       
        if n-2 in dico:
            n2=dico[n-2] 
        else:
            n2=DynFibo(n-2,dico)
            dico.update([(n-2,n2)])          
        return n1 + n2
    
 #   Fibo(n-1)+Fibo(n-2) # Here is the recursive call
dico=dict()    
DynFibo(100,dico)




def Fibo(n):
    "F(n)=F(n-1)+F(n-2), F(1)=F(0)=1"
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        print("I am doing", n)
        Fn=Fibo(n-1)+Fibo(n-2) # Here is the recursive call
        print("I am done with", n)
        return Fn
    
Fibo(10)

def FFibo(n):
    """calculate the number of calls of Fibo(n)"""
    return 2 * Fibo(n) - 1  ## 1999 paper by John Robertson

#Fibo(13) 
#FFibo(13)
#Fibo(500)
#FFibo(3)

[Fibo(n) for n in range(18)] # to display the Fibonacci sequence up to 18-th term as a list




# Fibo sequence--iterative 
# double assignment is simultaeous

def Fiboiter(n):
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        x=1 #0 th element 
        y=1 # 1th element
        for i in range(1,n):
            # x i-1-th element and y to be the i-th element
            x,y=y,x+y
            # x i-th element and y to be the i+1-th element
        return y

n=10
print(Fibo(n),"=",Fiboiter(n))

#Fiboiter(10) 
Fiboiter(500)

### Syracuse sequence

def syr(k): 
    """returns the Syracuse sequence itself as a list"""
    if k<=0:
        raise ValueError("Only for intergers")
    if k==1:
        return [1]
    else:   
        if k%2==0:
            return [k] + syr(int(k/2))
        else:
            return [k] + syr(int(3*k+1))
def ssyr(k): 
    """returns the position of 1 in the list"""
    return len(syr(k))-1
    
syr(7)
ssyr(7)


###
## VARIABLE SCOPE
### 



## Undercore as a built-in variables

a, _, b = (1, 2, 3) # a = 1, b = 3
print(a, b)

## ignoring multiple values
## *(variable) used to assign multiple value to a variable as list while unpacking
## it's called "Extended Unpacking"
a, *_, b = (7, 6, 5, 4, 3, 2, 1)
print(a, b)

# In the following examples, what will be printed? 
#                            what is the value of x after the call? 
#                            do we get error message?
x=2
def ExVar1():
    print(x)
def ExVar2():
    x=5
    #y=5
    print(x)
def ExVar3():
    print(x)
    x=5
    #y=5
def ExVar4():
    print(x)
    print('x=1')
    
#ExVar1()
#ExVar2()  # global variables are protected--try with y=5 instead of x=5 in the function
#ExVar3() # 
ExVar4()

# GLOBAL Changing the value of a global variable from inside the function using global 

x = 0 # global variable

def add():
    global x
    x = x + 2 # increment by 2
    print("Inside the function, x is", x)
    
add()
print("Outside the function x is", x) # Is is still 0?

# NONLOCAL is restricted to the immediately higher level

x='grand-father'  # global variable
def f1():
    x='daddy'
    print("Inside f1, x is", x)
    def f2():
        #global x 
        nonlocal x
        print("Inside f2, x is", x)
    f2()

f1()




#Difference between global and non local keywords
def examplenothing():
    x='changedinexample'
    def insidenothing(): # inside... is a function only defined in the scope of example...
        x='changedinside' #x is not global within the scope  of insidenothing.
    insidenothing()
    print("the x inside the function is ",x)

def exampleglobal(): 
    x='changedinexample'
    def insideglobal():
        global x        # x is understood as a global variable, here.
        x='changedinside'
    insideglobal()
    print("the x inside the function is ",x)

def examplenonlocal():
    x='changedinexample'
    def insidenonlocal():
        nonlocal x      # x is understood as a local variable of examplenonlocal
        x='changedinside'
    insidenonlocal()
    print("the x inside the function is ",x)


#x='notchanged'
#examplenothing() #x is not changed inside the first function
#print("global x is ",x) # x is not changed globally
#print(5*'-')
#x='notchanged'
#exampleglobal() #x is not changed inside the first function
#print("global x is ",x) # x is  changed globally
#print(5*'-')
#x='notchanged'
examplenonlocal() #x is  changed inside the first function
print("global x is ",x) # x is not changed globally
print(5*'-')


#Fibonacci sequence with a count of the number of recursive calls
t=0
def Fibo(n):
    "F(n)=F(n-1)+F(n-2), F(1)=F(0)=1"
    global t # Declare that t should be considered as global
    t+=1     # We do something on t
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") 
    elif n==0:
        return 1 
    elif n==1:
        return 1 
    else:
        print(t)
        return Fibo(n-1)+Fibo(n-2)


Fibo(4)
t          # number of calls to get the 4th Fibo number



#####
#help function
##


###

def nicelydocumented():
    """Unfortunately, it does not do much. It just returns True 
    all the time."""# Help comment.
    "This line is not seen" #This line won't be shown.
    return True

nicelydocumented()
help(nicelydocumented)

##
### Keyword arguments
##

# Example 1

def greet(name, msg='goodbye'):
   """
   This function greets to
   the person with the
   provided message.

   If message is not provided,
   it defaults to "Good
   morning!"
   """

   print("Hello",name + ', ' + msg)

#greet("John")    # no keyword
#greet("Kate",'how you doing?') # no keyword
#greet("Bruce","How do you do?") # no keyword
#greet(name = "Bruce",msg = "How do you do?") # 2 keywords argument
greet(msg = "How do you do?",name = "Bruce") #2 keyword arguments (out of order)
greet("Bruce", msg = "How do you do?") # 1 positional, 1 keyword argument          

# Example 2 on a built-in function

print('c','g',sep="*",end=" ** ") #'c' is a positional argument whereas 
                                    #'endofthe[...]printline' is a keyword argument for the keyword 'end'. 
print('g','c')

# Example 3

def Displayingarguments1(a,b,c):#A simple example with only positional arguments
    "Displays the arguments, one on each line"
    print("positional argument a is ",a)
    print("positional argument b is ",b)
    print("positional argument c is ",c)
    
Displayingarguments1('yes',(1,2,3),'no') #As expected
Displayingarguments1(b='yes',a=(1,2,3),c='no') # You can call positional arguments as keyword arguments
#You need to give the good number of positional arguments
Displayingarguments1('yes',(1,2,3))
#You need to give the good number of positional arguments
Displayingarguments1('yes',(1,2,3),'no',3)
#You cannot give two values to b
Displayingarguments1('yes',(1,2,3),'no',b=(1,2))
#No positional argumentation is allowed after a keyword argumentation
Displayingarguments1('yes',b=(1,2,3),'no')

# Example 4

def Displayingarguments2(a,b,c,kw1='defautkw1',kw2='defautkw2',kw3='defautkw3'):#An example with both positional 
                                                                                #and keyword arguments 
    "Displays the arguments, one on each line"
    print("positional argument a is ",a)
    print("positional argument b is ",b)
    print("positional argument c is ",c)
    print("keyword argument kw1 is ",kw1)
    print("keyword argument kw2 is ",kw2)
    print("keyword argument kw3 is ",kw3)
    
#Each argument is called as a positional argument
Displayingarguments2('yes',(1,2,3),'no','turn',3,'nothing') 
# First 3 as positional only
Displayingarguments2('yes',(1,2,3),'no')
#Variant
Displayingarguments2('yes',(1,2,3),'no','turn', kw3='nothing') 
# Keywords ar the end 
#Do not give keyword arguments before positional ones
Displayingarguments2('yes',(1,2,3),'no', kw3='nothing','turn')

# Example 5--An example with a mutable keyword argument.

def Displayingarguments3(a,b,c,kw):
    "Displays the arguments, one on each line"
    print("positional argument a is ",a)
    print("positional argument b is ",b)
    print("positional argument c is ",c)
    kw.append(1)
    print("keyword argument is ", kw)
    
Displayingarguments3(1,2,3,kw=[])# The defaut value of kw is changing!

#Exercise : Write a function "change" that has one positional argument (a string) and two keyword arguments
#that returns the positional argument where any occurence of the first keyword argument by the second keyword argument
# By defaut, it will change spaces " " to *.

def change(stringtobechanged,firstchar,secchar):
    res=''
    for c in stringtobechanged:
        if c==firstchar:
            res+=secchar
        else:
            res+=c
    return res
x='this is a string to be modified'
change(x,firstchar=' ', secchar='s')



###
# Yield command
###


# Ex 1

def createGenerator():
    mylist = range(3)
    for i in mylist:
        yield i*i

mygenerator = createGenerator() # create a generator
print(mygenerator) # mygenerator is an object!
for i in mygenerator:
    print(i)

#Ex 2
    
def fibonacci():
    """Fibonacci numbers generator"""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

f = fibonacci() 

counter = 0
for x in f:
    print(x)
    counter += 1
    if (counter > 100): break 




def search(keyword, filename):
    print('generator started')
    f = open(filename, 'r')
    # Looping through the file line by line
    for line in f:
        if keyword in line:
            # If keyword found, return it
            yield line
    f.close()
    
the_generator = search('Python', 'directory.txt')
# Nothing happened  
    
    
    
    
    
    

def pascal(n):
    if n == 1:
        return [1]
    else:
        line = [1]
        previous_line = pascal(n-1)
        for i in range(len(previous_line)-1):
            line.append(previous_line[i] + previous_line[i+1])
        line += [1]
    return line

print(pascal(6))












# Global keyword

c = 1 # global variable cannot be modifed locally

def add():
   # global c
   # c=c+2
    print(c)

add()



help(range)

#This solution is working fine

#### 
#ITERATIVE FUNCTION 
####


# Fibonacci sequence

def Fibo(n):
    "F(n)=F(n-1)+F(n-2), F(1)=F(0)=1"
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        return Fibo(n-1)+Fibo(n-2) # Here is the recursive call


Fibo(18) 
[Fibo(n) for n in range(18)] 
ntupe([Fibo(n) for n in range(18)]) 


## Syracuse sequence 
def f(k):
    if k==1:
        return [1]
    else:   
        if k%2==0:
            return [k] + f(int(k/2))
        else:
            return [k] + f(int(3*k+1))

#f(34)           

def ff(k):
    return len(f(k))-1

#ff(34)
#print(result[ff(34)])
    
## Fibo non iterative
    
#Fiboiterative?
    
def Fiboiter(n):
    if n<0:
        raise ValueError("Fibonacci terms begin at 0") # without this, Fibo(-1) would run forever.
    elif n==0:
        return 1 # First initial case
    elif n==1:
        return 1 # Second initial case
    else:
        x=1 #0 th element
        y=1 # 1th element
        for i in range(1,n):
            # x i-1-th element and y to be the i-th element
            x,y=y,x+y
            # x i-th element and y to be the i+1-th element
        return y










