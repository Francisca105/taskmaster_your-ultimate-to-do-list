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

# Create a table in the database in case it doesn't exist
def create_table():
    """
    Create a table in the database to store tasks
    """
    try:
        # Create a cursor object
        cursor = conn.cursor()
        # Create the tasks table
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS tasks (
                id SERIAL PRIMARY KEY,
                task VARCHAR(255) NOT NULL,
                status BOOLEAN DEFAULT FALSE,
                date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
            """
        )
        # Commit the transaction
        conn.commit()
        cursor.close()
    except Exception as e:
        print(f"[ERR] An error occurred while trying to create the tasks table:\n{e}")

# CRUD operations
# Create, Read, Update, Delete tasks in the database

def create_task(task):
    """
    Insert a new task into the database

    Args:
        task (str): The task to insert into the database

    Returns:
        bool: True if the task was inserted successfully, False otherwise
    """
    try:
        # Create a cursor object
        cur = conn.cursor()
        # Insert a new row into the task table
        cur.execute("INSERT INTO tasks (task) VALUES (%s)", (task,))
        # Commit the transaction
        conn.commit()
        cur.close()
        return True
    except Exception as e:
        print(f"[ERR] An error occurred while trying to insert an task:\n{e}")
        return False
    
def read_tasks():
    """
    Select all tasks from the database

    Returns:
        list: A list of lists where each list is a row from the tasks table
    """
    # Create a cursor object
    cur = conn.cursor()

    # Executes a SQL query to select all rows from the tasks table
    cur.execute("SELECT * FROM tasks")
    result = cur.fetchall()
    cur.close()
    return result

def update_task(id, task):
    """
    Update a task in the database with the given id

    Args:
        id (int): The id of the task to update
        task (str): The new task to update the task with

    Returns:
        bool: True if the task was updated successfully, False otherwise
    """
    try:
        # Create a cursor object
        cur = conn.cursor()
        # Insert a new row into the tasks table
        cur.execute("UPDATE tasks SET task = %s WHERE id = %s", (task, id))
        # Commit the transaction
        conn.commit()
        cur.close()
        return True
    except Exception as e:
        print(f"[ERR] An error occurred while trying to update an task:\n{e}")
        return False
    
def update_task_status(id):
    """
    Update the status of a task in the database with the given id

    Args:
        id (int): The id of the task to update

    Returns:
        bool: True if the task status was updated successfully, False otherwise
    """
    try:
        # Create a cursor object
        cur = conn.cursor()
        # Insert a new row into the tasks table
        cur.execute("UPDATE tasks SET status = NOT status WHERE id = %s", (id,))
        # Commit the transaction
        conn.commit()
        cur.close()
        return True
    except Exception as e:
        print(f"[ERR] An error occurred while trying to update an task status:\n{e}")
        return False

def delete_task(id):
    """
    Delete a task in the database with the given id

    Args:
        id (int): The id of the task to delete

    Returns:
        bool: True if the task was deleted successfully, False otherwise
    """
    try:
        # Create a cursor object
        cur = conn.cursor()
        # Insert a new row into the tasks table
        cur.execute("DELETE FROM tasks WHERE id = %s", (id,))
        # Commit the transaction
        conn.commit()
        cur.close()
        return True
    except Exception as e:
        print(f"[ERR] An error occurred while trying to delete an task:\n{e}")
        return False
    
# Commit the transaction
conn.commit()