# Generated by Django 3.0.8 on 2020-07-13 11:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('user_income', '0001_initial'),
        ('user_calculation', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='usercalculation',
            name='user_income_id',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='user_income.UserIncome'),
        ),
    ]
