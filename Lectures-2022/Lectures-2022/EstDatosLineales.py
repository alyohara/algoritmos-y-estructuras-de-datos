#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Tue Oct 12 01:59:51 2021

@author: agustin.ambrossio
"""
class ListaEnlazada:
    
#-------- Clase Anidada - NODO ------------#
    class _Node:
        __slots__ = '_element', '_next' # optimiza el uso de memoria

        def __init__(self, element, next): 
            self._element = element # inicializar el contenido del Nodo
            self._next = next       # referencia al siguiente Nodo

#----------- Métodos de la Lista Enlazada ----------- #

    def __init__(self):
        """Crear una lista vacia.""" 
        #return self._Node(0,None) ## el conamdo return no puede ser usado en el __init__
                                  ## el método __init__ debe retornar 
        self.lista = self._Node(0,None)
    
    def __len__(self):
        """Retornar el número de elementos en la lista."""
        return self.lista._element

    def is_empty(self):
        """Retorna True si la lista esta vacia."""
        return self.lista._element == 0
    
    def append(self,elem):
        """Añadir un elemento a la lista."""
        current = self.lista
        while not current._next == None:
            current = current._next
        current._next = self._Node(elem, None)
        self.lista._element += 1 


    
le= ListaEnlazada()

le.append(42)
le.append(12)

current, i = le.lista, 0

while not current == None :
    print ("Nodo: ", i)
    print ( "elem = " , current._element)
    current = current._next
    print ("End of List? ", current == None)
    print("\n")
    














