import sqlite3

# PRISM database structure: 'base' table([id(int)], [hname(text)], hdata(text)))
#                           'headers' table([key(int)], [hname(text)], hdata(text))'

#1. Load function
def load(table):
    conn = sqlite3.connect('prismdb.db')
    prism_cursor = conn.cursor()
    request = "SELECT * FROM " + table;
    prism_cursor.execute(request)
    data = prism_cursor.fetchall()
    conn.close()
    return data


#cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ('Иван', 30))
#conn.commit()

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
