from django.db import models

class Record(models.Model):
    createdAt=models.DateTimeField(auto_now_add=True)
    firstname=models.CharField(max_length=100)
    lastname=models.CharField(max_length=100)
    phone=models.CharField(max_length=100)
    address=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    city=models.CharField(max_length=100)
    postal_code=models.CharField(max_length=100)
    country=models.CharField(max_length=100)

    def __str__(self):
        return self.firstname + self.lastname
