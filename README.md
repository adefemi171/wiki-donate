# Wiki-Donate



# App Details
.

The app will consist of:

    └──



# Proposed Stack

HTML, CSS, JavaScript, Node 


# Top-level directory layout

    📦wiki-donate
        📦controllers
            ┗ 📜registration.js
        📦public
            ┣📦css
                ┗ 📜grayscale.css
                ┗ 📜style.css
            ┣📦img
                ┗ 📜wikiHeader.png
        📦routes
            ┗ 📜registration.js
        📦views
            ┗ 📜home.html
            ┗ 📜preview.ejs
            ┗ 📜registartion.html
        ┣ 📜.gitignore
        ┣ 📜app.js
        ┣ 📜package.json
        ┣ 📜package-lock.json
        ┣ 📜README.md

        ┗ 

## Folder structure

1. controllers:
2. public:
3. routes:
4. views:


# How to setup project and run locally


### Make sure you have this application installed on your PC/Mac
- Node can be downloaded from [node](https://nodejs.org/en/download/) which also installs NPM (Node Package Manager)
    - Confirm if its installed using
    ```
    node -v
    ```
    and
    ```
    npm -v
    ```

- MySQL (For the database)
    - For Mac users use this [link](https://flaviocopes.com/mysql-how-to-install/)
    - For Ubuntu users use this [link](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)
    - For Windows users use this [link](https://phoenixnap.com/kb/install-mysql-on-windows)
### Clone the repository 

```
git clone https://github.com/adefemi171/wiki-donate
```
### Checking Out
The App is built on the ``` main ``` branch you will need to checkout to the app branch using:

```
git checkout main
```
1. Create the database to work with by following this steps:
    - connect to your MySQL server from the terminal using
    ```
    mysql -u root -p
    ```
    - If you get an error that says <b>"Access denied for user 'root'@'localhost' "</b> follow this [link](https://phoenixnap.com/kb/access-denied-for-user-root-localhost) to get it resolved
    - Once connected, create a DB using this command
    ```
    CREATE DATABASE userdb;
    ```
    - Hit the Enter key on your keyboard
    - Exit from the MySQL using
    ```
    exit;
    ```
    - Hit the Enter key on your keyboard

2. Create a .env file in the root directory using .env.example as a guide
    - The only parameter that will be needed in the <b><i>.env</i></b> file is the DB_PASS after all the other parameters have been specified as in the <b><i>.env.example</i></b>

3. Install all dependencies using
```
npm install
```
4. Start the server
```
npm start
```
5. In your browser, navigate to

```
http://localhost:3000/
```


