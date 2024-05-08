# Getting Started with the Server

Welcome to the Taskmaster server setup guide. This guide will help you set up and run the server locally on your machine.

**Let's get started!**

## Quick Overview

Before diving into the details, here's a quick overview of the setup process:

1. Clone the repository.
2. Install dependencies.
3. Configure the database.
4. Run the server.

Now, let's go through each step in detail.

## Prerequisites

Before running the server, make sure you have the following installed:

- Python 3.x
- Flask
- PostgreSQL

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/Francisca105/taskmaster_your-ultimate-to-do-list.git
   ```
2. Navigate to the server directory:

   ```shell
   cd taskmaster_your-ultimate-to-do-list/server
   ```
3. Install the required dependencies:

   ```shell
   pip install -r requirements.txt
   ```

## Configuration

1. Make sure you have a user, a database, and a password set up in PostgreSQL.
2. Copy the `.env.example` file and rename it to `.env`:

   ```shell
   cp .env.example .env
   ```
3. Open the `.env` file and configure it according to your environment.
   For example:

   ```shell
   DB_NAME=taskmaster
   DB_USER=taskmaster
   DB_PASS=taskmaster
   DB_HOST=localhost
   DB_PORT=5432
   ```

## Running the Server

To start the server, run the following command:

```shell
python server.py
```

or

```shell
python3 server.py
```

Access the project in your browser using `localhost:5000`. This will automatically create the table when accessing the home page.
