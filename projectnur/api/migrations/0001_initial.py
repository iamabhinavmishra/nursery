from django.db import migrations
from api.user.models import CustomUser


class Migration(migrations.Migration):
    def seed_data(apps, schema_editor):
        user = CustomUser(name="nursery", 
                          email_id="nursery123@gmail.com",
                          is_staff=True,
                          is_superuser=True,
                          )
        user.set_password("12345678")
        user.save()
    dependencies = [

    ]

    operations = [
        migrations.RunPython(seed_data),
    ]