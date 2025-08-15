import sqlite3

# PRISM database structure:  1. 'base' table([id(int)], [bname(text)], bdata(text)))
#                            2. 'services' table([key(int)], [spagename(text)] [sname(text)], #                                                 sdata(text))'
#                            3. 'users': [0 – ‘INTEGER’ – id(PRIMARY KEY)], [1 – ‘TEXT’ – uid],                                                 [2 – ‘TEXT’ – ufname], [3 – ‘TEXT’ – ulname].
#                                [4 – ‘TEXT’ – umail], [5 – ‘TEXT’ – udepartment], [6 –                                                         ‘TEXT’ usupervisor],
#                                [7 – ‘TEXT’ – uposition], [8 – ‘TEXT’ – uaccess], [9 –                                                         ‘TEXT’ – upassword],
#                                [10 – ‘TEXT’ – uphoto].
#                            4. 'tempusers': [0 – ‘INTEGER’ – id(PRIMARY KEY)], [1 – ‘TEXT’ – tuid],                                             [2 – ‘TEXT’ – tufname], [3 – ‘TEXT’ – tulname].
#                                     [4 – ‘TEXT’ – tumail], [5 – ‘TEXT’ – tudepartment], [6 –                                                     ‘TEXT’ tusupervisor],
#                                     [7 – ‘TEXT’ – tuposition], [8 –                                                                        ‘TEXT’ – tupassword],
#                                     [10 – ‘TEXT’ – tuphoto], [11 - 'TEXT' - tustatus (new,                                             approved, rejected)]
#                            5.


#1. Load function (default)
def load(table, col):
    conn = sqlite3.connect('prismdb.db')
    prism_cursor = conn.cursor()
    request = "SELECT " + col + " FROM " + table
    prism_cursor.execute(request)
    data = prism_cursor.fetchall()
    conn.close()
    return data


#2. Load function (specific for few parameters)
def loadspec(*args):
    # Getting expression:
    preparation = ""
    for i in range(1, len(args)):
        preparation += args[i] + ", "
    expression = preparation[:-2]
    #connecting to database:
    conn = sqlite3.connect('prismdb.db')
    prism_cursor = conn.cursor()
    request = "SELECT " + expression + " FROM " + args[0]
    prism_cursor.execute(request)
    data = prism_cursor.fetchall()
    conn.close()
    return data


#3. Load function (without same values):
def loadunique(table, col):
    conn = sqlite3.connect('prismdb.db')
    prism_cursor = conn.cursor()
    request = "SELECT DISTINCT " + col + " FROM " + table
    prism_cursor.execute(request)
    data = prism_cursor.fetchall()
    conn.close()
    return data


#4. Insert function: insert new candidate to temporary users
def newuser(nufname, 
            nulname, 
            numail, 
            nudep, 
            nupos, 
            nusupervisor):
    conn = sqlite3.connect('prismdb.db')
    prism_cursor = conn.cursor()
    prism_cursor.execute("INSERT INTO tempusers (tufname, tulname, tumail, tudepartment, tusupervisor, tuposition, tustatus ) VALUES (?, ?, ?, ?, ?, ?, ?)", (nufname, nulname, numail, nudep, nusupervisor, nupos, 'new'))
    conn.commit()
    conn.close()
    return "OK"


#cursor.execute("INSERT INTO users (name, age) VALUES (?, ?)", ('Иван', 30))
#conn.commit()
