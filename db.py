from sqlalchemy import create_engine, text

engine = create_engine(
    url=
    "mysql+pymysql://freedb_alex_prism:3VPWBQDPwh6yG@s@sql.freedb.tech:3306/freedb_prism_xsu"
)

print("Connection to the {host} for user {user} created successfully.")

with engine.connect() as conn:
  result = conn.execute(text("select * from base"))
  print(result.all())
