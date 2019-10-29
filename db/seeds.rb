# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.create(title: 'Napoli - Bologna', game_time: DateTime.current, home_team_logo: 'u24.png', away_team_logo: 'u27.png', reach: 4, league: 'Serie A', channel: 'Rail1', price_per_minute: 3200, minutes_booked: 0)
Game.create(title: 'Udinese - Spal', game_time: DateTime.current, home_team_logo: 'u25.png', away_team_logo: 'u28.png', reach: 3, league: 'Serie A', channel: 'Rail1', price_per_minute: 3600, minutes_booked: 0)
Game.create(title: 'Juventus - Genoa', game_time: DateTime.current, home_team_logo: 'u26.jpg', away_team_logo: 'u29.png', reach: 6, league: 'Serie A', channel: 'Rail1', price_per_minute: 4500, minutes_booked: 0)
