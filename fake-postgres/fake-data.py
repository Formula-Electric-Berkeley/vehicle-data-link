import psycopg2
from psycopg2 import sql
from faker import Faker
import random
from datetime import datetime, timedelta

# Connect to your PostgreSQL database
conn = psycopg2.connect(
    dbname="telemetrydb",
    user="telemetryuser",
    password="ball",
    host="localhost:5432"
)
cur = conn.cursor()

# Create a table for telemetry data
cur.execute("""
    CREATE TABLE IF NOT EXISTS telemetry_data (
        id SERIAL PRIMARY KEY,
        timestamp TIMESTAMP,
        vehicle_speed FLOAT,
        engine_rpm INT,
        battery_voltage FLOAT,
        temperature FLOAT
    )
""")

# Initialize Faker
fake = Faker()

# Generate and insert fake data
for _ in range(1000):  # Generate 1000 rows of data
    timestamp = fake.date_time_between(start_date='-1d', end_date='now')
    vehicle_speed = random.uniform(0, 120)
    engine_rpm = random.randint(800, 6000)
    battery_voltage = random.uniform(11.5, 14.5)
    temperature = random.uniform(60, 110)

    cur.execute("""
        INSERT INTO telemetry_data (timestamp, vehicle_speed, engine_rpm, battery_voltage, temperature)
        VALUES (%s, %s, %s, %s, %s)
    """, (timestamp, vehicle_speed, engine_rpm, battery_voltage, temperature))

# Commit the changes and close the connection
conn.commit()
cur.close()
conn.close()

print("Fake data generated successfully!")