from django.shortcuts import render,redirect
from .forms import CreateForm, LoginForm ,CreateRecordForm,UpdateRecordForm
from django.contrib import messages
from django.contrib.auth.models import auth
from django.contrib.auth import authenticate
from django.contrib.auth.decorators import login_required
from .models import Record




def home(requests):
    return render(requests, "base/home.html")




def register(request):
    form = CreateForm()

    if request.method == "POST":
        form=CreateForm(request.POST)

        if form.is_valid():
            form.save()
            messages.success(request,"Account created Successfully")

            return redirect("login")
    
    context={"form":form}

    return render(request,"base/register.html",context) 

def login(request):
    form=LoginForm()

    if request.method == "POST":

        form=LoginForm(request, data=request.POST )

        if form.is_valid():
            
            username= request.POST.get('username')
            password= request.POST.get('password')

            user = authenticate(request, username=username, password=password)
            
            if user is not None:
                auth.login(request, user)

                return redirect("dashboard")

    context={"form":form}

    return render(request,"base/login.html",context)


@login_required(login_url="login")
def dashboard(request):
    record=Record.objects.all()
    context={"records":record}
    return render(request,"base/dashboard.html",context)


@login_required(login_url="login")
def create_record(request):
    
    form=CreateRecordForm()

    if request.method == "POST":

        form=CreateRecordForm(request.POST)

        if form.is_valid():

            form.save()

            messages.success(request, "Reacord was Created ")

            return redirect("dashboard") 
           

    context={"form":form}

    return render(request,"base/createrecord.html",context)


def update_record(request,pk):
    my_record=Record.objects.get(id=pk)

    form=UpdateRecordForm(instance=my_record)

    if request.method == "POST":
        form=UpdateRecordForm(request.POST,instance=my_record)

        if form.is_valid():
            form.save()

            messages.success(request,"updated sucessfully")
            return redirect("dashboard")
    context={"form":form,
             "record":my_record
             }
    return render(request,"base/update_record.html",context)

    
def viewrecord(request,pk):
    record=Record.objects.get(id=pk)
    return render(request,"base/view.html",{"record":record})

def delete_record(request,pk):
    record=Record.objects.get(id=pk)
    record.delete()
    messages.success(request,"Deleted Painfully")
    return redirect("dashboard")





def logout(request):
    auth.logout(request)
    messages.success(request,"Logout Successfully")
    return redirect("login")