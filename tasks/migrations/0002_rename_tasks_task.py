# Generated by Django 4.2 on 2023-05-01 22:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("tasks", "0001_initial"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="Tasks",
            new_name="Task",
        ),
    ]
