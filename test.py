import sqlite3

conn = sqlite3.connect('prismdb.db')
prism_cursor = conn.cursor()
request = "SELECT * FROM tempusers"
#request = "DELETE FROM tempusers WHERE id = 2;"
#request = "ALTER TABLE tempusers ADD COLUMN tustatus TEXT"
#prism_cursor.execute("INSERT INTO services (spagename, sname, sdata) VALUES (?, ?, ?)", ('home', 'positionFieldPlaceholder', 'Position'))
#prism_cursor.execute("PRAGMA table_info('tempusers')")
#prism_cursor.execute("INSERT INTO users (uid, ufname, ulname, umail, udepartment, usupervisor,  uposition, uaccess, upassword) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", ('r.yangildin', 'Rassul', 'Yangildin', 'r.yangildin@hyundai.kz', 'Assembly Shop', 'Yerbol Kassymkanov', 'Head of shop', 'user', 'rassulgt40'))
prism_cursor.execute(request)
data = prism_cursor.fetchall()
#conn.commit()
conn.close()

print(data)
