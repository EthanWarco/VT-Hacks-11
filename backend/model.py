from datetime import datetime
from pydantic import BaseModel, Field, validator


class Challenge(BaseModel):
    from_dorm: str = Field(...)
    from_members: int = Field(...)

    to_dorm: str = Field(...)
    to_members: int = Field(...)

    metric: str = Field(...)
    start_date: datetime = Field(...)
    end_date: datetime = Field(...)

    class Config:
        allow_populaton_by_field_name = True
        json_schema_extra = {
            "example": {
                "from_dorm": "pritchard",
                "to_dorm": "slusher",
                "metric": "alarm",
                "start_date": "2023-09-16T10:52:46.084862",
                "end_date": "2023-09-23T10:52:46.084862",
            }
        }

class Report(BaseModel):
    dorm: str = Field(...)
    date: datetime = Field(...)
    metric: str = Field(...)

class Review(BaseModel):
    dorm_name: str = Field(...)
    user_name: str = Field(...)
    body: str = Field(...)
    date: datetime = Field(...)

class Message(BaseModel):
    sent: datetime = Field(...)
    body: str = Field(...)
    sender_name: str = Field(...)
    sender_dorm: str = Field(...)

class User(BaseModel):
    name: str = Field(...)
    dorm: str = Field(...)