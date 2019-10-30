# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
games_list = [
    [
        'u24.png',
        'u27.png',
        'Napoli - Bologna',
        DateTime.current,
        4,
        'Serie A',
        'Rai1',
        3200
    ],
    [
        'u25.png',
        'u28.png',
        'Udinese - Spal',
        DateTime.current,
        3,
        'Serie A',
        'Rai1',
        3600
    ],
    [
        'u26.jpg',
        'u29.png',
        'Juventus - Genoa',
        DateTime.current,
        6,
        'Serie A',
        'Rai1',
        4500
    ]
]

games_list.each do |ht_logo, at_logo, title, date, reach, league, channel, price|
  Game.create(
      home_team_logo: ht_logo,
      away_team_logo: at_logo,
      title: title,
      game_time: date,
      reach: reach,
      league: league,
      channel: channel,
      price_per_minute: price,
      minutes_booked: 0
  )
end