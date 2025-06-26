from sqlalchemy import create_engine, text
import traceback

# Fixed connection string - removed extra @ symbol
engine = create_engine(
    url="mysql+pymysql://freedb_alex_prism:3VPWBQDPwh6yG%40s@sql.freedb.tech:3306/freedb_prism_xsu"
)

try:
    print("Attempting to connect to database...")
    with engine.connect() as conn:
        print("Connection to the database created successfully.")
        result = conn.execute(text("select * from base"))
        print("Query results:", result.all())
except Exception as e:
    print(f"Database connection error: {e}")
    traceback.print_exc()
