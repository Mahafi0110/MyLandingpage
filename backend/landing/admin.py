from django.contrib import admin
from .models import LandingPage, Service, Benefit


@admin.register(LandingPage)
class LandingPageAdmin(admin.ModelAdmin):
    list_display = ("business_name", "phone", "email", "updated_at")


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "order")
    list_editable = ("order",)
    ordering = ("order",)


@admin.register(Benefit)
class BenefitAdmin(admin.ModelAdmin):
    list_display = ("title", "icon", "order")
    list_editable = ("order",)
    ordering = ("order",)