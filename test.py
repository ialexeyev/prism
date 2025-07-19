import sqlite3

conn = sqlite3.connect('prismdb.db')
prism_cursor = conn.cursor()
request = "SELECT * FROM " + table;
prism_cursor.execute(request)
data = prism_cursor.fetchall()
conn.close()

print(data)