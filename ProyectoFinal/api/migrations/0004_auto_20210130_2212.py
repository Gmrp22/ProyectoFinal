# Generated by Django 2.2.13 on 2021-01-31 04:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210128_2122'),
    ]

    operations = [
        migrations.AddField(
            model_name='purchase',
            name='price_buy',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='sale',
            name='price_buy',
            field=models.FloatField(default=0),
        ),
    ]
