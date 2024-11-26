import mysql.connector
from mysql.connector import Error
from faker import Faker
import random
import time
from datetime import datetime, timedelta

# Connect to MySQL database
try:
    conn = mysql.connector.connect(
        host="localhost",
        user="telemetryuser",
        password="ball",
        database="telemetrydb"
    )
    cur = conn.cursor()

    # Create a table for telemetry data
    cur.execute("""
    CREATE TABLE IF NOT EXISTS telemetry_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        timestamp DATETIME,
        vehicle_speed FLOAT,
        engine_rpm INT,
        battery_voltage FLOAT,
        temperature FLOAT
    )
    """)

    # Initialize Faker
    fake = Faker()

    # Generate and insert fake data live
    while True:
        timestamp = datetime.now()
        vehicle_speed = random.uniform(0, 120)
        engine_rpm = random.randint(800, 6000)
        battery_voltage = random.uniform(11.5, 14.5)
        temperature = random.uniform(60, 110)

        cur.execute("""
            INSERT INTO telemetry_data (timestamp, vehicle_speed, engine_rpm, battery_voltage, temperature)
            VALUES (%s, %s, %s, %s, %s)
        """, (timestamp, vehicle_speed, engine_rpm, battery_voltage, temperature))

        conn.commit()
        print(f"Data inserted at {timestamp}")
        time.sleep(1)  # Wait for 1 second before inserting next data point

except Error as e:
    print(f"Error: {e}")
except KeyboardInterrupt:
    print("Data generation stopped by user.")
finally:
    if conn.is_connected():
        cur.close()
        conn.close()
        print("MySQL connection is closed")