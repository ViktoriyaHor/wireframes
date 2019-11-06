# README

This is a rails 5.2 application with Postgresql database. The DB is being filled in with Seed.
Model Game has the
following fields:
● title(string)
● game_time(date time)
● home_team_logo(url:string)
● away_team_logo(url:string)
● reach(integer)
● league(string)
● channel(string)
● price_per_minute(int)
● minutes_booked(int)

In the view there is a list of football games with predefined styles with usage of Uikit. The Slim template engine is used. The user books minutes for each game, clicking buttons "-" and "+" in each row. In the bottom part of the screen the information on one game is being updated.
For updated model remotely on the server, I am going to use a js API fetch. 
I realized the logic with StimulusJS.

