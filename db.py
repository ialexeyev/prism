from sqlalchemy import create_engine, text
import traceback

# Connecting to database
engine = create_engine(
    url=
    "mysql+pymysql://freedb_alex_prism:3VPWBQDPwh6yG%40s@sql.freedb.tech:3306/freedb_prism_xsu"
)
try:
    with engine.connect() as conn:
        result = conn.execute(text("select * from base"))
except Exception as e:
    print(f"Database connection error: {e}")
    traceback.print_exc()

base = result.all()
print(base[0][2])
