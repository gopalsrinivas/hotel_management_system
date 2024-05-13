from rest_framework import serializers
from .models import RoomType

class RoomTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoomType
        fields = '__all__'

    def validate_title(self, value):
        if self.instance:
            if self.instance.title == value:
                return value
            existing_title = RoomType.objects.filter(title=value).exclude(pk=self.instance.pk if self.instance else None).first()
            if existing_title:
                raise serializers.ValidationError("Title already exists.")
        return value