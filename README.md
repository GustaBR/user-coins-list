# Table of Contents  
  
1. [About](#about)  
2. [Features](#features)
3. [Technologies used](#technologies-used)
4. [Running locally](#running-locally)  
   1. [Requirements](#requirements)  
   2. [Step-by-step](#step-by-step)  
5. [Contacting](#contacting)
  
# About  
This is a website for the User Coins List, an online community that ranks the hardest user coins in Geometry Dash.

I mainly started this project for learning purposes, and it's not a definitive website for the User Coins List.

You can find the live website at https://usercoinslist.onrender.com  
  
# Features  
- Main list view (50 levels)
- Leaderboard with all players
- Individual level and player pages
- Admin-only area with data editing tools
  
# Technologies used  
**Frontend:** HTML, CSS, JavaScript, EJS (server-side rendering)  
  
**Backend:** Node.js, Express  
  
**Database:** MongoDB  
  
# Running locally  
Follow the steps below if you're interested in running this project locally.  
  
## Requirements  
  
The step-by-step tutorial assumes that you already meet the following requirements:  
- Have Node.js and npm installed on your computer  
- Have Git installed on your computer  
- Have VS Code or another code editor installed on your computer
  
## Step-by-step  
1. Clone the project. This can be done with the following CLI command:  
```bash  
git clone https://github.com/GustaBR/user-coins-list.git  
```  
  
2. Open the project inside your code editor.  
  
3. Install the project packages. This can be done by running the following command inside a new Command Prompt terminal:  
```bash  
npm install  
```  
  
4. Create a .env file on the project root directory.
  
5. Inside the .env file, declare the following environment variables:  
```env  
DB_URI=<your_mongo_conn_string>  
ADMIN_KEY=<admin_area_key> # This will be required to access the admin area  
```  
  
6. Run the following command on a terminal:  
```bash  
node app  
```  
  
7. You should now be able to visit the website running locally on your machine at http://localhost:3000

**Note:** there won't be any data to be displayed on the pages at first. You'll need to populate the database with either mockup data or by scraping the UCL public spreadsheet. Check out the *Contacting* session below if you'd like some guidance to carry out those steps. 
  
## Contacting  
If you have any questions, or even feedback to give about the project, I'd be happy to hear them. You can contact me on Discord: **gustabra**