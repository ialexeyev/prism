import sqlite3

conn = sqlite3.connect('prismdb.db')
prism_cursor = conn.cursor()
prism_cursor.execute("SELECT * FROM base")
#conn.commit()
headers_data = prism_cursor.fetchall()
conn.close()

print(headers_data)
