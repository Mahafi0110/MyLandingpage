from django.db import models


class LandingPage(models.Model):
    business_name = models.CharField(max_length=200)
    logo = models.URLField(blank=True)

    hero_title = models.CharField(max_length=300)
    hero_description = models.TextField()
    hero_image = models.URLField(blank=True)

    about_title = models.CharField(max_length=200, blank=True)
    about_description = models.TextField(blank=True)
    about_image = models.URLField(blank=True)

    phone = models.CharField(max_length=30)
    whatsapp = models.CharField(max_length=30)
    email = models.EmailField()
    address = models.TextField()
    maps_url = models.URLField(blank=True)

    cta_text = models.CharField(max_length=200, blank=True)

    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.business_name


class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title
    
class Benefit(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=50, blank=True)
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.title