from rest_framework.response import Response
from rest_framework.views import APIView

from .models import LandingPage, Service, Benefit
from .serializers import (
    LandingPageSerializer,
    ServiceSerializer,
    BenefitSerializer,
)


class LandingPageView(APIView):
    def get(self, request):
        landing_page = LandingPage.objects.first()

        if not landing_page:
            return Response(
                {"detail": "Landing page content not found."},
                status=404,
            )

        serializer = LandingPageSerializer(landing_page)
        return Response(serializer.data)


class ServicesView(APIView):
    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)


class BenefitsView(APIView):
    def get(self, request):
        benefits = Benefit.objects.all()
        serializer = BenefitSerializer(benefits, many=True)
        return Response(serializer.data)