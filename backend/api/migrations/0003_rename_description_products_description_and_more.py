# Generated by Django 5.2.1 on 2025-06-24 17:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_rename_description_products_description_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='products',
            old_name='description',
            new_name='Description',
        ),
        migrations.RenameField(
            model_name='products',
            old_name='image',
            new_name='ProImage',
        ),
        migrations.RenameField(
            model_name='products',
            old_name='name',
            new_name='ProName',
        ),
    ]
