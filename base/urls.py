from django.urls import path
from . import views


urlpatterns = [
    path("",views.home),
path("register",views.register,name="register"),

    path("login", views.login, name="login"),
    path("logout", views.logout, name="logout"),

    path("dashboard", views.dashboard, name="dashboard"),
    path("viewrecord/<int:pk>", views.viewrecord, name="record"),

    path("Create-record", views.create_record, name="Create-record"),
    path("update_record<int:pk>", views.update_record, name="update_record"),
    path("delete_record<int:pk>", views.delete_record, name="delete_record"),
]
