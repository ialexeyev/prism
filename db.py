import sqlite3

# PRISM database structure: headers table([key(int)], [hname(text)], hdata(text)))


# main: load headers during loading all pages
def load_headers():
    conn = sqlite3.connect('prismdb.db')
    prism_cursor = conn.cursor()
    prism_cursor.execute("SELECT * FROM headers")
    headers_data = prism_cursor.fetchall()
    conn.close()
    return headers_data


# PRISM database structure: headers table([key(int)], [hname(text)], hdata(text)))

#cursor.execute('''
#    CREATE TABLE IF NOT EXISTS users (
#        id INTEGER PRIMARY KEY,
#        name TEXT,
#        age INTEGER
#    )
#''')

#cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ('Иван', 30))
#conn.commit()
