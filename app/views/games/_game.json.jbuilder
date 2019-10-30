json.extract! game, :id, :title, :game_time, :home_team_logo, :away_team_logo, :reach, :league, :channel, :price_per_minute, :minutes_booked, :created_at, :updated_at
json.url game_url(game, format: :json)
