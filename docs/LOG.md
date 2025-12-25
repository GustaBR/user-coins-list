# December 1, 2025
- Added the Completion model and services to prepare for data migration.
- Migrated data from the Spreadsheet to MongoDB.

# December 2, 2025
- Made some tweaks on the navbar component and on the main list page.
- CSS files got partially refactored to be mobile-first.

# December 3, 2025
- Implemented a basic layout for the level view.
- Updated some CSS files.
  - Created general purpose classes for page layout, which are now used for the player and level views.
- Made every player and level related data displayed on pages clickable.
- Added player view and API endpoint for GET requests with name parameter.

# December 4, 2025
- Made minor tweaks to CSS files to improve layout integrity on smaller screens.
  - Headers of level and player pages were made smaller in size.
  - Added "Player Info" as a header in place of the name of the player to prevent overflow.
- Created the player service.
  - The player service is used to compute player stats that depend on their completions, which are score and rank currently.
- Added score and rank inside player pages.
- Added leaderboard services with player ordering logic.
- Edited the layout of the Leaderboard page.

# December 7, 2025
- Finished refactoring the CSS and HTML of the navbar component.
- Finished refactoring the CSS and HTML of the index page (list view).
- Finished refactoring the CSS and HTML of the Leaderboard page.
  - Also added trophy icons to the player cards.
- Changed navbar position from static to fixed.

# December 9, 2025
- Finished refactoring the CSS and HTML of every page.

# December 17, 2025
- Finished the add new completion functionality on the admin area.
- Split controllers and routes files into 2 subfolders.
  - The api subfolder is used to return JSON back to the client.
  - The web subfolder is used to render the EJS views.
- Renamed the services folder to repositories for clarity. 
These changes were made over the past few days and stayed uncommitted until today.

# December 18, 2025
- Added a button on the navbar that redirects to the admin area.
- Added basic layout of the admin view.
- Added navegation buttons for accessing different admin actions inside the admin area.
- Made small aesthetical changes to the UI.

# December 21, 2025
- Finished the core functionality of the manage completions view (add and delete completions).

# December 22, 2025
- Added improvements to the completion management screen UI.
- Started working on the player management screen.

# December 23, 2025
- Finished the player management screen.
- Added logic of authentication setup for admins.

# December 24, 2025
- Incorporated admin authentication flow into the UI.

# December 25, 2025
- Added error pages.
- Added proper handling to edge cases across pages.
  - Level pages with 0 completions are now rendered.
  - Made word pluralization accurate across pages.
- Made slight code improvements in some controller files.