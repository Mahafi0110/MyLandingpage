from django.core.management.base import BaseCommand
from landing.models import LandingPage, Service, Benefit


class Command(BaseCommand):
    help = "Create initial landing page data"

    def handle(self, *args, **options):

        landing_page, created = LandingPage.objects.get_or_create(
            id=1,
            defaults={
                "business_name": "Nutrition Planner",
                "logo": "",
                "hero_title": "Your Personalized Nutrition Planner",
                "hero_description": "Plan healthier meals and reach your nutrition goals with personalized nutrition guidance.",
                "hero_image": "",
                "about_title": "About Nutrition Planner",
                "about_description": "Simple and personalized nutrition planning for your everyday lifestyle.",
                "about_image": "",
                "phone": "+971000000000",
                "whatsapp": "+971000000000",
                "email": "info@example.com",
                "address": "Dubai, UAE",
                "maps_url": "",
                "cta_text": "Get Started",
            },
        )

        if created:
            self.stdout.write(
                self.style.SUCCESS("Landing page created.")
            )
        else:
            self.stdout.write(
                self.style.WARNING("Landing page already exists.")
            )

        services = [
            {
                "title": "Personalized Meal Plans",
                "description": "Nutrition plans designed around your individual goals.",
                "icon": "🍎",
                "order": 1,
            },
            {
                "title": "Healthy Recipes",
                "description": "Simple and nutritious recipes for everyday meals.",
                "icon": "🥗",
                "order": 2,
            },
            {
                "title": "Nutrition Guidance",
                "description": "Practical guidance to help you maintain healthy habits.",
                "icon": "💪",
                "order": 3,
            },
        ]

        for service in services:
            Service.objects.get_or_create(
                title=service["title"],
                defaults=service,
            )

        benefits = [
            {
                "title": "Personalized",
                "description": "Plans designed around your needs.",
                "icon": "🎯",
                "order": 1,
            },
            {
                "title": "Healthy",
                "description": "Balanced nutrition for your lifestyle.",
                "icon": "❤️",
                "order": 2,
            },
            {
                "title": "Simple",
                "description": "Easy-to-follow meal planning.",
                "icon": "✨",
                "order": 3,
            },
        ]

        for benefit in benefits:
            Benefit.objects.get_or_create(
                title=benefit["title"],
                defaults=benefit,
            )

        self.stdout.write(
            self.style.SUCCESS("Services and benefits created.")
        )