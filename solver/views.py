from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
import json
import re
from pprint import pprint
from django.template.loader import render_to_string

matrix=[]

def home(request):
    return render(request,'solver/home.html')

def matrix_full(matrix):
  for i in range(0,9):
    for j in range(0,9):
      if matrix[i][j]==0:
        return False
  return True
  
def find_unassigned(matrix):
  cell=[]
  for i in range(0,9):
    for j in range(0,9):
      if matrix[i][j]==0:
        cell.append(i)
        cell.append(j)
        return cell
        
def safe(cell,number,matrix):
  if (row_check(cell,number,matrix) and column_check(cell,number,matrix)) and square_check(cell,number,matrix):
    return True
  else:
    return False

def row_check(cell,number,matrix):
  if number in matrix[cell[0]]:
     return False
  return True

def column_check(cell,number,matrix):
  flag=0
  for i in range(0,9):
     if matrix[i][cell[1]]==number:
       flag=1
  if flag==1:
     return False
  else:
     return True  
     
     
def square_check(cell,number,matrix):
  row=cell[0]
  column=cell[1]
  flag=0
  if row<=2 and column<=2:
     for i in range(0,3):
       for j in range(0,3):
         if matrix[i][j]==number:
           flag=1
   
  if row<=2 and column<=5 and column>=3:
     for i in range(0,3):
       for j in range(3,6):
         if matrix[i][j]==number:
           flag=1
  if row<=2 and column<=8 and column>=6:
     for i in range(0,3):
       for j in range(6,9):
         if matrix[i][j]==number:
           flag=1
  if row<=5 and row>=3 and column<=2:
     for i in range(3,6):
       for j in range(0,3):
         if matrix[i][j]==number:
           flag=1
  if row<=5 and row>=3 and column<=5 and column>=3:
     for i in range(3,6):
       for j in range(3,6):
         if matrix[i][j]==number:
           flag=1
  if row<=5 and row>=3 and column<=8 and column>=6:
     for i in range(3,6):
       for j in range(6,9):
         if matrix[i][j]==number:
           flag=1
  if row<=8 and row>=6 and column<=2:
     for i in range(6,9):
       for j in range(0,3):
         if matrix[i][j]==number:
           flag=1
  if row<=8 and row>=6 and column<=5 and column>=3:
     for i in range(6,9):
       for j in range(3,6):
         if matrix[i][j]==number:
           flag=1
  if row<=8 and row>=6 and column<=8 and column>=6:
     for i in range(6,9):
       for j in range(6,9):
         if matrix[i][j]==number:
           flag=1
  if flag==1:
     return False
  else:
     return True

     
def fill_values(cell,matrix):
  if matrix_full(matrix):
   return True
  cell=find_unassigned(matrix)
  for i in range(1,10):
   if safe(cell,i,matrix):
     matrix[cell[0]][cell[1]]=i
     if fill_values(cell,matrix):
      return True
     matrix[cell[0]][cell[1]]=0
  return False

@csrf_exempt
def send_data(request):
    data = request.POST.get('data')
    matrix=[]
    sliced_string=data[1:-1]
    data_list=re.split('\],',sliced_string)
    for x in range(0, len(data_list)):
       data_list[x]=data_list[x][1:]
    for y in data_list:
        matrix.append(y.split(','))
    for k in range(0,9):
        for l in range(0,9):
            matrix[k][l]=matrix[k][l].replace(']','')
            if matrix[k][l]=='null':
                matrix[k][l]=0
            else:
                matrix[k][l]=matrix[k][l].replace('"', '')
                matrix[k][l]=int(matrix[k][l])
    cell=[]
    fill_values(cell,matrix)
    pprint(matrix)
    html = render_to_string('solver/render.html', {'data': matrix})
    #return HttpResponse(html)
    return HttpResponse(json.dumps(html), content_type = "application/json")