# frozen_string_literal: true

# games controller
class GamesController < ApplicationController

  def index
    @games = Game.all
  end

end
