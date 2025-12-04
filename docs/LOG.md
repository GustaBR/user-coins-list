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