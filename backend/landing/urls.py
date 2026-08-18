from django.urls import path
from .views import LandingPageView, ServicesView, BenefitsView

urlpatterns = [
    path("landing-page/", LandingPageView.as_view(), name="landing-page"),
    path("services/", ServicesView.as_view(), name="services"),
    path("benefits/", BenefitsView.as_view(), name="benefits"),
]