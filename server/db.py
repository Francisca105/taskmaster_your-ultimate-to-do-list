import psycopg2
import os
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env.

# Establish a connection to the database
conn = psycopg2.connect(
    dbname=os.getenv('DB_NAME'), # Get the database name from the .env file
    user=os.getenv('DB_USER'), # Similarly, get the user
    password=os.getenv('DB_PASS'), # Get the password
    host=os.getenv('DB_HOST'), # Get the host
    port=os.getenv('DB_PORT') or "5432" # Get the port of the postgres server
)

# CRUD operations
# Create, Read, Update, Delete notes in the database

def create_note(note):
    """
    Insert a new note into the database

    Args:
        note (str): The note to insert into the database

    Returns:
        bool: True if the note was inserted successfully, False otherwise
    """
    try:
        # Create a cursor object
        cur = conn.cursor()
        # Insert a new row into the notes table
        cur.execute("INSERT INTO notes (note) VALUES (%s)", (note,))
        # Commit the transaction
        conn.commit()
        cur.close()
        return True
    except Exception as e:
        print(f"[ERR] An error occurred while trying to insert an note:\n{e}")
        return False
    
def read_notes():
    """
    Select all notes from the database

    Returns:
        list: A list of lists where each list is a row from the notes table
    """
    # Create a cursor object
    cur = conn.cursor()

    # Executes a SQL query to select all rows from the notes table
    cur.execute("SELECT * FROM notes")
    result = cur.fetchall()
    cur.close()
    return result

def update_note(id, note):
    """
    Update a note in the database with the given id

    Args:
        id (int): The id of the note to update
        note (str): The new note to update the note with

    Returns:
        bool: True if the note was updated successfully, False otherwise
    """
    try:
        # Create a cursor object
        cur = conn.cursor()
        # Insert a new row into the notes table
        cur.execute("UPDATE notes SET note = %s WHERE id = %s", (note, id))
        # Commit the transaction
        conn.commit()
        cur.close()
        return True
    except Exception as e:
        print(f"[ERR] An error occurred while trying to update an note:\n{e}")
        return False
    
def delete_note(id):
    """
    Delete a note in the database with the given id

    Args:
        id (int): The id of the note to delete

    Returns:
        bool: True if the note was deleted successfully, False otherwise
    """
    try:
        # Create a cursor object
        cur = conn.cursor()
        # Insert a new row into the notes table
        cur.execute("DELETE FROM notes WHERE id = %s", (id,))
        # Commit the transaction
        conn.commit()
        cur.close()
        return True
    except Exception as e:
        print(f"[ERR] An error occurred while trying to delete an note:\n{e}")
        return False
    
# Commit the transaction
conn.commit()